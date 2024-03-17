import { describe, test, it, expect } from 'bun:test'
import x from '../src/index'


describe('compact', () => {
    test('removes null and undefined values', () => {
        const input = [1, null, 2, undefined, 3]
        const expected = [1, 2, 3]
        const result = x.compact(input)
        expect(result).toEqual(expected)
    })

    test('returns empty array when input is empty', () => {
        const input: number[] = []
        const expected: number[] = []
        const result = x.compact(input)
        expect(result).toEqual(expected)
    })
})

describe('uniq', () => {
    test('returns unique elements', () => {
        const input = [1, 2, 3, 2, 1]
        const expected = [1, 2, 3]
        const result = x.uniq(input)
        expect(result).toEqual(expected)
    })

    test('returns unique elements with objects', () => {
        const input = [{ id: 1 }, { id: 2 }, { id: 1 }]
        const expected = [{ id: 1 }, { id: 2 }, { id: 1 }]
        const result = x.uniq(input)
        expect(result).toEqual(expected)
    })

    test('returns unique elements with empty array', () => {
        const input: number[] = []
        const expected: number[] = []
        const result = x.uniq(input)
        expect(result).toEqual(expected)
    })
})

describe('uniqBy', () => {
    test('returns unique elements', () => {
        const input = [1, 2, 3, 2, 1]
        const expected = [1, 2, 3]
        const result = x.uniqBy(input, x => x)
        expect(result).toEqual(expected)
    })

    test('returns unique elements based on mapping', () => {
        const input = [1, 2, 3, 2, 1]
        const expected = [1, 2]
        const result = x.uniqBy(input, x => x % 2)
        expect(result).toEqual(expected)
    })

    test('returns unique elements based on mapping with objects', () => {
        const input = [{ id: 1 }, { id: 2 }, { id: 1 }]
        const expected = [{ id: 1 }, { id: 2 }]
        const result = x.uniqBy(input, x => x.id)
        expect(result).toEqual(expected)
    })
})
describe('map', () => {
    test('returns mapped array', () => {
        const input = [1, 2, 3]
        const expected = [2, 4, 6]
        const result = x.map(input, x => x * 2)
        expect(result).toEqual(expected)
    })
})

describe('filter', () => {
    test('returns filtered array', () => {
        const input = [1, 2, 3]
        const expected = [2]
        const result = x.filter(input, x => x % 2 === 0)
        expect(result).toEqual(expected)
    })
})

describe('reduce', () => {
    test('returns sum of array', () => {
        const input = [1, 2, 3]
        const expected = 6
        const result = x.reduce(input, (acc, x) => acc + x, 0)
        expect(result).toBe(expected)
    })

    test('returns sum of array with initial value', () => {
        const input = [1, 2, 3]
        const expected = 10
        const result = x.reduce(input, (acc, x) => acc + x, 4)
        expect(result).toBe(expected)
    })

    test('returns initial value when input is empty', () => {
        const input: number[] = []
        const expected = 4
        const result = x.reduce(input, (acc, x) => acc + x, 4)
        expect(result).toBe(expected)
    })
})

describe('difference', () => {
    test('returns difference of arrays', () => {
        const input = [[1, 2, 3], [2, 3, 4]]
        const expected = [1]
        const result = x.difference(...input)
        expect(result).toEqual(expected)
    })

    test('returns difference of arrays with empty array', () => {
        const input = [[1, 2, 3], []]
        const expected = [1, 2, 3]
        const result = x.difference(...input)
        expect(result).toEqual(expected)
    })

    test('returns difference of arrays with empty arrays', () => {
        const input: number[][] = [[], [], []]
        const expected: number[] = []
        const result = x.difference(...input)
        expect(result).toEqual(expected)
    })

    test('returns difference of arrays with duplicate values', () => {
        const input = [[1, 2, 3], [2, 3, 4, 4, 4]]
        const expected = [1]
        const result = x.difference(...input)
        expect(result).toEqual(expected)
    })

    test('returns difference of arrays with duplicate values and empty array', () => {
        const input = [[1, 2, 3], [2, 3, 4, 4, 4], []]
        const expected = [1]
        const result = x.difference(...input)
        expect(result).toEqual(expected)
    })
})

describe('intersection', () => {
    test('returns intersection of arrays', () => {
        const input = [[1, 2, 3], [2, 3, 4]]
        const expected = [2, 3]
        const result = x.intersection(...input)
        expect(result).toEqual(expected)
    })

    test('returns intersection of arrays with empty array', () => {
        const input = [[1, 2, 3], []]
        const expected: number[] = []
        const result = x.intersection(...input)
        expect(result).toEqual(expected)
    })

    test('returns intersection of arrays with empty arrays', () => {
        const input: number[][] = [[], [], []]
        const expected: number[] = []
        const result = x.intersection(...input)
        expect(result).toEqual(expected)
    })

    test('returns intersection of arrays with duplicate values', () => {
        const input = [[1, 2, 3], [2, 3, 4, 4, 4]]
        const expected = [2, 3]
        const result = x.intersection(...input)
        expect(result).toEqual(expected)
    })

    test('returns intersection of arrays with duplicate values and empty array', () => {
        const input = [[1, 2, 3], [2, 3, 4, 4, 4], []]
        const expected: number[] = []
        const result = x.intersection(...input)
        expect(result).toEqual(expected)
    })
})

describe('union', () => {
    test('returns union of arrays', () => {
        const input = [[1, 2, 3], [2, 3, 4]]
        const expected = [1, 2, 3, 4]
        const result = x.union(...input)
        expect(result).toEqual(expected)
    })

    test('returns union of arrays with empty array', () => {
        const input = [[1, 2, 3], []]
        const expected = [1, 2, 3]
        const result = x.union(...input)
        expect(result).toEqual(expected)
    })

    test('returns union of arrays with empty arrays', () => {
        const input: number[][] = [[], [], []]
        const expected: number[] = []
        const result = x.union(...input)
        expect(result).toEqual(expected)
    })

    test('returns union of arrays with duplicate values', () => {
        const input = [[1, 2, 3], [2, 3, 4, 4, 4]]
        const expected = [1, 2, 3, 4]
        const result = x.union(...input)
        expect(result).toEqual(expected)
    })

    test('returns union of arrays with duplicate values and empty array', () => {
        const input = [[1, 2, 3], [2, 3, 4, 4, 4], []]
        const expected = [1, 2, 3, 4]
        const result = x.union(...input)
        expect(result).toEqual(expected)
    })
})

describe('last', () => {
    test('returns last element', () => {
        const input = [1, 2, 3]
        const expected = 3
        const result = x.last(input)
        expect(result).toBe(expected)
    })

    test('returns undefined when input is empty', () => {
        const input: number[] = []
        expect(() => x.last(input)).toThrow()
    })
})



describe('concat', () => {
    test('concatenates arrays', () => {
        const input = [[1, 2], [3, 4]]
        const expected = [1, 2, 3, 4]
        const result = x.concat(...input)
        expect(result).toEqual(expected)
    })

    test('concatenates arrays with empty array', () => {
        const input = [[1, 2], []]
        const expected = [1, 2]
        const result = x.concat(...input)
        expect(result).toEqual(expected)
    })

    test('concatenates arrays with empty arrays', () => {
        const input: number[][] = [[], [], []]
        const expected: number[] = []
        const result = x.concat(...input)
        expect(result).toEqual(expected)
    })
})

describe('first', () => {
    test('returns first element', () => {
        const input = [1, 2, 3]
        const expected = 1
        const result = x.first(input)
        expect(result).toBe(expected)
    })

    test('returns undefined when input is empty', () => {
        const input: number[] = []
        expect(() => x.first(input)).toThrow()
    })
})

describe('take', () => {
    test('returns first n elements', () => {
        const input = [1, 2, 3, 4, 5]
        const expected = [1, 2]
        const result = x.take(input, 2)
        expect(result).toEqual(expected)
    })

    test('returns all elements when n is greater than array length', () => {
        const input = [1, 2, 3, 4, 5]
        const expected = [1, 2, 3, 4, 5]
        const result = x.take(input, 10)
        expect(result).toEqual(expected)
    })

    test('returns empty array when n is zero', () => {
        const input = [1, 2, 3, 4, 5]
        const expected: number[] = []
        const result = x.take(input, 0)
        expect(result).toEqual(expected)
    })

    test('returns empty array when input is empty', () => {
        const input: number[] = []
        const expected: number[] = []
        const result = x.take(input, 2)
        expect(result).toEqual(expected)
    })

    test('returns empty array when n is negative', () => {
        const input = [1, 2, 3, 4, 5]
        const expected: number[] = []
        const result = x.take(input, -2)
        expect(result).toEqual(expected)
    })

    test('returns empty array when n is NaN', () => {
        const input = [1, 2, 3, 4, 5]
        const expected: number[] = []
        const result = x.take(input, NaN)
        expect(result).toEqual(expected)
    })

    test('returns empty array when n is Infinity', () => {
        const input = [1, 2, 3, 4, 5]
        const expected = [1, 2, 3, 4, 5]
        const result = x.take(input, Infinity)
        expect(result).toEqual(expected)
    })

    test('returns empty array when n is negative Infinity', () => {
        const input = [1, 2, 3, 4, 5]
        const expected: number[] = []
        const result = x.take(input, -Infinity)
        expect(result).toEqual(expected)
    })

    test('returns empty array when n is negative zero', () => {
        const input = [1, 2, 3, 4, 5]
        const expected: number[] = []
        const result = x.take(input, -0)
        expect(result).toEqual(expected)
    })
})

describe('takeRight', () => {
    test('returns last n elements', () => {
        const input = [1, 2, 3, 4, 5]
        const expected = [4, 5]
        const result = x.takeRight(input, 2)
        expect(result).toEqual(expected)
    })

    test('returns all elements when n is greater than array length', () => {
        const input = [1, 2, 3, 4, 5]
        const expected = [1, 2, 3, 4, 5]
        const result = x.takeRight(input, 10)
        expect(result).toEqual(expected)
    })

    test('returns empty array when n is zero', () => {
        const input = [1, 2, 3, 4, 5]
        const expected: number[] = []
        const result = x.takeRight(input, 0)
        expect(result).toEqual(expected)
    })

    test('returns empty array when input is empty', () => {
        const input: number[] = []
        const expected: number[] = []
        const result = x.takeRight(input, 2)
        expect(result).toEqual(expected)
    })

    test('returns empty array when n is negative', () => {
        const input = [1, 2, 3, 4, 5]
        const expected: number[] = []
        const result = x.takeRight(input, -2)
        expect(result).toEqual(expected)
    })

    test('returns empty array when n is NaN', () => {
        const input = [1, 2, 3, 4, 5]
        const expected: number[] = []
        const result = x.takeRight(input, NaN)
        expect(result).toEqual(expected)
    })

    test('returns empty array when n is Infinity', () => {
        const input = [1, 2, 3, 4, 5]
        const expected = [1, 2, 3, 4, 5]
        const result = x.takeRight(input, Infinity)
        expect(result).toEqual(expected)
    })

    test('returns empty array when n is negative Infinity', () => {
        const input = [1, 2, 3, 4, 5]
        const expected: number[] = []
        const result = x.takeRight(input, -Infinity)
        expect(result).toEqual(expected)
    })

    test('returns empty array when n is negative zero', () => {
        const input = [1, 2, 3, 4, 5]
        const expected: number[] = []
        const result = x.takeRight(input, -0)
        expect(result).toEqual(expected)
    })
})

describe('hasOne', () => {
    test('returns true when array has one truthy value', () => {
        const input = [0, 1, 0, 0, 0]
        const expected = true
        const result = x.hasOne(input)
        expect(result).toBe(expected)
    })
    test('returns false when array has no truthy values', () => {
        const input = [0, 0, 0, 0, 0]
        const expected = false
        const result = x.hasOne(input)
        expect(result).toBe(expected)
    })
    test('returns false when array has multiple truthy values', () => {
        const input = [1, 1, 1, 1, 1]
        const expected = false
        const result = x.hasOne(input)
        expect(result).toBe(expected)
    })
    test('returns false when array has non-boolean values', () => {
        const input = ['foo', 1, 0, 0, 0]
        const expected = false
        const result = x.hasOne(input)
        expect(result).toBe(expected)
    })
    test('returns true when array has one truthy value and one null value', () => {
        const input = ['foo', 0, 0, 0, null]
        const expected = true
        const result = x.hasOne(input)
        expect(result).toBe(expected)
    })
})

describe('groupBy', () => {
    test('groups by length', () => {
        const input = ['foo', 'bar', 'hello', 'world']
        const expected = { 3: ['foo', 'bar'], 5: ['hello', 'world'] }
        const result = x.groupBy(input, x => x.length)
        expect(result).toEqual(expected)
    })
})

describe('firstOrDefault', () => {
    test('returns first element', () => {
        const input = [1, 2, 3]
        const expected = 1
        const result = x.firstOrDefault(input, 0)
        expect(result).toBe(expected)
    })
    test('returns default value', () => {
        const input: number[] = []
        const expected = 0
        const result = x.firstOrDefault(input, 0)
        expect(result).toBe(expected)
    })
})

describe('flatMap', () => {
    test('flattens array', () => {
        const input = [[1, 2], [3, 4]]
        const expected = [1, 2, 3, 4]
        const result = x.flatMap(input, x => x)
        expect(result).toEqual(expected)
    })

    test('flattens array with mapping', () => {
        const input = [[1, 2], [3, 4]]
        const expected = [2, 4, 6, 8]
        const result = x.flatMap(input, x => x.map(y => y * 2))
        expect(result).toEqual(expected)
    })
})