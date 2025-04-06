[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / filterKeys

# Function: filterKeys()

> **filterKeys**\<`T`\>(`obj`, `fn`): `Record`\<`string`, `T`\>

Defined in: [src/object.ts:106](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/object.ts#L106)

Filters an object by its keys.

## Type Parameters

### T

`T`

## Parameters

### obj

`Record`\<`string`, `T`\>

object to filter

### fn

(`key`, `value`) => `unknown`

callback to filter the object

## Returns

`Record`\<`string`, `T`\>

the filtered object

## Example

```ts
filterKeys({ a: 1, b: 2 }, key => key === 'a') // returns { a: 1 }
filterKeys({ a: 'hello', b: 'world' }, key => key === 'a') // returns { a: 'hello' }
```
