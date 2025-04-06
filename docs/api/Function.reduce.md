[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / reduce

# Function: reduce()

> **reduce**\<`T`, `U`\>(`arr`, `fn`, `initial`): `U`

Defined in: [src/array.ts:195](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/array.ts#L195)

Reduces an array to a value which is the accumulated result of running each element in the array through the callback.

## Type Parameters

### T

`T`

### U

`U`

## Parameters

### arr

`T`[]

array to reduce

### fn

(`acc`, `value`, `index`, `array`) => `U`

callback to reduce the array

### initial

`U`

initial value

## Returns

`U`

the reduced value
