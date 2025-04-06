[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / omit

# Function: omit()

> **omit**\<`T`, `K`\>(`obj`, `keys`): `Omit`\<`T`, `K`\>

Defined in: [src/object.ts:72](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/object.ts#L72)

Omit properties from an object.

## Type Parameters

### T

`T` *extends* `object`

### K

`K` *extends* `string` \| `number` \| `symbol`

## Parameters

### obj

`T`

object to omit properties from

### keys

`K`[]

keys to omit

## Returns

`Omit`\<`T`, `K`\>

the object with the omitted properties

## Example

```ts
omit({ a: 1, b: 2 }, ['a']) // returns { b: 2 }
omit({ a: 'hello', b: 'world' }, ['a']) // returns { b: 'world' }
omit({ a: 1, b: 2 }, ['a', 'b']) // returns {}
omit({ a: 1, b: 2 }, []) // returns { a: 1, b: 2 }
```
