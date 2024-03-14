**xdash** • [Readme](../README.md) \| [API](../globals.md)

***

[xdash](../README.md) / RequireFields

# Type alias: RequireFields\<T, K\>

> **RequireFields**\<`T`, `K`\>: `T` & `{ [P in K]-?: NonNullable<T[P]> }`

Requires the specified fields K in type T.

## Example

```ts
type Example = { a?: number, b?: string }
type RequiredFields = RequireFields<Example, 'a'> // { a: number, b?: string }
type RequiredFields = RequireFields<Example, 'a' | 'b'> // { a: number, b: string }
```

## Type parameters

• **T**

type to require fields in

• **K** extends keyof `T`

fields to require

## Source

[types.ts:119](https://github.com/shtse8/xdash/blob/55c7e43/src/types.ts#L119)
