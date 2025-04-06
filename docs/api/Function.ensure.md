[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / ensure

# Function: ensure()

## Call Signature

> **ensure**\<`T`, `Args`\>(`checkFn`, `errorMsg`?): (`value`, ...`args`) => `T`

Defined in: [src/function.ts:13](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/function.ts#L13)

Determines if a value is a number.

### Type Parameters

#### T

`T`

#### Args

`Args` *extends* readonly `unknown`[] = \[\]

### Parameters

#### checkFn

(`value`, ...`args`) => `value is T`

function to check the value

#### errorMsg?

`string`

error message to throw if the value does not match the expected type

### Returns

a function that checks if a value matches the expected type

> (`value`, ...`args`): `T`

#### Parameters

##### value

`unknown`

##### args

...`Args`

#### Returns

`T`

### Example

```ts
const ensureArr = ensure(isArr, 'Value is not an array')
const arr = ensureArr(123) // throws an error
const arr2 = ensureArr([1, 2, 3]) // returns [1, 2, 3]
```

## Call Signature

> **ensure**\<`T`, `Args`\>(`checkFn`, `errorMsg`?): (`value`, ...`args`) => `T`

Defined in: [src/function.ts:17](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/function.ts#L17)

Determines if a value is a number.

### Type Parameters

#### T

`T`

#### Args

`Args` *extends* readonly `unknown`[] = \[\]

### Parameters

#### checkFn

(`value`, ...`args`) => `boolean`

function to check the value

#### errorMsg?

`string`

error message to throw if the value does not match the expected type

### Returns

a function that checks if a value matches the expected type

> (`value`, ...`args`): `T`

#### Parameters

##### value

`T`

##### args

...`Args`

#### Returns

`T`

### Example

```ts
const ensureArr = ensure(isArr, 'Value is not an array')
const arr = ensureArr(123) // throws an error
const arr2 = ensureArr([1, 2, 3]) // returns [1, 2, 3]
```
