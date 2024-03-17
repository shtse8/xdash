
/**
 * Chain class to be used in a pipeline.
 * @example
 * chain(5).pipe(add, 5).pipe(multiply, 2).unwrap() // returns 20
 */
export class Chain<I, O> {
    constructor(private initialValue: I, private ops: ((value: any) => any)[] = []) { }

    pipe<U>(fn: (value: O) => U): Chain<I, U> {
        return new Chain<I, U>(this.initialValue, [...this.ops, fn]);
    }

    value(): O {
        return this.ops.reduce((acc, fn) => fn(acc), this.initialValue) as unknown as O;
    }
}

/**
 * Converts a function into a format suitable for use with the `Chain.pipe` method.
 * This allows for the inclusion of additional parameters to the function prior to its
 * execution in the chain. `$op` effectively curries the provided function, splitting
 * its application into two steps: first, `$op` is called with the function to adapt,
 * returning a new function. This returned function is then called with the additional
 * arguments needed for the adapted function, and it returns yet another function that
 * expects the current value in the chain as its input. This final function is suitable
 * for use with `Chain.pipe`, as it matches the expected signature by taking a single
 * argument—the current value in the chain—and applying the original function to it,
 * along with the pre-specified additional arguments.
 *
 * @param fn The function to be converted. This function can take multiple parameters,
 * with the first parameter intended to be the current value in the chain, and the
 * rest being additional arguments provided during the subsequent call.
 * @returns A function that, when called with additional arguments, returns a new
 * function designed for the `Chain.pipe` method. This new function takes the current
 * value in the chain as its sole argument and applies the original function with the
 * specified additional arguments.
 * 
 * @example
 * // Assuming `add` and `multiply` are defined as:
 * // const add = (x, y) => x + y;
 * // const multiply = (x, y) => x * y;
 * 
 * // Correct usage in a chain
 * chain(5).pipe($op(add)(5)).pipe($op(multiply)(2)).value(); // returns 20
 */
export function $op<T, Args extends unknown[], U>(fn: (value: T, ...args: Args) => U) {
    return (...args: Args) => (value: T) => fn(value, ...args);
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