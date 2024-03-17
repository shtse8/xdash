import { describe, test, it, expect } from 'bun:test'
import { chain } from '../src/index'

// Define a simple function for testing
const add = (x: number, y: number): number => x + y;


describe('Chain class', () => {
    it('initializes with a value and unwraps it correctly', () => {
        const initialValue = 10;
        const result = chain(initialValue).value();

        expect(result).toBe(initialValue);
    });

    it('applies a single operation to the initial value', () => {
        const initialValue = 5;
        const addFive = (x: number) => x + 5;
        const result = chain(initialValue).pipe(addFive).value();

        expect(result).toBe(10);
    });

    it('chains multiple operations and applies them in order', () => {
        const initialValue = 5;
        const addFive = (x: number) => x + 5;
        const multiplyByTwo = (x: number) => x * 2;
        const result = chain(initialValue).pipe(addFive).pipe(multiplyByTwo).value();

        // Expected order of operations: (5 + 5) * 2
        expect(result).toBe(20);
    });

    it('handles operations that change the type of the value', () => {
        const initialValue = 5;
        const toString = (x: number) => x.toString();
        const addHello = (x: string) => `Hello ${x}`;
        const result = chain(initialValue).pipe(toString).pipe(addHello).value();

        // Expected result is a string transformation of the initial value
        expect(result).toBe("Hello 5");
    });

    it('handles operations with arguments', () => {
        const initialValue = 5;
        const add = (x: number, y: number) => x + y;
        const result = chain(initialValue).pipe(add, x => x(5)).value();

        expect(result).toBe(10);
    });

});