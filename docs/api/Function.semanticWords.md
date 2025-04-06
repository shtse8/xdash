[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / semanticWords

# Function: semanticWords()

> **semanticWords**(`text`, `concatCjk`): `string`[]

Defined in: [src/semantic.ts:221](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/semantic.ts#L221)

Extracts words from a given text string, recognizing Latin vocabulary and CJK characters.
The function can optionally treat consecutive CJK characters as a single word.
This is particularly useful for processing mixed-language texts where the distinction
between word boundaries may vary significantly between scripts.

## Parameters

### text

`string`

The input text from which words will be extracted.

### concatCjk

`boolean` = `false`

Determines whether consecutive CJK characters should be
                             treated as a single word (true) or as individual characters (false).
                             Default is false, meaning CJK characters are treated individually.

## Returns

`string`[]

- An array of extracted words. Latin words are identified based on standard
                      word boundaries, while CJK character handling is determined by the concatCjk flag.

## Examples

```ts
// Example with Latin text:
console.log(semanticWords("Hello, world!"));
// Expected output: ["Hello", "world"]
```

```ts
// Example with mixed Latin and CJK text, treating CJK characters individually:
console.log(semanticWords("This is a 测试"));
// Expected output: ["This", "is", "a", "测", "试"]
```

```ts
// Example with mixed Latin and CJK text, treating consecutive CJK characters as a single word:
console.log(semanticWords("This is a 测试", true));
// Expected output: ["This", "is", "a", "测试"]
```
