import { isTruthy } from "./typed";

/**
 * Returns the last element of an array
 * @param arr array to get the last element from
 * @returns the last element of the array
 * @throws if the array is empty
 * @example
 * last([1, 2, 3]) // returns 3
 * last([]) // throws an error
 */
export function last<T>(arr: T[]): T {
    if (arr.length === 0) {
        throw new Error('Array is empty');
    }
    return arr[arr.length - 1];
}

/**
 * Returns the first element of an array
 * @param arr array to get the first element from
 * @returns the first element of the array
 * @throws if the array is empty
 * @example
 * first([1, 2, 3]) // returns 1
 * first([]) // throws an error
 */
export function first<T>(arr: T[]): T {
    if (arr.length === 0) {
        throw new Error('Array is empty');
    }
    return arr[0];
}


/**
 * Returns the first n elements of an array
 * @param arr array to get the first n elements from
 * @param n number of elements to get
 * @returns the first n elements of the array
 */
export function take<T>(arr: T[], n: number): T[] {
    if (n <= 0) {
        return [];
    }
    return arr.slice(0, n);
}


/**
 * Returns the last n elements of an array
 * @param arr 
 * @param size 
 * @returns 
 */
export function takeRight<T>(arr: T[], size: number): T[] {
    if (size <= 0) {
        return [];
    }
    if (Number.isNaN(size)) {
        return [];
    }

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
 * Creates an array of unique values that are included in the first given array, but not in the remaining arrays using SameValueZero for equality comparisons.
 * @param arr array to exclude values from
 * @param values arrays to exclude
 * @returns the excluded array
 */
export function difference<T>(...values: T[][]): T[] {
    const rest = concat(...values.slice(1));
    return values[0].filter(x => !rest.includes(x));
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
 * Checks if exactly one element in the array is truthy based on a callback function.
 * @param arr array to flatten
 * @param fn callback to flatten the array
 * @returns the flattened array
 */
export function hasOne(arr: any[], fn: (value: any, index: number, array: any[]) => boolean = isTruthy): boolean {
    return arr.filter(fn).length === 1;
}

/**
 * Groups an array of values by a key.
 * @param arr array to group
 * @param key key to group by
 * @returns the grouped array
 * @example
 * groupBy([{ a: 1 }, { a: 2 }, { a: 1 }], x => x.a) // returns { 1: [{ a: 1 }, { a: 1 }], 2: [{ a: 2 }] }
 * groupBy(['foo', 'bar', 'hello', 'world'], x => x.length) // returns { 3: ['foo', 'bar'], 5: ['hello', 'world'] }
 */
export function groupBy<T, K extends string | number | symbol>(arr: T[], key: (x: T) => K): Record<K, T[]> {
    return arr.reduce((acc, x) => {
        const k = key(x)
        if (!acc[k]) {
            acc[k] = []
        }
        acc[k].push(x)
        return acc
    }, {} as Record<K, T[]>)
}

/**
 * Flattens an array of arrays.
 * @param arr array to flatten
 * @param fn callback to flatten the array
 * @returns the flattened array
 * @example
 * flat([[1, 2], [3, 4]], x => x) // returns [1, 2, 3, 4]
 */
export function flatMap<T, U>(arr: T[], fn: (x: T) => U[]): U[] {
    return arr.reduce((acc, x) => acc.concat(fn(x)), [] as U[])
}

/**
 * Returns the first element of an array, or a default value if the array is empty.
 * @param arr array to get the first element from
 * @param defaultValue default value
 * @returns the first element of the array, or the default value if the array is empty
 * @example
 * firstOrDefault([1, 2, 3], 0) // returns 1
 * firstOrDefault([], 0) // returns 0
 */
export function firstOrDefault<T>(arr: T[], defaultValue: T): T {
    return arr.length > 0 ? arr[0] : defaultValue
}