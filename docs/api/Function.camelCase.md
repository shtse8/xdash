[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / camelCase

# Function: camelCase()

> **camelCase**(`str`): `string`

Defined in: [src/string.ts:25](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/string.ts#L25)

Converts a string to camelCase

## Parameters

### str

`string`

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
