**xdash** • [Readme](../README.md) \| [API](../globals.md)

***

[xdash](../README.md) / kebabCase

# Function: kebabCase()

> **kebabCase**(`str`, `options`): `string`

Converts a string to kebab-case

## Parameters

• **str**: `string`

string to convert

• **options**= `undefined`

options for the conversion

• **options\.screaming**: `boolean`= `false`

## Returns

`string`

the string in kebab-case

## Example

```ts
kebabCase('fooBar') // returns 'foo-bar'
kebabCase('foo_bar') // returns 'foo-bar'
kebabCase('foo-bar') // returns 'foo-bar'
kebabCase('FOO_BAR') // returns 'foo-bar'
kebabCase('foo') // returns 'foo'
kebabCase('') // returns ''
kebabCase('fooBar', { screaming: true }) // returns 'FOO-BAR'
kebabCase('foo_bar', { screaming: true }) // returns 'FOO-BAR'
kebabCase('foo-bar', { screaming: true }) // returns 'FOO-BAR'
kebabCase('FOO_BAR', { screaming: true }) // returns 'FOO-BAR'
kebabCase('foo', { screaming: true }) // returns 'FOO'
```

## Source

[str.ts:52](https://github.com/shtse8/xdash/blob/55c7e43/src/str.ts#L52)
