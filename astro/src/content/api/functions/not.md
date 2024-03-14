**xdash** • [Readme](../README.md) \| [API](../globals.md)

***

[xdash](../README.md) / not

# Function: not()

> **not**\<`Args`\>(`fn`): (...`args`) => `boolean`

NOT operator for functions.

## Type parameters

• **Args** extends readonly `unknown`[]

## Parameters

• **fn**

function to negate

## Returns

`Function`

a function that negates the result of the input function

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
const isOdd = not(isEven)
isOdd(2) // returns false
```

## Source

[fn-ops.ts:43](https://github.com/shtse8/xdash/blob/55c7e43/src/fn-ops.ts#L43)
