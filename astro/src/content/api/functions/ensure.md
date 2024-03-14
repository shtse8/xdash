**xdash** • [Readme](../README.md) \| [API](../globals.md)

***

[xdash](../README.md) / ensure

# Function: ensure()

## ensure(checkFn, errorMsg)

> **ensure**\<`T`, `Args`\>(`checkFn`, `errorMsg`?): (`value`, ...`args`) => `T`

Determines if a value is a number.

### Type parameters

• **T**

• **Args** extends readonly `unknown`[] = []

### Parameters

• **checkFn**

function to check the value

• **errorMsg?**: `string`

error message to throw if the value does not match the expected type

### Returns

`Function`

a function that checks if a value matches the expected type

> #### Parameters
>
> • **value**: `unknown`
>
> • ...**args**: `Args`
>
> #### Returns
>
> `T`
>

### Example

```ts
const ensureArr = ensure(isArr, 'Value is not an array')
const arr = ensureArr(123) // throws an error
const arr2 = ensureArr([1, 2, 3]) // returns [1, 2, 3]
```

### Source

[fn-ops.ts:13](https://github.com/shtse8/xdash/blob/55c7e43/src/fn-ops.ts#L13)

## ensure(checkFn, errorMsg)

> **ensure**\<`T`, `Args`\>(`checkFn`, `errorMsg`?): (`value`, ...`args`) => `T`

### Type parameters

• **T**

• **Args** extends readonly `unknown`[] = []

### Parameters

• **checkFn**

• **errorMsg?**: `string`

### Returns

`Function`

> #### Parameters
>
> • **value**: `T`
>
> • ...**args**: `Args`
>
> #### Returns
>
> `T`
>

### Source

[fn-ops.ts:17](https://github.com/shtse8/xdash/blob/55c7e43/src/fn-ops.ts#L17)
