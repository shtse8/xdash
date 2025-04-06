[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / map

# Function: map()

> **map**\<`T`, `U`\>(`arr`, `fn`): `U`[]

Defined in: [src/array.ts:156](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/array.ts#L156)

Maps an array of values to an array of results of the callback.

## Type Parameters

### T

`T`

### U

`U`

## Parameters

### arr

`T`[]

array to map

### fn

(`value`, `index`, `array`) => `U`

callback to map the array

## Returns

`U`[]

the mapped array
