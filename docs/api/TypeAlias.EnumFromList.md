[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / EnumFromList

# Type Alias: EnumFromList\<T, CapitalizeKeys, CapitalizeValues\>

> **EnumFromList**\<`T`, `CapitalizeKeys`, `CapitalizeValues`\> = `{ [K in T[number] as CapitalizeKeys extends true ? Capitalize<K> : K]: CapitalizeValues extends true ? Capitalize<K> : K }`

Defined in: [src/types.ts:105](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/types.ts#L105)

Converts a list of strings to an enum type.

## Type Parameters

### T

`T` *extends* readonly `string`[]

list of strings to convert to an enum

### CapitalizeKeys

`CapitalizeKeys` *extends* `boolean` = `true`

whether to capitalize the keys of the enum

### CapitalizeValues

`CapitalizeValues` *extends* `boolean` = `false`

whether to capitalize the values of the enum

## Returns

an enum from the list

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
