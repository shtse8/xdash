[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / Merge

# Type Alias: Merge\<T, U\>

> **Merge**\<`T`, `U`\> = `Omit`\<`T`, keyof `U`\> & `U`

Defined in: [src/types.ts:141](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/types.ts#L141)

Merge two types. If a key exists in both types, the value from the second type is used.

## Type Parameters

### T

`T`

first type to merge

### U

`U`

second type to merge

## Returns

the merged type

## Example

```ts
type A = { a: number, b: string }
type B = { b: number, c: string }
type Merged = Merge<A, B> // { a: number, b: number, c: string }
```
