[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / upperCase

# Function: upperCase()

> **upperCase**(`str`): `string`

Defined in: [src/string.ts:128](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/string.ts#L128)

Converts a string to upper case

## Parameters

### str

`string`

string to convert

## Returns

`string`

the string in upper case

## Example

```ts
upperCase('foo') // returns 'FOO'
upperCase('FOO') // returns 'FOO'
upperCase('123') // returns '123'
upperCase('') // returns ''
upperCase('foo-bar') // returns 'FOO-BAR'
```
