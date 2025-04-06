[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / filterValues

# Function: filterValues()

> **filterValues**\<`T`\>(`obj`, `fn`): `Record`\<`string`, `T`\>

Defined in: [src/object.ts:42](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/object.ts#L42)

Filters an object by its values.

## Type Parameters

### T

`T`

## Parameters

### obj

`Record`\<`string`, `T`\>

object to filter

### fn

(`value`, `key`) => `unknown`

callback to filter the object

## Returns

`Record`\<`string`, `T`\>

the filtered object

## Example

```ts
filterValues({ a: 1, b: 2 }, value => value === 1) // returns { a: 1 }
filterValues({ a: 'hello', b: 'world' }, value => value === 'hello') // returns { a: 'hello' }
filterValues({ a: 1, b: 2 }, value => value === 1 || value === 2) // returns { a: 1, b: 2 }
filterValues({ a: 1, b: 2 }, value => value === 3) // returns {}
```
