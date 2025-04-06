[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / filter

# Function: filter()

> **filter**\<`T`\>(`arr`, `fn`): `T`[]

Defined in: [src/array.ts:146](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/array.ts#L146)

Removes elements from an array for which the callback returns false.

## Type Parameters

### T

`T`

## Parameters

### arr

`T`[]

array to filter

### fn

(`value`, `index`, `array`) => `unknown`

callback to filter the array

## Returns

`T`[]

the filtered array
