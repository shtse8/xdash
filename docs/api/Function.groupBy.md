[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / groupBy

# Function: groupBy()

> **groupBy**\<`T`, `K`\>(`arr`, `key`): `Record`\<`K`, `T`[]\>

Defined in: [src/array.ts:218](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/array.ts#L218)

Groups an array of values by a key.

## Type Parameters

### T

`T`

### K

`K` *extends* `string` \| `number` \| `symbol`

## Parameters

### arr

`T`[]

array to group

### key

(`x`) => `K`

key to group by

## Returns

`Record`\<`K`, `T`[]\>

the grouped array

## Example

```ts
groupBy([{ a: 1 }, { a: 2 }, { a: 1 }], x => x.a) // returns { 1: [{ a: 1 }, { a: 1 }], 2: [{ a: 2 }] }
groupBy(['foo', 'bar', 'hello', 'world'], x => x.length) // returns { 3: ['foo', 'bar'], 5: ['hello', 'world'] }
```
