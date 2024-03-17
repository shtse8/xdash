import { describe, test, it, expect } from 'bun:test'
import x from '../src/index'

describe('chain', () => {
    // test using basic array operations
    test("Chains array operations", () => {
        const arr = [1, 2, 3, 4, 5];
        const expected = [2, 4, 6, 8, 10];
        const result = x.chain(arr)
            .pipe(x.map, x => x * 2)
            .unwrap();
        expect(result).toEqual(expected);
    });

    // test using basic string operations
    test("Chains string operations", () => {
        const str = "Hello world";
        const expected = "HELLO WORLD";
        const result = x.chain(str)
            .pipe(x.upperCase)
            .unwrap();
        expect(result).toBe(expected);
    });

    // test using basic object operations
    test("Chains object operations", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const expected = { a: 2, b: 4, c: 6 };
        const result = x.chain(obj)
            .pipe(x.mapValues, x => x * 2)
            .unwrap();
        expect(result).toEqual(expected);
    });
})