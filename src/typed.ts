import { capitalize } from './string';
import type { EnumFromList } from './types'

/**
 * Determines if a value is a promise.
 * @param value value to check
 * @returns true if the value is a promise, false otherwise
 */
export function isPromise(value: unknown): value is Promise<unknown> {
    return value !== null && typeof value === 'object' && 'then' in value && typeof value.then === 'function';
}

/**
 * Throws an error with the given message.
 * @param message error message
 */
export function throwError(message = ''): never {
    throw new Error(message);
}

/**
 * Converts a value to an error.
 * @param value value to convert
 * @returns the value as an error
 */
export function asError(value: unknown): Error {
    return value instanceof Error ? value : new Error(String(value));
}


/**
 * Determines if a value is a string.
 * @param value value to check
 * @returns true if the value is a string, false otherwise
 */
export function isString(value: unknown): value is string {
    return typeof value === 'string';
}

/**
 * Determines if a value is a function.
 * @param value value to check
 * @returns true if the value is a function, false otherwise
 */
export function isFunction(value: unknown): value is Function {
    return typeof value === 'function';
}

/**
 * Determines if a value is an object.
 * @param value value to check
 * @returns true if the value is an object, false otherwise
 */
export function isObject(value: unknown): value is object {
    return !!value && typeof value === 'object' && !isArray(value);
}

/**
 * Determines if a value is an array.
 * @param value value to check
 * @returns true if the value is an array, false otherwise
 */
export function isArray(value: unknown): value is any[] {
    return Array.isArray(value);
}


/**
 * Determines if a value is a number.
 * @param value value to check
 * @returns true if the value is a number, false otherwise
 */
export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}


/**
 * Fills an array with a value.
 * @param keys keys to fill
 * @param value value to fill the keys with
 * @returns an object with the keys filled with the value
 */
export function fillKeys<T extends PropertyKey, V>(keys: T[], value: V): Record<T, V> {
    return keys.reduce((acc, key) => ((acc[key] = value), acc), {} as Record<T, V>);
}

/**
 * Converts an array to an object.
 * @param arr array to fill
 * @param keyFn function to get the key from the item
 * @param valueFn function to get the value from the item
 * @returns an object with the keys and values from the array
 */
export function toObj<T, R = T>(
    arr: T[],
    keyFn: (item: T) => PropertyKey,
    valueFn: (item: T) => R = (item => item as unknown as R)
): Record<PropertyKey, R> {
    return arr.reduce((obj, item) => {
        obj[keyFn(item)] = valueFn(item);
        return obj;
    }, {} as Record<PropertyKey, R>);
}

/**
 * Converts a list of strings to an enum.
 * @param list list of strings to convert to an enum
 * @param options options to customize the enum
 * @returns an enum from the list
 */
export function toEnum<T extends readonly string[], CapitalizeKeys extends boolean = true, CapitalizeValues extends boolean = false>(list: T, options: {
    capitalizeKeys?: CapitalizeKeys,
    capitalizeValues?: CapitalizeValues,
} = {}): EnumFromList<T, CapitalizeKeys, CapitalizeValues> {
    const { capitalizeKeys = true, capitalizeValues = false } = options;
    const obj = {} as Record<string, string>;
    for (const key of list) {
        obj[capitalizeKeys ? capitalize(key) : key] = capitalizeValues ? capitalize(key) : key;
    }
    return obj as EnumFromList<T, CapitalizeKeys, CapitalizeValues>;
}

/**
 * Determines if an object has a key.
 * @param obj object to check
 * @param key key to check
 * @param param2 options to customize the check
 * @returns true if the object has the key, false otherwise
 */
export function hasOwn(obj: Record<any, any>, key: PropertyKey, { ignoreCase = false }: { ignoreCase?: boolean } = {}): key is keyof typeof obj {
    if (!ignoreCase || typeof key !== 'string') return obj.hasOwnProperty(key);
    const lowerKey = key.toLowerCase();
    return Object.keys(obj).some(k => k.toLowerCase() === lowerKey);
}

/**
 * Determines if a value is a key of an object.
 * @param value value to check
 * @param obj object to check if the value is a key of
 * @returns true if the value is a key of the object, false otherwise
 */
export function isKeyOf<T extends object>(value: unknown, obj: T): value is keyof T {
    return isString(value) && isObject(obj) && value in obj;
}

/**
 * Determines if a value is null or undefined.
 * @param value value to check
 * @returns true if the value is a number, false otherwise
 */
export function isNullish(value: unknown): value is null | undefined {
    return value === null || value === undefined;
}

/**
 * Determines if a value is truthy.
 * @param value value to check
 * @returns true if the value is a number, false otherwise
 */
export function isTruthy(value: unknown): boolean {
    return !!value;
}

/**
 * Determines if a value is empty.
 * @param value 
 * @returns 
 */
export function isEmpty(value: any): boolean {
    return isNullish(value)
        || (isString(value) && value.trim() === '')
        || (isArray(value) && value.length === 0)
        || (isObject(value) && Object.keys(value).length === 0);
}
