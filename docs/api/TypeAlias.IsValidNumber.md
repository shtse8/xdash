[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / IsValidNumber

# Type Alias: IsValidNumber\<N\>

> **IsValidNumber**\<`N`\> = [`IsPositive`](/xdash/api/TypeAlias.IsPositive.md)\<`N`\> *extends* `true` ? [`IsInteger`](/xdash/api/TypeAlias.IsInteger.md)\<`N`\> *extends* `number` ? `number` : `never` : `never`

Defined in: [src/types.ts:49](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/types.ts#L49)

## Type Parameters

### N

`N` *extends* `number`
