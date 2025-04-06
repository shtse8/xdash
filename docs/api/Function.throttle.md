[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / throttle

# Function: throttle()

> **throttle**\<`Args`\>(`fn`, `ms`, `options`): (...`args`) => `void`

Defined in: [src/function.ts:130](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/function.ts#L130)

Throttles a function.

## Type Parameters

### Args

`Args` *extends* readonly `unknown`[]

## Parameters

### fn

(...`args`) => `void`

function to throttle

### ms

`number`

time in milliseconds to throttle the function

### options

options to configure the throttle

#### leading?

`boolean` = `true`

whether to run the function on the leading edge

#### trailing?

`boolean` = `true`

whether to run the function on the trailing edge

## Returns

a throttled function

> (...`args`): `void`

### Parameters

#### args

...`Args`

### Returns

`void`

## Examples

```ts
const log = throttle(console.log, 1000)
log('foo') // logs 'foo'
log('bar') // does not log 'bar'
log('baz') // does not log 'baz'
setTimeout(() => log('qux'), 1000) // logs 'qux' after 1 second
```

```ts
const log = throttle(console.log, 1000, { leading: false, trailing: true })
log('foo') // does not log 'foo'
log('bar') // does not log 'bar'
log('baz') // does not log 'baz'
setTimeout(() => log('qux'), 1000) // logs 'qux' after 1 second
```

```ts
const log = throttle(console.log, 1000, { leading: true, trailing: false })
log('foo') // logs 'foo'
log('bar') // does not log 'bar'
log('baz') // does not log 'baz'
setTimeout(() => log('qux'), 1000) // does not log 'qux'
```

```ts
const log = throttle(console.log, 1000, { leading: false, trailing: false })
log('foo') // does not log 'foo'
log('bar') // does not log 'bar'
log('baz') // does not log 'baz'
setTimeout(() => log('qux'), 1000) // does not log 'qux'
```
