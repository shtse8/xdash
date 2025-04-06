[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / $op

# Function: $op()

> **$op**\<`T`, `Args`, `U`\>(`fn`): (...`args`) => (`value`) => `U`

Defined in: [src/chain.ts:70](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L70)

Converts a function into a format suitable for use with the `Chain.pipe` method.
This allows for the inclusion of additional parameters to the function prior to its
execution in the chain. `$op` effectively curries the provided function, splitting
its application into two steps: first, `$op` is called with the function to adapt,
returning a new function. This returned function is then called with the additional
arguments needed for the adapted function, and it returns yet another function that
expects the current value in the chain as its input. This final function is suitable
for use with `Chain.pipe`, as it matches the expected signature by taking a single
argument—the current value in the chain—and applying the original function to it,
along with the pre-specified additional arguments.

## Type Parameters

### T

`T`

### Args

`Args` *extends* `unknown`[]

### U

`U`

## Parameters

### fn

(`value`, ...`args`) => `U`

The function to be converted. This function can take multiple parameters,
with the first parameter intended to be the current value in the chain, and the
rest being additional arguments provided during the subsequent call.

## Returns

A function that, when called with additional arguments, returns a new
function designed for the `Chain.pipe` method. This new function takes the current
value in the chain as its sole argument and applies the original function with the
specified additional arguments.

> (...`args`): (`value`) => `U`

### Parameters

#### args

...`Args`

### Returns

> (`value`): `U`

#### Parameters

##### value

`T`

#### Returns

`U`

## Example

```ts
// Assuming `add` and `multiply` are defined as:
// const add = (x, y) => x + y;
// const multiply = (x, y) => x * y;

// Correct usage in a chain
chain(5).pipe($op(add)(5)).pipe($op(multiply)(2)).value(); // returns 20
```
