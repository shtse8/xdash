import { describe, expect, it, test } from 'bun:test'
import x from '../src/index'

describe('misc', () => {
    test('noop', () => {
        expect(x.noop()).toBe(undefined)
    })
})
