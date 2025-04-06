[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / RequireFields

# Type Alias: RequireFields\<T, K\>

> **RequireFields**\<`T`, `K`\> = `T` & `{ [P in K]-?: NonNullable<T[P]> }`

Defined in: [src/types.ts:119](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/types.ts#L119)

Requires the specified fields K in type T.

## Type Parameters

### T

`T`

type to require fields in

### K

`K` *extends* keyof `T`

fields to require

## Returns

a type with the specified fields required

## Example

```ts
type Example = { a?: number, b?: string }
type RequiredFields = RequireFields<Example, 'a'> // { a: number, b?: string }
type RequiredFields = RequireFields<Example, 'a' | 'b'> // { a: number, b: string }
```
