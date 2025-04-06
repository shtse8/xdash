[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / toEnum

# Function: toEnum()

> **toEnum**\<`T`, `CapitalizeKeys`, `CapitalizeValues`\>(`list`, `options`): [`EnumFromList`](/xdash/api/TypeAlias.EnumFromList.md)\<`T`, `CapitalizeKeys`, `CapitalizeValues`\>

Defined in: [src/typed.ts:112](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/typed.ts#L112)

Converts a list of strings to an enum.

## Type Parameters

### T

`T` *extends* readonly `string`[]

### CapitalizeKeys

`CapitalizeKeys` *extends* `boolean` = `true`

### CapitalizeValues

`CapitalizeValues` *extends* `boolean` = `false`

## Parameters

### list

`T`

list of strings to convert to an enum

### options

options to customize the enum

#### capitalizeKeys?

`CapitalizeKeys`

#### capitalizeValues?

`CapitalizeValues`

## Returns

[`EnumFromList`](/xdash/api/TypeAlias.EnumFromList.md)\<`T`, `CapitalizeKeys`, `CapitalizeValues`\>

an enum from the list
