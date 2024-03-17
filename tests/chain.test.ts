import { describe, test, it, expect } from 'bun:test'
import { $op, chain } from '../src/index'

// Define a simple function for testing
const add = (x: number, y: number): number => x + y;

describe('$op function', () => {
    it('correctly curries a function with provided arguments', () => {
        // Curry the `add` function with $op
        const curriedAdd = $op(add);

        // Prepare the curried function with one argument (5)
        const addFive = curriedAdd(5);

        // Now `addFive` should be a function that expects another number and adds 5 to it
        const result = addFive(10); // This should be equivalent to `add(10, 5)`

        // Verify the result is as expected
        expect(result).toBe(15);
    });

    it('returns a function that correctly applies all arguments to the original function', () => {
        // Define a more complex function for testing
        const subtract = (x: number, y: number, z: number): number => x - y - z;

        // Curry the `subtract` function with $op
        const curriedSubtract = $op(subtract);

        // Prepare the curried function with two arguments (10, 5)
        const subtractTenAndFive = curriedSubtract(10, 5);

        // Now `subtractTenAndFive` should be a function that expects another number,
        // subtracts 10 and then 5 from it
        const result = subtractTenAndFive(20); // This should be equivalent to `subtract(20, 10, 5)`

        // Verify the result is as expected
        expect(result).toBe(5);
    });
});

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
});