[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / kebabCase

# Function: kebabCase()

> **kebabCase**(`str`, `options`): `string`

Defined in: [src/string.ts:52](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/string.ts#L52)

Converts a string to kebab-case

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
