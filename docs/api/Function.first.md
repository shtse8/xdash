[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / first

# Function: first()

> **first**\<`T`\>(`arr`): `T`

Defined in: [src/array.ts:38](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/array.ts#L38)

Returns the first element of an array

## Type Parameters

### T

`T`

## Parameters

### arr

`T`[]

array to get the first element from

## Returns

`T`

the first element of the array

## Throws

if the array is empty

## Example

```ts
first([1, 2, 3]) // returns 1
first([]) // throws an error
```
