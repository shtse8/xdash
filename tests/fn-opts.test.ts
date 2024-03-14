import { describe, test, it, expect } from 'bun:test'
import x from '../src/index'

describe('fn-opts', () => {
    test('not', () => {
        const isEven = (n: number) => n % 2 === 0
        const isOdd = x.not(isEven)
        expect(isOdd(2)).toBe(false)
    })
    test('and', () => {
        const isEven = (n: number) => n % 2 === 0
        const isPositive = (n: number) => n > 0
        const isPositiveEven = x.and(isEven, isPositive)
        expect(isPositiveEven(2)).toBe(true)
    })
    test('or', () => {
        const isEven = (n: number) => n % 2 === 0
        const isPositive = (n: number) => n > 0
        const isPositiveOrEven = x.or(isEven, isPositive)
        expect(isPositiveOrEven(2)).toBe(true)
        expect(isPositiveOrEven(3)).toBe(true)
    })
    test('xor', () => {
        const isEven = (n: number) => n % 2 === 0
        const isPositive = (n: number) => n > 0
        const isPositiveXorEven = x.xor(isEven, isPositive)
        expect(isPositiveXorEven(2)).toBe(false)
        expect(isPositiveXorEven(3)).toBe(true)
        expect(isPositiveXorEven(4)).toBe(false)
    })
    test('ensure', () => {
        const isEven = (n: number) => n % 2 === 0
        const ensureEven = x.ensure(isEven, 'Invalid value')
        expect(ensureEven(2)).toBe(2)
        expect(() => ensureEven(3)).toThrow('Invalid value')
    })
})
