type OnOffEventEmitter<T, E extends string> = {
    on: (eventName: E, listener: (data: T) => void, ...args: any[]) => void
    off: (eventName: E, listener: (data: T) => void, ...args: any[]) => void
}
type AddRemoveListenerEventEmitter<T, E extends string> = {
    addListener: (eventName: E, listener: (data: T) => void, ...args: any[]) => void
    removeListener: (eventName: E, listener: (data: T) => void, ...args: any[]) => void
}

type EventEmitter<T, E extends string> = OnOffEventEmitter<T, E> | AddRemoveListenerEventEmitter<T, E>

/**
 * Converts an event emitter to an async generator.
 * @param on function to add a listener to the event emitter
 * @param off function to remove a listener from the event emitter
 * @returns an async generator that yields events from the event emitter
 * @example
 * const emitter = new EventEmitter()
 * const gen = fromEventHandler(on => emitter.on('event', on), off => emitter.off('event', off))
 * (async () => {
 *  for await (const event of gen) {
 *     console.log(event)
 *  }
 * })()
 * emitter.emit('event', 'hello') // logs 'hello'
 * emitter.emit('event', 'world') // logs 'world'
 */
export async function* fromEventHandler<T>(
    on: (listener: (data: T) => void) => void,
    off: (listener: (data: T) => void) => void
): AsyncGenerator<T> {
    // Queue to hold events until they can be yielded
    const eventQueue: T[] = [];
    // Resolve function for the current waiting promise, if any
    let resolve: ((value: T) => void) | null = null;

    // The event listener either resolves a promise with new data or queues the data
    const listener = (data: T) => {
        if (resolve) {
            resolve(data);
            resolve = null; // Reset resolve since it's been fulfilled
        } else {
            eventQueue.push(data);
        }
    };

    // Register the event listener
    on(listener);

    try {
        while (true) {
            // If there's no event to yield, wait for the next one
            if (eventQueue.length === 0) {
                // Wait for the next event
                await new Promise<T>((r) => {
                    resolve = r;
                }).then((data) => {
                    // Directly yield the data when it arrives
                    eventQueue.push(data);
                });
            }

            // Yield the next event from the queue
            if (eventQueue.length > 0) {
                yield eventQueue.shift()!;
            }
        }
    } finally {
        // Cleanup: remove the event listener
        off(listener);
    }
}

/**
 * Converts an event emitter to an async generator.
 * @param eventEmitter event emitter to convert to an async generator
 * @param eventName name of the event to listen for
 * @returns an async generator that yields events from the event emitter
 * @example
 * const emitter = new EventEmitter()
 * const gen = fromEvent(emitter, 'event')
 * (async () => {
 *  for await (const event of gen) {
 *    console.log(event)
 *  }
 * })()
 * emitter.emit('event', 'hello') // logs 'hello'
 * emitter.emit('event', 'world') // logs 'world'
 */
export function fromEvent<T, E extends string>(eventEmitter: EventEmitter<T, E>, eventName: E): AsyncGenerator<T>;
export function fromEvent<T>(eventEmitter: EventEmitter<T, string>, eventName: string): AsyncGenerator<T>;
export function fromEvent<T, E extends string>(eventEmitter: EventEmitter<T, E>, eventName: E): AsyncGenerator<T> {
    return fromEventHandler<T>(
        (listener) => {
            if ('on' in eventEmitter) {
                eventEmitter.on(eventName, listener)
            } else {
                eventEmitter.addListener(eventName, listener)
            }
        },
        (listener) => {
            if ('off' in eventEmitter) {
                eventEmitter.off(eventName, listener)
            } else {
                eventEmitter.removeListener(eventName, listener)
            }
        }
    );
}

/**
 * Merges multiple `AsyncIterable` objects into a single asynchronous generator. This function
 * takes any number of `AsyncIterable` inputs and returns an `AsyncGenerator` that yields values
 * from each of the input iterables as they become available. The merging operation does not
 * guarantee the order in which values are yielded from the different inputs; values are yielded
 * as soon as they are resolved from any of the input iterables.
 *
 * @param iterators - A rest parameter of `AsyncIterable<T>` objects to be merged.
 * @returns An `AsyncGenerator<T>` that yields values from the input iterables as they are available.
 * 
 * @example
 * ```typescript
 * async function* asyncNumbers() {
 *   yield* [1, 2, 3];
 * }
 * 
 * async function* asyncLetters() {
 *   yield* ['a', 'b', 'c'];
 * }
 * 
 * (async () => {
 *   const merged = merge(asyncNumbers(), asyncLetters());
 *   for await (const value of merged) {
 *     console.log(value); // Outputs 1, 'a', 2, 'b', 3, 'c' in no specific order
 *   }
 * })();
 * ```
 * 
 * Note: The output order depends on the resolution of the yielded values from each input iterable and
 * may vary with each execution.
 */
export async function* merge<T>(...iterators: AsyncIterable<T>[]): AsyncGenerator<T> {
    const sources = iterators.map(it => it[Symbol.asyncIterator]());
    let active = sources.length;

    const nexts: Promise<{ value: IteratorResult<T>; index: number }>[] = sources.map((source, index) =>
        source.next().then(value => ({ value, index }))
    );

    try {
        while (active > 0) {
            const { value, index } = await Promise.race(nexts);
            if (value.done) {
                active--;
                nexts[index] = new Promise(() => { }); // Replace with a never-resolving promise
            } else {
                yield value.value;
                nexts[index] = sources[index].next().then(value => ({ value, index }));
            }
        }
    } finally {
        // Clean-up: make sure all iterators are properly closed
        for (const source of sources) {
            if (typeof source.return === 'function') {
                await source.return();
            }
        }
    }
}

/**
 * Merges two `AsyncIterable` objects into a single asynchronous generator. This function takes
 * two `AsyncIterable` inputs and returns an `AsyncGenerator` that yields values from each of the
 * input iterables as they become available. The merging operation does not guarantee the order in
 * which values are yielded from the different inputs; values are yielded as soon as they are
 * resolved from any of the input iterables.
 *
 * @param gen1 - The first `AsyncIterable` to merge.
 * @param gen2 - The second `AsyncIterable` to merge.
 * @returns An `AsyncGenerator` that yields values from the input iterables as they are available.
 * 
 * @example
 * ```typescript
 * async function* asyncNumbers() {
 *   yield* [1, 2, 3];
 * }
 * 
 * async function* asyncLetters() {
 *   yield* ['a', 'b', 'c'];
 * }
 * 
 * (async () => {
 *   const merged = merge2(asyncNumbers(), asyncLetters());
 *   for await (const value of merged) {
 *     console.log(value); // Outputs 1, 'a', 2, 'b', 3, 'c' in no specific order
 *   }
 * })();
 * ```
 * 
 * Note: The output order depends on the resolution of the yielded values from each input iterable and
 * may vary with each execution.
 */
export function merge2<T, U>(gen1: AsyncGenerator<T>, gen2: AsyncGenerator<U>): AsyncGenerator<T | U> {
    return merge<T | U>(gen1, gen2)
}

/**
 * Maps the values of an `AsyncGenerator` using a mapping function. This function takes an
 * `AsyncGenerator` and a mapping function and returns an `AsyncGenerator` that yields the
 * values of the input generator after applying the mapping function to each value.
 *
 * @param gen - The input `AsyncGenerator`.
 * @param fn - The mapping function to apply to the values of the input generator.
 * @returns An `AsyncGenerator` that yields the mapped values of the input generator.
 * 
 * @example
 * ```typescript
 * async function* asyncNumbers() {
 *   yield* [1, 2, 3];
 * }
 * 
 * (async () => {
 *   const doubled = map(asyncNumbers(), x => x * 2);
 *   for await (const value of doubled) {
 *     console.log(value); // Outputs 2, 4, 6
 *   }
 * })();
 * ```
 */
export async function* map<T, U>(gen: AsyncGenerator<T>, fn: (value: T) => U): AsyncGenerator<U> {
    for await (const value of gen) {
        yield fn(value)
    }
}

/**
 * Filters the values of an `AsyncGenerator` using a predicate function. This function takes an
 * `AsyncGenerator` and a predicate function and returns an `AsyncGenerator` that yields the
 * values of the input generator that satisfy the predicate.
 *
 * @param gen - The input `AsyncGenerator`.
 * @param predicate - The predicate function to filter the values of the input generator.
 * @returns An `AsyncGenerator` that yields the values of the input generator that satisfy the predicate.
 * 
 * @example
 * ```typescript
 * async function* asyncNumbers() {
 *   yield* [1, 2, 3, 4, 5];
 * }
 * 
 * (async () => {
 *   const evens = filter(asyncNumbers(), x => x % 2 === 0);
 *   for await (const value of evens) {
 *     console.log(value); // Outputs 2, 4
 *   }
 * })();
 * ```
 */
export async function* filter<T>(gen: AsyncGenerator<T>, predicate: (value: T) => boolean): AsyncGenerator<T> {
    for await (const value of gen) {
        if (predicate(value)) {
            yield value
        }
    }
}

/**
 * Yields values from an `AsyncGenerator` until the predicate function returns true for a yielded value.
 * The value that satisfies the predicate is included in the output.
 *
 * @param gen - The input `AsyncGenerator`.
 * @param predicate - The predicate function. The generator stops after yielding the first value for which this function returns true.
 * @returns An `AsyncGenerator` that yields values until the predicate is met.
 * 
 * @example
 * ```typescript
 * async function* asyncNumbers() {
 *   yield* [1, 2, 3, 4, 5];
 * }
 * 
 * (async () => {
 *   const firstThree = take(asyncNumbers(), 3);
 *   for await (const value of firstThree) {
 *     console.log(value); // Outputs 1, 2, 3
 *   }
 * })();
 * ```
 */
export async function* until<T>(gen: AsyncGenerator<T>, predicate: (value: T) => boolean): AsyncGenerator<T> {
    for await (const value of gen) {
        yield value
        if (predicate(value)) {
            break
        }
    }
}

