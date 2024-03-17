import { describe, test, it, expect } from 'bun:test'
import x from '../src/index'

describe('mapValues', () => {
    test("Maps object values", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const expected = { a: 2, b: 4, c: 6 };
        const result = x.mapValues(obj, x => x * 2);
        expect(result).toEqual(expected);
    });

    test("Maps object values with different types", () => {
        const obj = { a: 1, b: 'hello', c: true };
        const expected = { a: '1', b: 'hello', c: 'true' };
        const result = x.mapValues(obj, x => String(x));
        expect(result).toEqual(expected);
    })

    test("Maps object values with keys", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const expected = { a: 'a', b: 'b', c: 'c' };
        const result = x.mapValues(obj, (value, key) => key);
        expect(result).toEqual(expected);
    })
})

describe('mapKeys', () => {
    test("Maps object keys with different values", () => {
        const obj = { a: 'hello', b: 'world' };
        const expected = { A: 'hello', B: 'world' };
        const result = x.mapKeys(obj, (key, value) => key.toUpperCase());
        expect(result).toEqual(expected);
    });

    test("Maps object keys with same values", () => {
        const obj = { a: 'hello', b: 'hello' };
        const expected = { HELLO: 'hello' };
        const result = x.mapKeys(obj, (key, value) => value.toUpperCase());
        expect(result).toEqual(expected);
    })
})

// filterValues
describe('filterValues', () => {
    test("Filters object values", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const expected = { a: 1 };
        const result = x.filterValues(obj, x => x === 1);
        expect(result).toEqual(expected);
    });

    test("Filters object values with different types", () => {
        const obj = { a: 1, b: 'hello', c: true };
        const expected = { a: 1 };
        const result = x.filterValues(obj, x => typeof x === 'number');
        expect(result).toEqual(expected);
    })

    test("Filters object values with keys", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const expected = { a: 1, b: 2 };
        const result = x.filterValues(obj, (value, key) => key !== 'c');
        expect(result).toEqual(expected);
    })
})

// pick
describe('pick', () => {
    test("Picks object properties", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const expected = { a: 1 };
        const result = x.pick(obj, ['a']);
        expect(result).toEqual(expected);
    });

    test("Picks object properties with different types", () => {
        const obj = { a: 1, b: 'hello', c: true };
        const expected = { a: 1, b: 'hello' };
        const result = x.pick(obj, ['a', 'b']);
        expect(result).toEqual(expected);
    })

    test("Picks object properties with keys", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const expected = { a: 1, b: 2 };
        const result = x.pick(obj, ['a', 'b']);
        expect(result).toEqual(expected);
    })
})

// omit
describe('omit', () => {
    test("Omits object properties", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const expected = { b: 2, c: 3 };
        const result = x.omit(obj, ['a']);
        expect(result).toEqual(expected);
    });

    test("Omits object properties with different types", () => {
        const obj = { a: 1, b: 'hello', c: true };
        const expected = { b: 'hello', c: true };
        const result = x.omit(obj, ['a']);
        expect(result).toEqual(expected);
    })

    test("Omits object properties with keys", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const expected = { a: 1 };
        const result = x.omit(obj, ['b', 'c']);
        expect(result).toEqual(expected);
    })
})

// merge
describe('merge', () => {
    test("Merges objects", () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const expected = { a: 1, b: 2 };
        const result = x.merge(obj1, obj2);
        expect(result).toEqual(expected);
    });

    test("Merges objects with different types", () => {
        const obj1 = { a: 1 };
        const obj2 = { a: 'hello' };
        const expected = { a: 'hello' };
        const result = x.merge(obj1, obj2);
        expect(result).toEqual(expected);
    })

    test("Merges objects with keys", () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const expected = { a: 1, b: 2 };
        const result = x.merge(obj1, obj2);
        expect(result).toEqual(expected);
    })
})

// filterKeys
describe('filterKeys', () => {
    test("Filters object keys", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const expected = { a: 1 };
        const result = x.filterKeys(obj, x => x === 'a');
        expect(result).toEqual(expected);
    });

    test("Filters object keys with different types", () => {
        const obj = { a: 1, b: 'hello', c: true };
        const expected = { a: 1 };
        const result = x.filterKeys(obj, x => x === 'a');
        expect(result).toEqual(expected);
    })

    test("Filters object keys with values", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const expected = { a: 1, b: 2 };
        const result = x.filterKeys(obj, (key, value) => value !== 3);
        expect(result).toEqual(expected);
    })
})

// invert
describe('invert', () => {
    test("Inverts object keys and values", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const expected = { 1: 'a', 2: 'b', 3: 'c' };
        const result = x.invert(obj);
        expect(result).toEqual(expected);
    });

    test("Inverts object keys and values with different types", () => {
        const obj = { a: 1, b: 'hello', c: true, 1: 'a', hello: 'b', true: 'c' };
        const expected = { 1: 'a', hello: 'b', true: 'c', a: '1', b: 'hello', c: 'true' };
        const result = x.invert(obj);
        expect(result).toEqual(expected);
    })
})

// entries
describe('entries', () => {
    test("Gets object entries", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const expected = [['a', 1], ['b', 2], ['c', 3]] as ['a' | 'b' | 'c', number][];
        const result = x.entries(obj);
        expect(result).toEqual(expected);
    });

    test("Gets object entries with different types", () => {
        const obj = { a: 1, b: 'hello', c: true };
        const expected = [['a', 1], ['b', 'hello'], ['c', true]] as ['a' | 'b' | 'c', number | string | boolean][];
        const result = x.entries(obj);
        expect(result).toEqual(expected);
    })
})

// values
describe('values', () => {
    test("Gets object values", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const expected = [1, 2, 3];
        const result = x.values(obj);
        expect(result).toEqual(expected);
    });

    test("Gets object values with different types", () => {
        const obj = { a: 1, b: 'hello', c: true };
        const expected = [1, 'hello', true];
        const result = x.values(obj);
        expect(result).toEqual(expected);
    })
})

// keys
describe('keys', () => {
    test("Gets object keys", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const expected = ['a', 'b', 'c'];
        const result = x.keys(obj);
        expect(result).toEqual(expected);
    });

    test("Gets object keys with different types", () => {
        const obj = { a: 1, b: 'hello', c: true };
        const expected = ['a', 'b', 'c'];
        const result = x.keys(obj);
        expect(result).toEqual(expected);
    })
})

// hasKey
describe('hasKey', () => {
    test("Checks object keys", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = x.hasKey(obj, 'a');
        expect(result).toBe(true);
    });

    test("Checks object keys with different types", () => {
        const obj = { a: 1, b: 'hello', c: true };
        const result = x.hasKey(obj, 'a');
        expect(result).toBe(true);
    })

    test("Checks object keys with missing key", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = x.hasKey(obj, 'd');
        expect(result).toBe(false);
    })
})

// hasValue
describe('hasValue', () => {
    test("Checks object values", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = x.hasValue(obj, 1);
        expect(result).toBe(true);
    });

    test("Checks object values with different types", () => {
        const obj = { a: 1, b: 'hello', c: true };
        const result = x.hasValue(obj, 'hello');
        expect(result).toBe(true);
    })

    test("Checks object values with missing value", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const result = x.hasValue(obj, 4);
        expect(result).toBe(false);
    })
})