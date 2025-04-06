[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / union

# Function: union()

> **union**\<`T`\>(...`arrs`): `T`[]

Defined in: [src/array.ts:125](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/array.ts#L125)

Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.

## Type Parameters

### T

`T`

## Parameters

### arrs

...`T`[][]

arrays to union

## Returns

`T`[]

the unioned array
