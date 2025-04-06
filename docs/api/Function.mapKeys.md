[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / mapKeys

# Function: mapKeys()

> **mapKeys**\<`T`\>(`obj`, `fn`): `Record`\<`string`, `T`\>

Defined in: [src/object.ts:11](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/object.ts#L11)

Maps an object by its keys.

## Type Parameters

### T

`T`

## Parameters

### obj

`Record`\<`string`, `T`\>

object to map

### fn

(`key`, `value`) => `string`

callback to map the object

## Returns

`Record`\<`string`, `T`\>

the mapped object

## Example

```ts
mapKeys({ a: 1, b: 2 }, key => key.toUpperCase()) // returns { A: 1, B: 2 }
mapKeys({ a: 'hello', b: 'world' }, key => key.toUpperCase()) // returns { A: 'hello', B: 'world' }
```
