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
 * Negates the result of a function.
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

/**
 * Throttles a function.
 * @param fn function to throttle
 * @param ms time in milliseconds to throttle the function
 * @returns a throttled function
 * @example
 * const log = throttle(console.log, 1000)
 * log('foo') // logs 'foo'
 * log('bar') // does not log 'bar'
 * log('baz') // does not log 'baz'
 * setTimeout(() => log('qux'), 1000) // logs 'qux' after 1 second
 */
export function throttle<Args extends readonly unknown[]>(fn: (...args: Args) => void, ms: number) {
    let last = 0;
    return (...args: Args) => {
        const now = Date.now();
        if (now - last < ms) return;
        last = now;
        fn(...args);
    }
}


/**
 * Debounces a function.
 * @param fn function to debounce
 * @param ms time in milliseconds to debounce the function
 * @returns a debounced function
 * @example
 * const log = debounce(console.log, 1000)
 * log('foo') // logs 'foo' after 1 second
 * log('bar') // logs 'bar' after 1 second, 'foo' is not logged
 */
export function debounce<Args extends readonly unknown[]>(fn: (...args: Args) => void, ms: number) {
    let timeout: Timer;
    return (...args: Args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), ms);
    }
}


/**
 * Returns a function that only runs once.
 * @param fn function to run once
 * @returns a function that only runs once
 * @example
 * const logOnce = once(console.log)
 * logOnce('foo') // logs 'foo'
 * logOnce('bar') // does not log 'bar'
 */
export function once<Args extends readonly unknown[], T>(fn: (...args: Args) => T) {
    let called = false;
    let result: T;
    return (...args: Args) => {
        if (called) return result;
        called = true;
        result = fn(...args);
        return result;
    }
}

/**
 * Binds a function to a context.
 * @param fn function to bind
 * @param thisArg context to bind the function to
 * @returns a function that is bound to the context
 * @example
 * const obj = {
 *  name: 'foo',
 *  greet() {
 *   return `Hello, ${this.name}!`;
 *  }
 * }
 * const greet = bind(obj.greet, obj);
 * greet() // returns 'Hello, foo!'
 * const obj2 = { name: 'bar' };
 * const greet2 = bind(obj.greet, obj2);
 * greet2() // returns 'Hello, bar!'
 * 
 */
export function bind<Args extends readonly unknown[], T, U>(fn: (this: T, ...args: Args) => U, thisArg: T) {
    return (...args: Args) => fn.call(thisArg, ...args);
}

/**
 * Memoizes a function.
 * @param fn function to memoize
 * @returns 
 * @example
 * const add = memoize((a: number, b: number) => {
 *    console.log('Calculating sum');
 *   return a + b;
 * });
 * add(1, 2) // logs 'Calculating sum' and returns 3
 * add(1, 2) // returns 3
 * add(2, 3) // logs 'Calculating sum' and returns 5
 * add(2, 3) // returns 5
 */
export function memoize<Args extends readonly unknown[], T>(fn: (...args: Args) => T) {
    const cache = new Map<string, T>();
    return (...args: Args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
}
