**xdash** • [Readme](../README.md) \| [API](../globals.md)

***

[xdash](../README.md) / xor

# Function: xor()

> **xor**\<`Args`\>(...`fns`): (...`args`) => `boolean`

XOR operator for functions.

## Type parameters

• **Args** extends readonly `unknown`[]

## Parameters

• ...**fns**: (...`args`) => `boolean`[]

functions to combine

## Returns

`Function`

a function that returns true if exactly one of the input functions returns true

> ### Parameters
>
> • ...**args**: `Args`
>
> ### Returns
>
> `boolean`
>

## Example

```ts
const isEven = (n: number) => n % 2 === 0
const isPositive = (n: number) => n > 0
const isPositiveXorEven = xor(isEven, isPositive)
isPositiveXorEven(2) // returns false
isPositiveXorEven(3) // returns true
isPositiveXorEven(4) // returns false
```

## Source

[fn-ops.ts:89](https://github.com/shtse8/xdash/blob/55c7e43/src/fn-ops.ts#L89)
