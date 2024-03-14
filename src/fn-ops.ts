import { throwError } from "./typed";

/**
 * Determines if a value is a number.
 * @param checkFn function to check the value
 * @param errorMsg error message to throw if the value does not match the expected type
 * @returns a function that checks if a value matches the expected type
 * @example
 * const ensureArr = ensure(isArr, 'Value is not an array')
 * const arr = ensureArr(123) // throws an error
 * const arr2 = ensureArr([1, 2, 3]) // returns [1, 2, 3]
 */
export function ensure<T, Args extends readonly unknown[] = []>(
    checkFn: (value: any, ...args: Args) => value is T,
    errorMsg?: string,
): (value: unknown, ...args: Args) => T;
export function ensure<T, Args extends readonly unknown[] = []>(
    checkFn: (value: T, ...args: Args) => boolean,
    errorMsg?: string,
): (value: T, ...args: Args) => T;
export function ensure<T, Args extends readonly unknown[] = []>(
    checkFn: (value: T, ...args: Args) => boolean,
    errorMsg = 'Value does not match the expected type',
): (value: T, ...args: Args) => T {
    return (value: T, ...args: Args): T => {
        if (!checkFn(value, ...args)) {
            throwError(errorMsg);
        }
        return value as T;
    }
}


/**
 * NOT operator for functions.
 * @param fn function to negate
 * @returns a function that negates the result of the input function
 * @example
 * const isEven = (n: number) => n % 2 === 0
 * const isOdd = not(isEven)
 * isOdd(2) // returns false
 */
export function not<Args extends readonly unknown[]>(fn: (...args: Args) => boolean) {
    return (...args: Args) => !fn(...args);
}


/**
 * AND operator for functions.
 * @param fns functions to combine
 * @returns a function that returns true if all of the input functions return true
 * @example
 * const isEven = (n: number) => n % 2 === 0
 * const isPositive = (n: number) => n > 0
 * const isPositiveEven = and(isEven, isPositive)
 * isPositiveEven(2) // returns true
 */
export function and<Args extends readonly unknown[]>(...fns: Array<(...args: Args) => boolean>) {
    return (...args: Args) => fns.every(fn => fn(...args));
}

/**
 * OR operator for functions.
 * @param fns functions to combine
 * @returns a function that returns true if any of the input functions return true
 * @example
 * const isEven = (n: number) => n % 2 === 0
 * const isPositive = (n: number) => n > 0
 * const isPositiveOrEven = or(isEven, isPositive)
 * isPositiveOrEven(2) // returns true
 * isPositiveOrEven(3) // returns true
 */
export function or<Args extends readonly unknown[]>(...fns: Array<(...args: Args) => boolean>) {
    return (...args: Args) => fns.some(fn => fn(...args));
}

/**
 * XOR operator for functions.
 * @param fns functions to combine
 * @returns a function that returns true if exactly one of the input functions returns true
 * @example
 * const isEven = (n: number) => n % 2 === 0
 * const isPositive = (n: number) => n > 0
 * const isPositiveXorEven = xor(isEven, isPositive)
 * isPositiveXorEven(2) // returns false
 * isPositiveXorEven(3) // returns true
 * isPositiveXorEven(4) // returns false
 */
export function xor<Args extends readonly unknown[]>(...fns: Array<(...args: Args) => boolean>) {
    return (...args: Args) => fns.filter(fn => fn(...args)).length === 1;
}