
/**
 * Chain class to be used in a pipeline.
 * @example
 * chain(5).pipe(add, 5).pipe(multiply, 2).unwrap() // returns 20
 */
export class Chain<T> {
    constructor(private value: T) { }

    pipe<U, Args extends unknown[]>(fn: (value: T, ...args: Args) => U, ...args: Args): Chain<U> {
        return new Chain(fn(this.value, ...args));
    }

    unwrap(): T {
        return this.value;
    }
}

/**
 * Chains a value to be used in a pipeline.
 * @param value value to chain
 * @returns a chain of the value
 * @example
 * chain(5).pipe(add, 5).pipe(multiply, 2).unwrap() // returns 20
 */
export function chain<T>(value: T): Chain<T> {
    return new Chain(value);
}