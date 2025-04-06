[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / bind

# Function: bind()

> **bind**\<`Args`, `T`, `U`\>(`fn`, `thisArg`): (...`args`) => `U`

Defined in: [src/function.ts:259](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/function.ts#L259)

Binds a function to a context.

## Type Parameters

### Args

`Args` *extends* readonly `unknown`[]

### T

`T`

### U

`U`

## Parameters

### fn

(`this`, ...`args`) => `U`

function to bind

### thisArg

`T`

context to bind the function to

## Returns

a function that is bound to the context

> (...`args`): `U`

### Parameters

#### args

...`Args`

### Returns

`U`

## Example

```ts
const obj = {
 name: 'foo',
 greet() {
  return `Hello, ${this.name}!`;
 }
}
const greet = bind(obj.greet, obj);
greet() // returns 'Hello, foo!'
const obj2 = { name: 'bar' };
const greet2 = bind(obj.greet, obj2);
greet2() // returns 'Hello, bar!'
```
