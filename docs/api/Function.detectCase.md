[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / detectCase

# Function: detectCase()

> **detectCase**(`str`): `"camel"` \| `"kebab"` \| `"screaming-kebab"` \| `"snake"` \| `"screaming-snake"` \| `"pascal"` \| `"lower"` \| `"upper"` \| `"mixed"` \| `"none"`

Defined in: [src/string.ts:149](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/string.ts#L149)

Detects the case of a string

## Parameters

### str

`string`

string to detect the case of

## Returns

`"camel"` \| `"kebab"` \| `"screaming-kebab"` \| `"snake"` \| `"screaming-snake"` \| `"pascal"` \| `"lower"` \| `"upper"` \| `"mixed"` \| `"none"`

the detected case of the string

## Example

```ts
detectCase('fooBar') // returns 'camel'
detectCase('foo-bar') // returns 'kebab'
detectCase('FOO-BAR') // returns 'screaming-kebab'
detectCase('foo_bar') // returns 'snake'
detectCase('FOO_BAR') // returns 'screaming-snake'
detectCase('FooBar') // returns 'pascal'
detectCase('FOO BAR') // returns 'upper'
detectCase('foo bar') // returns 'lower'
detectCase('fooBar-baz') // returns 'mixed
detectCase('foo BAR') // returns 'mixed
detectCase('') // returns 'none'
```
