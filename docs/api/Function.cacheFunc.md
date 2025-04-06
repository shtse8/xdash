[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / cacheFunc

# Function: cacheFunc()

> **cacheFunc**\<`T`, `Args`\>(`fn`, `options`?): (...`args`) => `Promise`\<`T`\>

Defined in: [src/cache.ts:50](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/cache.ts#L50)

Caches the result of a function

## Type Parameters

### T

`T`

### Args

`Args` *extends* readonly `unknown`[]

## Parameters

### fn

(...`args`) => `Promise`\<`T`\>

function to cache

### options?

[`CacheOptions`](/xdash/api/Interface.CacheOptions.md)

cache options

## Returns

a function that caches the result of the input function

> (...`args`): `Promise`\<`T`\>

### Parameters

#### args

...`Args`

### Returns

`Promise`\<`T`\>

## Examples

```ts
const cachedFunc = cacheFunc(async () => {
 return 'hello'
}, { ttl: 1000 })

console.log(await cachedFunc()) // 'hello'
console.log(await cachedFunc()) // 'hello'
```

```ts
const invalidator = new Invalidator()
const cachedFunc = cacheFunc(async () => {
return 'hello'
}, { ttl: 1000, invalidator })

console.log(await cachedFunc()) // 'hello'
invalidator.invalidate()
console.log(await cachedFunc()) // 'hello'
```

```ts
class Example {
 const fn = cacheFunc(bindSelf(this)._fn)
 async _fn() {
    return 'hello'
 }
}
```
