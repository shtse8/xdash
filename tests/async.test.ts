import { describe, test, it, expect, beforeEach, jest } from 'bun:test'
import { merge, merge2, map, filter, fromEvent, fromEventHandler, until } from '~/async';

async function* asyncGenerator<T>(array: T[]): AsyncGenerator<T> {
    for (const item of array) {
        yield await new Promise(resolve => setTimeout(() => resolve(item), 10));
    }
}

describe('merge', () => {
    it('correctly merges values from multiple async iterators', async () => {
        const iter1 = asyncGenerator([1, 3, 5]);
        const iter2 = asyncGenerator([2, 4, 6]);
        const merged = merge(iter1, iter2);

        const result = [];
        for await (const value of merged) {
            result.push(value);
        }

        // Since execution order can vary, we check that all items are present and sorted
        expect(result.sort()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('handles empty iterators correctly', async () => {
        const iter1 = asyncGenerator([]);
        const iter2 = asyncGenerator([1, 2, 3]);
        const merged = merge(iter1, iter2);

        const result = [];
        for await (const value of merged) {
            result.push(value);
        }

        expect(result).toEqual([1, 2, 3]);
    });

    it('completes when all iterators are completed', async () => {
        const iter1 = asyncGenerator([1]);
        const iter2 = asyncGenerator([2]);
        const merged = merge(iter1, iter2);

        const result = [];
        for await (const value of merged) {
            result.push(value);
        }

        expect(result.length).toBe(2);
        expect(result.includes(1)).toBeTruthy();
        expect(result.includes(2)).toBeTruthy();
    });

    // 
    it('handles errors thrown by an iterator', async () => {
        async function* errorGenerator() {
            yield 1;
            throw new Error('Test error');
        }

        const iter1 = asyncGenerator([1, 2]);
        const iter2 = errorGenerator();
        const merged = merge(iter1, iter2);

        // Use an immediately invoked async function and pass the resulting promise to expect
        await expect((async () => {
            const result = [];
            for await (const value of merged) {
                result.push(value);
            }
        })()).rejects.toThrow('Test error');
    });
});

// merge2
describe('merge2', () => {
    it('correctly merges values from two async iterators', async () => {
        const iter1 = asyncGenerator([1, 3, 5]);
        const iter2 = asyncGenerator([2, 4, 6]);
        const merged = merge2(iter1, iter2);

        const result = [];
        for await (const value of merged) {
            result.push(value);
        }

        // Since execution order can vary, we check that all items are present and sorted
        expect(result.sort()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('handles empty iterators correctly', async () => {
        const iter1 = asyncGenerator([]);
        const iter2 = asyncGenerator([1, 2, 3]);
        const merged = merge2(iter1, iter2);

        const result = [];
        for await (const value of merged) {
            result.push(value);
        }

        expect(result).toEqual([1, 2, 3]);
    });

    it('completes when both iterators are completed', async () => {
        const iter1 = asyncGenerator([1]);
        const iter2 = asyncGenerator([2]);
        const merged = merge2(iter1, iter2);

        const result = [];
        for await (const value of merged) {
            result.push(value);
        }

        expect(result.length).toBe(2);
        expect(result.includes(1)).toBeTruthy();
        expect(result.includes(2)).toBeTruthy();
    });

    it('handles errors thrown by an iterator', async () => {
        async function* errorGenerator() {
            yield 1;
            throw new Error('Test error');
        }

        const iter1 = asyncGenerator([1, 2]);
        const iter2 = errorGenerator();
        const merged = merge2(iter1, iter2);

        // Use an immediately invoked async function and pass the resulting promise to expect
        await expect((async () => {
            const result = [];
            for await (const value of merged) {
                result.push(value);
            }
        })()).rejects.toThrow('Test error');
    });
});

// map
describe('map', () => {
    it('correctly maps values from an async iterator', async () => {
        const iter = asyncGenerator([1, 2, 3]);
        const doubled = map(iter, x => x * 2);

        const result = [];
        for await (const value of doubled) {
            result.push(value);
        }

        expect(result).toEqual([2, 4, 6]);
    });

    it('handles empty iterators correctly', async () => {
        const iter = asyncGenerator([]);
        const doubled = map(iter, x => x * 2);

        const result = [];
        for await (const value of doubled) {
            result.push(value);
        }

        expect(result).toEqual([]);
    });

    it('handles errors thrown by an iterator', async () => {
        async function* errorGenerator() {
            yield 1;
            throw new Error('Test error');
        }

        const iter = errorGenerator();
        const doubled = map(iter, x => x * 2);

        // Use an immediately invoked async function and pass the resulting promise to expect
        await expect((async () => {
            const result = [];
            for await (const value of doubled) {
                result.push(value);
            }
        })()).rejects.toThrow('Test error');
    });
});

// filter
describe('filter', () => {
    it('correctly filters values from an async iterator', async () => {
        const iter = asyncGenerator([1, 2, 3, 4, 5]);
        const evens = filter(iter, x => x % 2 === 0);

        const result = [];
        for await (const value of evens) {
            result.push(value);
        }

        expect(result).toEqual([2, 4]);
    });

    it('handles empty iterators correctly', async () => {
        const iter = asyncGenerator<number>([]);
        const evens = filter(iter, x => x % 2 === 0);

        const result = [];
        for await (const value of evens) {
            result.push(value);
        }

        expect(result).toEqual([]);
    });

    it('handles errors thrown by an iterator', async () => {
        async function* errorGenerator() {
            yield 1;
            throw new Error('Test error');
        }

        const iter = errorGenerator();
        const evens = filter(iter, x => x % 2 === 0);

        // Use an immediately invoked async function and pass the resulting promise to expect
        await expect((async () => {
            const result = [];
            for await (const value of evens) {
                result.push(value);
            }
        })()).rejects.toThrow('Test error');
    });
});


// fromEventHandler

describe('fromEventHandler', () => {
    // Mock event emitter to simulate on/off event handling
    class MockEventEmitter {
        private listeners = new Set<(data: any) => void>();

        on(listener: (data: any) => void) {
            this.listeners.add(listener);
        }

        off(listener: (data: any) => void) {
            this.listeners.delete(listener);
        }

        emit(data: any) {
            for (const listener of this.listeners) {
                listener(data);
            }
        }
    }

    let emitter: MockEventEmitter;

    beforeEach(() => {
        emitter = new MockEventEmitter();
    });

    it('captures and yields a single event', async () => {
        const generator = fromEventHandler<number>(
            emitter.on.bind(emitter),
            emitter.off.bind(emitter)
        );

        setTimeout(() => emitter.emit(1), 10);

        const result = await generator.next();
        expect(result.value).toBe(1);
        expect(result.done).toBeFalsy();
    });

    it('captures and yields multiple events in order', async () => {
        const generator = fromEventHandler<number>(
            emitter.on.bind(emitter),
            emitter.off.bind(emitter)
        );

        setTimeout(() => emitter.emit(1), 10);
        setTimeout(() => emitter.emit(2), 20);

        const results = [];
        results.push((await generator.next()).value);
        results.push((await generator.next()).value);

        expect(results).toEqual([1, 2]);
    });

    it('removes event listeners when generator is closed', async () => {
        const addSpy = jest.fn();
        const removeSpy = jest.fn();

        let eventListener: (data: number) => void = () => { };

        // Simulated event registration and removal, capturing the event listener
        const on = (listener: (data: number) => void) => {
            addSpy();
            eventListener = listener;
        };
        const off = (listener: (data: number) => void) => {
            removeSpy();
        };

        const generator = fromEventHandler<number>(on, off);

        // Simulate event emission to ensure 'on' function is triggered
        setTimeout(() => eventListener(1), 10);

        // Start consuming the generator to activate the 'on' registration
        await generator.next()
        await generator.return(undefined)

        expect(addSpy).toHaveBeenCalledTimes(1);
        expect(removeSpy).toHaveBeenCalledTimes(1);
    });
});

// fromEvent
describe('fromEvent', () => {
    // Mock EventEmitter to simulate Node.js EventEmitter for testing purposes
    class MockEventEmitter<T, E extends string = string> {
        private listeners: Map<E, ((data: T) => void)[]> = new Map();

        on(eventName: E, listener: (data: T) => void) {
            const eventListeners = this.listeners.get(eventName) || [];
            eventListeners.push(listener);
            this.listeners.set(eventName, eventListeners);
        }

        off(eventName: E, listener: (data: T) => void) {
            const eventListeners = this.listeners.get(eventName) || [];
            const index = eventListeners.indexOf(listener);
            if (index !== -1) {
                eventListeners.splice(index, 1);
            }
            this.listeners.set(eventName, eventListeners);
        }

        emit(eventName: E, data: T) {
            const eventListeners = this.listeners.get(eventName) || [];
            eventListeners.forEach((listener) => listener(data));
        }
    }

    it('captures and yields events from an EventEmitter', async () => {
        const emitter = new MockEventEmitter<number, 'data'>();
        const generator = fromEvent<number, 'data'>(emitter, 'data');

        // Emit some data asynchronously
        setTimeout(() => emitter.emit('data', 1), 10);
        setTimeout(() => emitter.emit('data', 2), 20);

        const results = [];
        // Consume only the first two emitted events for this test
        results.push((await generator.next()).value);
        results.push((await generator.next()).value);

        expect(results).toEqual([1, 2]);
    });

    it('removes event listeners when the generator is closed', async () => {
        const addSpy = jest.fn();
        const removeSpy = jest.fn();

        const emitter = new MockEventEmitter<number, 'data'>();

        // Wrap original `on` and `off` with spies
        emitter.on = jest.fn(emitter.on);
        emitter.off = jest.fn(emitter.off);

        const generator = fromEvent<number, 'data'>(emitter, 'data');

        // Simulate event emission to ensure 'on' function is triggered
        setTimeout(() => emitter.emit('data', 1), 10);

        await generator.next()
        await generator.return(undefined)

        expect(emitter.on).toHaveBeenCalledTimes(1);
        expect(emitter.off).toHaveBeenCalledTimes(1);
    });
});

// until
describe('until', () => {
    it('yields all values if predicate never true', async () => {
        const source = asyncGenerator([1, 2, 3]);
        const results: number[] = [];

        for await (const value of until(source, (x) => x > 3)) {
            results.push(value);
        }

        expect(results).toEqual([1, 2, 3]);
    });

    it('stops yielding when predicate becomes true', async () => {
        const source = asyncGenerator([1, 2, 3, 4, 5]);
        const results: number[] = [];

        for await (const value of until(source, (x) => x >= 3)) {
            results.push(value);
        }

        expect(results).toEqual([1, 2, 3]);
    });

    it('yields nothing from an empty generator', async () => {
        const source = asyncGenerator([]);
        const results: number[] = [];

        for await (const value of until(source, (x) => x >= 3)) {
            results.push(value);
        }

        expect(results).toEqual([]);
    });

    it('stops immediately if predicate true for first value', async () => {
        const source = asyncGenerator([3, 4, 5]);
        const results: number[] = [];

        for await (const value of until(source, (x) => x === 3)) {
            results.push(value);
        }

        expect(results).toEqual([3]);
    });
});