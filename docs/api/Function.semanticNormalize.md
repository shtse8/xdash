[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / semanticNormalize

# Function: semanticNormalize()

> **semanticNormalize**(`text`, `options`?): `string`

Defined in: [src/semantic.ts:160](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/semantic.ts#L160)

Normalizes a given text string, removing diacritics, handling special characters, and ensuring consistent casing and spacing.

## Parameters

### text

`string`

The input text to normalize.

### options?

Configuration options for the normalization.

#### lowercase?

`boolean`

Whether to convert the text to lower case.

## Returns

`string`

The normalized text.

## Examples

```ts
// Normalizing a mixed-language string
const mixedText = "Café 'au' lait, 世界!";
const normalized = semanticNormalize(mixedText);
console.log(normalized); // Output might be "cafe au lait 世界" depending on the exact regex definitions
```

```ts
// Normalizing a string with diacritics and mixed casing
const diacriticText = "Àççéñtś and CĀSING";
const normalizedDiacritics = semanticNormalize(diacriticText);
console.log(normalizedDiacritics); // Output: "accents and casing"
```
