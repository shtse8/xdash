**xdash** • [Readme](../README.md) \| [API](../globals.md)

***

[xdash](../README.md) / and

# Function: and()

> **and**\<`Args`\>(...`fns`): (...`args`) => `boolean`

AND operator for functions.

## Type parameters

• **Args** extends readonly `unknown`[]

## Parameters

• ...**fns**: (...`args`) => `boolean`[]

functions to combine

## Returns

`Function`

a function that returns true if all of the input functions return true

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
const isPositiveEven = and(isEven, isPositive)
isPositiveEven(2) // returns true
```

## Source

[fn-ops.ts:58](https://github.com/shtse8/xdash/blob/55c7e43/src/fn-ops.ts#L58)
