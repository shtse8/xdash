[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / invert

# Function: invert()

> **invert**\<`K`, `V`\>(`obj`): `Record`\<`V`, `K`\>

Defined in: [src/object.ts:120](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/object.ts#L120)

Inverts the keys and values of an object. If multiple keys share the same value, the last key encountered will overwrite previous ones.
Values that are not strings, numbers, or symbols might be coerced into strings when used as keys.

## Type Parameters

### K

`K` *extends* `string`

### V

`V` *extends* `string` \| `number` \| `symbol`

## Parameters

### obj

`Record`\<`K`, `V`\>

object to invert, assumes values are suitable for use as keys (string, number, symbol).

## Returns

`Record`\<`V`, `K`\>

the inverted object where original values become keys and original keys become values.

## Example

```ts
invert({ a: 'hello', b: 'world' }) // returns { hello: 'a', world: 'b' }
invert({ a: 1, b: 2 }) // returns { '1': 'a', '2': 'b' } (Note: numeric keys become strings)
invert({ a: 'hello', b: 'hello' }) // returns { hello: 'b' } (Key 'hello' is overwritten)
```
