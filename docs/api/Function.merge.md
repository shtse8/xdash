[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / merge

# Function: merge()

## Call Signature

> **merge**\<`T`, `U`\>(`obj1`, `obj2`): [`Merge`](/xdash/api/TypeAlias.Merge.md)\<`T`, `U`\>

Defined in: [src/object.ts:86](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/object.ts#L86)

Merges objects together.

### Type Parameters

#### T

`T`

#### U

`U`

### Parameters

#### obj1

`T`

#### obj2

`U`

### Returns

[`Merge`](/xdash/api/TypeAlias.Merge.md)\<`T`, `U`\>

the merged object

### Example

```ts
merge({ a: 1 }, { b: 2 }) // returns { a: 1, b: 2 }
merge({ a: 'hello' }, { b: 'world' }) // returns { a: 'hello', b: 'world' }
merge({ a: 1 }, { a: 2 }) // returns { a: 2 }
merge({ a: 1 }, { a: 2 }, { a: 3 }) // returns { a: 3 }
```

## Call Signature

> **merge**\<`T`, `U`, `V`\>(`obj1`, `obj2`, `obj3`): [`Merge3`](/xdash/api/TypeAlias.Merge3.md)\<`T`, `U`, `V`\>

Defined in: [src/object.ts:87](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/object.ts#L87)

Merges objects together.

### Type Parameters

#### T

`T`

#### U

`U`

#### V

`V`

### Parameters

#### obj1

`T`

#### obj2

`U`

#### obj3

`V`

### Returns

[`Merge3`](/xdash/api/TypeAlias.Merge3.md)\<`T`, `U`, `V`\>

the merged object

### Example

```ts
merge({ a: 1 }, { b: 2 }) // returns { a: 1, b: 2 }
merge({ a: 'hello' }, { b: 'world' }) // returns { a: 'hello', b: 'world' }
merge({ a: 1 }, { a: 2 }) // returns { a: 2 }
merge({ a: 1 }, { a: 2 }, { a: 3 }) // returns { a: 3 }
```

## Call Signature

> **merge**\<`T`, `U`, `V`, `W`\>(`obj1`, `obj2`, `obj3`, `obj4`): [`Merge4`](/xdash/api/TypeAlias.Merge4.md)\<`T`, `U`, `V`, `W`\>

Defined in: [src/object.ts:88](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/object.ts#L88)

Merges objects together.

### Type Parameters

#### T

`T`

#### U

`U`

#### V

`V`

#### W

`W`

### Parameters

#### obj1

`T`

#### obj2

`U`

#### obj3

`V`

#### obj4

`W`

### Returns

[`Merge4`](/xdash/api/TypeAlias.Merge4.md)\<`T`, `U`, `V`, `W`\>

the merged object

### Example

```ts
merge({ a: 1 }, { b: 2 }) // returns { a: 1, b: 2 }
merge({ a: 'hello' }, { b: 'world' }) // returns { a: 'hello', b: 'world' }
merge({ a: 1 }, { a: 2 }) // returns { a: 2 }
merge({ a: 1 }, { a: 2 }, { a: 3 }) // returns { a: 3 }
```

## Call Signature

> **merge**\<`T`, `U`, `V`, `W`, `X`\>(`obj1`, `obj2`, `obj3`, `obj4`, `obj5`): [`Merge5`](/xdash/api/TypeAlias.Merge5.md)\<`T`, `U`, `V`, `W`, `X`\>

Defined in: [src/object.ts:89](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/object.ts#L89)

Merges objects together.

### Type Parameters

#### T

`T`

#### U

`U`

#### V

`V`

#### W

`W`

#### X

`X`

### Parameters

#### obj1

`T`

#### obj2

`U`

#### obj3

`V`

#### obj4

`W`

#### obj5

`X`

### Returns

[`Merge5`](/xdash/api/TypeAlias.Merge5.md)\<`T`, `U`, `V`, `W`, `X`\>

the merged object

### Example

```ts
merge({ a: 1 }, { b: 2 }) // returns { a: 1, b: 2 }
merge({ a: 'hello' }, { b: 'world' }) // returns { a: 'hello', b: 'world' }
merge({ a: 1 }, { a: 2 }) // returns { a: 2 }
merge({ a: 1 }, { a: 2 }, { a: 3 }) // returns { a: 3 }
```

## Call Signature

> **merge**\<`T`, `U`, `V`, `W`, `X`, `Y`\>(`obj1`, `obj2`, `obj3`, `obj4`, `obj5`, `obj6`): [`Merge6`](/xdash/api/TypeAlias.Merge6.md)\<`T`, `U`, `V`, `W`, `X`, `Y`\>

Defined in: [src/object.ts:90](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/object.ts#L90)

Merges objects together.

### Type Parameters

#### T

`T`

#### U

`U`

#### V

`V`

#### W

`W`

#### X

`X`

#### Y

`Y`

### Parameters

#### obj1

`T`

#### obj2

`U`

#### obj3

`V`

#### obj4

`W`

#### obj5

`X`

#### obj6

`Y`

### Returns

[`Merge6`](/xdash/api/TypeAlias.Merge6.md)\<`T`, `U`, `V`, `W`, `X`, `Y`\>

the merged object

### Example

```ts
merge({ a: 1 }, { b: 2 }) // returns { a: 1, b: 2 }
merge({ a: 'hello' }, { b: 'world' }) // returns { a: 'hello', b: 'world' }
merge({ a: 1 }, { a: 2 }) // returns { a: 2 }
merge({ a: 1 }, { a: 2 }, { a: 3 }) // returns { a: 3 }
```

## Call Signature

> **merge**\<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>(`obj1`, `obj2`, `obj3`, `obj4`, `obj5`, `obj6`, `obj7`): [`Merge7`](/xdash/api/TypeAlias.Merge7.md)\<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

Defined in: [src/object.ts:91](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/object.ts#L91)

Merges objects together.

### Type Parameters

#### T

`T`

#### U

`U`

#### V

`V`

#### W

`W`

#### X

`X`

#### Y

`Y`

#### Z

`Z`

### Parameters

#### obj1

`T`

#### obj2

`U`

#### obj3

`V`

#### obj4

`W`

#### obj5

`X`

#### obj6

`Y`

#### obj7

`Z`

### Returns

[`Merge7`](/xdash/api/TypeAlias.Merge7.md)\<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

the merged object

### Example

```ts
merge({ a: 1 }, { b: 2 }) // returns { a: 1, b: 2 }
merge({ a: 'hello' }, { b: 'world' }) // returns { a: 'hello', b: 'world' }
merge({ a: 1 }, { a: 2 }) // returns { a: 2 }
merge({ a: 1 }, { a: 2 }, { a: 3 }) // returns { a: 3 }
```
