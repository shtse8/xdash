**xdash** • [Readme](../README.md) \| [API](../globals.md)

***

[xdash](../README.md) / PickByValueType

# Type alias: PickByValueType\<T, V\>

> **PickByValueType**\<`T`, `V`\>: `{ [K in keyof T as T[K] extends V ? K : never]: T[K] }`

## Type parameters

• **T**

• **V** extends `T`\[keyof `T`\]

## Source

[types.ts:18](https://github.com/shtse8/xdash/blob/55c7e43/src/types.ts#L18)
