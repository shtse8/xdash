**xdash** • [Readme](../README.md) \| [API](../globals.md)

***

[xdash](../README.md) / separateWords

# Function: separateWords()

> **separateWords**(`str`): `string`[]

Separates words in a string based on the detected case.

## Parameters

• **str**: `string`

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

## Source

[str.ts:211](https://github.com/shtse8/xdash/blob/55c7e43/src/str.ts#L211)
