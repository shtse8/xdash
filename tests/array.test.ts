import { describe, test, it, expect } from 'bun:test'
import x from '../src/index'

describe('array', () => {
    test('compact', () => {
        expect(x.compact([1, null, 2, undefined, 3])).toEqual([1, 2, 3])
    })
    test('uniq', () => {
        expect(x.uniq([1, 2, 3, 2, 1])).toEqual([1, 2, 3])
    })
    test('uniqBy', () => {
        expect(x.uniqBy([1, 2, 3, 2, 1], x => x)).toEqual([1, 2, 3])
    })
    test('map', () => {
        expect(x.map([1, 2, 3], x => x * 2)).toEqual([2, 4, 6])
    })
    test('filter', () => {
        expect(x.filter([1, 2, 3], x => x % 2 === 0)).toEqual([2])
    })
    test('reduce', () => {
        expect(x.reduce([1, 2, 3], (acc, x) => acc + x, 0)).toBe(6)
    })
    test('difference', () => {
        expect(x.difference([1, 2, 3], [2, 3])).toEqual([1])
    })
    test('intersection', () => {
        expect(x.intersection([1, 2, 3], [2, 3])).toEqual([2, 3])
    })
    test('union', () => {
        expect(x.union([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4])
    })
    test('last', () => {
        expect(x.last([1, 2, 3])).toBe(3)
    })
    test('first', () => {
        expect(x.first([1, 2, 3])).toBe(1)
    })
    test('concat', () => {
        expect(x.concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
    })
    test('take', () => {
        expect(x.take([1, 2, 3], 2)).toEqual([1, 2])
    })
    test('takeRight', () => {
        expect(x.takeRight([1, 2, 3], 2)).toEqual([2, 3])
    })
    test('hasOne', () => {
        expect(x.hasOne([0, 1, 0, 0, 0])).toBe(true)
        expect(x.hasOne([0, 1, 0, 0, 1])).toBe(false)
        expect(x.hasOne([0, 0, 0, 0, 0])).toBe(false)
        expect(x.hasOne([1, 1, 1, 1, 1])).toBe(false)
        expect(x.hasOne(['foo', 1, 0, 0, 0])).toBe(false)
        expect(x.hasOne(['foo', 0, 0, 0, null])).toBe(true)
    })
})