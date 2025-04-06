[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / pick

# Function: pick()

> **pick**\<`T`, `K`\>(`obj`, `keys`): `Pick`\<`T`, `K`\>

Defined in: [src/object.ts:57](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/object.ts#L57)

Picks properties from an object.

## Type Parameters

### T

`T`

### K

`K` *extends* `string` \| `number` \| `symbol`

## Parameters

### obj

`T`

object to pick properties from

### keys

`K`[]

keys to pick

## Returns

`Pick`\<`T`, `K`\>

the object with the picked properties

## Example

```ts
pick({ a: 1, b: 2 }, ['a']) // returns { a: 1 }
pick({ a: 'hello', b: 'world' }, ['a']) // returns { a: 'hello' }
pick({ a: 1, b: 2 }, ['a', 'b']) // returns { a: 1, b: 2 }
pick({ a: 1, b: 2 }, []) // returns {}
```
