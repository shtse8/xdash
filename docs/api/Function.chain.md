[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / chain

# Function: chain()

> **chain**\<`T`\>(`value`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`T`, `T`\>

Defined in: [src/chain.ts:82](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L82)

Chains a value to be used in a pipeline.

## Type Parameters

### T

`T`

## Parameters

### value

`T`

value to chain

## Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`T`, `T`\>

a chain of the value

## Example

```ts
chain(5).pipe(add, 5).pipe(multiply, 2).unwrap() // returns 20
```
