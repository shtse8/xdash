**xdash** • [Readme](../README.md) \| [API](../globals.md)

***

[xdash](../README.md) / EnumFromList

# Type alias: EnumFromList\<T, CapitalizeKeys, CapitalizeValues\>

> **EnumFromList**\<`T`, `CapitalizeKeys`, `CapitalizeValues`\>: `{ [K in T[number] as CapitalizeKeys extends true ? Capitalize<K> : K]: CapitalizeValues extends true ? Capitalize<K> : K }`

Converts a list of strings to an enum type.

## Example

```ts
const Colors = toEnum(['red', 'green', 'blue'])
console.log(Colors.Red) // 'red'
console.log(Colors.Green) // 'green'
console.log(Colors.Blue) // 'blue'

const Colors = toEnum(['red', 'green', 'blue'], { CapitalizeKeys: true, CapitalizeValues: true })
console.log(Colors.Red) // 'Red'
console.log(Colors.Green) // 'Green'
console.log(Colors.Blue) // 'Blue'
```

## Type parameters

• **T** extends readonly `string`[]

list of strings to convert to an enum

• **CapitalizeKeys** extends `boolean` = `true`

whether to capitalize the keys of the enum

• **CapitalizeValues** extends `boolean` = `false`

whether to capitalize the values of the enum

## Source

[types.ts:105](https://github.com/shtse8/xdash/blob/55c7e43/src/types.ts#L105)
