import { describe, test, it, expect } from 'bun:test'
import x from '../src/index'


describe('str', () => {
    test('capitalize', () => {
        expect(x.capitalize('abc')).toBe('Abc')
        expect(x.capitalize('ABC')).toBe('ABC')
        expect(x.capitalize('aBC')).toBe('ABC')
        expect(x.capitalize('Abc')).toBe('Abc')
        expect(x.capitalize('')).toBe('')
    });
    test('camelCase', () => {
        expect(x.camelCase('foo-bar')).toBe('fooBar')
        expect(x.camelCase('foo_bar')).toBe('fooBar')
        expect(x.camelCase('FooBar')).toBe('fooBar')
        expect(x.camelCase('FOO_BAR')).toBe('fooBar')
        expect(x.camelCase('foo')).toBe('foo')
        expect(x.camelCase('')).toBe('')
    });
    test('kebabCase', () => {
        expect(x.kebabCase('fooBar')).toBe('foo-bar')
        expect(x.kebabCase('foo_bar')).toBe('foo-bar')
        expect(x.kebabCase('foo-bar')).toBe('foo-bar')
        expect(x.kebabCase('FOO_BAR')).toBe('foo-bar')
        expect(x.kebabCase('foo')).toBe('foo')
        expect(x.kebabCase('')).toBe('')
    });
    test('snakeCase', () => {
        expect(x.snakeCase('fooBar')).toBe('foo_bar')
        expect(x.snakeCase('foo-bar')).toBe('foo_bar')
        expect(x.snakeCase('foo_bar')).toBe('foo_bar')
        expect(x.snakeCase('FOO_BAR')).toBe('foo_bar')
        expect(x.snakeCase('foo')).toBe('foo')
        expect(x.snakeCase('')).toBe('')
    });
    test('pascalCase', () => {
        expect(x.pascalCase('foo-bar')).toBe('FooBar')
        expect(x.pascalCase('foo_bar')).toBe('FooBar')
        expect(x.pascalCase('FooBar')).toBe('FooBar')
        expect(x.pascalCase('FOO_BAR')).toBe('FooBar')
        expect(x.pascalCase('foo')).toBe('Foo')
        expect(x.pascalCase('')).toBe('')
    });
    test('lowerCase', () => {
        expect(x.lowerCase('FOO')).toBe('foo')
        expect(x.lowerCase('foo')).toBe('foo')
        expect(x.lowerCase('')).toBe('')
    });
    test('upperCase', () => {
        expect(x.upperCase('foo')).toBe('FOO')
        expect(x.upperCase('FOO')).toBe('FOO')
        expect(x.upperCase('')).toBe('')
    });
    test('detectCase', () => {
        expect(x.detectCase('fooBar')).toBe('camel')
        expect(x.detectCase('foo-bar')).toBe('kebab')
        expect(x.detectCase('foo_bar')).toBe('snake')
        expect(x.detectCase('FooBar')).toBe('pascal')
        expect(x.detectCase('FOO-BAR')).toBe('screaming-kebab')
        expect(x.detectCase('FOo-BAR')).toBe('mixed')
        expect(x.detectCase('FOO_BAR')).toBe('screaming-snake')
        expect(x.detectCase('FOo_BAR')).toBe('mixed')
        expect(x.detectCase('foo')).toBe('lower')
        expect(x.detectCase('FOO')).toBe('upper')
        expect(x.detectCase('fooBar-baz')).toBe('mixed')
        expect(x.detectCase('')).toBe('none')
        expect(x.detectCase('foo bar-bax')).toBe('mixed')
    })
    test('separateWords', () => {
        expect(x.separateWords('fooBar')).toEqual(['foo', 'Bar'])
        expect(x.separateWords('foo-bar')).toEqual(['foo', 'bar'])
        expect(x.separateWords('foo_bar')).toEqual(['foo', 'bar'])
        expect(x.separateWords('FooBar')).toEqual(['Foo', 'Bar'])
        expect(x.separateWords('FOO-BAR')).toEqual(['FOO', 'BAR'])
        // expect to throw an error
        expect(() => x.separateWords('FOo-BAR')).toThrow('Cannot separate words in a mixed case string')
        expect(x.separateWords('FOO_BAR')).toEqual(['FOO', 'BAR'])
        expect(() => x.separateWords('FOo_BAR')).toThrow('Cannot separate words in a mixed case string')
        expect(x.separateWords('foo')).toEqual(['foo'])
        expect(x.separateWords('FOO')).toEqual(['FOO'])
        expect(x.separateWords('')).toEqual([])
        expect(() => x.separateWords('foo bar-bax')).toThrow('Cannot separate words in a mixed case string')
    })
})