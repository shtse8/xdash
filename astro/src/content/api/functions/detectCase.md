**xdash** • [Readme](../README.md) \| [API](../globals.md)

***

[xdash](../README.md) / detectCase

# Function: detectCase()

> **detectCase**(`str`): `"camel"` \| `"kebab"` \| `"screaming-kebab"` \| `"snake"` \| `"screaming-snake"` \| `"pascal"` \| `"lower"` \| `"upper"` \| `"mixed"` \| `"none"`

Detects the case of a string

## Parameters

• **str**: `string`

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

## Source

[str.ts:149](https://github.com/shtse8/xdash/blob/55c7e43/src/str.ts#L149)
