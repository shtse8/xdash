[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / flatMap

# Function: flatMap()

> **flatMap**\<`T`, `U`\>(`arr`, `fn`): `U`[]

Defined in: [src/array.ts:237](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/array.ts#L237)

Flattens an array of arrays.

## Type Parameters

### T

`T`

### U

`U`

## Parameters

### arr

`T`[]

array to flatten

### fn

(`x`) => `U`[]

callback to flatten the array

## Returns

`U`[]

the flattened array

## Example

```ts
flat([[1, 2], [3, 4]], x => x) // returns [1, 2, 3, 4]
```
