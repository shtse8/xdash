
/**
 * Chain class to be used in a pipeline.
 * @example
 * chain(5).pipe(add, 5).pipe(multiply, 2).unwrap() // returns 20
 */
export class Chain<I, O> {
    constructor(private initialValue: I, private ops: ((value: any) => any)[] = []) { }

    pipe<U>(fn: (value: O) => U): Chain<I, U>;
    pipe<U, Args extends unknown[]>(fn: (value: O, ...args: Args) => U, builder: (x: (...args: Args) => void) => void): Chain<I, U>;
    pipe<U, Args extends unknown[]>(fn: (value: O, ...args: Args) => U, builder?: (x: (...args: Args) => void) => void): Chain<I, U> {
        let thisArgs: Args = [] as unknown as Args;
        builder?.((...args: Args) => thisArgs = args);
        return new Chain<I, U>(this.initialValue, [...this.ops, (value: O) => fn(value, ...thisArgs)]);
    }

    value(): O {
        return this.ops.reduce((acc, fn) => fn(acc), this.initialValue) as unknown as O;
    }
}

/**
 * Chains a value to be used in a pipeline.
 * @param value value to chain
 * @returns a chain of the value
 * @example
 * chain(5).pipe(add, 5).pipe(multiply, 2).unwrap() // returns 20
 */
export function chain<T>(value: T): Chain<T, T> {
    return new Chain<T, T>(value);
}