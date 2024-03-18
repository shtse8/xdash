import { describe, test, it, expect } from 'bun:test'
import { chain, Chain } from '../src/chain-bundle'
import abs from '../src/chain-ops/abs'
import double from '../src/chain-ops/double'

describe('Chain class', () => {
    it('initializes with a value and unwraps it correctly', () => {
        const initialValue = 10;
        const result = chain(initialValue).value();

        expect(result).toBe(initialValue);
    });

    it('applies a single operation to the initial value', () => {
        const initialValue = -5;
        Chain.install(abs);
        Chain.install(double);
        const result = chain(initialValue).abs().double().value();
        expect(result).toBe(10);
    });

});