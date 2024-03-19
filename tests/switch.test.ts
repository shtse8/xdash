import { describe, test, it, expect } from 'bun:test'
import { inlineSwitch } from '../src/index';

describe('InlineSwitch', () => {
    it('should correctly handle a matching case', () => {
        const result = inlineSwitch('apple')
            .case('apple', () => 'red')
            .case('banana', () => 'yellow')
            .execute();

        expect(result).toBe('red');
    });

    it('should return the default case when no cases match', () => {
        const result = inlineSwitch('kiwi')
            .case('apple', () => 'red')
            .case('banana', () => 'yellow')
            .default(() => 'unknown color')
            .execute();

        expect(result).toBe('unknown color');
    });

    it('should handle mixed return types', () => {
        const result = inlineSwitch('banana')
            .case('apple', () => 42)
            .case('banana', () => true)
            .default(() => 'unknown')
            .execute();

        expect(result).toBe(true);
    });

    it('should throw an error if no cases match and no default case is provided', () => {
        const result = inlineSwitch('kiwi')
            .case('apple', () => 'red')
            .case('banana', () => 'yellow')
            .execute()

        expect(result).toBeUndefined();
    });

    it('should prevent setting multiple default cases', () => {
        expect(() => {
            inlineSwitch('kiwi')
                .default(() => 'default 1')
                // @ts-ignore
                .default(() => 'default 2')
                .execute();
        }).toThrow("Default case already set.");
    });
});
