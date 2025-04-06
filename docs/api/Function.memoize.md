[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / memoize

# Function: memoize()

> **memoize**\<`Args`, `T`\>(`fn`): (...`args`) => `undefined` \| `T`

Defined in: [src/function.ts:317](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/function.ts#L317)

Memoizes a function.

## Type Parameters

### Args

`Args` *extends* readonly `unknown`[]

### T

`T`

## Parameters

### fn

(...`args`) => `T`

function to memoize

## Returns

> (...`args`): `undefined` \| `T`

### Parameters

#### args

...`Args`

### Returns

`undefined` \| `T`

## Example

```ts
const add = memoize((a: number, b: number) => {
   console.log('Calculating sum');
  return a + b;
});
add(1, 2) // logs 'Calculating sum' and returns 3
add(1, 2) // returns 3
add(2, 3) // logs 'Calculating sum' and returns 5
add(2, 3) // returns 5
```
