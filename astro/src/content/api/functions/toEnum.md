**xdash** • [Readme](../README.md) \| [API](../globals.md)

***

[xdash](../README.md) / toEnum

# Function: toEnum()

> **toEnum**\<`T`, `CapitalizeKeys`, `CapitalizeValues`\>(`list`, `options`): [`EnumFromList`](../type-aliases/EnumFromList.md)\<`T`, `CapitalizeKeys`, `CapitalizeValues`\>

Converts a list of strings to an enum.

## Type parameters

• **T** extends readonly `string`[]

• **CapitalizeKeys** extends `boolean` = `true`

• **CapitalizeValues** extends `boolean` = `false`

## Parameters

• **list**: `T`

list of strings to convert to an enum

• **options**= `{}`

options to customize the enum

• **options\.capitalizeKeys?**: `CapitalizeKeys`

• **options\.capitalizeValues?**: `CapitalizeValues`

## Returns

[`EnumFromList`](../type-aliases/EnumFromList.md)\<`T`, `CapitalizeKeys`, `CapitalizeValues`\>

an enum from the list

## Source

[typed.ts:139](https://github.com/shtse8/xdash/blob/55c7e43/src/typed.ts#L139)
