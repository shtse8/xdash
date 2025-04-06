[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / isKeyOf

# Function: isKeyOf()

> **isKeyOf**\<`T`\>(`value`, `obj`): `value is keyof T`

Defined in: [src/typed.ts:143](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/typed.ts#L143)

Determines if a value is a key of an object.

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### value

`unknown`

value to check

### obj

`T`

object to check if the value is a key of

## Returns

`value is keyof T`

true if the value is a key of the object, false otherwise
