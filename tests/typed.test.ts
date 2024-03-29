import { describe, test, it, expect } from 'bun:test'
import x from '../src/index'

describe('typed', () => {
    test('isArray', () => {
        expect(x.isArray([1, 2, 3])).toBe(true)
        expect(x.isArray(123)).toBe(false)
    })
    test('isFunction', () => {
        expect(x.isFunction(() => { })).toBe(true)
        expect(x.isFunction(123)).toBe(false)
    })
    test('isKeyOf', () => {
        expect(x.isKeyOf('a', { a: 1 })).toBe(true)
        expect(x.isKeyOf('b', { a: 1 })).toBe(false)
    })
    test('isObject', () => {
        expect(x.isObject([])).toBe(false)
        expect(x.isObject({})).toBe(true)
        expect(x.isObject(123)).toBe(false)
    })
    test('isString', () => {
        expect(x.isString('abc')).toBe(true)
        expect(x.isString(123)).toBe(false)
    })
    test('throwError', () => {
        expect(() => x.throwError('Error')).toThrow('Error')
    })
    test('isNullish', () => {
        expect(x.isNullish(null)).toBe(true)
        expect(x.isNullish(undefined)).toBe(true)
        expect(x.isNullish(123)).toBe(false)
    })
    test('toEnum', () => {
        const Colors = x.toEnum(['red', 'green', 'blue'])
        expect(Colors.Red).toBe('red')
        expect(Colors.Green).toBe('green')
        expect(Colors.Blue).toBe('blue')
    })
    test('toEnum with options', () => {
        const Colors = x.toEnum(['red', 'green', 'blue'], { capitalizeKeys: true, capitalizeValues: true })
        expect(Colors.Red).toBe('Red')
        expect(Colors.Green).toBe('Green')
        expect(Colors.Blue).toBe('Blue')
    })
    test('hasOwn', () => {
        expect(x.hasOwn({ a: 1 }, 'a')).toBe(true)
        expect(x.hasOwn({ a: 1 }, 'b')).toBe(false)
    })
    test('isPromise', () => {
        expect(x.isPromise(Promise.resolve())).toBe(true)
        expect(x.isPromise(123)).toBe(false)
    })
    test('asError', () => {
        expect(x.asError('Error')).toBeInstanceOf(Error)
        expect(x.asError(new Error('Error'))).toBeInstanceOf(Error)
    })
    test('isNumber', () => {
        expect(x.isNumber(123)).toBe(true)
        expect(x.isNumber('123')).toBe(false)
    })
    test('keys', () => {
        expect(x.keys({ a: 1, b: 2 })).toEqual(['a', 'b'])
    })
    test('values', () => {
        expect(x.values({ a: 1, b: 2 })).toEqual([1, 2])
    })
    test('entries', () => {
        expect(x.entries({ a: 1, b: 2 })).toEqual([['a', 1], ['b', 2]])
    })
    test('fillKeys', () => {
        expect(x.fillKeys(['a', 'b'], 1)).toEqual({ a: 1, b: 1 })
    })
    test('toObj', () => {
        expect(x.toObj([['a', 1], ['b', 2]], x => x[0], x => x[1])).toEqual({ a: 1, b: 2 })
    })
    test('isEmpty', () => {
        expect(x.isEmpty(null)).toBe(true)
        expect(x.isEmpty(undefined)).toBe(true)
        expect(x.isEmpty('')).toBe(true)
        expect(x.isEmpty([])).toBe(true)
        expect(x.isEmpty({})).toBe(true)
        expect(x.isEmpty(new Set())).toBe(true)
        expect(x.isEmpty(new Map())).toBe(true)
        expect(x.isEmpty(0)).toBe(false)
        expect(x.isEmpty('abc')).toBe(false)
        expect(x.isEmpty([1, 2, 3])).toBe(false)
        expect(x.isEmpty({ a: 1 })).toBe(false)
    })
    test('isTruthy', () => {
        expect(x.isTruthy(0)).toBe(false)
        expect(x.isTruthy('')).toBe(false)
        expect(x.isTruthy(null)).toBe(false)
        expect(x.isTruthy(undefined)).toBe(false)
        expect(x.isTruthy(123)).toBe(true)
        expect(x.isTruthy('abc')).toBe(true)
        expect(x.isTruthy({ a: 1 })).toBe(true)
    })
})