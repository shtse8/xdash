import { isTruthy } from "./typed";

/**
 * Returns the last element of an array
 * @param arr array to get the last element from
 * @returns the last element of the array
 */
export function last<T>(arr: T[]): T {
    return arr[arr.length - 1];
}

/**
 * Returns the first element of an array
 * @param arr array to get the first element from
 * @returns the first element of the array
 */
export function first<T>(arr: T[]): T {
    return arr[0];
}


/**
 * Returns the first n elements of an array
 * @param arr array to get the first n elements from
 * @param n number of elements to get
 * @returns the first n elements of the array
 */
export function take<T>(arr: T[], n: number): T[] {
    return arr.slice(0, n);
}


/**
 * Returns the last n elements of an array
 * @param arr 
 * @param size 
 * @returns 
 */
export function takeRight<T>(arr: T[], size: number): T[] {
    return arr.slice(-size);
}

/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 * @param arr 
 * @param size 
 * @returns 
 */
export function chunk<T>(arr: T[], size: number): T[][] {
    return arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), [] as T[][]);
}

/**
 * Compacts an array by removing null and undefined values.
 * @param arr array to compact
 * @returns the compacted array
 */
export function compact<T>(arr: (T | null | undefined | false | 0)[]): T[] {
    return arr.filter(Boolean) as T[];
}

/**
 * Concatenates arrays
 * @param arrs arrays to concatenate
 * @returns the concatenated array
 */
export function concat<T>(...arrs: T[][]): T[] {
    return arrs.reduce((acc, arr) => [...acc, ...arr], []);
}

/**
 * Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons.
 * @param arrs arrays to intersect
 * @returns the intersected array
 */
export function intersection<T>(...arrs: T[][]): T[] {
    return arrs.reduce((acc, arr) => acc.filter(Set.prototype.has, new Set(arr)), arrs[0]);
}

/**
 * Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.
 * @param arrs arrays to union
 * @returns the unioned array
 */

export function union<T>(...arrs: T[][]): T[] {
    return Array.from(new Set(concat(...arrs)));
}

/**
 * Creates an array of unique values that are included in the first provided array, but not in the second.
 * @param arr array to difference from
 * @param values values to exclude
 * @returns the differenced array
 */
export function difference<T>(arr: T[], values: T[]): T[] {
    const set = new Set(values);
    return arr.filter(x => !set.has(x));
}

/**
 * Removes elements from an array for which the callback returns false.
 * @param arr array to filter
 * @param fn  callback to filter the array
 * @returns the filtered array
 */
export function filter<T>(arr: T[], fn: (value: T, index: number, array: T[]) => unknown): T[] {
    return arr.filter(fn);
}

/**
 * Maps an array of values to an array of results of the callback.
 * @param arr array to map
 * @param fn callback to map the array
 * @returns the mapped array
 */
export function map<T, U>(arr: T[], fn: (value: T, index: number, array: T[]) => U): U[] {
    return arr.map(fn);
}

/**
 * Unique values from an array. Order is not guaranteed.
 * @param arr array to get unique values from
 * @returns the array with unique values
 */
export function uniq<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
}

/**
 * Unique values from an array, based on a comparator function.
 * @param arr array to get unique values from
 * @param fn comparator function
 * @returns the array with unique values
 */
export function uniqBy<T>(arr: T[], fn: (a: T) => unknown): T[] {
    const set = new Set();
    return arr.filter(x => {
        const key = fn(x);
        if (set.has(key)) {
            return false;
        }
        set.add(key);
        return true;
    });
}


/**
 * Reduces an array to a value which is the accumulated result of running each element in the array through the callback.
 * @param arr array to reduce
 * @param fn callback to reduce the array
 * @param initial initial value
 * @returns the reduced value
 */
export function reduce<T, U>(arr: T[], fn: (acc: U, value: T, index: number, array: T[]) => U, initial: U): U {
    return arr.reduce(fn, initial);
}

/**
 * Xors an array. Returns true if only one element is truthy.
 * @param arr array to flatten
 * @param fn callback to flatten the array
 * @returns the flattened array
 */
export function xor(arr: any[], fn: (value: any, index: number, array: any[]) => boolean = isTruthy): boolean {
    return arr.filter(fn).length === 1;
}