type Constructor<T> = new (...args: any[]) => T

export type Func<Args extends any[] = void[], T = void> = (...args: Args) => T
export type Action<Args extends any[] = void[]> = Func<Args>

// const isObject = value => value !== null
//     && (typeof value === 'object' || typeof value === 'function')

export function isPromise(value: unknown): value is Promise<any> {
    return value !== null && typeof value === 'object' && 'then' in value && typeof value.then === 'function'
}

export function throwError(message = ''): never {
    throw new Error(message)
}

export function isString(value: unknown): value is string {
    return typeof value === 'string'
}

export function isFunction(value: unknown): value is Function {
    return typeof value === 'function'
}

export function isObject(value: unknown): value is object {
    return !!value && typeof value === 'object'
}

export function isArray(value: unknown): value is any[] {
    return Array.isArray(value)
}

export function isNotNull<T>(value: T): value is Exclude<T, null | undefined> {
    return value !== null && value !== undefined
}

export function isObjectKey<T extends object>(value: unknown, obj: T): value is keyof T {
    return isString(value) && isObject(obj) && value in obj
}

export function ensureString(value: unknown): string {
    return isString(value) ? value : throwError('value is not a string')
}

export function ensureObject<T extends object>(value: T): T
export function ensureObject(value: unknown): object {
    return isObject(value) ? value : throwError('value is not an object')
}

export function ensureInstanceOf<T extends object>(value: unknown, type: Constructor<T>): T
export function ensureInstanceOf(value: unknown, type: any): object {
    return isObject(value) && value instanceof type ? value : throwError('value is not an instance of object')
}

export function ensureArray<T extends []>(value: T): T
export function ensureArray(value: unknown): object {
    return isArray(value) ? value : throwError('value is not an array')
}

export function ensureNotNull<T>(value: T): Exclude<T, null | undefined> {
    return isNotNull(value) ? value : throwError('value is null')
}

export function ensureObjectKey<T extends object>(value: unknown, obj: T): keyof T {
    return isObjectKey(value, obj)
        ? value
        : isObject(obj)
            ? throwError(`"${value}" is not a key of the object. (${Object.keys(obj)})`)
            : throwError(`"${obj}" is not an object`)
}
//
// export function isPromise(value: unknown): value is Promise<unknown> {
//   return value !== null && typeof value === 'object' && 'then' in value && typeof value.then instanceof Function
// }
//
// export function ensurePromise<T>(value: Promise<T>): Promise<T>
// export function ensurePromise(value: unknown): Promise<unknown> {
//   return isPromise(value) ? value : throwError('value is not promise.')
// }

// Better typing
export function getKeys<T extends {}>(obj: T) {
    return Object.keys(obj) as (keyof T)[]
}

export function getValues<T extends {}>(obj: T) {
    return Object.values(obj) as (T[keyof T])[]
}

export function getEntries<T extends { [K in keyof T]: T[K] }>(obj: T) {
    return Object.entries(obj) as ({ [K in keyof T]-?: [K, T[K]] })[keyof T][]
}

export type KeyOf<T> = keyof T
export type ValueOf<T> = T[keyof T]
export type DeepPartial<T> = Partial<{ [K in keyof T]: Partial<T[K]> }>
export type PickByValue<T, V extends T[keyof T]> = { [K in Exclude<keyof T, ValueOf<{ [P in keyof T]: T[P] extends V ? never : P }>>]: T[K] }
export type KeyOfValue<T, V extends T[keyof T]> = keyof PickByValue<T, V>
export type PickValueByKey<T extends object, K extends keyof T> = T[K]
export type UnwrapPromise<T> = T extends Promise<infer U> ? UnwrapPromise<U> : T
export type UnwrapArray<T> = T extends (infer U)[] ? UnwrapArray<U> : T

export type ArrayType<T> = T extends (infer U)[] ? U : never
export type PromiseType<T> = T extends Promise<infer U> ? U : never

export type ValueOfArray<T extends readonly string[]> = T[number]
export type IsPositive<N extends number> = `${N}` extends `-${string}` ? false : true
export type RequireField<T, K extends keyof T> = T & Required<Pick<T, K>>

export type IsInteger<N extends number> = `${N}` extends `${string}.${string}`
    ? never
    : `${N}` extends `-${string}.${string}`
    ? never
    : number

export type IsValid<N extends number> = IsPositive<N> extends true
    ? IsInteger<N> extends number
    ? number
    : never
    : never

export type PositiveNumber<
    N extends number, T extends number[] = [],
> = T['length'] extends N ? T[number] : PositiveNumber<N, [...T, T['length']]>

export type Range<N1 extends IsValid<N1>, N2 extends IsValid<N2>> = Exclude<
    PositiveNumber<N2>,
    PositiveNumber<N1>
>

export type Indices<L extends number, T extends any[] = []> =
    T['length'] extends L ? T[number] : Indices<L, [T['length'], ...T]>

export type Tuple<N extends number, T = any> = N extends N ? number extends N ? T[] : _TupleOf<T, N, []> : never
type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N ? R : _TupleOf<T, N, [T, ...R]>

export type LengthAtLeast<T extends readonly any[], L extends number> =
    Pick<Required<T>, Indices<L>>

export type WithLength<T extends readonly any[], L extends number> =
    T[L] extends undefined ? T[L] : never

export type Same<A, B> = A extends B ? B extends A ? A : never : never
export type ArrayWithLength<L extends number, A extends any[] = []> = Pick<Required<A>, Same<keyof A, Indices<L>>>

/**
 * Fill an array with values, specifying keys
 *
 * @param keys - Array of values that will be used as keys. Illegal values for key will be converted to string.
 * @param value - Value to use for filling
 * @returns the filled array
 */
export function arrayFillKeys<T extends PropertyKey, V>(keys: T[], value: V): { [K in T]: V } {
    return Object.fromEntries(keys.map(key => [key, value])) as { [K in T]: V }
}

/**
 * convert array to object, specifying keys
 *
 * @param arr - Array of values
 * @param keyFn - key function
 * @param valueFn - value function
 * @returns the object
 */
export function arrayToObject<T, R = T>(arr: T[], keyFn: (item: T) => PropertyKey, valueFn?: (item: T) => R): Record<PropertyKey, R> {
    const vFn = valueFn ?? (item => item as unknown as R)
    return Object.fromEntries(arr.map(x => [keyFn(x), vFn(x)]))
}

type Enum<T extends string> = { [K in T]: K }
export function listToEnum<T extends readonly string[]>(list: T): Enum<ValueOfArray<T>> {
    const map: { [k: string]: string } = {}
    for (const field of list)
        map[field] = field
    return map as Enum<ValueOfArray<T>>
}

export function isKeyOf<T extends Record<any, any>>(object: T, property: PropertyKey): property is keyof object {
    return property in object
}

export function hasOwn<T extends PropertyKey>(o: Record<T, any>, v: T, { ignoreCase = false }: {
    ignoreCase?: boolean
} = {}): o is Record<T, unknown> {
    if (!ignoreCase && isString(v)) {
        return getKeys(o).some(k => isString(k) && k.toLowerCase() === v.toLowerCase())
    }
    return Object.hasOwn(o, v)

}
export const Noop = () => { }

export type MayBePromise<T> = PromiseLike<T> | T
export type MayBeArray<T> = T[] | T


export type Hex = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F'