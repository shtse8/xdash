// Removed bun:test import
import { inlineSwitch } from '../src/switch'; // Changed import path

describe('InlineSwitch', () => {
    test('should correctly handle a matching case', () => { // Changed 'it' to 'test'
        const result = inlineSwitch('apple')
            .case('apple', () => 'red')
            .case('banana', () => 'yellow')
            .execute();

        expect(result).toBe('red');
    });

    test('should return the default case when no cases match', () => { // Changed 'it' to 'test'
        const result = inlineSwitch('kiwi')
            .case('apple', () => 'red')
            .case('banana', () => 'yellow')
            .default(() => 'unknown color')
            .execute();

        expect(result).toBe('unknown color');
    });

    test('should handle mixed return types', () => { // Changed 'it' to 'test'
        const result = inlineSwitch('banana')
            .case('apple', () => 42)
            .case('banana', () => true)
            .default(() => 'unknown')
            .execute();

        expect(result).toBe(true);

        const result2 = inlineSwitch('orange') // Test default case with mixed types
            .case('apple', () => 42)
            .case('banana', () => true)
            .default(() => null)
            .execute();
        expect(result2).toBeNull();
    });

    test('should throw an error if no cases match and no default case is provided', () => { // Changed 'it' to 'test' and assertion
        const switchInstance = inlineSwitch('kiwi')
            .case('apple', () => 'red')
            .case('banana', () => 'yellow');

        // Expect execute() to throw the specific error
        expect(() => switchInstance.execute()).toThrow('No matching case found for value: kiwi and no default case was provided.');
    });

    test('should prevent setting multiple default cases', () => { // Changed 'it' to 'test'
        expect(() => {
            inlineSwitch('kiwi')
                .default(() => 'default 1')
                // @ts-expect-error Testing runtime prevention of multiple defaults
                .default(() => 'default 2');
        }).toThrow("Default case already set.");
    });

    test('should handle different value types for matching', () => {
        const resultNum = inlineSwitch(10)
            .case(5, () => 'five')
            .case(10, () => 'ten')
            .execute();
        expect(resultNum).toBe('ten');

        const resultBool = inlineSwitch(false)
            .case(true, () => 'is true')
            .case(false, () => 'is false')
            .execute();
        expect(resultBool).toBe('is false');
    });
});
