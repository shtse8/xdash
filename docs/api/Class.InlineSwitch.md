[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / InlineSwitch

# Class: InlineSwitch\<T, R, E\>

Defined in: [src/switch.ts:4](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/switch.ts#L4)

## Type Parameters

### T

`T`

### R

`R` = `never`

### E

`E` = `never`

## Constructors

### Constructor

> **new InlineSwitch**\<`T`, `R`, `E`\>(`value`): [`InlineSwitch`](/xdash/api/Variable.default.md#inlineswitch)\<`T`, `R`, `E`\>

Defined in: [src/switch.ts:8](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/switch.ts#L8)

#### Parameters

##### value

`T`

#### Returns

[`InlineSwitch`](/xdash/api/Variable.default.md#inlineswitch)\<`T`, `R`, `E`\>

## Methods

### case()

> **case**\<`U`\>(`caseValue`, `result`): [`InlineSwitch`](/xdash/api/Variable.default.md#inlineswitch)\<`T`, `R` \| `U`\>

Defined in: [src/switch.ts:11](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/switch.ts#L11)

#### Type Parameters

##### U

`U`

#### Parameters

##### caseValue

`T`

##### result

() => `U`

#### Returns

[`InlineSwitch`](/xdash/api/Variable.default.md#inlineswitch)\<`T`, `R` \| `U`\>

***

### default()

> **default**\<`U`\>(`result`): `Omit`\<[`InlineSwitch`](/xdash/api/Variable.default.md#inlineswitch)\<`T`, `R`, `U`\>, `"default"`\>

Defined in: [src/switch.ts:18](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/switch.ts#L18)

#### Type Parameters

##### U

`U`

#### Parameters

##### result

() => `U`

#### Returns

`Omit`\<[`InlineSwitch`](/xdash/api/Variable.default.md#inlineswitch)\<`T`, `R`, `U`\>, `"default"`\>

***

### execute()

> **execute**(): `R` \| `E`

Defined in: [src/switch.ts:29](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/switch.ts#L29)

#### Returns

`R` \| `E`
