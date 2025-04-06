[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / once

# Function: once()

> **once**\<`Args`, `T`\>(`fn`): (...`args`) => `T`

Defined in: [src/function.ts:229](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/function.ts#L229)

Returns a function that only runs once.

## Type Parameters

### Args

`Args` *extends* readonly `unknown`[]

### T

`T`

## Parameters

### fn

(...`args`) => `T`

function to run once

## Returns

a function that only runs once

> (...`args`): `T`

### Parameters

#### args

...`Args`

### Returns

`T`

## Example

```ts
const logOnce = once(console.log)
logOnce('foo') // logs 'foo'
logOnce('bar') // does not log 'bar'
```
