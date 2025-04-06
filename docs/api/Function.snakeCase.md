[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / snakeCase

# Function: snakeCase()

> **snakeCase**(`str`, `options`): `string`

Defined in: [src/string.ts:78](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/string.ts#L78)

Converts a string to snake_case

## Parameters

### str

`string`

string to convert

### options

options for the conversion

#### screaming

`boolean` = `false`

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
