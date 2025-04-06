[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / semanticSlice

# Function: semanticSlice()

> **semanticSlice**(`str`, `len`, `options`): `string`

Defined in: [src/semantic.ts:40](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/semantic.ts#L40)

Slices a string semantically, considering word boundaries and optionally adding an ellipsis.

## Parameters

### str

`string`

string to slice

### len

`number`

length to slice the string to

### options

options for the slice operation

#### ellipsis?

`boolean`

#### ellipsisSymbol?

`string`

#### includeEllipsis?

`boolean`

#### sliceOnCjk?

`boolean`

#### sliceOnNumber?

`boolean`

#### sliceOnPunctuation?

`boolean`

#### sliceOnSpace?

`boolean`

#### trimEnd?

`boolean`

#### trimStart?

`boolean`

## Returns

`string`

the sliced string

## Example

```ts
semanticSlice('The quick brown fox', 10) // returns 'The quick…'
semanticSlice('The quick brown fox', 10, { ellipsis: true }) // returns 'The quick…'
semanticSlice('The quick brown fox', 10, { ellipsis: true, includeEllipsis: false }) // returns 'The quick'
semanticSlice('The quick brown fox', 10, { ellipsis: true, trimEnd: false }) // returns 'The quick brown…'
semanticSlice('The quick, brown fox', 10) // returns 'The quick,'
semanticSlice('The quick, brown fox', 10, { sliceOnPunctuation: false }) // returns 'The quick'
semanticSlice('The quick, brown fox', 10, { sliceOnSpace: false }) // returns 'The'
semanticSlice('The quick, brown fox', 10, { sliceOnCjk: false }) // returns 'The quick,'
semanticSlice('這是一個非常長的句子', 5) // returns '這是一個非常長的句'
semanticSlice('這是一個非常長的句子', 5, { sliceOnCjk: false }) // returns '這是一個非常長的'
semanticSlice('這是一個非常長的句子', 5, { ellipsis: true }) // returns '這是一個非常長的句…'
```
