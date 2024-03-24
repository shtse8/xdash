
/**
 * Chain class to be used in a pipeline.
 * @example
 * chain(5).pipe(add, 5).pipe(multiply, 2).value // returns 20
 */
export class Chain<I, O> {
    constructor(private initialValue: I, private ops: ((value: any) => any)[] = []) { }

    /**
     * Pipes a value through a series of functions.
     * @param ops functions to pipe
     * @returns a new chain with the result of the operations
     */
    pipe<P, Q, R, S, T, U, V, W, X, Y, Z>(op1: (value: O) => P, op2: (value: P) => Q, op3: (value: Q) => R, op4: (value: R) => S, op5: (value: S) => T, op6: (value: T) => U, op7: (value: U) => V, op8: (value: V) => W, op9: (value: W) => X, op10: (value: X) => Y, op11: (value: Y) => Z): Chain<I, Z>;
    pipe<P, Q, R, S, T, U, V, W, X, Y>(op1: (value: O) => P, op2: (value: P) => Q, op3: (value: Q) => R, op4: (value: R) => S, op5: (value: S) => T, op6: (value: T) => U, op7: (value: U) => V, op8: (value: V) => W, op9: (value: W) => X, op10: (value: X) => Y): Chain<I, Y>;
    pipe<P, Q, R, S, T, U, V, W, X>(op1: (value: O) => P, op2: (value: P) => Q, op3: (value: Q) => R, op4: (value: R) => S, op5: (value: S) => T, op6: (value: T) => U, op7: (value: U) => V, op8: (value: V) => W, op9: (value: W) => X): Chain<I, X>;
    pipe<P, Q, R, S, T, U, V, W>(op1: (value: O) => P, op2: (value: P) => Q, op3: (value: Q) => R, op4: (value: R) => S, op5: (value: S) => T, op6: (value: T) => U, op7: (value: U) => V, op8: (value: V) => W): Chain<I, W>;
    pipe<P, Q, R, S, T, U, V>(op1: (value: O) => P, op2: (value: P) => Q, op3: (value: Q) => R, op4: (value: R) => S, op5: (value: S) => T, op6: (value: T) => U, op7: (value: U) => V): Chain<I, V>;
    pipe<P, Q, R, S, T, U>(op1: (value: O) => P, op2: (value: P) => Q, op3: (value: Q) => R, op4: (value: R) => S, op5: (value: S) => T, op6: (value: T) => U): Chain<I, U>;
    pipe<P, Q, R, S, T>(op1: (value: O) => P, op2: (value: P) => Q, op3: (value: Q) => R, op4: (value: R) => S, op5: (value: S) => T): Chain<I, T>;
    pipe<P, Q, R, S>(op1: (value: O) => P, op2: (value: P) => Q, op3: (value: Q) => R, op4: (value: R) => S): Chain<I, S>;
    pipe<P, Q, R>(op1: (value: O) => P, op2: (value: P) => Q, op3: (value: Q) => R): Chain<I, R>;
    pipe<P, Q>(op1: (value: O) => P, op2: (value: P) => Q): Chain<I, Q>;
    pipe<P>(op1: (value: O) => P): Chain<I, P>;
    pipe(...ops: ((value: O) => unknown)[]): Chain<I, unknown> {
        return new Chain<I, unknown>(this.initialValue, [
            ...this.ops,
            ...ops
        ]);
    }

    get value(): O {
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
 * chain(5).pipe($op(add)(5)).pipe($op(multiply)(2)).value; // returns 20
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