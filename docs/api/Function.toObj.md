[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / toObj

# Function: toObj()

> **toObj**\<`T`, `R`\>(`arr`, `keyFn`, `valueFn`): `Record`\<`PropertyKey`, `R`\>

Defined in: [src/typed.ts:95](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/typed.ts#L95)

Converts an array to an object.

## Type Parameters

### T

`T`

### R

`R` = `T`

## Parameters

### arr

`T`[]

array to fill

### keyFn

(`item`) => `PropertyKey`

function to get the key from the item

### valueFn

(`item`) => `R`

function to get the value from the item

## Returns

`Record`\<`PropertyKey`, `R`\>

an object with the keys and values from the array
