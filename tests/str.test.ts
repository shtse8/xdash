// Removed bun:test import
import {
    capitalize,
    camelCase,
    kebabCase,
    snakeCase,
    pascalCase,
    lowerCase,
    upperCase,
    detectCase,
    separateWords,
    split // Added split import
} from '../src/string'; // Changed import path


describe('str', () => {
    test('capitalize', () => {
        expect(capitalize('abc')).toBe('Abc')
        expect(capitalize('ABC')).toBe('ABC')
        expect(capitalize('aBC')).toBe('ABC') // Note: Only first char is affected
        expect(capitalize('Abc')).toBe('Abc')
        expect(capitalize('')).toBe('')
        expect(capitalize('1abc')).toBe('1abc') // Non-letter first char
    });
    test('camelCase', () => {
        expect(camelCase('foo-bar')).toBe('fooBar')
        expect(camelCase('foo_bar')).toBe('fooBar')
        expect(camelCase('FooBar')).toBe('fooBar')
        expect(camelCase('FOO_BAR')).toBe('fooBar')
        expect(camelCase('foo')).toBe('foo')
        expect(camelCase('')).toBe('')
        expect(camelCase('foo bar')).toBe('fooBar') // Added space separator test
        expect(camelCase('--foo-bar--')).toBe('fooBar') // Leading/trailing separators
    });
    test('kebabCase', () => {
        expect(kebabCase('fooBar')).toBe('foo-bar')
        expect(kebabCase('foo_bar')).toBe('foo-bar')
        expect(kebabCase('foo-bar')).toBe('foo-bar')
        expect(kebabCase('FOO_BAR')).toBe('foo-bar')
        expect(kebabCase('foo')).toBe('foo')
        expect(kebabCase('')).toBe('')
        expect(kebabCase('foo bar')).toBe('foo-bar') // Added space separator test
        expect(kebabCase('FooBar')).toBe('foo-bar') // PascalCase input
    });
    test('kebabCase screaming', () => { // Separated screaming tests
        expect(kebabCase('fooBar', { screaming: true })).toBe('FOO-BAR')
        expect(kebabCase('foo_bar', { screaming: true })).toBe('FOO-BAR')
        expect(kebabCase('foo-bar', { screaming: true })).toBe('FOO-BAR')
        expect(kebabCase('FOO_BAR', { screaming: true })).toBe('FOO-BAR')
        expect(kebabCase('foo', { screaming: true })).toBe('FOO')
    });
    test('snakeCase', () => {
        expect(snakeCase('fooBar')).toBe('foo_bar')
        expect(snakeCase('foo-bar')).toBe('foo_bar')
        expect(snakeCase('foo_bar')).toBe('foo_bar')
        expect(snakeCase('FOO_BAR')).toBe('foo_bar')
        expect(snakeCase('foo')).toBe('foo')
        expect(snakeCase('')).toBe('')
        expect(snakeCase('foo bar')).toBe('foo_bar') // Added space separator test
        expect(snakeCase('FooBar')).toBe('foo_bar') // PascalCase input
    });
     test('snakeCase screaming', () => { // Separated screaming tests
        expect(snakeCase('fooBar', { screaming: true })).toBe('FOO_BAR')
        expect(snakeCase('foo-bar', { screaming: true })).toBe('FOO_BAR')
        expect(snakeCase('foo_bar', { screaming: true })).toBe('FOO_BAR')
        expect(snakeCase('FOO_BAR', { screaming: true })).toBe('FOO_BAR')
        expect(snakeCase('foo', { screaming: true })).toBe('FOO')
    });
    test('pascalCase', () => {
        expect(pascalCase('foo-bar')).toBe('FooBar')
        expect(pascalCase('foo_bar')).toBe('FooBar')
        expect(pascalCase('FooBar')).toBe('FooBar')
        expect(pascalCase('FOO_BAR')).toBe('FooBar')
        expect(pascalCase('foo')).toBe('Foo')
        expect(pascalCase('')).toBe('')
        expect(pascalCase('foo bar')).toBe('FooBar') // Added space separator test
    });
    test('lowerCase', () => {
        expect(lowerCase('FOO')).toBe('foo')
        expect(lowerCase('foo')).toBe('foo')
        expect(lowerCase('Foo')).toBe('foo')
        expect(lowerCase('')).toBe('')
        expect(lowerCase('FOO-BAR')).toBe('foo-bar') // Test with separators
    });
    test('upperCase', () => {
        expect(upperCase('foo')).toBe('FOO')
        expect(upperCase('FOO')).toBe('FOO')
        expect(upperCase('Foo')).toBe('FOO')
        expect(upperCase('')).toBe('')
        expect(upperCase('foo-bar')).toBe('FOO-BAR') // Test with separators
    });
    test('detectCase', () => {
        expect(detectCase('fooBar')).toBe('camel')
        expect(detectCase('foo-bar')).toBe('kebab')
        expect(detectCase('foo_bar')).toBe('snake')
        expect(detectCase('FooBar')).toBe('pascal')
        expect(detectCase('FOO-BAR')).toBe('screaming-kebab')
        expect(detectCase('FOo-BAR')).toBe('mixed') // Mixed case kebab
        expect(detectCase('FOO_BAR')).toBe('screaming-snake')
        expect(detectCase('FOo_BAR')).toBe('mixed') // Mixed case snake
        expect(detectCase('foo')).toBe('lower')
        expect(detectCase('FOO')).toBe('upper')
        expect(detectCase('foo bar')).toBe('lower') // Space separated lower
        expect(detectCase('FOO BAR')).toBe('upper') // Space separated upper
        expect(detectCase('Foo Bar')).toBe('mixed') // Space separated pascal-like
        expect(detectCase('fooBar-baz')).toBe('mixed') // Mixed separators
        expect(detectCase('')).toBe('none')
        expect(detectCase('foo bar-bax')).toBe('mixed') // Mixed separators
        expect(detectCase('fooBAR')).toBe('camel') // Still camel
        expect(detectCase('FOOBar')).toBe('pascal') // Still pascal
    })
    test('separateWords', () => {
        expect(separateWords('fooBar')).toEqual(['foo', 'Bar'])
        expect(separateWords('foo-bar')).toEqual(['foo', 'bar'])
        expect(separateWords('foo_bar')).toEqual(['foo', 'bar'])
        expect(separateWords('FooBar')).toEqual(['Foo', 'Bar'])
        expect(separateWords('FOO-BAR')).toEqual(['FOO', 'BAR'])
        expect(separateWords('FOO_BAR')).toEqual(['FOO', 'BAR'])
        expect(separateWords('foo bar')).toEqual(['foo', 'bar']) // Added space test
        expect(separateWords('FOO BAR')).toEqual(['FOO', 'BAR']) // Added space test
        expect(separateWords('foo')).toEqual(['foo'])
        expect(separateWords('FOO')).toEqual(['FOO'])
        expect(separateWords('')).toEqual([])
        // Test new behavior for mixed cases (should split reasonably)
        expect(separateWords('FOo-BAR')).toEqual(['FOo', 'BAR']);
        expect(separateWords('FOo_BAR')).toEqual(['FOo', 'BAR']);
        expect(separateWords('foo bar-bax')).toEqual(['foo', 'bar', 'bax']);
        expect(separateWords('Foo Bar')).toEqual(['Foo', 'Bar']); // Mixed space separated
    })
    test('split', () => { // Added tests for split
        expect(split('a-b-c', '-')).toEqual(['a', 'b', 'c']);
        expect(split('a-b-c', '-', 2)).toEqual(['a', 'b']);
        expect(split('abc', '')).toEqual(['a', 'b', 'c']);
        expect(split('hello', /l/)).toEqual(['he', '', 'o']); // Regex separator
        expect(split('', '-')).toEqual(['']); // Splitting empty string
    });
})