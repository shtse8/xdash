[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / pascalCase

# Function: pascalCase()

> **pascalCase**(`str`): `string`

Defined in: [src/string.ts:96](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/string.ts#L96)

Converts a string to PascalCase

## Parameters

### str

`string`

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
