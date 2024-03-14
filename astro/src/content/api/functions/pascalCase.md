**xdash** • [Readme](../README.md) \| [API](../globals.md)

***

[xdash](../README.md) / pascalCase

# Function: pascalCase()

> **pascalCase**(`str`): `string`

Converts a string to PascalCase

## Parameters

• **str**: `string`

string to convert

## Returns

`string`

the string in PascalCase

## Example

```ts
pascalCase('fooBar') // returns 'FooBar'
pascalCase('foo-bar') // returns 'FooBar'
pascalCase('foo_bar') // returns 'FooBar'
pascalCase('FOO_BAR') // returns 'FooBar'
pascalCase('foo') // returns 'Foo'
pascalCase('') // returns ''
```

## Source

[str.ts:96](https://github.com/shtse8/xdash/blob/55c7e43/src/str.ts#L96)
