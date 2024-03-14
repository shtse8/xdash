**xdash** • [Readme](../README.md) \| [API](../globals.md)

***

[xdash](../README.md) / snakeCase

# Function: snakeCase()

> **snakeCase**(`str`, `options`): `string`

Converts a string to snake_case

## Parameters

• **str**: `string`

string to convert

• **options**= `undefined`

options for the conversion

• **options\.screaming**: `boolean`= `false`

## Returns

`string`

the string in snake_case

## Example

```ts
snakeCase('fooBar') // returns 'foo_bar'
snakeCase('foo-bar') // returns 'foo_bar'
snakeCase('foo_bar') // returns 'foo_bar'
snakeCase('FOO_BAR') // returns 'foo_bar'
snakeCase('foo') // returns 'foo'
snakeCase('') // returns ''
snakeCase('fooBar', { screaming: true }) // returns 'FOO_BAR'
snakeCase('foo-bar', { screaming: true }) // returns 'FOO_BAR'
snakeCase('foo_bar', { screaming: true }) // returns 'FOO_BAR'
snakeCase('FOO_BAR', { screaming: true }) // returns 'FOO_BAR'
snakeCase('foo', { screaming: true }) // returns 'FOO'
snakeCase('fooBar', { screaming: true }) // returns 'FOO_BAR'
snakeCase('foo-bar', { screaming: true }) // returns 'FOO_BAR'
```

## Source

[str.ts:78](https://github.com/shtse8/xdash/blob/55c7e43/src/str.ts#L78)
