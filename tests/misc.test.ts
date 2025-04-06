// Removed bun:test import
import { noop } from '../src/misc'; // Changed import path

describe('misc', () => {
    test('noop should return undefined', () => { // Clarified test name
        expect(noop()).toBeUndefined(); // Removed x. prefix
    });
});
