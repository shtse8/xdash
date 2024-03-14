// Defines a generic constructor type.
export type Constructor<T> = new (...args: any[]) => T;

// Generic function type with optional return type.
export type FunctionType<Args extends any[] = void[], ReturnType = void> = (...args: Args) => ReturnType;

// Alias for FunctionType for actions without return values.
export type ActionType<Args extends any[] = void[]> = FunctionType<Args>;

// Utility types for working with object keys and values.
export type ObjectKey<T> = keyof T;
export type ObjectValue<T> = T[keyof T];

// Makes all properties of T deeply partial.
export type DeepPartial<T> = Partial<{ [K in keyof T]: Partial<T[K]> }>;

// Picks properties of T which are of type V.
export type PickByValueType<T, V extends T[keyof T]> = {
    [K in keyof T as T[K] extends V ? K : never]: T[K]
};

// Finds the keys of T where the value is of type V.
export type KeyOfValueType<T, V extends T[keyof T]> = keyof PickByValueType<T, V>;

// Extracts the value type of T for a given key K.
export type ValueTypeOfKey<T extends object, K extends keyof T> = T[K];

// Extracts the type of elements contained in an array T.
export type ElementTypeOfArray<T extends readonly any[]> = T[number];

// Utility types for unwrapping Promises and Arrays to their basic types.
export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
export type UnwrapArray<T> = T extends (infer U)[] ? U : T;

// Additional utility types for working with arrays and promises.
export type ElementType<T> = T extends (infer U)[] ? U : never;
export type PromiseResultType<T> = T extends Promise<infer U> ? U : never;

// Determines if a numeric literal type is positive.
export type IsPositive<N extends number> = `${N}` extends `-${string}` ? false : true;

// Enforces a required field K in type T.
export type EnforceRequiredField<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Checks if a number is an integer.
export type IsInteger<N extends number> = `${N}` extends `${string}.${string}` ? never : number;

// Validates if a number is both positive and an integer.
export type IsValidNumber<N extends number> = IsPositive<N> extends true ? IsInteger<N> extends number ? number : never : never;

// Generates a range of positive numbers from N1 to N2.
export type Range<N1 extends IsValidNumber<N1>, N2 extends IsValidNumber<N2>> = Exclude<PositiveNumber<N2>, PositiveNumber<N1>>;

// Generates tuple types of a specific length L.
export type Tuple<N extends number, T = any> = N extends N ? number extends N ? T[] : _TupleOf<T, N, []> : never;
type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N ? R : _TupleOf<T, N, [T, ...R]>;

// Types for working with promises and arrays in a flexible way.
export type MaybePromise<T> = T | Promise<T>;
export type MaybeArray<T> = T | T[];

// Defines a type for hexadecimal digits.
export type HexDigit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'a' | 'b' | 'c' | 'd' | 'e' | 'f';

// Recursive type to generate a union of positive numbers up to N.
export type PositiveNumber<N extends number, Accumulator extends number[] = []> =
    Accumulator['length'] extends N ? Accumulator[number] : PositiveNumber<N, [Accumulator['length'], ...Accumulator]>;

// Converts a union of types to an intersection of types.
export type UnionToIntersection<U> =
    (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

// Creates a type by excluding properties from T that are also in U. Useful for disjoint types.
export type ExcludeProperties<T, U> = {
    [Property in Exclude<keyof T, keyof U>]?: never
};

// Defines a type that is either T or U, but not both. Useful for ensuring exclusive conditions.
export type ExclusiveOr<T, U> = T & ExcludeProperties<U, T> | U & ExcludeProperties<T, U>;

// Allows exactly one of the specified keys K from type T. Useful for variant types.
export type OneOf<T, K extends keyof T> = {
    [Property in K]: Pick<T, Property> & Partial<Record<Exclude<K, Property>, never>>
}[K];

export type Capitalize<T extends string> = T extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : T;

/**
 * Converts a list of strings to an enum type.
 * @param T list of strings to convert to an enum
 * @param CapitalizeKeys whether to capitalize the keys of the enum
 * @param CapitalizeValues whether to capitalize the values of the enum
 * @returns an enum from the list
 * @example
 * const Colors = toEnum(['red', 'green', 'blue'])
 * console.log(Colors.Red) // 'red'
 * console.log(Colors.Green) // 'green'
 * console.log(Colors.Blue) // 'blue'
 * 
 * const Colors = toEnum(['red', 'green', 'blue'], { CapitalizeKeys: true, CapitalizeValues: true })
 * console.log(Colors.Red) // 'Red'
 * console.log(Colors.Green) // 'Green'
 * console.log(Colors.Blue) // 'Blue'
 */
export type EnumFromList<T extends readonly string[], CapitalizeKeys extends boolean = true, CapitalizeValues extends boolean = false> = {
    [K in T[number]as CapitalizeKeys extends true ? Capitalize<K> : K]: CapitalizeValues extends true ? Capitalize<K> : K
};

/**
 * Requires the specified fields K in type T.
 * @param T type to require fields in
 * @param K fields to require
 * @returns a type with the specified fields required
 * @example
 * type Example = { a?: number, b?: string }
 * type RequiredFields = RequireFields<Example, 'a'> // { a: number, b?: string }
 * type RequiredFields = RequireFields<Example, 'a' | 'b'> // { a: number, b: string }
 */
export type RequireFields<T, K extends keyof T> = T & {
    [P in K]-?: NonNullable<T[P]>;
};


/**
 * Nullable type for T.
 * @param T type to make nullable
 */
export type Nullable<T> = T | null | undefined;