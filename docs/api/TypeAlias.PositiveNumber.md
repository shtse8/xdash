[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / PositiveNumber

# Type Alias: PositiveNumber\<N, Accumulator\>

> **PositiveNumber**\<`N`, `Accumulator`\> = `Accumulator`\[`"length"`\] *extends* `N` ? `Accumulator`\[`number`\] : `PositiveNumber`\<`N`, \[`Accumulator`\[`"length"`\], `...Accumulator`\]\>

Defined in: [src/types.ts:66](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/types.ts#L66)

## Type Parameters

### N

`N` *extends* `number`

### Accumulator

`Accumulator` *extends* `number`[] = \[\]
