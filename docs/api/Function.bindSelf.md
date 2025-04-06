[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / bindSelf

# Function: bindSelf()

> **bindSelf**\<`T`\>(`thisArg`): `T`

Defined in: [src/function.ts:291](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/function.ts#L291)

Creates a proxy for an object that ensures all its function properties are bound to the object itself.
This can be particularly useful when you want to pass an object's method as a callback without losing its context.

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### thisArg

`T`

The object for which to bind all its function properties.

## Returns

`T`

A proxy of the same type as `thisArg` where every function property, when accessed,
             is automatically bound to `thisArg`. Non-function properties are accessed as usual.

## Example

```typescript
class Example {
    constructor(public name: string) {}
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}

const example = new Example('World');
const boundExample = bindSelf(example);
const greet = boundExample.greet;
greet(); // Logs: "Hello, World!" - `this` context is preserved due to binding.
```

Note: This function uses JavaScript's Proxy and Reflect APIs to intercept property accesses
and bind functions dynamically. It works at runtime and relies on TypeScript for type safety only.
Be cautious that the use of `as T` for the return type is a type assertion that assumes the proxy
maintains the same type interface as `thisArg`, which TypeScript cannot verify for dynamic property access.
