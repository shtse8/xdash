[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / PickByValueType

# Type Alias: PickByValueType\<T, V\>

> **PickByValueType**\<`T`, `V`\> = `{ [K in keyof T as T[K] extends V ? K : never]: T[K] }`

Defined in: [src/types.ts:18](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/types.ts#L18)

## Type Parameters

### T

`T`

### V

`V` *extends* `T`\[keyof `T`\]
