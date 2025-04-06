[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / Chain

# Class: Chain\<I, O\>

Defined in: [src/chain.ts:7](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L7)

Chain class to be used in a pipeline.

## Example

```ts
chain(5).pipe(add, 5).pipe(multiply, 2).unwrap() // returns 20
```

## Type Parameters

### I

`I`

### O

`O`

## Constructors

### Constructor

> **new Chain**\<`I`, `O`\>(`initialValue`, `ops`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `O`\>

Defined in: [src/chain.ts:8](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L8)

#### Parameters

##### initialValue

`I`

##### ops

(`value`) => `any`[] = `[]`

#### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `O`\>

## Methods

### pipe()

#### Call Signature

> **pipe**\<`P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `Z`\>

Defined in: [src/chain.ts:15](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L15)

Pipes a value through a series of functions.

##### Type Parameters

###### P

`P`

###### Q

`Q`

###### R

`R`

###### S

`S`

###### T

`T`

###### U

`U`

###### V

`V`

###### W

`W`

###### X

`X`

###### Y

`Y`

###### Z

`Z`

##### Parameters

###### op1

(`value`) => `P`

###### op2

(`value`) => `Q`

###### op3

(`value`) => `R`

###### op4

(`value`) => `S`

###### op5

(`value`) => `T`

###### op6

(`value`) => `U`

###### op7

(`value`) => `V`

###### op8

(`value`) => `W`

###### op9

(`value`) => `X`

###### op10

(`value`) => `Y`

###### op11

(`value`) => `Z`

##### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `Z`\>

a new chain with the result of the operations

#### Call Signature

> **pipe**\<`P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `Y`\>

Defined in: [src/chain.ts:16](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L16)

Pipes a value through a series of functions.

##### Type Parameters

###### P

`P`

###### Q

`Q`

###### R

`R`

###### S

`S`

###### T

`T`

###### U

`U`

###### V

`V`

###### W

`W`

###### X

`X`

###### Y

`Y`

##### Parameters

###### op1

(`value`) => `P`

###### op2

(`value`) => `Q`

###### op3

(`value`) => `R`

###### op4

(`value`) => `S`

###### op5

(`value`) => `T`

###### op6

(`value`) => `U`

###### op7

(`value`) => `V`

###### op8

(`value`) => `W`

###### op9

(`value`) => `X`

###### op10

(`value`) => `Y`

##### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `Y`\>

a new chain with the result of the operations

#### Call Signature

> **pipe**\<`P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `X`\>

Defined in: [src/chain.ts:17](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L17)

Pipes a value through a series of functions.

##### Type Parameters

###### P

`P`

###### Q

`Q`

###### R

`R`

###### S

`S`

###### T

`T`

###### U

`U`

###### V

`V`

###### W

`W`

###### X

`X`

##### Parameters

###### op1

(`value`) => `P`

###### op2

(`value`) => `Q`

###### op3

(`value`) => `R`

###### op4

(`value`) => `S`

###### op5

(`value`) => `T`

###### op6

(`value`) => `U`

###### op7

(`value`) => `V`

###### op8

(`value`) => `W`

###### op9

(`value`) => `X`

##### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `X`\>

a new chain with the result of the operations

#### Call Signature

> **pipe**\<`P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `W`\>

Defined in: [src/chain.ts:18](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L18)

Pipes a value through a series of functions.

##### Type Parameters

###### P

`P`

###### Q

`Q`

###### R

`R`

###### S

`S`

###### T

`T`

###### U

`U`

###### V

`V`

###### W

`W`

##### Parameters

###### op1

(`value`) => `P`

###### op2

(`value`) => `Q`

###### op3

(`value`) => `R`

###### op4

(`value`) => `S`

###### op5

(`value`) => `T`

###### op6

(`value`) => `U`

###### op7

(`value`) => `V`

###### op8

(`value`) => `W`

##### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `W`\>

a new chain with the result of the operations

#### Call Signature

> **pipe**\<`P`, `Q`, `R`, `S`, `T`, `U`, `V`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `V`\>

Defined in: [src/chain.ts:19](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L19)

Pipes a value through a series of functions.

##### Type Parameters

###### P

`P`

###### Q

`Q`

###### R

`R`

###### S

`S`

###### T

`T`

###### U

`U`

###### V

`V`

##### Parameters

###### op1

(`value`) => `P`

###### op2

(`value`) => `Q`

###### op3

(`value`) => `R`

###### op4

(`value`) => `S`

###### op5

(`value`) => `T`

###### op6

(`value`) => `U`

###### op7

(`value`) => `V`

##### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `V`\>

a new chain with the result of the operations

#### Call Signature

> **pipe**\<`P`, `Q`, `R`, `S`, `T`, `U`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `U`\>

Defined in: [src/chain.ts:20](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L20)

Pipes a value through a series of functions.

##### Type Parameters

###### P

`P`

###### Q

`Q`

###### R

`R`

###### S

`S`

###### T

`T`

###### U

`U`

##### Parameters

###### op1

(`value`) => `P`

###### op2

(`value`) => `Q`

###### op3

(`value`) => `R`

###### op4

(`value`) => `S`

###### op5

(`value`) => `T`

###### op6

(`value`) => `U`

##### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `U`\>

a new chain with the result of the operations

#### Call Signature

> **pipe**\<`P`, `Q`, `R`, `S`, `T`\>(`op1`, `op2`, `op3`, `op4`, `op5`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `T`\>

Defined in: [src/chain.ts:21](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L21)

Pipes a value through a series of functions.

##### Type Parameters

###### P

`P`

###### Q

`Q`

###### R

`R`

###### S

`S`

###### T

`T`

##### Parameters

###### op1

(`value`) => `P`

###### op2

(`value`) => `Q`

###### op3

(`value`) => `R`

###### op4

(`value`) => `S`

###### op5

(`value`) => `T`

##### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `T`\>

a new chain with the result of the operations

#### Call Signature

> **pipe**\<`P`, `Q`, `R`, `S`\>(`op1`, `op2`, `op3`, `op4`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `S`\>

Defined in: [src/chain.ts:22](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L22)

Pipes a value through a series of functions.

##### Type Parameters

###### P

`P`

###### Q

`Q`

###### R

`R`

###### S

`S`

##### Parameters

###### op1

(`value`) => `P`

###### op2

(`value`) => `Q`

###### op3

(`value`) => `R`

###### op4

(`value`) => `S`

##### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `S`\>

a new chain with the result of the operations

#### Call Signature

> **pipe**\<`P`, `Q`, `R`\>(`op1`, `op2`, `op3`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `R`\>

Defined in: [src/chain.ts:23](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L23)

Pipes a value through a series of functions.

##### Type Parameters

###### P

`P`

###### Q

`Q`

###### R

`R`

##### Parameters

###### op1

(`value`) => `P`

###### op2

(`value`) => `Q`

###### op3

(`value`) => `R`

##### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `R`\>

a new chain with the result of the operations

#### Call Signature

> **pipe**\<`P`, `Q`\>(`op1`, `op2`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `Q`\>

Defined in: [src/chain.ts:24](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L24)

Pipes a value through a series of functions.

##### Type Parameters

###### P

`P`

###### Q

`Q`

##### Parameters

###### op1

(`value`) => `P`

###### op2

(`value`) => `Q`

##### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `Q`\>

a new chain with the result of the operations

#### Call Signature

> **pipe**\<`P`\>(`op1`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `P`\>

Defined in: [src/chain.ts:25](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L25)

Pipes a value through a series of functions.

##### Type Parameters

###### P

`P`

##### Parameters

###### op1

(`value`) => `P`

##### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `P`\>

a new chain with the result of the operations

***

### unwrap()

> **unwrap**(): `O`

Defined in: [src/chain.ts:37](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L37)

Executes the pipeline and returns the final value.

#### Returns

`O`

The final value after all operations have been applied.
