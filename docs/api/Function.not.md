[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / not

# Function: not()

> **not**\<`Args`\>(`fn`): (...`args`) => `boolean`

Defined in: [src/function.ts:43](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/function.ts#L43)

Negates the result of a function.

## Type Parameters

### Args

`Args` *extends* readonly `unknown`[]

## Parameters

### fn

(...`args`) => `boolean`

function to negate

## Returns

a function that negates the result of the input function

> (...`args`): `boolean`

### Parameters

#### args

...`Args`

### Returns

`boolean`

## Example

```ts
const isEven = (n: number) => n % 2 === 0
const isOdd = not(isEven)
isOdd(2) // returns false
```
