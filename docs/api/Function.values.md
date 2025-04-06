[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / values

# Function: values()

> **values**\<`T`\>(`obj`): `T`[]

Defined in: [src/object.ts:146](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/object.ts#L146)

Returns an array of values from an object.

## Type Parameters

### T

`T`

## Parameters

### obj

`Record`\<`string`, `T`\>

object to get values from

## Returns

`T`[]

an array of values

## Example

```ts
values({ a: 1, b: 2 }) // returns [1, 2]
values({ a: 'hello', b: 'world' }) // returns ['hello', 'world']
```
