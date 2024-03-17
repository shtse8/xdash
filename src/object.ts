import type { Merge, Merge3, Merge4, Merge5, Merge6, Merge7 } from './types';
/**
 * Maps an object by its keys.
 * @param obj object to map
 * @param fn callback to map the object
 * @returns the mapped object
 * @example
 * mapKeys({ a: 1, b: 2 }, key => key.toUpperCase()) // returns { A: 1, B: 2 }
 * mapKeys({ a: 'hello', b: 'world' }, key => key.toUpperCase()) // returns { A: 'hello', B: 'world' }
 */
export function mapKeys<T>(obj: Record<string, T>, fn: (key: string, value: T) => string): Record<string, T> {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [fn(key, value), value]));
}


/**
 * Maps an object by its values.
 * @param obj object to map
 * @param fn callback to map the object
 * @returns the mapped object
 * @example
 * mapValues({ a: 1, b: 2 }, value => value * 2) // returns { a: 2, b: 4 }
 * mapValues({ a: 'hello', b: 'world' }, value => value.toUpperCase()) // returns { a: 'HELLO', b: 'WORLD' }
 * mapValues({ a: 1, b: 2 }, value => value === 1) // returns { a: true, b: false }
 * mapValues({ a: 1, b: 2 }, value => value === 3) // returns { a: false, b: false }
 */
export function mapValues<T, U>(obj: Record<string, T>, fn: (value: T, key: string) => U): Record<string, U> {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value, key)]));
}

/**
 * Filters an object by its values.
 * @param obj object to filter
 * @param fn callback to filter the object
 * @returns the filtered object
 * @example
 * filterValues({ a: 1, b: 2 }, value => value === 1) // returns { a: 1 }
 * filterValues({ a: 'hello', b: 'world' }, value => value === 'hello') // returns { a: 'hello' }
 * filterValues({ a: 1, b: 2 }, value => value === 1 || value === 2) // returns { a: 1, b: 2 }
 * filterValues({ a: 1, b: 2 }, value => value === 3) // returns {}
 */
export function filterValues<T>(obj: Record<string, T>, fn: (value: T, key: string) => unknown): Record<string, T> {
    return Object.fromEntries(Object.entries(obj).filter(([key, value]) => fn(value, key)));
}

/**
 * Picks properties from an object.
 * @param obj object to pick properties from
 * @param keys keys to pick
 * @returns the object with the picked properties
 * @example
 * pick({ a: 1, b: 2 }, ['a']) // returns { a: 1 }
 * pick({ a: 'hello', b: 'world' }, ['a']) // returns { a: 'hello' }
 * pick({ a: 1, b: 2 }, ['a', 'b']) // returns { a: 1, b: 2 }
 * pick({ a: 1, b: 2 }, []) // returns {}
 */
export function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    return Object.fromEntries(keys.map(key => [key, obj[key]])) as Pick<T, K>;
}

/**
 * Omit properties from an object.
 * @param obj object to omit properties from
 * @param keys keys to omit
 * @returns the object with the omitted properties
 * @example
 * omit({ a: 1, b: 2 }, ['a']) // returns { b: 2 }
 * omit({ a: 'hello', b: 'world' }, ['a']) // returns { b: 'world' }
 * omit({ a: 1, b: 2 }, ['a', 'b']) // returns {}
 * omit({ a: 1, b: 2 }, []) // returns { a: 1, b: 2 }
 */
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key as K))) as Omit<T, K>;
}

/**
 * Merges objects together.
 * @param objs objects to merge
 * @returns the merged object
 * @example
 * merge({ a: 1 }, { b: 2 }) // returns { a: 1, b: 2 }
 * merge({ a: 'hello' }, { b: 'world' }) // returns { a: 'hello', b: 'world' }
 * merge({ a: 1 }, { a: 2 }) // returns { a: 2 }
 * merge({ a: 1 }, { a: 2 }, { a: 3 }) // returns { a: 3 } 
 */
export function merge<T, U>(obj1: T, obj2: U): Merge<T, U>;
export function merge<T, U, V>(obj1: T, obj2: U, obj3: V): Merge3<T, U, V>;
export function merge<T, U, V, W>(obj1: T, obj2: U, obj3: V, obj4: W): Merge4<T, U, V, W>;
export function merge<T, U, V, W, X>(obj1: T, obj2: U, obj3: V, obj4: W, obj5: X): Merge5<T, U, V, W, X>;
export function merge<T, U, V, W, X, Y>(obj1: T, obj2: U, obj3: V, obj4: W, obj5: X, obj6: Y): Merge6<T, U, V, W, X, Y>;
export function merge<T, U, V, W, X, Y, Z>(obj1: T, obj2: U, obj3: V, obj4: W, obj5: X, obj6: Y, obj7: Z): Merge7<T, U, V, W, X, Y, Z>;
export function merge(...objs: Record<string, unknown>[]): Record<string, unknown> {
    return Object.assign({}, ...objs);
}


/**
 * Filters an object by its keys.
 * @param obj object to filter
 * @param fn callback to filter the object
 * @returns the filtered object
 * @example
 * filterKeys({ a: 1, b: 2 }, key => key === 'a') // returns { a: 1 }
 * filterKeys({ a: 'hello', b: 'world' }, key => key === 'a') // returns { a: 'hello' }
 */
export function filterKeys<T>(obj: Record<string, T>, fn: (key: string, value: T) => unknown): Record<string, T> {
    return Object.fromEntries(Object.entries(obj).filter(([key, value]) => fn(key, value)));
}

/**
 * Inverts the keys and values of an object.
 * @param obj object to invert
 * @returns the inverted object
 * @example
 * invert({ a: 'hello', b: 'world' }) // returns { hello: 'a', world: 'b' }
 * invert({ a: 1, b: 2 }) // returns { 1: 'a', 2: 'b' }
 * invert({ a: 'hello', b: 'hello' }) // returns { hello: 'b' }
 */
export function invert(obj: object): Record<keyof typeof obj, string> {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
}

/**
 * Returns an array of key-value pairs from an object.
 * @param obj object to get entries from
 * @returns an array of key-value pairs
 * @example
 * entries({ a: 1, b: 2 }) // returns [['a', 1], ['b', 2]]
 * entries({ a: 'hello', b: 'world' }) // returns [['a', 'hello'], ['b', 'world']]
 */
export function entries<K extends PropertyKey, V = any>(obj: Record<K, V>): [K, V][] {
    return Object.entries(obj) as [K, V][];
}

/**
 * Returns an array of values from an object.
 * @param obj object to get values from
 * @returns an array of values
 * @example
 * values({ a: 1, b: 2 }) // returns [1, 2]
 * values({ a: 'hello', b: 'world' }) // returns ['hello', 'world']
 */
export function values<T>(obj: Record<string, T>): T[] {
    return Object.values(obj);
}

/**
 * Returns an array of keys from an object.
 * @param obj object to get keys from
 * @returns an array of keys
 * @example
 * keys({ a: 1, b: 2 }) // returns ['a', 'b']
 * keys({ a: 'hello', b: 'world' }) // returns ['a', 'b']
 */
export function keys<T>(obj: Record<string, T>): string[] {
    return Object.keys(obj);
}

/**
 * Determines if an object has a key.
 * @param obj object to check
 * @param key key to check
 * @returns true if the object has the key, false otherwise
 */
export function hasKey<T>(obj: Record<string, T>, key: string): boolean {
    return key in obj;
}

/**
 * Determines if an object has a value.
 * @param obj object to check
 * @param value value to check
 * @returns true if the object has the value, false otherwise
 */
export function hasValue<T>(obj: Record<string, T>, value: T): boolean {
    return Object.values(obj).includes(value);
}
