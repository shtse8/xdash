[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / difference

# Function: difference()

> **difference**\<`T`\>(...`values`): `T`[]

Defined in: [src/array.ts:135](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/array.ts#L135)

Creates an array of unique values that are included in the first given array, but not in the remaining arrays using SameValueZero for equality comparisons.

## Type Parameters

### T

`T`

## Parameters

### values

...`T`[][]

arrays to exclude

## Returns

`T`[]

the excluded array
