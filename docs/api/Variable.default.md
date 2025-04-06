[**xdash API Reference v0.5.12**](index.md)

***

[xdash API Reference](/xdash/api/index.md) / default

# Variable: default

> **default**: `object`

Defined in: [src/index.ts:25](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/index.ts#L25)

## Type declaration

### Cache\<T\>

Defined in: [src/cache.ts:58](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/cache.ts#L58)

A class that caches a value

#### Type Parameters

##### T

`T`

#### Constructors

##### Constructor

> **new Cache**\<`T`\>(`options`?): [`Cache`](/xdash/api/Variable.default.md#cache)\<`T`\>

Defined in: [src/cache.ts:62](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/cache.ts#L62)

###### Parameters

###### options?

[`CacheOptions`](/xdash/api/Interface.CacheOptions.md)

###### Returns

[`Cache`](/xdash/api/Variable.default.md#cache)\<`T`\>

#### Methods

##### get()

> **get**(): `undefined` \| `NonNullable`\<`T`\>

Defined in: [src/cache.ts:91](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/cache.ts#L91)

###### Returns

`undefined` \| `NonNullable`\<`T`\>

##### invalidate()

> **invalidate**(): `void`

Defined in: [src/cache.ts:86](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/cache.ts#L86)

###### Returns

`void`

##### run()

> **run**(`fn`): `Promise`\<`T`\>

Defined in: [src/cache.ts:72](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/cache.ts#L72)

###### Parameters

###### fn

() => `Promise`\<`T`\>

###### Returns

`Promise`\<`T`\>

##### set()

> **set**(`value`): `void`

Defined in: [src/cache.ts:67](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/cache.ts#L67)

###### Parameters

###### value

`T`

###### Returns

`void`

### Chain\<I, O\>

Defined in: [src/chain.ts:7](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L7)

Chain class to be used in a pipeline.

#### Example

```ts
chain(5).pipe(add, 5).pipe(multiply, 2).unwrap() // returns 20
```

#### Type Parameters

##### I

`I`

##### O

`O`

#### Constructors

##### Constructor

> **new Chain**\<`I`, `O`\>(`initialValue`, `ops`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `O`\>

Defined in: [src/chain.ts:8](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L8)

###### Parameters

###### initialValue

`I`

###### ops

(`value`) => `any`[] = `[]`

###### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `O`\>

#### Methods

##### pipe()

###### Call Signature

> **pipe**\<`P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `Z`\>

Defined in: [src/chain.ts:15](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L15)

Pipes a value through a series of functions.

###### Type Parameters

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

###### Parameters

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

###### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `Z`\>

a new chain with the result of the operations

###### Call Signature

> **pipe**\<`P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `Y`\>

Defined in: [src/chain.ts:16](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L16)

Pipes a value through a series of functions.

###### Type Parameters

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

###### Parameters

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

###### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `Y`\>

a new chain with the result of the operations

###### Call Signature

> **pipe**\<`P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `X`\>

Defined in: [src/chain.ts:17](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L17)

Pipes a value through a series of functions.

###### Type Parameters

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

###### Parameters

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

###### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `X`\>

a new chain with the result of the operations

###### Call Signature

> **pipe**\<`P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `W`\>

Defined in: [src/chain.ts:18](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L18)

Pipes a value through a series of functions.

###### Type Parameters

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

###### Parameters

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

###### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `W`\>

a new chain with the result of the operations

###### Call Signature

> **pipe**\<`P`, `Q`, `R`, `S`, `T`, `U`, `V`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `V`\>

Defined in: [src/chain.ts:19](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L19)

Pipes a value through a series of functions.

###### Type Parameters

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

###### Parameters

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

###### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `V`\>

a new chain with the result of the operations

###### Call Signature

> **pipe**\<`P`, `Q`, `R`, `S`, `T`, `U`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `U`\>

Defined in: [src/chain.ts:20](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L20)

Pipes a value through a series of functions.

###### Type Parameters

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

###### Parameters

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

###### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `U`\>

a new chain with the result of the operations

###### Call Signature

> **pipe**\<`P`, `Q`, `R`, `S`, `T`\>(`op1`, `op2`, `op3`, `op4`, `op5`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `T`\>

Defined in: [src/chain.ts:21](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L21)

Pipes a value through a series of functions.

###### Type Parameters

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

###### Parameters

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

###### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `T`\>

a new chain with the result of the operations

###### Call Signature

> **pipe**\<`P`, `Q`, `R`, `S`\>(`op1`, `op2`, `op3`, `op4`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `S`\>

Defined in: [src/chain.ts:22](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L22)

Pipes a value through a series of functions.

###### Type Parameters

###### P

`P`

###### Q

`Q`

###### R

`R`

###### S

`S`

###### Parameters

###### op1

(`value`) => `P`

###### op2

(`value`) => `Q`

###### op3

(`value`) => `R`

###### op4

(`value`) => `S`

###### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `S`\>

a new chain with the result of the operations

###### Call Signature

> **pipe**\<`P`, `Q`, `R`\>(`op1`, `op2`, `op3`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `R`\>

Defined in: [src/chain.ts:23](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L23)

Pipes a value through a series of functions.

###### Type Parameters

###### P

`P`

###### Q

`Q`

###### R

`R`

###### Parameters

###### op1

(`value`) => `P`

###### op2

(`value`) => `Q`

###### op3

(`value`) => `R`

###### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `R`\>

a new chain with the result of the operations

###### Call Signature

> **pipe**\<`P`, `Q`\>(`op1`, `op2`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `Q`\>

Defined in: [src/chain.ts:24](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L24)

Pipes a value through a series of functions.

###### Type Parameters

###### P

`P`

###### Q

`Q`

###### Parameters

###### op1

(`value`) => `P`

###### op2

(`value`) => `Q`

###### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `Q`\>

a new chain with the result of the operations

###### Call Signature

> **pipe**\<`P`\>(`op1`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `P`\>

Defined in: [src/chain.ts:25](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L25)

Pipes a value through a series of functions.

###### Type Parameters

###### P

`P`

###### Parameters

###### op1

(`value`) => `P`

###### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`I`, `P`\>

a new chain with the result of the operations

##### unwrap()

> **unwrap**(): `O`

Defined in: [src/chain.ts:37](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/chain.ts#L37)

Executes the pipeline and returns the final value.

###### Returns

`O`

The final value after all operations have been applied.

### InlineSwitch\<T, R, E\>

Defined in: [src/switch.ts:4](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/switch.ts#L4)

#### Type Parameters

##### T

`T`

##### R

`R` = `never`

##### E

`E` = `never`

#### Constructors

##### Constructor

> **new InlineSwitch**\<`T`, `R`, `E`\>(`value`): [`InlineSwitch`](/xdash/api/Variable.default.md#inlineswitch)\<`T`, `R`, `E`\>

Defined in: [src/switch.ts:8](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/switch.ts#L8)

###### Parameters

###### value

`T`

###### Returns

[`InlineSwitch`](/xdash/api/Variable.default.md#inlineswitch)\<`T`, `R`, `E`\>

#### Methods

##### case()

> **case**\<`U`\>(`caseValue`, `result`): [`InlineSwitch`](/xdash/api/Variable.default.md#inlineswitch)\<`T`, `R` \| `U`\>

Defined in: [src/switch.ts:11](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/switch.ts#L11)

###### Type Parameters

###### U

`U`

###### Parameters

###### caseValue

`T`

###### result

() => `U`

###### Returns

[`InlineSwitch`](/xdash/api/Variable.default.md#inlineswitch)\<`T`, `R` \| `U`\>

##### default()

> **default**\<`U`\>(`result`): `Omit`\<[`InlineSwitch`](/xdash/api/Variable.default.md#inlineswitch)\<`T`, `R`, `U`\>, `"default"`\>

Defined in: [src/switch.ts:18](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/switch.ts#L18)

###### Type Parameters

###### U

`U`

###### Parameters

###### result

() => `U`

###### Returns

`Omit`\<[`InlineSwitch`](/xdash/api/Variable.default.md#inlineswitch)\<`T`, `R`, `U`\>, `"default"`\>

##### execute()

> **execute**(): `R` \| `E`

Defined in: [src/switch.ts:29](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/switch.ts#L29)

###### Returns

`R` \| `E`

### Invalidator

Defined in: [src/cache.ts:8](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/cache.ts#L8)

A class that emits an event when invalidated

#### Extends

- `EventEmitter`

#### Constructors

##### Constructor

> **new Invalidator**(`options`?): [`Invalidator`](/xdash/api/Variable.default.md#invalidator)

Defined in: node\_modules/@types/node/events.d.ts:127

###### Parameters

###### options?

`EventEmitterOptions`

###### Returns

[`Invalidator`](/xdash/api/Variable.default.md#invalidator)

###### Inherited from

`EventEmitter.constructor`

#### Properties

##### captureRejections

> `static` **captureRejections**: `boolean`

Defined in: node\_modules/@types/node/events.d.ts:426

Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Change the default `captureRejections` option on all new `EventEmitter` objects.

###### Since

v13.4.0, v12.16.0

###### Inherited from

`EventEmitter.captureRejections`

##### captureRejectionSymbol

> `readonly` `static` **captureRejectionSymbol**: *typeof* [`captureRejectionSymbol`](/xdash/api/Variable.default.md#invalidatorcapturerejectionsymbol)

Defined in: node\_modules/@types/node/events.d.ts:419

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

###### Since

v13.4.0, v12.16.0

###### Inherited from

`EventEmitter.captureRejectionSymbol`

##### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

Defined in: node\_modules/@types/node/events.d.ts:463

By default, a maximum of `10` listeners can be registered for any single
event. This limit can be changed for individual `EventEmitter` instances
using the `emitter.setMaxListeners(n)` method. To change the default
for _all_`EventEmitter` instances, the `events.defaultMaxListeners`property can be used. If this value is not a positive number, a `RangeError`is thrown.

Take caution when setting the `events.defaultMaxListeners` because the
change affects _all_`EventEmitter` instances, including those created before
the change is made. However, calling `emitter.setMaxListeners(n)` still has
precedence over `events.defaultMaxListeners`.

This is not a hard limit. The `EventEmitter` instance will allow
more listeners to be added but will output a trace warning to stderr indicating
that a "possible EventEmitter memory leak" has been detected. For any single`EventEmitter`, the `emitter.getMaxListeners()` and `emitter.setMaxListeners()`methods can be used to
temporarily avoid this warning:

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.setMaxListeners(emitter.getMaxListeners() + 1);
emitter.once('event', () => {
  // do stuff
  emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
});
```

The `--trace-warnings` command-line flag can be used to display the
stack trace for such warnings.

The emitted warning can be inspected with `process.on('warning')` and will
have the additional `emitter`, `type`, and `count` properties, referring to
the event emitter instance, the event's name and the number of attached
listeners, respectively.
Its `name` property is set to `'MaxListenersExceededWarning'`.

###### Since

v0.11.2

###### Inherited from

`EventEmitter.defaultMaxListeners`

##### errorMonitor

> `readonly` `static` **errorMonitor**: *typeof* [`errorMonitor`](/xdash/api/Variable.default.md#invalidatorerrormonitor)

Defined in: node\_modules/@types/node/events.d.ts:412

This symbol shall be used to install a listener for only monitoring `'error'`events. Listeners installed using this symbol are called before the regular`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an`'error'` event is emitted. Therefore, the process will still crash if no
regular `'error'` listener is installed.

###### Since

v13.6.0, v12.17.0

###### Inherited from

`EventEmitter.errorMonitor`

#### Methods

##### \[captureRejectionSymbol\]()?

> `optional` **\[captureRejectionSymbol\]**\<`K`\>(`error`, `event`, ...`args`): `void`

Defined in: node\_modules/@types/node/events.d.ts:129

###### Type Parameters

###### K

`K`

###### Parameters

###### error

`Error`

###### event

`string` | `symbol`

###### args

...`AnyRest`

###### Returns

`void`

###### Inherited from

`EventEmitter.[captureRejectionSymbol]`

##### addListener()

> **addListener**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/events.d.ts:562

Alias for `emitter.on(eventName, listener)`.

###### Type Parameters

###### K

`K`

###### Parameters

###### eventName

`string` | `symbol`

###### listener

(...`args`) => `void`

###### Returns

`this`

###### Since

v0.1.26

###### Inherited from

`EventEmitter.addListener`

##### emit()

> **emit**\<`K`\>(`eventName`, ...`args`): `boolean`

Defined in: node\_modules/@types/node/events.d.ts:824

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

###### Type Parameters

###### K

`K`

###### Parameters

###### eventName

`string` | `symbol`

###### args

...`AnyRest`

###### Returns

`boolean`

###### Since

v0.1.26

###### Inherited from

`EventEmitter.emit`

##### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Defined in: node\_modules/@types/node/events.d.ts:887

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

###### Returns

(`string` \| `symbol`)[]

###### Since

v6.0.0

###### Inherited from

`EventEmitter.eventNames`

##### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: node\_modules/@types/node/events.d.ts:739

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](/xdash/api/Variable.default.md#invalidatordefaultmaxlisteners).

###### Returns

`number`

###### Since

v1.0.0

###### Inherited from

`EventEmitter.getMaxListeners`

##### invalidate()

> **invalidate**(): `void`

Defined in: [src/cache.ts:9](https://github.com/shtse8/xdash/blob/ed88c6e7ad3be9e5e1e06776f9ca07ed27d97c13/src/cache.ts#L9)

###### Returns

`void`

##### listenerCount()

> **listenerCount**\<`K`\>(`eventName`, `listener`?): `number`

Defined in: node\_modules/@types/node/events.d.ts:833

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

###### Type Parameters

###### K

`K`

###### Parameters

###### eventName

The name of the event being listened for

`string` | `symbol`

###### listener?

`Function`

The event handler function

###### Returns

`number`

###### Since

v3.2.0

###### Inherited from

`EventEmitter.listenerCount`

##### listeners()

> **listeners**\<`K`\>(`eventName`): `Function`[]

Defined in: node\_modules/@types/node/events.d.ts:752

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

###### Type Parameters

###### K

`K`

###### Parameters

###### eventName

`string` | `symbol`

###### Returns

`Function`[]

###### Since

v0.1.26

###### Inherited from

`EventEmitter.listeners`

##### off()

> **off**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/events.d.ts:712

Alias for `emitter.removeListener()`.

###### Type Parameters

###### K

`K`

###### Parameters

###### eventName

`string` | `symbol`

###### listener

(...`args`) => `void`

###### Returns

`this`

###### Since

v10.0.0

###### Inherited from

`EventEmitter.off`

##### on()

> **on**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/events.d.ts:594

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Type Parameters

###### K

`K`

###### Parameters

###### eventName

The name of the event.

`string` | `symbol`

###### listener

(...`args`) => `void`

The callback function

###### Returns

`this`

###### Since

v0.1.101

###### Inherited from

`EventEmitter.on`

##### once()

> **once**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/events.d.ts:624

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

###### Type Parameters

###### K

`K`

###### Parameters

###### eventName

The name of the event.

`string` | `symbol`

###### listener

(...`args`) => `void`

The callback function

###### Returns

`this`

###### Since

v0.3.0

###### Inherited from

`EventEmitter.once`

##### prependListener()

> **prependListener**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/events.d.ts:851

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Type Parameters

###### K

`K`

###### Parameters

###### eventName

The name of the event.

`string` | `symbol`

###### listener

(...`args`) => `void`

The callback function

###### Returns

`this`

###### Since

v6.0.0

###### Inherited from

`EventEmitter.prependListener`

##### prependOnceListener()

> **prependOnceListener**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/events.d.ts:867

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Type Parameters

###### K

`K`

###### Parameters

###### eventName

The name of the event.

`string` | `symbol`

###### listener

(...`args`) => `void`

The callback function

###### Returns

`this`

###### Since

v6.0.0

###### Inherited from

`EventEmitter.prependOnceListener`

##### rawListeners()

> **rawListeners**\<`K`\>(`eventName`): `Function`[]

Defined in: node\_modules/@types/node/events.d.ts:783

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

###### Type Parameters

###### K

`K`

###### Parameters

###### eventName

`string` | `symbol`

###### Returns

`Function`[]

###### Since

v9.4.0

###### Inherited from

`EventEmitter.rawListeners`

##### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Defined in: node\_modules/@types/node/events.d.ts:723

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

###### event?

`string` | `symbol`

###### Returns

`this`

###### Since

v0.1.26

###### Inherited from

`EventEmitter.removeAllListeners`

##### removeListener()

> **removeListener**\<`K`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/@types/node/events.d.ts:707

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Type Parameters

###### K

`K`

###### Parameters

###### eventName

`string` | `symbol`

###### listener

(...`args`) => `void`

###### Returns

`this`

###### Since

v0.1.26

###### Inherited from

`EventEmitter.removeListener`

##### setMaxListeners()

> **setMaxListeners**(`n`): `this`

Defined in: node\_modules/@types/node/events.d.ts:733

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

###### Parameters

###### n

`number`

###### Returns

`this`

###### Since

v0.3.5

###### Inherited from

`EventEmitter.setMaxListeners`

##### addAbortListener()

> `static` **addAbortListener**(`signal`, `resource`): `Disposable`

Defined in: node\_modules/@types/node/events.d.ts:404

**`Experimental`**

Listens once to the `abort` event on the provided `signal`.

Listening to the `abort` event on abort signals is unsafe and may
lead to resource leaks since another third party with the signal can
call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
this since it would violate the web standard. Additionally, the original
API makes it easy to forget to remove listeners.

This API allows safely using `AbortSignal`s in Node.js APIs by solving these
two issues by listening to the event such that `stopImmediatePropagation` does
not prevent the listener from running.

Returns a disposable so that it may be unsubscribed from more easily.

```js
import { addAbortListener } from 'node:events';

function example(signal) {
  let disposable;
  try {
    signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
    disposable = addAbortListener(signal, (e) => {
      // Do something when signal is aborted.
    });
  } finally {
    disposable?.[Symbol.dispose]();
  }
}
```

###### Parameters

###### signal

`AbortSignal`

###### resource

(`event`) => `void`

###### Returns

`Disposable`

Disposable that removes the `abort` listener.

###### Since

v20.5.0

###### Inherited from

`EventEmitter.addAbortListener`

##### getEventListeners()

> `static` **getEventListeners**(`emitter`, `name`): `Function`[]

Defined in: node\_modules/@types/node/events.d.ts:325

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

###### Parameters

###### emitter

`EventEmitter`\<`DefaultEventMap`\> | `_DOMEventTarget`

###### name

`string` | `symbol`

###### Returns

`Function`[]

###### Since

v15.2.0, v14.17.0

###### Inherited from

`EventEmitter.getEventListeners`

##### getMaxListeners()

> `static` **getMaxListeners**(`emitter`): `number`

Defined in: node\_modules/@types/node/events.d.ts:354

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

###### Parameters

###### emitter

`EventEmitter`\<`DefaultEventMap`\> | `_DOMEventTarget`

###### Returns

`number`

###### Since

v19.9.0

###### Inherited from

`EventEmitter.getMaxListeners`

##### ~~listenerCount()~~

> `static` **listenerCount**(`emitter`, `eventName`): `number`

Defined in: node\_modules/@types/node/events.d.ts:297

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

###### Parameters

###### emitter

`EventEmitter`

The emitter to query

###### eventName

The event name

`string` | `symbol`

###### Returns

`number`

###### Since

v0.9.12

###### Deprecated

Since v3.2.0 - Use `listenerCount` instead.

###### Inherited from

`EventEmitter.listenerCount`

##### on()

> `static` **on**(`emitter`, `eventName`, `options`?): `AsyncIterableIterator`\<`any`\>

Defined in: node\_modules/@types/node/events.d.ts:275

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

###### Parameters

###### emitter

`EventEmitter`

###### eventName

`string`

The name of the event being listened for

###### options?

`StaticEventEmitterOptions`

###### Returns

`AsyncIterableIterator`\<`any`\>

that iterates `eventName` events emitted by the `emitter`

###### Since

v13.6.0, v12.16.0

###### Inherited from

`EventEmitter.on`

##### once()

###### Call Signature

> `static` **once**(`emitter`, `eventName`, `options`?): `Promise`\<`any`[]\>

Defined in: node\_modules/@types/node/events.d.ts:210

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

###### Parameters

###### emitter

`_NodeEventTarget`

###### eventName

`string` | `symbol`

###### options?

`StaticEventEmitterOptions`

###### Returns

`Promise`\<`any`[]\>

###### Since

v11.13.0, v10.16.0

###### Inherited from

`EventEmitter.once`

###### Call Signature

> `static` **once**(`emitter`, `eventName`, `options`?): `Promise`\<`any`[]\>

Defined in: node\_modules/@types/node/events.d.ts:215

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

###### Parameters

###### emitter

`_DOMEventTarget`

###### eventName

`string`

###### options?

`StaticEventEmitterOptions`

###### Returns

`Promise`\<`any`[]\>

###### Since

v11.13.0, v10.16.0

###### Inherited from

`EventEmitter.once`

##### setMaxListeners()

> `static` **setMaxListeners**(`n`?, ...`eventTargets`?): `void`

Defined in: node\_modules/@types/node/events.d.ts:369

```js
import { setMaxListeners, EventEmitter } from 'node:events';

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

###### Parameters

###### n?

`number`

A non-negative number. The maximum number of listeners per `EventTarget` event.

###### eventTargets?

...(`EventEmitter`\<`DefaultEventMap`\> \| `_DOMEventTarget`)[]

###### Returns

`void`

###### Since

v15.4.0

###### Inherited from

`EventEmitter.setMaxListeners`

### noop()

> **noop**: () => `void`

Empty function.

#### Returns

`void`

### $op()

> **$op**\<`T`, `Args`, `U`\>(`fn`): (...`args`) => (`value`) => `U`

Converts a function into a format suitable for use with the `Chain.pipe` method.
This allows for the inclusion of additional parameters to the function prior to its
execution in the chain. `$op` effectively curries the provided function, splitting
its application into two steps: first, `$op` is called with the function to adapt,
returning a new function. This returned function is then called with the additional
arguments needed for the adapted function, and it returns yet another function that
expects the current value in the chain as its input. This final function is suitable
for use with `Chain.pipe`, as it matches the expected signature by taking a single
argument—the current value in the chain—and applying the original function to it,
along with the pre-specified additional arguments.

#### Type Parameters

##### T

`T`

##### Args

`Args` *extends* `unknown`[]

##### U

`U`

#### Parameters

##### fn

(`value`, ...`args`) => `U`

The function to be converted. This function can take multiple parameters,
with the first parameter intended to be the current value in the chain, and the
rest being additional arguments provided during the subsequent call.

#### Returns

A function that, when called with additional arguments, returns a new
function designed for the `Chain.pipe` method. This new function takes the current
value in the chain as its sole argument and applies the original function with the
specified additional arguments.

> (...`args`): (`value`) => `U`

##### Parameters

###### args

...`Args`

##### Returns

> (`value`): `U`

###### Parameters

###### value

`T`

###### Returns

`U`

#### Example

```ts
// Assuming `add` and `multiply` are defined as:
// const add = (x, y) => x + y;
// const multiply = (x, y) => x * y;

// Correct usage in a chain
chain(5).pipe($op(add)(5)).pipe($op(multiply)(2)).value(); // returns 20
```

### and()

> **and**\<`Args`\>(...`fns`): (...`args`) => `boolean`

AND operator for functions.

#### Type Parameters

##### Args

`Args` *extends* readonly `unknown`[]

#### Parameters

##### fns

...(...`args`) => `boolean`[]

functions to combine

#### Returns

a function that returns true if all of the input functions return true

> (...`args`): `boolean`

##### Parameters

###### args

...`Args`

##### Returns

`boolean`

#### Example

```ts
const isEven = (n: number) => n % 2 === 0
const isPositive = (n: number) => n > 0
const isPositiveEven = and(isEven, isPositive)
isPositiveEven(2) // returns true
```

### asError()

> **asError**(`value`): `Error`

Converts a value to an error.

#### Parameters

##### value

`unknown`

value to convert

#### Returns

`Error`

the value as an error

### bind()

> **bind**\<`Args`, `T`, `U`\>(`fn`, `thisArg`): (...`args`) => `U`

Binds a function to a context.

#### Type Parameters

##### Args

`Args` *extends* readonly `unknown`[]

##### T

`T`

##### U

`U`

#### Parameters

##### fn

(`this`, ...`args`) => `U`

function to bind

##### thisArg

`T`

context to bind the function to

#### Returns

a function that is bound to the context

> (...`args`): `U`

##### Parameters

###### args

...`Args`

##### Returns

`U`

#### Example

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

### bindSelf()

> **bindSelf**\<`T`\>(`thisArg`): `T`

Creates a proxy for an object that ensures all its function properties are bound to the object itself.
This can be particularly useful when you want to pass an object's method as a callback without losing its context.

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### thisArg

`T`

The object for which to bind all its function properties.

#### Returns

`T`

A proxy of the same type as `thisArg` where every function property, when accessed,
             is automatically bound to `thisArg`. Non-function properties are accessed as usual.

#### Example

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

### cacheFunc()

> **cacheFunc**\<`T`, `Args`\>(`fn`, `options`?): (...`args`) => `Promise`\<`T`\>

Caches the result of a function

#### Type Parameters

##### T

`T`

##### Args

`Args` *extends* readonly `unknown`[]

#### Parameters

##### fn

(...`args`) => `Promise`\<`T`\>

function to cache

##### options?

[`CacheOptions`](/xdash/api/Interface.CacheOptions.md)

cache options

#### Returns

a function that caches the result of the input function

> (...`args`): `Promise`\<`T`\>

##### Parameters

###### args

...`Args`

##### Returns

`Promise`\<`T`\>

#### Examples

```ts
const cachedFunc = cacheFunc(async () => {
 return 'hello'
}, { ttl: 1000 })

console.log(await cachedFunc()) // 'hello'
console.log(await cachedFunc()) // 'hello'
```

```ts
const invalidator = new Invalidator()
const cachedFunc = cacheFunc(async () => {
return 'hello'
}, { ttl: 1000, invalidator })

console.log(await cachedFunc()) // 'hello'
invalidator.invalidate()
console.log(await cachedFunc()) // 'hello'
```

```ts
class Example {
 const fn = cacheFunc(bindSelf(this)._fn)
 async _fn() {
    return 'hello'
 }
}
```

### camelCase()

> **camelCase**(`str`): `string`

Converts a string to camelCase

#### Parameters

##### str

`string`

string to convert

#### Returns

`string`

the string in camelCase

#### Example

```ts
camelCase('foo-bar') // returns 'fooBar'
camelCase('foo_bar') // returns 'fooBar'
camelCase('FooBar') // returns 'fooBar'
camelCase('FOO_BAR') // returns 'fooBar'
```

### capitalize()

> **capitalize**(`str`): `string`

Capitalizes the first letter of a string

#### Parameters

##### str

`string`

string to capitalize

#### Returns

`string`

the string with the first letter capitalized

#### Example

```ts
capitalize('foo') // returns 'Foo'
capitalize('FOO') // returns 'FOO'
capitalize('123') // returns '123'
capitalize('') // returns ''
```

### chain()

> **chain**\<`T`\>(`value`): [`Chain`](/xdash/api/Variable.default.md#chain)\<`T`, `T`\>

Chains a value to be used in a pipeline.

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

value to chain

#### Returns

[`Chain`](/xdash/api/Variable.default.md#chain)\<`T`, `T`\>

a chain of the value

#### Example

```ts
chain(5).pipe(add, 5).pipe(multiply, 2).unwrap() // returns 20
```

### chunk()

> **chunk**\<`T`\>(`arr`, `size`): `T`[][]

Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

#### Type Parameters

##### T

`T`

#### Parameters

##### arr

`T`[]

##### size

`number`

#### Returns

`T`[][]

### compact()

> **compact**\<`T`\>(`arr`): `T`[]

Compacts an array by removing null and undefined values.

#### Type Parameters

##### T

`T`

#### Parameters

##### arr

(`undefined` \| `null` \| `false` \| `0` \| `T`)[]

array to compact

#### Returns

`T`[]

the compacted array

### concat()

> **concat**\<`T`\>(...`arrs`): `T`[]

Concatenates arrays

#### Type Parameters

##### T

`T`

#### Parameters

##### arrs

...`T`[][]

arrays to concatenate

#### Returns

`T`[]

the concatenated array

### debounce()

> **debounce**\<`Args`\>(`fn`, `ms`, `options`): (...`args`) => `void`

Debounces a function.

#### Type Parameters

##### Args

`Args` *extends* readonly `unknown`[]

#### Parameters

##### fn

(...`args`) => `void`

function to debounce

##### ms

`number`

time in milliseconds to debounce the function

##### options

options to configure the debounce

###### immediate?

`boolean` = `false`

whether to run the function immediately

#### Returns

a debounced function

> (...`args`): `void`

##### Parameters

###### args

...`Args`

##### Returns

`void`

#### Examples

```ts
const log = debounce(console.log, 1000)
log('foo') // logs 'foo' after 1 second
log('bar') // logs 'bar' after 1 second, 'foo' is not logged
```

```ts
const log = debounce(console.log, 1000, { immediate: true })
log('foo') // logs 'foo'
log('bar') // does not log 'bar'
log('baz') // does not log 'baz'
setTimeout(() => log('qux'), 1000) // logs 'qux' after 1 second
```

### detectCase()

> **detectCase**(`str`): `"camel"` \| `"kebab"` \| `"screaming-kebab"` \| `"snake"` \| `"screaming-snake"` \| `"pascal"` \| `"lower"` \| `"upper"` \| `"mixed"` \| `"none"`

Detects the case of a string

#### Parameters

##### str

`string`

string to detect the case of

#### Returns

`"camel"` \| `"kebab"` \| `"screaming-kebab"` \| `"snake"` \| `"screaming-snake"` \| `"pascal"` \| `"lower"` \| `"upper"` \| `"mixed"` \| `"none"`

the detected case of the string

#### Example

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

### difference()

> **difference**\<`T`\>(...`values`): `T`[]

Creates an array of unique values that are included in the first given array, but not in the remaining arrays using SameValueZero for equality comparisons.

#### Type Parameters

##### T

`T`

#### Parameters

##### values

...`T`[][]

arrays to exclude

#### Returns

`T`[]

the excluded array

### ensure()

#### Call Signature

> **ensure**\<`T`, `Args`\>(`checkFn`, `errorMsg`?): (`value`, ...`args`) => `T`

Determines if a value is a number.

##### Type Parameters

###### T

`T`

###### Args

`Args` *extends* readonly `unknown`[] = \[\]

##### Parameters

###### checkFn

(`value`, ...`args`) => `value is T`

function to check the value

###### errorMsg?

`string`

error message to throw if the value does not match the expected type

##### Returns

a function that checks if a value matches the expected type

> (`value`, ...`args`): `T`

###### Parameters

###### value

`unknown`

###### args

...`Args`

###### Returns

`T`

##### Example

```ts
const ensureArr = ensure(isArr, 'Value is not an array')
const arr = ensureArr(123) // throws an error
const arr2 = ensureArr([1, 2, 3]) // returns [1, 2, 3]
```

#### Call Signature

> **ensure**\<`T`, `Args`\>(`checkFn`, `errorMsg`?): (`value`, ...`args`) => `T`

Determines if a value is a number.

##### Type Parameters

###### T

`T`

###### Args

`Args` *extends* readonly `unknown`[] = \[\]

##### Parameters

###### checkFn

(`value`, ...`args`) => `boolean`

function to check the value

###### errorMsg?

`string`

error message to throw if the value does not match the expected type

##### Returns

a function that checks if a value matches the expected type

> (`value`, ...`args`): `T`

###### Parameters

###### value

`T`

###### args

...`Args`

###### Returns

`T`

##### Example

```ts
const ensureArr = ensure(isArr, 'Value is not an array')
const arr = ensureArr(123) // throws an error
const arr2 = ensureArr([1, 2, 3]) // returns [1, 2, 3]
```

### entries()

> **entries**\<`K`, `V`\>(`obj`): \[`K`, `V`\][]

Returns an array of key-value pairs from an object.

#### Type Parameters

##### K

`K` *extends* `PropertyKey`

##### V

`V` = `any`

#### Parameters

##### obj

`Record`\<`K`, `V`\>

object to get entries from

#### Returns

\[`K`, `V`\][]

an array of key-value pairs

#### Example

```ts
entries({ a: 1, b: 2 }) // returns [['a', 1], ['b', 2]]
entries({ a: 'hello', b: 'world' }) // returns [['a', 'hello'], ['b', 'world']]
```

### fillKeys()

> **fillKeys**\<`T`, `V`\>(`keys`, `value`): `Record`\<`T`, `V`\>

Fills an array with a value.

#### Type Parameters

##### T

`T` *extends* `PropertyKey`

##### V

`V`

#### Parameters

##### keys

`T`[]

keys to fill

##### value

`V`

value to fill the keys with

#### Returns

`Record`\<`T`, `V`\>

an object with the keys filled with the value

### filter()

> **filter**\<`T`\>(`arr`, `fn`): `T`[]

Removes elements from an array for which the callback returns false.

#### Type Parameters

##### T

`T`

#### Parameters

##### arr

`T`[]

array to filter

##### fn

(`value`, `index`, `array`) => `unknown`

callback to filter the array

#### Returns

`T`[]

the filtered array

### filterKeys()

> **filterKeys**\<`T`\>(`obj`, `fn`): `Record`\<`string`, `T`\>

Filters an object by its keys.

#### Type Parameters

##### T

`T`

#### Parameters

##### obj

`Record`\<`string`, `T`\>

object to filter

##### fn

(`key`, `value`) => `unknown`

callback to filter the object

#### Returns

`Record`\<`string`, `T`\>

the filtered object

#### Example

```ts
filterKeys({ a: 1, b: 2 }, key => key === 'a') // returns { a: 1 }
filterKeys({ a: 'hello', b: 'world' }, key => key === 'a') // returns { a: 'hello' }
```

### filterValues()

> **filterValues**\<`T`\>(`obj`, `fn`): `Record`\<`string`, `T`\>

Filters an object by its values.

#### Type Parameters

##### T

`T`

#### Parameters

##### obj

`Record`\<`string`, `T`\>

object to filter

##### fn

(`value`, `key`) => `unknown`

callback to filter the object

#### Returns

`Record`\<`string`, `T`\>

the filtered object

#### Example

```ts
filterValues({ a: 1, b: 2 }, value => value === 1) // returns { a: 1 }
filterValues({ a: 'hello', b: 'world' }, value => value === 'hello') // returns { a: 'hello' }
filterValues({ a: 1, b: 2 }, value => value === 1 || value === 2) // returns { a: 1, b: 2 }
filterValues({ a: 1, b: 2 }, value => value === 3) // returns {}
```

### first()

> **first**\<`T`\>(`arr`): `T`

Returns the first element of an array

#### Type Parameters

##### T

`T`

#### Parameters

##### arr

`T`[]

array to get the first element from

#### Returns

`T`

the first element of the array

#### Throws

if the array is empty

#### Example

```ts
first([1, 2, 3]) // returns 1
first([]) // throws an error
```

### firstOrDefault()

> **firstOrDefault**\<`T`, `D`\>(`arr`, `defaultValue`): `T` \| `D`

Returns the first element of an array, or a default value if the array is empty.

#### Type Parameters

##### T

`T`

##### D

`D`

#### Parameters

##### arr

`T`[]

array to get the first element from

##### defaultValue

`D`

default value

#### Returns

`T` \| `D`

the first element of the array, or the default value if the array is empty

#### Example

```ts
firstOrDefault([1, 2, 3], 0) // returns 1
firstOrDefault([], 0) // returns 0
```

### flatMap()

> **flatMap**\<`T`, `U`\>(`arr`, `fn`): `U`[]

Flattens an array of arrays.

#### Type Parameters

##### T

`T`

##### U

`U`

#### Parameters

##### arr

`T`[]

array to flatten

##### fn

(`x`) => `U`[]

callback to flatten the array

#### Returns

`U`[]

the flattened array

#### Example

```ts
flat([[1, 2], [3, 4]], x => x) // returns [1, 2, 3, 4]
```

### groupBy()

> **groupBy**\<`T`, `K`\>(`arr`, `key`): `Record`\<`K`, `T`[]\>

Groups an array of values by a key.

#### Type Parameters

##### T

`T`

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### arr

`T`[]

array to group

##### key

(`x`) => `K`

key to group by

#### Returns

`Record`\<`K`, `T`[]\>

the grouped array

#### Example

```ts
groupBy([{ a: 1 }, { a: 2 }, { a: 1 }], x => x.a) // returns { 1: [{ a: 1 }, { a: 1 }], 2: [{ a: 2 }] }
groupBy(['foo', 'bar', 'hello', 'world'], x => x.length) // returns { 3: ['foo', 'bar'], 5: ['hello', 'world'] }
```

### hasKey()

> **hasKey**\<`T`\>(`obj`, `key`): `boolean`

Determines if an object has a key.

#### Type Parameters

##### T

`T`

#### Parameters

##### obj

`Record`\<`string`, `T`\>

object to check

##### key

`string`

key to check

#### Returns

`boolean`

true if the object has the key, false otherwise

### hasOne()

> **hasOne**(`arr`, `fn`): `boolean`

Checks if exactly one element in the array is truthy based on a callback function.

#### Parameters

##### arr

`any`[]

array to flatten

##### fn

(`value`, `index`, `array`) => `boolean`

callback to flatten the array

#### Returns

`boolean`

the flattened array

### hasOwn()

> **hasOwn**(`obj`, `key`, `param2`): `key is any`

Determines if an object has a key.

#### Parameters

##### obj

`Record`\<`any`, `any`\>

object to check

##### key

`PropertyKey`

key to check

##### param2

options to customize the check

###### ignoreCase?

`boolean` = `false`

#### Returns

`key is any`

true if the object has the key, false otherwise

### hasValue()

> **hasValue**\<`T`\>(`obj`, `value`): `boolean`

Determines if an object has a value.

#### Type Parameters

##### T

`T`

#### Parameters

##### obj

`Record`\<`string`, `T`\>

object to check

##### value

`T`

value to check

#### Returns

`boolean`

true if the object has the value, false otherwise

### inlineSwitch()

> **inlineSwitch**\<`T`\>(`value`): [`InlineSwitch`](/xdash/api/Variable.default.md#inlineswitch)\<`T`, `never`, `never`\>

Creates a new InlineSwitch instance for given value. This utility function
facilitates a fluent interface for conditional logic based on the value provided,
allowing for a more readable and expressive alternative to traditional switch
statements or if-else chains. The InlineSwitch class supports adding cases
with `.case()` method calls and optionally setting a default case with `.default()`.
The `.execute()` method evaluates the cases against the value and returns the
result of the matching case or the default case, if provided.

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

The value to be matched against the defined cases in the InlineSwitch instance.

#### Returns

[`InlineSwitch`](/xdash/api/Variable.default.md#inlineswitch)\<`T`, `never`, `never`\>

A new instance of InlineSwitch configured with the provided value.

#### Examples

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

### intersection()

> **intersection**\<`T`\>(...`arrs`): `T`[]

Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons.

#### Type Parameters

##### T

`T`

#### Parameters

##### arrs

...`T`[][]

arrays to intersect

#### Returns

`T`[]

the intersected array

### invert()

> **invert**\<`K`, `V`\>(`obj`): `Record`\<`V`, `K`\>

Inverts the keys and values of an object. If multiple keys share the same value, the last key encountered will overwrite previous ones.
Values that are not strings, numbers, or symbols might be coerced into strings when used as keys.

#### Type Parameters

##### K

`K` *extends* `string`

##### V

`V` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### obj

`Record`\<`K`, `V`\>

object to invert, assumes values are suitable for use as keys (string, number, symbol).

#### Returns

`Record`\<`V`, `K`\>

the inverted object where original values become keys and original keys become values.

#### Example

```ts
invert({ a: 'hello', b: 'world' }) // returns { hello: 'a', world: 'b' }
invert({ a: 1, b: 2 }) // returns { '1': 'a', '2': 'b' } (Note: numeric keys become strings)
invert({ a: 'hello', b: 'hello' }) // returns { hello: 'b' } (Key 'hello' is overwritten)
```

### isArray()

> **isArray**(`value`): `value is any[]`

Determines if a value is an array.

#### Parameters

##### value

`unknown`

value to check

#### Returns

`value is any[]`

true if the value is an array, false otherwise

### isEmpty()

> **isEmpty**(`value`): `boolean`

Determines if a value is empty.

#### Parameters

##### value

`any`

#### Returns

`boolean`

### isFunction()

> **isFunction**(`value`): `value is Function`

Determines if a value is a function.

#### Parameters

##### value

`unknown`

value to check

#### Returns

`value is Function`

true if the value is a function, false otherwise

### isKeyOf()

> **isKeyOf**\<`T`\>(`value`, `obj`): `value is keyof T`

Determines if a value is a key of an object.

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### value

`unknown`

value to check

##### obj

`T`

object to check if the value is a key of

#### Returns

`value is keyof T`

true if the value is a key of the object, false otherwise

### isNullish()

> **isNullish**(`value`): value is undefined \| null

Determines if a value is null or undefined.

#### Parameters

##### value

`unknown`

value to check

#### Returns

value is undefined \| null

true if the value is a number, false otherwise

### isNumber()

> **isNumber**(`value`): `value is number`

Determines if a value is a number.

#### Parameters

##### value

`unknown`

value to check

#### Returns

`value is number`

true if the value is a number, false otherwise

### isObject()

> **isObject**(`value`): `value is object`

Determines if a value is an object.

#### Parameters

##### value

`unknown`

value to check

#### Returns

`value is object`

true if the value is an object, false otherwise

### isPromise()

> **isPromise**(`value`): `value is Promise<unknown>`

Determines if a value is a promise.

#### Parameters

##### value

`unknown`

value to check

#### Returns

`value is Promise<unknown>`

true if the value is a promise, false otherwise

### isString()

> **isString**(`value`): `value is string`

Determines if a value is a string.

#### Parameters

##### value

`unknown`

value to check

#### Returns

`value is string`

true if the value is a string, false otherwise

### isTruthy()

> **isTruthy**(`value`): `boolean`

Determines if a value is truthy.

#### Parameters

##### value

`unknown`

value to check

#### Returns

`boolean`

true if the value is a number, false otherwise

### kebabCase()

> **kebabCase**(`str`, `options`): `string`

Converts a string to kebab-case

#### Parameters

##### str

`string`

string to convert

##### options

options for the conversion

###### screaming

`boolean` = `false`

#### Returns

`string`

the string in kebab-case

#### Example

```ts
kebabCase('fooBar') // returns 'foo-bar'
kebabCase('foo_bar') // returns 'foo-bar'
kebabCase('foo-bar') // returns 'foo-bar'
kebabCase('FOO_BAR') // returns 'foo-bar'
kebabCase('foo') // returns 'foo'
kebabCase('') // returns ''
kebabCase('fooBar', { screaming: true }) // returns 'FOO-BAR'
kebabCase('foo_bar', { screaming: true }) // returns 'FOO-BAR'
kebabCase('foo-bar', { screaming: true }) // returns 'FOO-BAR'
kebabCase('FOO_BAR', { screaming: true }) // returns 'FOO-BAR'
kebabCase('foo', { screaming: true }) // returns 'FOO'
```

### keys()

> **keys**\<`T`\>(`obj`): `string`[]

Returns an array of keys from an object.

#### Type Parameters

##### T

`T`

#### Parameters

##### obj

`Record`\<`string`, `T`\>

object to get keys from

#### Returns

`string`[]

an array of keys

#### Example

```ts
keys({ a: 1, b: 2 }) // returns ['a', 'b']
keys({ a: 'hello', b: 'world' }) // returns ['a', 'b']
```

### last()

> **last**\<`T`\>(`arr`): `T`

Returns the last element of an array

#### Type Parameters

##### T

`T`

#### Parameters

##### arr

`T`[]

array to get the last element from

#### Returns

`T`

the last element of the array

#### Throws

if the array is empty

#### Example

```ts
last([1, 2, 3]) // returns 3
last([]) // throws an error
```

### lastOrDefault()

> **lastOrDefault**\<`T`, `D`\>(`arr`, `defaultValue`): `T` \| `D`

Returns the last element of an array, or a default value if the array is empty.

#### Type Parameters

##### T

`T`

##### D

`D`

#### Parameters

##### arr

`T`[]

array to get the last element from

##### defaultValue

`D`

default value

#### Returns

`T` \| `D`

the last element of the array, or the default value if the array is empty

### lowerCase()

> **lowerCase**(`str`): `string`

Converts a string to lower case

#### Parameters

##### str

`string`

string to convert

#### Returns

`string`

the string in lower case

#### Example

```ts
lowerCase('FOO') // returns 'foo'
lowerCase('foo') // returns 'foo'
lowerCase('123') // returns '123'
lowerCase('') // returns ''
```

### map()

> **map**\<`T`, `U`\>(`arr`, `fn`): `U`[]

Maps an array of values to an array of results of the callback.

#### Type Parameters

##### T

`T`

##### U

`U`

#### Parameters

##### arr

`T`[]

array to map

##### fn

(`value`, `index`, `array`) => `U`

callback to map the array

#### Returns

`U`[]

the mapped array

### mapKeys()

> **mapKeys**\<`T`\>(`obj`, `fn`): `Record`\<`string`, `T`\>

Maps an object by its keys.

#### Type Parameters

##### T

`T`

#### Parameters

##### obj

`Record`\<`string`, `T`\>

object to map

##### fn

(`key`, `value`) => `string`

callback to map the object

#### Returns

`Record`\<`string`, `T`\>

the mapped object

#### Example

```ts
mapKeys({ a: 1, b: 2 }, key => key.toUpperCase()) // returns { A: 1, B: 2 }
mapKeys({ a: 'hello', b: 'world' }, key => key.toUpperCase()) // returns { A: 'hello', B: 'world' }
```

### mapValues()

> **mapValues**\<`T`, `U`\>(`obj`, `fn`): `Record`\<`string`, `U`\>

Maps an object by its values.

#### Type Parameters

##### T

`T`

##### U

`U`

#### Parameters

##### obj

`Record`\<`string`, `T`\>

object to map

##### fn

(`value`, `key`) => `U`

callback to map the object

#### Returns

`Record`\<`string`, `U`\>

the mapped object

#### Example

```ts
mapValues({ a: 1, b: 2 }, value => value * 2) // returns { a: 2, b: 4 }
mapValues({ a: 'hello', b: 'world' }, value => value.toUpperCase()) // returns { a: 'HELLO', b: 'WORLD' }
mapValues({ a: 1, b: 2 }, value => value === 1) // returns { a: true, b: false }
mapValues({ a: 1, b: 2 }, value => value === 3) // returns { a: false, b: false }
```

### memoize()

> **memoize**\<`Args`, `T`\>(`fn`): (...`args`) => `undefined` \| `T`

Memoizes a function.

#### Type Parameters

##### Args

`Args` *extends* readonly `unknown`[]

##### T

`T`

#### Parameters

##### fn

(...`args`) => `T`

function to memoize

#### Returns

> (...`args`): `undefined` \| `T`

##### Parameters

###### args

...`Args`

##### Returns

`undefined` \| `T`

#### Example

```ts
const add = memoize((a: number, b: number) => {
   console.log('Calculating sum');
  return a + b;
});
add(1, 2) // logs 'Calculating sum' and returns 3
add(1, 2) // returns 3
add(2, 3) // logs 'Calculating sum' and returns 5
add(2, 3) // returns 5
```

### merge()

#### Call Signature

> **merge**\<`T`, `U`\>(`obj1`, `obj2`): [`Merge`](/xdash/api/TypeAlias.Merge.md)\<`T`, `U`\>

Merges objects together.

##### Type Parameters

###### T

`T`

###### U

`U`

##### Parameters

###### obj1

`T`

###### obj2

`U`

##### Returns

[`Merge`](/xdash/api/TypeAlias.Merge.md)\<`T`, `U`\>

the merged object

##### Example

```ts
merge({ a: 1 }, { b: 2 }) // returns { a: 1, b: 2 }
merge({ a: 'hello' }, { b: 'world' }) // returns { a: 'hello', b: 'world' }
merge({ a: 1 }, { a: 2 }) // returns { a: 2 }
merge({ a: 1 }, { a: 2 }, { a: 3 }) // returns { a: 3 }
```

#### Call Signature

> **merge**\<`T`, `U`, `V`\>(`obj1`, `obj2`, `obj3`): [`Merge3`](/xdash/api/TypeAlias.Merge3.md)\<`T`, `U`, `V`\>

Merges objects together.

##### Type Parameters

###### T

`T`

###### U

`U`

###### V

`V`

##### Parameters

###### obj1

`T`

###### obj2

`U`

###### obj3

`V`

##### Returns

[`Merge3`](/xdash/api/TypeAlias.Merge3.md)\<`T`, `U`, `V`\>

the merged object

##### Example

```ts
merge({ a: 1 }, { b: 2 }) // returns { a: 1, b: 2 }
merge({ a: 'hello' }, { b: 'world' }) // returns { a: 'hello', b: 'world' }
merge({ a: 1 }, { a: 2 }) // returns { a: 2 }
merge({ a: 1 }, { a: 2 }, { a: 3 }) // returns { a: 3 }
```

#### Call Signature

> **merge**\<`T`, `U`, `V`, `W`\>(`obj1`, `obj2`, `obj3`, `obj4`): [`Merge4`](/xdash/api/TypeAlias.Merge4.md)\<`T`, `U`, `V`, `W`\>

Merges objects together.

##### Type Parameters

###### T

`T`

###### U

`U`

###### V

`V`

###### W

`W`

##### Parameters

###### obj1

`T`

###### obj2

`U`

###### obj3

`V`

###### obj4

`W`

##### Returns

[`Merge4`](/xdash/api/TypeAlias.Merge4.md)\<`T`, `U`, `V`, `W`\>

the merged object

##### Example

```ts
merge({ a: 1 }, { b: 2 }) // returns { a: 1, b: 2 }
merge({ a: 'hello' }, { b: 'world' }) // returns { a: 'hello', b: 'world' }
merge({ a: 1 }, { a: 2 }) // returns { a: 2 }
merge({ a: 1 }, { a: 2 }, { a: 3 }) // returns { a: 3 }
```

#### Call Signature

> **merge**\<`T`, `U`, `V`, `W`, `X`\>(`obj1`, `obj2`, `obj3`, `obj4`, `obj5`): [`Merge5`](/xdash/api/TypeAlias.Merge5.md)\<`T`, `U`, `V`, `W`, `X`\>

Merges objects together.

##### Type Parameters

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

###### obj1

`T`

###### obj2

`U`

###### obj3

`V`

###### obj4

`W`

###### obj5

`X`

##### Returns

[`Merge5`](/xdash/api/TypeAlias.Merge5.md)\<`T`, `U`, `V`, `W`, `X`\>

the merged object

##### Example

```ts
merge({ a: 1 }, { b: 2 }) // returns { a: 1, b: 2 }
merge({ a: 'hello' }, { b: 'world' }) // returns { a: 'hello', b: 'world' }
merge({ a: 1 }, { a: 2 }) // returns { a: 2 }
merge({ a: 1 }, { a: 2 }, { a: 3 }) // returns { a: 3 }
```

#### Call Signature

> **merge**\<`T`, `U`, `V`, `W`, `X`, `Y`\>(`obj1`, `obj2`, `obj3`, `obj4`, `obj5`, `obj6`): [`Merge6`](/xdash/api/TypeAlias.Merge6.md)\<`T`, `U`, `V`, `W`, `X`, `Y`\>

Merges objects together.

##### Type Parameters

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

###### obj1

`T`

###### obj2

`U`

###### obj3

`V`

###### obj4

`W`

###### obj5

`X`

###### obj6

`Y`

##### Returns

[`Merge6`](/xdash/api/TypeAlias.Merge6.md)\<`T`, `U`, `V`, `W`, `X`, `Y`\>

the merged object

##### Example

```ts
merge({ a: 1 }, { b: 2 }) // returns { a: 1, b: 2 }
merge({ a: 'hello' }, { b: 'world' }) // returns { a: 'hello', b: 'world' }
merge({ a: 1 }, { a: 2 }) // returns { a: 2 }
merge({ a: 1 }, { a: 2 }, { a: 3 }) // returns { a: 3 }
```

#### Call Signature

> **merge**\<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>(`obj1`, `obj2`, `obj3`, `obj4`, `obj5`, `obj6`, `obj7`): [`Merge7`](/xdash/api/TypeAlias.Merge7.md)\<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

Merges objects together.

##### Type Parameters

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

###### obj1

`T`

###### obj2

`U`

###### obj3

`V`

###### obj4

`W`

###### obj5

`X`

###### obj6

`Y`

###### obj7

`Z`

##### Returns

[`Merge7`](/xdash/api/TypeAlias.Merge7.md)\<`T`, `U`, `V`, `W`, `X`, `Y`, `Z`\>

the merged object

##### Example

```ts
merge({ a: 1 }, { b: 2 }) // returns { a: 1, b: 2 }
merge({ a: 'hello' }, { b: 'world' }) // returns { a: 'hello', b: 'world' }
merge({ a: 1 }, { a: 2 }) // returns { a: 2 }
merge({ a: 1 }, { a: 2 }, { a: 3 }) // returns { a: 3 }
```

### not()

> **not**\<`Args`\>(`fn`): (...`args`) => `boolean`

Negates the result of a function.

#### Type Parameters

##### Args

`Args` *extends* readonly `unknown`[]

#### Parameters

##### fn

(...`args`) => `boolean`

function to negate

#### Returns

a function that negates the result of the input function

> (...`args`): `boolean`

##### Parameters

###### args

...`Args`

##### Returns

`boolean`

#### Example

```ts
const isEven = (n: number) => n % 2 === 0
const isOdd = not(isEven)
isOdd(2) // returns false
```

### omit()

> **omit**\<`T`, `K`\>(`obj`, `keys`): `Omit`\<`T`, `K`\>

Omit properties from an object.

#### Type Parameters

##### T

`T` *extends* `object`

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### obj

`T`

object to omit properties from

##### keys

`K`[]

keys to omit

#### Returns

`Omit`\<`T`, `K`\>

the object with the omitted properties

#### Example

```ts
omit({ a: 1, b: 2 }, ['a']) // returns { b: 2 }
omit({ a: 'hello', b: 'world' }, ['a']) // returns { b: 'world' }
omit({ a: 1, b: 2 }, ['a', 'b']) // returns {}
omit({ a: 1, b: 2 }, []) // returns { a: 1, b: 2 }
```

### once()

> **once**\<`Args`, `T`\>(`fn`): (...`args`) => `T`

Returns a function that only runs once.

#### Type Parameters

##### Args

`Args` *extends* readonly `unknown`[]

##### T

`T`

#### Parameters

##### fn

(...`args`) => `T`

function to run once

#### Returns

a function that only runs once

> (...`args`): `T`

##### Parameters

###### args

...`Args`

##### Returns

`T`

#### Example

```ts
const logOnce = once(console.log)
logOnce('foo') // logs 'foo'
logOnce('bar') // does not log 'bar'
```

### or()

> **or**\<`Args`\>(...`fns`): (...`args`) => `boolean`

OR operator for functions.

#### Type Parameters

##### Args

`Args` *extends* readonly `unknown`[]

#### Parameters

##### fns

...(...`args`) => `boolean`[]

functions to combine

#### Returns

a function that returns true if any of the input functions return true

> (...`args`): `boolean`

##### Parameters

###### args

...`Args`

##### Returns

`boolean`

#### Example

```ts
const isEven = (n: number) => n % 2 === 0
const isPositive = (n: number) => n > 0
const isPositiveOrEven = or(isEven, isPositive)
isPositiveOrEven(2) // returns true
isPositiveOrEven(3) // returns true
```

### pascalCase()

> **pascalCase**(`str`): `string`

Converts a string to PascalCase

#### Parameters

##### str

`string`

string to convert

#### Returns

`string`

the string in PascalCase

#### Example

```ts
pascalCase('fooBar') // returns 'FooBar'
pascalCase('foo-bar') // returns 'FooBar'
pascalCase('foo_bar') // returns 'FooBar'
pascalCase('FOO_BAR') // returns 'FooBar'
pascalCase('foo') // returns 'Foo'
pascalCase('') // returns ''
```

### pick()

> **pick**\<`T`, `K`\>(`obj`, `keys`): `Pick`\<`T`, `K`\>

Picks properties from an object.

#### Type Parameters

##### T

`T`

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### obj

`T`

object to pick properties from

##### keys

`K`[]

keys to pick

#### Returns

`Pick`\<`T`, `K`\>

the object with the picked properties

#### Example

```ts
pick({ a: 1, b: 2 }, ['a']) // returns { a: 1 }
pick({ a: 'hello', b: 'world' }, ['a']) // returns { a: 'hello' }
pick({ a: 1, b: 2 }, ['a', 'b']) // returns { a: 1, b: 2 }
pick({ a: 1, b: 2 }, []) // returns {}
```

### reduce()

> **reduce**\<`T`, `U`\>(`arr`, `fn`, `initial`): `U`

Reduces an array to a value which is the accumulated result of running each element in the array through the callback.

#### Type Parameters

##### T

`T`

##### U

`U`

#### Parameters

##### arr

`T`[]

array to reduce

##### fn

(`acc`, `value`, `index`, `array`) => `U`

callback to reduce the array

##### initial

`U`

initial value

#### Returns

`U`

the reduced value

### semanticNormalize()

> **semanticNormalize**(`text`, `options`?): `string`

Normalizes a given text string, removing diacritics, handling special characters, and ensuring consistent casing and spacing.

#### Parameters

##### text

`string`

The input text to normalize.

##### options?

Configuration options for the normalization.

###### lowercase?

`boolean`

Whether to convert the text to lower case.

#### Returns

`string`

The normalized text.

#### Examples

```ts
// Normalizing a mixed-language string
const mixedText = "Café 'au' lait, 世界!";
const normalized = semanticNormalize(mixedText);
console.log(normalized); // Output might be "cafe au lait 世界" depending on the exact regex definitions
```

```ts
// Normalizing a string with diacritics and mixed casing
const diacriticText = "Àççéñtś and CĀSING";
const normalizedDiacritics = semanticNormalize(diacriticText);
console.log(normalizedDiacritics); // Output: "accents and casing"
```

### semanticSlice()

> **semanticSlice**(`str`, `len`, `options`): `string`

Slices a string semantically, considering word boundaries and optionally adding an ellipsis.

#### Parameters

##### str

`string`

string to slice

##### len

`number`

length to slice the string to

##### options

options for the slice operation

###### ellipsis?

`boolean`

###### ellipsisSymbol?

`string`

###### includeEllipsis?

`boolean`

###### sliceOnCjk?

`boolean`

###### sliceOnNumber?

`boolean`

###### sliceOnPunctuation?

`boolean`

###### sliceOnSpace?

`boolean`

###### trimEnd?

`boolean`

###### trimStart?

`boolean`

#### Returns

`string`

the sliced string

#### Example

```ts
semanticSlice('The quick brown fox', 10) // returns 'The quick…'
semanticSlice('The quick brown fox', 10, { ellipsis: true }) // returns 'The quick…'
semanticSlice('The quick brown fox', 10, { ellipsis: true, includeEllipsis: false }) // returns 'The quick'
semanticSlice('The quick brown fox', 10, { ellipsis: true, trimEnd: false }) // returns 'The quick brown…'
semanticSlice('The quick, brown fox', 10) // returns 'The quick,'
semanticSlice('The quick, brown fox', 10, { sliceOnPunctuation: false }) // returns 'The quick'
semanticSlice('The quick, brown fox', 10, { sliceOnSpace: false }) // returns 'The'
semanticSlice('The quick, brown fox', 10, { sliceOnCjk: false }) // returns 'The quick,'
semanticSlice('這是一個非常長的句子', 5) // returns '這是一個非常長的句'
semanticSlice('這是一個非常長的句子', 5, { sliceOnCjk: false }) // returns '這是一個非常長的'
semanticSlice('這是一個非常長的句子', 5, { ellipsis: true }) // returns '這是一個非常長的句…'
```

### semanticWords()

> **semanticWords**(`text`, `concatCjk`): `string`[]

Extracts words from a given text string, recognizing Latin vocabulary and CJK characters.
The function can optionally treat consecutive CJK characters as a single word.
This is particularly useful for processing mixed-language texts where the distinction
between word boundaries may vary significantly between scripts.

#### Parameters

##### text

`string`

The input text from which words will be extracted.

##### concatCjk

`boolean` = `false`

Determines whether consecutive CJK characters should be
                             treated as a single word (true) or as individual characters (false).
                             Default is false, meaning CJK characters are treated individually.

#### Returns

`string`[]

- An array of extracted words. Latin words are identified based on standard
                      word boundaries, while CJK character handling is determined by the concatCjk flag.

#### Examples

```ts
// Example with Latin text:
console.log(semanticWords("Hello, world!"));
// Expected output: ["Hello", "world"]
```

```ts
// Example with mixed Latin and CJK text, treating CJK characters individually:
console.log(semanticWords("This is a 测试"));
// Expected output: ["This", "is", "a", "测", "试"]
```

```ts
// Example with mixed Latin and CJK text, treating consecutive CJK characters as a single word:
console.log(semanticWords("This is a 测试", true));
// Expected output: ["This", "is", "a", "测试"]
```

### separateWords()

> **separateWords**(`str`): `string`[]

Separates words in a string based on the detected case.

#### Parameters

##### str

`string`

The string to separate.

#### Returns

`string`[]

An array of separated words.

#### Example

```ts
separateWords('fooBar') // returns ['foo', 'Bar']
separateWords('foo-bar') // returns ['foo', 'bar']
separateWords('FOO_BAR') // returns ['FOO', 'BAR']
separateWords('foo bar') // returns ['foo', 'bar']
separateWords('') // returns []
separateWords('fooBar-baz') // returns ['foo', 'Bar', 'baz']
```

### slugify()

> **slugify**(`text`, `options`?): `string`

Converts a given string into a slug, making it URL-friendly.
Supports concatenating CJK characters, converting to lowercase,
specifying a separator, and ensuring the slug does not exceed a specified maximum length,
while trying to preserve whole words when possible.

#### Parameters

##### text

`string`

The input string to slugify.

##### options?

Configuration options for slugification.

###### concatCjk?

`boolean`

Whether to treat consecutive CJK characters as a single word.

###### length?

`number`

The desired maximum length of the generated slug. The function attempts not to exceed this length while preserving semantic integrity.

###### lowercase?

`boolean`

Whether to convert the slug to lower case.

###### separator?

`string`

The separator to use between words in the slug.

#### Returns

`string`

- The slugified string.

### snakeCase()

> **snakeCase**(`str`, `options`): `string`

Converts a string to snake_case

#### Parameters

##### str

`string`

string to convert

##### options

options for the conversion

###### screaming

`boolean` = `false`

#### Returns

`string`

the string in snake_case

#### Example

```ts
snakeCase('fooBar') // returns 'foo_bar'
snakeCase('foo-bar') // returns 'foo_bar'
snakeCase('foo_bar') // returns 'foo_bar'
snakeCase('FOO_BAR') // returns 'foo_bar'
snakeCase('foo') // returns 'foo'
snakeCase('') // returns ''
snakeCase('fooBar', { screaming: true }) // returns 'FOO_BAR'
snakeCase('foo-bar', { screaming: true }) // returns 'FOO_BAR'
snakeCase('foo_bar', { screaming: true }) // returns 'FOO_BAR'
snakeCase('FOO_BAR', { screaming: true }) // returns 'FOO_BAR'
snakeCase('foo', { screaming: true }) // returns 'FOO'
snakeCase('fooBar', { screaming: true }) // returns 'FOO_BAR'
snakeCase('foo-bar', { screaming: true }) // returns 'FOO_BAR'
```

### split()

> **split**(`str`, `separator`, `limit`?): `string`[]

Splits a string into an array of substrings based on a separator

#### Parameters

##### str

`string`

string to split

##### separator

separator to split the string by

`string` | `RegExp`

##### limit?

`number`

maximum number of substrings to return

#### Returns

`string`[]

an array of substrings

### take()

> **take**\<`T`\>(`arr`, `n`): `T`[]

Returns the first n elements of an array

#### Type Parameters

##### T

`T`

#### Parameters

##### arr

`T`[]

array to get the first n elements from

##### n

`number`

number of elements to get

#### Returns

`T`[]

the first n elements of the array

### takeRight()

> **takeRight**\<`T`\>(`arr`, `size`): `T`[]

Returns the last n elements of an array

#### Type Parameters

##### T

`T`

#### Parameters

##### arr

`T`[]

##### size

`number`

#### Returns

`T`[]

### throttle()

> **throttle**\<`Args`\>(`fn`, `ms`, `options`): (...`args`) => `void`

Throttles a function.

#### Type Parameters

##### Args

`Args` *extends* readonly `unknown`[]

#### Parameters

##### fn

(...`args`) => `void`

function to throttle

##### ms

`number`

time in milliseconds to throttle the function

##### options

options to configure the throttle

###### leading?

`boolean` = `true`

whether to run the function on the leading edge

###### trailing?

`boolean` = `true`

whether to run the function on the trailing edge

#### Returns

a throttled function

> (...`args`): `void`

##### Parameters

###### args

...`Args`

##### Returns

`void`

#### Examples

```ts
const log = throttle(console.log, 1000)
log('foo') // logs 'foo'
log('bar') // does not log 'bar'
log('baz') // does not log 'baz'
setTimeout(() => log('qux'), 1000) // logs 'qux' after 1 second
```

```ts
const log = throttle(console.log, 1000, { leading: false, trailing: true })
log('foo') // does not log 'foo'
log('bar') // does not log 'bar'
log('baz') // does not log 'baz'
setTimeout(() => log('qux'), 1000) // logs 'qux' after 1 second
```

```ts
const log = throttle(console.log, 1000, { leading: true, trailing: false })
log('foo') // logs 'foo'
log('bar') // does not log 'bar'
log('baz') // does not log 'baz'
setTimeout(() => log('qux'), 1000) // does not log 'qux'
```

```ts
const log = throttle(console.log, 1000, { leading: false, trailing: false })
log('foo') // does not log 'foo'
log('bar') // does not log 'bar'
log('baz') // does not log 'baz'
setTimeout(() => log('qux'), 1000) // does not log 'qux'
```

### throwError()

> **throwError**(`message`): `never`

Throws an error with the given message.

#### Parameters

##### message

`string` = `''`

error message

#### Returns

`never`

### toEnum()

> **toEnum**\<`T`, `CapitalizeKeys`, `CapitalizeValues`\>(`list`, `options`): [`EnumFromList`](/xdash/api/TypeAlias.EnumFromList.md)\<`T`, `CapitalizeKeys`, `CapitalizeValues`\>

Converts a list of strings to an enum.

#### Type Parameters

##### T

`T` *extends* readonly `string`[]

##### CapitalizeKeys

`CapitalizeKeys` *extends* `boolean` = `true`

##### CapitalizeValues

`CapitalizeValues` *extends* `boolean` = `false`

#### Parameters

##### list

`T`

list of strings to convert to an enum

##### options

options to customize the enum

###### capitalizeKeys?

`CapitalizeKeys`

###### capitalizeValues?

`CapitalizeValues`

#### Returns

[`EnumFromList`](/xdash/api/TypeAlias.EnumFromList.md)\<`T`, `CapitalizeKeys`, `CapitalizeValues`\>

an enum from the list

### toObj()

> **toObj**\<`T`, `R`\>(`arr`, `keyFn`, `valueFn`): `Record`\<`PropertyKey`, `R`\>

Converts an array to an object.

#### Type Parameters

##### T

`T`

##### R

`R` = `T`

#### Parameters

##### arr

`T`[]

array to fill

##### keyFn

(`item`) => `PropertyKey`

function to get the key from the item

##### valueFn

(`item`) => `R`

function to get the value from the item

#### Returns

`Record`\<`PropertyKey`, `R`\>

an object with the keys and values from the array

### union()

> **union**\<`T`\>(...`arrs`): `T`[]

Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.

#### Type Parameters

##### T

`T`

#### Parameters

##### arrs

...`T`[][]

arrays to union

#### Returns

`T`[]

the unioned array

### uniq()

> **uniq**\<`T`\>(`arr`): `T`[]

Unique values from an array. Order is not guaranteed.

#### Type Parameters

##### T

`T`

#### Parameters

##### arr

`T`[]

array to get unique values from

#### Returns

`T`[]

the array with unique values

### uniqBy()

> **uniqBy**\<`T`\>(`arr`, `fn`): `T`[]

Unique values from an array, based on a comparator function.

#### Type Parameters

##### T

`T`

#### Parameters

##### arr

`T`[]

array to get unique values from

##### fn

(`a`) => `unknown`

comparator function

#### Returns

`T`[]

the array with unique values

### upperCase()

> **upperCase**(`str`): `string`

Converts a string to upper case

#### Parameters

##### str

`string`

string to convert

#### Returns

`string`

the string in upper case

#### Example

```ts
upperCase('foo') // returns 'FOO'
upperCase('FOO') // returns 'FOO'
upperCase('123') // returns '123'
upperCase('') // returns ''
upperCase('foo-bar') // returns 'FOO-BAR'
```

### values()

> **values**\<`T`\>(`obj`): `T`[]

Returns an array of values from an object.

#### Type Parameters

##### T

`T`

#### Parameters

##### obj

`Record`\<`string`, `T`\>

object to get values from

#### Returns

`T`[]

an array of values

#### Example

```ts
values({ a: 1, b: 2 }) // returns [1, 2]
values({ a: 'hello', b: 'world' }) // returns ['hello', 'world']
```

### xor()

> **xor**\<`Args`\>(...`fns`): (...`args`) => `boolean`

XOR operator for functions.

#### Type Parameters

##### Args

`Args` *extends* readonly `unknown`[]

#### Parameters

##### fns

...(...`args`) => `boolean`[]

functions to combine

#### Returns

a function that returns true if exactly one of the input functions returns true

> (...`args`): `boolean`

##### Parameters

###### args

...`Args`

##### Returns

`boolean`

#### Example

```ts
const isEven = (n: number) => n % 2 === 0
const isPositive = (n: number) => n > 0
const isPositiveXorEven = xor(isEven, isPositive)
isPositiveXorEven(2) // returns false
isPositiveXorEven(3) // returns true
isPositiveXorEven(4) // returns false
```
