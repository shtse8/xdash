[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / inlineSwitch

# Function: inlineSwitch()

> **inlineSwitch**\<`T`\>(`value`): [`InlineSwitch`](/xdash/api/Variable.default.md#inlineswitch)\<`T`, `never`, `never`\>

Defined in: [src/switch.ts:80](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/switch.ts#L80)

Creates a new InlineSwitch instance for given value. This utility function
facilitates a fluent interface for conditional logic based on the value provided,
allowing for a more readable and expressive alternative to traditional switch
statements or if-else chains. The InlineSwitch class supports adding cases
with `.case()` method calls and optionally setting a default case with `.default()`.
The `.execute()` method evaluates the cases against the value and returns the
result of the matching case or the default case, if provided.

## Type Parameters

### T

`T`

## Parameters

### value

`T`

The value to be matched against the defined cases in the InlineSwitch instance.

## Returns

[`InlineSwitch`](/xdash/api/Variable.default.md#inlineswitch)\<`T`, `never`, `never`\>

A new instance of InlineSwitch configured with the provided value.

## Examples

```ts
// Using inlineSwitch to determine fruit colors.
const fruitColor = inlineSwitch('apple')
  .case('apple', () => 'red')
  .case('banana', () => 'yellow')
  .case('orange', () => 'orange')
  .default(() => 'unknown color')
  .execute();

console.log(fruitColor); // Outputs: 'red'
```

```ts
// Using inlineSwitch with mixed return types and a default case.
const processedValue = inlineSwitch('kiwi')
  .case('apple', () => 42)
  .case('banana', () => true)
  .case('orange', () => 'orange')
  .default(() => null)
  .execute();

console.log(processedValue); // Outputs: null
```
