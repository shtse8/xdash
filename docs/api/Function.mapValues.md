[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / mapValues

# Function: mapValues()

> **mapValues**\<`T`, `U`\>(`obj`, `fn`): `Record`\<`string`, `U`\>

Defined in: [src/object.ts:27](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/object.ts#L27)

Maps an object by its values.

## Type Parameters

### T

`T`

### U

`U`

## Parameters

### obj

`Record`\<`string`, `T`\>

object to map

### fn

(`value`, `key`) => `U`

callback to map the object

## Returns

`Record`\<`string`, `U`\>

the mapped object

## Example

```ts
mapValues({ a: 1, b: 2 }, value => value * 2) // returns { a: 2, b: 4 }
mapValues({ a: 'hello', b: 'world' }, value => value.toUpperCase()) // returns { a: 'HELLO', b: 'WORLD' }
mapValues({ a: 1, b: 2 }, value => value === 1) // returns { a: true, b: false }
mapValues({ a: 1, b: 2 }, value => value === 3) // returns { a: false, b: false }
```
