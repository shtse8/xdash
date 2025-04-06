[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / debounce

# Function: debounce()

> **debounce**\<`Args`\>(`fn`, `ms`, `options`): (...`args`) => `void`

Defined in: [src/function.ts:199](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/function.ts#L199)

Debounces a function.

## Type Parameters

### Args

`Args` *extends* readonly `unknown`[]

## Parameters

### fn

(...`args`) => `void`

function to debounce

### ms

`number`

time in milliseconds to debounce the function

### options

options to configure the debounce

#### immediate?

`boolean` = `false`

whether to run the function immediately

## Returns

a debounced function

> (...`args`): `void`

### Parameters

#### args

...`Args`

### Returns

`void`

## Examples

```ts
const log = debounce(console.log, 1000)
log('foo') // logs 'foo' after 1 second
log('bar') // logs 'bar' after 1 second, 'foo' is not logged
```

```ts
const log = debounce(console.log, 1000, { immediate: true })
log('foo') // logs 'foo'
log('bar') // does not log 'bar'
log('baz') // does not log 'baz'
setTimeout(() => log('qux'), 1000) // logs 'qux' after 1 second
```
