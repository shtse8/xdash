[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / capitalize

# Function: capitalize()

> **capitalize**(`str`): `string`

Defined in: [src/string.ts:11](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/string.ts#L11)

Capitalizes the first letter of a string

## Parameters

### str

`string`

string to capitalize

## Returns

`string`

the string with the first letter capitalized

## Example

```ts
capitalize('foo') // returns 'Foo'
capitalize('FOO') // returns 'FOO'
capitalize('123') // returns '123'
capitalize('') // returns ''
```
