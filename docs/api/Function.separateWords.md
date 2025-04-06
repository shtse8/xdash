[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / separateWords

# Function: separateWords()

> **separateWords**(`str`): `string`[]

Defined in: [src/string.ts:211](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/string.ts#L211)

Separates words in a string based on the detected case.

## Parameters

### str

`string`

The string to separate.

## Returns

`string`[]

An array of separated words.

## Example

```ts
separateWords('fooBar') // returns ['foo', 'Bar']
separateWords('foo-bar') // returns ['foo', 'bar']
separateWords('FOO_BAR') // returns ['FOO', 'BAR']
separateWords('foo bar') // returns ['foo', 'bar']
separateWords('') // returns []
separateWords('fooBar-baz') // returns ['foo', 'Bar', 'baz']
```
