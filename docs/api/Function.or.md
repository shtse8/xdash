[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / or

# Function: or()

> **or**\<`Args`\>(...`fns`): (...`args`) => `boolean`

Defined in: [src/function.ts:73](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/function.ts#L73)

OR operator for functions.

## Type Parameters

### Args

`Args` *extends* readonly `unknown`[]

## Parameters

### fns

...(...`args`) => `boolean`[]

functions to combine

## Returns

a function that returns true if any of the input functions return true

> (...`args`): `boolean`

### Parameters

#### args

...`Args`

### Returns

`boolean`

## Example

```ts
const isEven = (n: number) => n % 2 === 0
const isPositive = (n: number) => n > 0
const isPositiveOrEven = or(isEven, isPositive)
isPositiveOrEven(2) // returns true
isPositiveOrEven(3) // returns true
```
