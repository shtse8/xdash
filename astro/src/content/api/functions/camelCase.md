**xdash** • [Readme](../README.md) \| [API](../globals.md)

***

[xdash](../README.md) / camelCase

# Function: camelCase()

> **camelCase**(`str`): `string`

Converts a string to camelCase

## Parameters

• **str**: `string`

string to convert

## Returns

`string`

the string in camelCase

## Example

```ts
camelCase('foo-bar') // returns 'fooBar'
camelCase('foo_bar') // returns 'fooBar'
camelCase('FooBar') // returns 'fooBar'
camelCase('FOO_BAR') // returns 'fooBar'
```

## Source

[str.ts:25](https://github.com/shtse8/xdash/blob/55c7e43/src/str.ts#L25)
