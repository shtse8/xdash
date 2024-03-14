**xdash** • [Readme](../README.md) \| [API](../globals.md)

***

[xdash](../README.md) / default

# Variable: default

> **default**: `Object`

## Type declaration

### noop

> **noop**: () => `void`

Empty function.

#### Returns

`void`

### and()

AND operator for functions.

#### Type parameters

• **Args** extends readonly `unknown`[]

#### Parameters

• ...**fns**: (...`args`) => `boolean`[]

functions to combine

#### Returns

`Function`

a function that returns true if all of the input functions return true

> ##### Parameters
>
> • ...**args**: `Args`
>
> ##### Returns
>
> `boolean`
>

#### Example

```ts
const isEven = (n: number) => n % 2 === 0
const isPositive = (n: number) => n > 0
const isPositiveEven = and(isEven, isPositive)
isPositiveEven(2) // returns true
```

### asError()

Converts a value to an error.

#### Parameters

• **value**: `unknown`

value to convert

#### Returns

`Error`

the value as an error

### camelCase()

Converts a string to camelCase

#### Parameters

• **str**: `string`

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

Capitalizes the first letter of a string

#### Parameters

• **str**: `string`

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

### chunk()

Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

#### Type parameters

• **T**

#### Parameters

• **arr**: `T`[]

• **size**: `number`

#### Returns

`T`[][]

### compact()

Compacts an array by removing null and undefined values.

#### Type parameters

• **T**

#### Parameters

• **arr**: (`undefined` \| `null` \| `false` \| `0` \| `T`)[]

array to compact

#### Returns

`T`[]

the compacted array

### concat()

Concatenates arrays

#### Type parameters

• **T**

#### Parameters

• ...**arrs**: `T`[][]

arrays to concatenate

#### Returns

`T`[]

the concatenated array

### detectCase()

Detects the case of a string

#### Parameters

• **str**: `string`

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

Creates an array of unique values that are included in the first provided array, but not in the second.

#### Type parameters

• **T**

#### Parameters

• **arr**: `T`[]

array to difference from

• **values**: `T`[]

values to exclude

#### Returns

`T`[]

the differenced array

### ensure()

#### ensure(checkFn, errorMsg)

Determines if a value is a number.

##### Type parameters

• **T**

• **Args** extends readonly `unknown`[] = []

##### Parameters

• **checkFn**

function to check the value

• **errorMsg?**: `string`

error message to throw if the value does not match the expected type

##### Returns

`Function`

a function that checks if a value matches the expected type

> ###### Parameters
>
> • **value**: `unknown`
>
> • ...**args**: `Args`
>
> ###### Returns
>
> `T`
>

##### Example

```ts
const ensureArr = ensure(isArr, 'Value is not an array')
const arr = ensureArr(123) // throws an error
const arr2 = ensureArr([1, 2, 3]) // returns [1, 2, 3]
```

#### ensure(checkFn, errorMsg)

##### Type parameters

• **T**

• **Args** extends readonly `unknown`[] = []

##### Parameters

• **checkFn**

• **errorMsg?**: `string`

##### Returns

`Function`

> ###### Parameters
>
> • **value**: `T`
>
> • ...**args**: `Args`
>
> ###### Returns
>
> `T`
>

### entries()

Gets the entries of an object.

#### Type parameters

• **T** extends `object`

#### Parameters

• **obj**: `T`

object to check

#### Returns

[keyof `T`, `T`\[keyof `T`\]][]

true if the value is a number, false otherwise

### fillKeys()

Fills an array with a value.

#### Type parameters

• **T** extends `PropertyKey`

• **V**

#### Parameters

• **keys**: `T`[]

keys to fill

• **value**: `V`

value to fill the keys with

#### Returns

`Record`\<`T`, `V`\>

an object with the keys filled with the value

### filter()

Removes elements from an array for which the callback returns false.

#### Type parameters

• **T**

#### Parameters

• **arr**: `T`[]

array to filter

• **fn**

callback to filter the array

#### Returns

`T`[]

the filtered array

### first()

Returns the first element of an array

#### Type parameters

• **T**

#### Parameters

• **arr**: `T`[]

array to get the first element from

#### Returns

`T`

the first element of the array

### hasOwn()

Determines if an object has a key.

#### Parameters

• **obj**: `Record`\<`any`, `any`\>

object to check

• **key**: `PropertyKey`

key to check

• **param2**= `{}`

options to customize the check

• **param2\.ignoreCase?**: `boolean`= `false`

#### Returns

`key is any`

true if the object has the key, false otherwise

### intersection()

Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons.

#### Type parameters

• **T**

#### Parameters

• ...**arrs**: `T`[][]

arrays to intersect

#### Returns

`T`[]

the intersected array

### isArr()

Determines if a value is an array.

#### Parameters

• **value**: `unknown`

value to check

#### Returns

`value is any[]`

true if the value is an array, false otherwise

### isEmpty()

Determines if a value is empty.

#### Parameters

• **value**: `any`

#### Returns

`boolean`

### isFn()

Determines if a value is a function.

#### Parameters

• **value**: `unknown`

value to check

#### Returns

`value is Function`

true if the value is a function, false otherwise

### isKeyOf()

Determines if a value is a key of an object.

#### Type parameters

• **T** extends `object`

#### Parameters

• **value**: `unknown`

value to check

• **obj**: `T`

object to check if the value is a key of

#### Returns

`value is keyof T`

true if the value is a key of the object, false otherwise

### isNullish()

Determines if a value is null or undefined.

#### Parameters

• **value**: `unknown`

value to check

#### Returns

`value is undefined | null`

true if the value is a number, false otherwise

### isNum()

Determines if a value is a number.

#### Parameters

• **value**: `unknown`

value to check

#### Returns

`value is number`

true if the value is a number, false otherwise

### isObj()

Determines if a value is an object.

#### Parameters

• **value**: `unknown`

value to check

#### Returns

`value is object`

true if the value is an object, false otherwise

### isPromise()

Determines if a value is a promise.

#### Parameters

• **value**: `unknown`

value to check

#### Returns

`value is Promise<unknown>`

true if the value is a promise, false otherwise

### isStr()

Determines if a value is a string.

#### Parameters

• **value**: `unknown`

value to check

#### Returns

`value is string`

true if the value is a string, false otherwise

### kebabCase()

Converts a string to kebab-case

#### Parameters

• **str**: `string`

string to convert

• **options**= `undefined`

options for the conversion

• **options\.screaming**: `boolean`= `false`

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

Gets the keys of an object.

#### Type parameters

• **T** extends `object`

#### Parameters

• **obj**: `T`

object to check

#### Returns

keyof `T`[]

true if the value is a number, false otherwise

### last()

Returns the last element of an array

#### Type parameters

• **T**

#### Parameters

• **arr**: `T`[]

array to get the last element from

#### Returns

`T`

the last element of the array

### lowerCase()

Converts a string to lower case

#### Parameters

• **str**: `string`

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

Maps an array of values to an array of results of the callback.

#### Type parameters

• **T**

• **U**

#### Parameters

• **arr**: `T`[]

array to map

• **fn**

callback to map the array

#### Returns

`U`[]

the mapped array

### not()

NOT operator for functions.

#### Type parameters

• **Args** extends readonly `unknown`[]

#### Parameters

• **fn**

function to negate

#### Returns

`Function`

a function that negates the result of the input function

> ##### Parameters
>
> • ...**args**: `Args`
>
> ##### Returns
>
> `boolean`
>

#### Example

```ts
const isEven = (n: number) => n % 2 === 0
const isOdd = not(isEven)
isOdd(2) // returns false
```

### or()

OR operator for functions.

#### Type parameters

• **Args** extends readonly `unknown`[]

#### Parameters

• ...**fns**: (...`args`) => `boolean`[]

functions to combine

#### Returns

`Function`

a function that returns true if any of the input functions return true

> ##### Parameters
>
> • ...**args**: `Args`
>
> ##### Returns
>
> `boolean`
>

#### Example

```ts
const isEven = (n: number) => n % 2 === 0
const isPositive = (n: number) => n > 0
const isPositiveOrEven = or(isEven, isPositive)
isPositiveOrEven(2) // returns true
isPositiveOrEven(3) // returns true
```

### pascalCase()

Converts a string to PascalCase

#### Parameters

• **str**: `string`

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

### reduce()

Reduces an array to a value which is the accumulated result of running each element in the array through the callback.

#### Type parameters

• **T**

• **U**

#### Parameters

• **arr**: `T`[]

array to reduce

• **fn**

callback to reduce the array

• **initial**: `U`

initial value

#### Returns

`U`

the reduced value

### separateWords()

Separates words in a string based on the detected case.

#### Parameters

• **str**: `string`

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

### snakeCase()

Converts a string to snake_case

#### Parameters

• **str**: `string`

string to convert

• **options**= `undefined`

options for the conversion

• **options\.screaming**: `boolean`= `false`

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

Splits a string into an array of substrings based on a separator

#### Parameters

• **str**: `string`

string to split

• **separator**: `string` \| `RegExp`

separator to split the string by

• **limit?**: `number`

maximum number of substrings to return

#### Returns

`string`[]

an array of substrings

### take()

Returns the first n elements of an array

#### Type parameters

• **T**

#### Parameters

• **arr**: `T`[]

array to get the first n elements from

• **n**: `number`

number of elements to get

#### Returns

`T`[]

the first n elements of the array

### takeRight()

Returns the last n elements of an array

#### Type parameters

• **T**

#### Parameters

• **arr**: `T`[]

• **size**: `number`

#### Returns

`T`[]

### throwError()

Throws an error with the given message.

#### Parameters

• **message**: `string`= `''`

error message

#### Returns

`never`

### toEnum()

Converts a list of strings to an enum.

#### Type parameters

• **T** extends readonly `string`[]

• **CapitalizeKeys** extends `boolean` = `true`

• **CapitalizeValues** extends `boolean` = `false`

#### Parameters

• **list**: `T`

list of strings to convert to an enum

• **options**= `{}`

options to customize the enum

• **options\.capitalizeKeys?**: `CapitalizeKeys`

• **options\.capitalizeValues?**: `CapitalizeValues`

#### Returns

[`EnumFromList`](../type-aliases/EnumFromList.md)\<`T`, `CapitalizeKeys`, `CapitalizeValues`\>

an enum from the list

### toObj()

Converts an array to an object.

#### Type parameters

• **T**

• **R** = `T`

#### Parameters

• **arr**: `T`[]

array to fill

• **keyFn**

function to get the key from the item

• **valueFn**= `undefined`

function to get the value from the item

#### Returns

`Record`\<`PropertyKey`, `R`\>

an object with the keys and values from the array

### union()

Creates an array of unique values, in order, from all given arrays using SameValueZero for equality comparisons.

#### Type parameters

• **T**

#### Parameters

• ...**arrs**: `T`[][]

arrays to union

#### Returns

`T`[]

the unioned array

### uniq()

Unique values from an array. Order is not guaranteed.

#### Type parameters

• **T**

#### Parameters

• **arr**: `T`[]

array to get unique values from

#### Returns

`T`[]

the array with unique values

### uniqBy()

Unique values from an array, based on a comparator function.

#### Type parameters

• **T**

#### Parameters

• **arr**: `T`[]

array to get unique values from

• **fn**

comparator function

#### Returns

`T`[]

the array with unique values

### upperCase()

Converts a string to upper case

#### Parameters

• **str**: `string`

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

Gets the values of an object.

#### Type parameters

• **T** extends `object`

#### Parameters

• **obj**: `T`

object to check

#### Returns

`T`\[keyof `T`\][]

true if the value is a number, false otherwise

### xor()

XOR operator for functions.

#### Type parameters

• **Args** extends readonly `unknown`[]

#### Parameters

• ...**fns**: (...`args`) => `boolean`[]

functions to combine

#### Returns

`Function`

a function that returns true if exactly one of the input functions returns true

> ##### Parameters
>
> • ...**args**: `Args`
>
> ##### Returns
>
> `boolean`
>

#### Example

```ts
const isEven = (n: number) => n % 2 === 0
const isPositive = (n: number) => n > 0
const isPositiveXorEven = xor(isEven, isPositive)
isPositiveXorEven(2) // returns false
isPositiveXorEven(3) // returns true
isPositiveXorEven(4) // returns false
```

## Source

[index.ts:15](https://github.com/shtse8/xdash/blob/55c7e43/src/index.ts#L15)
