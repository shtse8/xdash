[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / entries

# Function: entries()

> **entries**\<`K`, `V`\>(`obj`): \[`K`, `V`\][]

Defined in: [src/object.ts:134](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/object.ts#L134)

Returns an array of key-value pairs from an object.

## Type Parameters

### K

`K` *extends* `PropertyKey`

### V

`V` = `any`

## Parameters

### obj

`Record`\<`K`, `V`\>

object to get entries from

## Returns

\[`K`, `V`\][]

an array of key-value pairs

## Example

```ts
entries({ a: 1, b: 2 }) // returns [['a', 1], ['b', 2]]
entries({ a: 'hello', b: 'world' }) // returns [['a', 'hello'], ['b', 'world']]
```
