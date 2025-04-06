[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / last

# Function: last()

> **last**\<`T`\>(`arr`): `T`

Defined in: [src/array.ts:12](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/array.ts#L12)

Returns the last element of an array

## Type Parameters

### T

`T`

## Parameters

### arr

`T`[]

array to get the last element from

## Returns

`T`

the last element of the array

## Throws

if the array is empty

## Example

```ts
last([1, 2, 3]) // returns 3
last([]) // throws an error
```
