[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / OneOf

# Type Alias: OneOf\<T, K\>

> **OneOf**\<`T`, `K`\> = `{ [Property in K]: Pick<T, Property> & Partial<Record<Exclude<K, Property>, never>> }`\[`K`\]

Defined in: [src/types.ts:82](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/types.ts#L82)

## Type Parameters

### T

`T`

### K

`K` *extends* keyof `T`
