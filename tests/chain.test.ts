// Removed bun:test import
import { $op, chain } from '../src/chain'; // Changed import path

// Define a simple function for testing
const add = (x: number, y: number): number => x + y;
const multiply = (x: number, y: number): number => x * y; // Added for testing $op example

describe('$op function', () => {
    test('correctly curries a function with provided arguments', () => { // Changed 'it' to 'test'
        // Curry the `add` function with $op
        const curriedAdd = $op(add);

        // Prepare the curried function with one argument (5)
        const addFive = curriedAdd(5);

        // Now `addFive` should be a function that expects another number and adds 5 to it
        const result = addFive(10); // This should be equivalent to `add(10, 5)`

        // Verify the result is as expected
        expect(result).toBe(15);
    });

    test('returns a function that correctly applies all arguments to the original function', () => { // Changed 'it' to 'test'
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

    test('works with Chain.pipe as shown in example', () => { // Added test for example usage
        const result = chain(5)
            .pipe($op(add)(5))       // 5 + 5 = 10
            .pipe($op(multiply)(2))  // 10 * 2 = 20
            .unwrap();
        expect(result).toBe(20);
    });
});

describe('Chain class', () => {
    test('initializes with a value and unwraps it correctly', () => { // Changed 'it' to 'test'
        const initialValue = 10;
        const result = chain(initialValue).unwrap(); // Changed value() to unwrap()

        expect(result).toBe(initialValue);
    });

    test('applies a single operation to the initial value', () => { // Changed 'it' to 'test'
        const initialValue = 5;
        const addFive = (x: number) => x + 5;
        const result = chain(initialValue).pipe(addFive).unwrap(); // Changed value() to unwrap()

        expect(result).toBe(10);
    });

    test('chains multiple operations and applies them in order', () => { // Changed 'it' to 'test'
        const initialValue = 5;
        const addFive = (x: number) => x + 5;
        const multiplyByTwo = (x: number) => x * 2;
        // Test chaining multiple .pipe() calls
        const result = chain(initialValue).pipe(addFive).pipe(multiplyByTwo).unwrap(); // Changed value() to unwrap()

        // Expected order of operations: (5 + 5) * 2
        expect(result).toBe(20);

        // Test multiple ops in a single .pipe() call (using overloads)
        const result2 = chain(initialValue).pipe(addFive, multiplyByTwo).unwrap(); // Changed value() to unwrap()
        expect(result2).toBe(20);
    });

    test('handles operations that change the type of the value', () => { // Changed 'it' to 'test'
        const initialValue = 5;
        const toString = (x: number): string => x.toString();
        const addHello = (x: string): string => `Hello ${x}`;
        const result = chain(initialValue).pipe(toString).pipe(addHello).unwrap(); // Changed value() to unwrap()

        // Expected result is a string transformation of the initial value
        expect(result).toBe("Hello 5");

        // Test type change within a single pipe call
        const result2 = chain(initialValue).pipe(toString, addHello).unwrap(); // Changed value() to unwrap()
        expect(result2).toBe("Hello 5");
    });

    test('handles $op helper within pipe', () => { // Added test for $op usage
        const initialValue = 10;
        const result = chain(initialValue)
            .pipe($op(add)(5)) // 10 + 5 = 15
            .pipe($op(multiply)(3)) // 15 * 3 = 45
            .unwrap();
        expect(result).toBe(45);
    });
});