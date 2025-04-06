[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / slugify

# Function: slugify()

> **slugify**(`text`, `options`?): `string`

Defined in: [src/semantic.ts:246](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/semantic.ts#L246)

Converts a given string into a slug, making it URL-friendly.
Supports concatenating CJK characters, converting to lowercase,
specifying a separator, and ensuring the slug does not exceed a specified maximum length,
while trying to preserve whole words when possible.

## Parameters

### text

`string`

The input string to slugify.

### options?

Configuration options for slugification.

#### concatCjk?

`boolean`

Whether to treat consecutive CJK characters as a single word.

#### length?

`number`

The desired maximum length of the generated slug. The function attempts not to exceed this length while preserving semantic integrity.

#### lowercase?

`boolean`

Whether to convert the slug to lower case.

#### separator?

`string`

The separator to use between words in the slug.

## Returns

`string`

- The slugified string.
