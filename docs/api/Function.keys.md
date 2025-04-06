[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / keys

# Function: keys()

> **keys**\<`T`\>(`obj`): `string`[]

Defined in: [src/object.ts:158](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/object.ts#L158)

Returns an array of keys from an object.

## Type Parameters

### T

`T`

## Parameters

### obj

`Record`\<`string`, `T`\>

object to get keys from

## Returns

`string`[]

an array of keys

## Example

```ts
keys({ a: 1, b: 2 }) // returns ['a', 'b']
keys({ a: 'hello', b: 'world' }) // returns ['a', 'b']
```
