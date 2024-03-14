**xdash** • [Readme](../README.md) \| [API](../globals.md)

***

[xdash](../README.md) / toObj

# Function: toObj()

> **toObj**\<`T`, `R`\>(`arr`, `keyFn`, `valueFn`): `Record`\<`PropertyKey`, `R`\>

Converts an array to an object.

## Type parameters

• **T**

• **R** = `T`

## Parameters

• **arr**: `T`[]

array to fill

• **keyFn**

function to get the key from the item

• **valueFn**= `undefined`

function to get the value from the item

## Returns

`Record`\<`PropertyKey`, `R`\>

an object with the keys and values from the array

## Source

[typed.ts:122](https://github.com/shtse8/xdash/blob/55c7e43/src/typed.ts#L122)
