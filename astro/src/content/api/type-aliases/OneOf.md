**xdash** • [Readme](../README.md) \| [API](../globals.md)

***

[xdash](../README.md) / OneOf

# Type alias: OneOf\<T, K\>

> **OneOf**\<`T`, `K`\>: `{ [Property in K]: Pick<T, Property> & Partial<Record<Exclude<K, Property>, never>> }`\[`K`\]

## Type parameters

• **T**

• **K** extends keyof `T`

## Source

[types.ts:82](https://github.com/shtse8/xdash/blob/55c7e43/src/types.ts#L82)
