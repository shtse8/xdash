[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / Cache

# Class: Cache\<T\>

Defined in: [src/cache.ts:58](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/cache.ts#L58)

A class that caches a value

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new Cache**\<`T`\>(`options`?): [`Cache`](/xdash/api/Variable.default.md#cache)\<`T`\>

Defined in: [src/cache.ts:62](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/cache.ts#L62)

#### Parameters

##### options?

[`CacheOptions`](/xdash/api/Interface.CacheOptions.md)

#### Returns

[`Cache`](/xdash/api/Variable.default.md#cache)\<`T`\>

## Methods

### get()

> **get**(): `undefined` \| `NonNullable`\<`T`\>

Defined in: [src/cache.ts:91](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/cache.ts#L91)

#### Returns

`undefined` \| `NonNullable`\<`T`\>

***

### invalidate()

> **invalidate**(): `void`

Defined in: [src/cache.ts:86](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/cache.ts#L86)

#### Returns

`void`

***

### run()

> **run**(`fn`): `Promise`\<`T`\>

Defined in: [src/cache.ts:72](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/cache.ts#L72)

#### Parameters

##### fn

() => `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>

***

### set()

> **set**(`value`): `void`

Defined in: [src/cache.ts:67](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/cache.ts#L67)

#### Parameters

##### value

`T`

#### Returns

`void`
