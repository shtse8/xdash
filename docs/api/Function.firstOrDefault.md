[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / firstOrDefault

# Function: firstOrDefault()

> **firstOrDefault**\<`T`, `D`\>(`arr`, `defaultValue`): `T` \| `D`

Defined in: [src/array.ts:250](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/array.ts#L250)

Returns the first element of an array, or a default value if the array is empty.

## Type Parameters

### T

`T`

### D

`D`

## Parameters

### arr

`T`[]

array to get the first element from

### defaultValue

`D`

default value

## Returns

`T` \| `D`

the first element of the array, or the default value if the array is empty

## Example

```ts
firstOrDefault([1, 2, 3], 0) // returns 1
firstOrDefault([], 0) // returns 0
```
