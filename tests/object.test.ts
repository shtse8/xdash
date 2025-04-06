// Removed bun:test import
import {
    mapValues,
    mapKeys,
    filterValues,
    pick,
    omit,
    merge,
    filterKeys,
    invert,
    entries,
    values,
    keys,
    hasKey,
    hasValue
} from '../src/object'; // Changed import path

describe('mapValues', () => {
    test("Maps object values", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const expected = { a: 2, b: 4, c: 6 };
        const result = mapValues(obj, x => x * 2);
        expect(result).toEqual(expected);
    });

    test("Maps object values with different types", () => {
        const obj = { a: 1, b: 'hello', c: true };
        const expected = { a: '1', b: 'HELLO', c: 'TRUE' }; // String(true).toUpperCase() is 'TRUE'
        const result = mapValues(obj, x => String(x).toUpperCase()); // Apply toUpperCase consistently
        expect(result).toEqual(expected);
    })

    test("Maps object values using keys", () => { // Changed test name slightly
        const obj = { a: 1, b: 2, c: 3 };
        const expected = { a: 'a1', b: 'b2', c: 'c3' }; // Example using key and value
        const result = mapValues(obj, (value, key) => key + value);
        expect(result).toEqual(expected);
    })

    test("Handles empty object", () => {
        const obj: Record<string, number> = {}; // Explicitly type empty object
        const expected = {};
        const result = mapValues(obj, x => x * 2);
        expect(result).toEqual(expected);
      });
})

describe('mapKeys', () => {
    test("Maps object keys, preserving values", () => { // Changed test name
        const obj = { a: 'hello', b: 'world' };
        const expected = { A: 'hello', B: 'world' };
        const result = mapKeys(obj, (key, value) => key.toUpperCase());
        expect(result).toEqual(expected);
    });

    test("Maps object keys based on values (potential overwrite)", () => { // Changed test name
        const obj = { a: 'hello', b: 'hello', c: 'world' };
        const expected = { HELLO: 'hello', WORLD: 'world' }; // 'b' overwrites 'a' for key 'HELLO'
        const result = mapKeys(obj, (key, value) => value.toUpperCase());
        expect(result).toEqual(expected);
    })

    test("Handles empty object", () => {
        const obj = {};
        const expected = {};
        const result = mapKeys(obj, key => key.toUpperCase());
        expect(result).toEqual(expected);
      });
})

// filterValues
describe('filterValues', () => {
    test("Filters object based on values", () => { // Changed test name
        const obj = { a: 1, b: 2, c: 3, d: 2 };
        const expected = { b: 2, d: 2 };
        const result = filterValues(obj, x => x === 2);
        expect(result).toEqual(expected);
    });

    test("Filters object values based on type", () => { // Changed test name
        const obj = { a: 1, b: 'hello', c: true, d: 'world' };
        const expected = { b: 'hello', d: 'world' };
        const result = filterValues(obj, x => typeof x === 'string');
        expect(result).toEqual(expected);
    })

    test("Filters object values using keys", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const expected = { a: 1, c: 3 }; // Keep if key is 'a' or value is 3
        const result = filterValues(obj, (value, key) => key === 'a' || value === 3);
        expect(result).toEqual(expected);
    })

     test("Handles empty object", () => {
         const obj: Record<string, any> = {}; // Explicitly type empty object
        const expected = {};
        const result = filterValues(obj, x => x === 1);
        expect(result).toEqual(expected);
      });

     test("Returns empty object if no values match", () => {
        const obj = { a: 1, b: 2 };
        const expected = {};
        const result = filterValues(obj, x => x === 3);
        expect(result).toEqual(expected);
      });
})

// pick
describe('pick', () => {
    test("Picks specified properties from an object", () => { // Changed test name
        const obj = { a: 1, b: 'hello', c: true };
        const expected = { a: 1, c: true };
        const result = pick(obj, ['a', 'c']);
        expect(result).toEqual(expected);
    });

    test("Returns an empty object if no keys are picked", () => {
        const obj = { a: 1, b: 2, c: 3 };
        const expected = {};
        const result = pick(obj, []);
        expect(result).toEqual(expected);
    })

    test("Returns an empty object if input object is empty", () => {
        const obj: Record<string, any> = {}; // Explicitly type empty object
        const expected = {};
        const result = pick(obj, ['a', 'b']);
        expect(result).toEqual(expected);
    })

    test("Ignores keys that do not exist in the object", () => {
        // Remove unused @ts-expect-error from previous attempt
        const obj = { a: 1, b: 2 };
        const expected = { a: 1 };
        // @ts-expect-error Testing invalid key scenario
        const result = pick(obj, ['a', 'c']);
        expect(result).toEqual(expected);
      });
})

// omit
describe('omit', () => {
    test("Omits specified properties from an object", () => { // Changed test name
        const obj = { a: 1, b: 2, c: 3 };
        const expected = { a: 1 };
        const result = omit(obj, ['b', 'c']);
        expect(result).toEqual(expected);
    });

    test("Returns the original object if no keys are omitted", () => {
        const obj = { a: 1, b: 'hello' };
        const expected = { a: 1, b: 'hello' };
        const result = omit(obj, []);
        expect(result).toEqual(expected);
    })

    test("Returns an empty object if all keys are omitted", () => {
        const obj = { a: 1, b: 2 };
        const expected = {};
        const result = omit(obj, ['a', 'b']);
        expect(result).toEqual(expected);
    })

     test("Handles empty object", () => {
         const obj: Record<string, any> = {}; // Explicitly type empty object
        const expected = {};
        const result = omit(obj, ['a']);
        expect(result).toEqual(expected);
      });

     test("Ignores keys to omit that do not exist", () => {
        const obj = { a: 1, b: 2 };
        const expected = { a: 1 };
        // @ts-expect-error Testing runtime behavior of ignoring non-existent keys
        const result = omit(obj, ['b', 'c']);
        expect(result).toEqual(expected);
      });
})

// merge
describe('merge', () => {
    test("Merges two simple objects", () => { // Changed test name
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const expected = { a: 1, b: 2 };
        const result = merge(obj1, obj2);
        expect(result).toEqual(expected);
    });

    test("Merges objects with overlapping keys (last-in wins)", () => { // Changed test name
        const obj1 = { a: 1, b: 'old' };
        const obj2 = { a: 'new', c: true };
        const expected = { a: 'new', b: 'old', c: true };
        const result = merge(obj1, obj2);
        expect(result).toEqual(expected);
    })

    test("Merges multiple objects", () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        const obj3 = { c: 3, a: 'overwritten' };
        const expected = { a: 'overwritten', b: 2, c: 3 };
        const result = merge(obj1, obj2, obj3);
        expect(result).toEqual(expected);
    })

    test("Handles merging with empty objects", () => {
        const obj1 = { a: 1 };
        const obj2 = {};
        const obj3 = { b: 2 };
        const expected = { a: 1, b: 2 };
        const result = merge(obj1, obj2, obj3);
        expect(result).toEqual(expected);
        expect(merge({}, {})).toEqual({});
        expect(merge(obj1, {})).toEqual(obj1);
      });

    // Note: merge uses Object.assign, which performs a shallow merge.
    test("Performs a shallow merge", () => {
        const obj1 = { a: { x: 1 }, b: 1 };
        const obj2 = { a: { y: 2 }, c: 2 };
        const expected = { a: { y: 2 }, b: 1, c: 2 }; // obj2.a overwrites obj1.a completely
        const result = merge(obj1, obj2);
        expect(result).toEqual(expected);
      });
})

// filterKeys
describe('filterKeys', () => {
    test("Filters object based on keys", () => { // Changed test name
        const obj = { a: 1, b: 2, c: 3 };
        const expected = { a: 1, c: 3 };
        const result = filterKeys(obj, key => key === 'a' || key === 'c');
        expect(result).toEqual(expected);
    });

    test("Filters object keys using values", () => { // Changed test name
        const obj = { a: 1, b: 2, c: 3 };
        const expected = { b: 2, c: 3 };
        const result = filterKeys(obj, (key, value) => value > 1);
        expect(result).toEqual(expected);
    })

    test("Handles empty object", () => {
        const obj = {};
        const expected = {};
        const result = filterKeys(obj, key => key === 'a');
        expect(result).toEqual(expected);
      });

    test("Returns empty object if no keys match", () => {
        const obj = { a: 1, b: 2 };
        const expected = {};
        const result = filterKeys(obj, key => key === 'c');
        expect(result).toEqual(expected);
      });
})

// invert
describe('invert', () => {
    test("Inverts object with string values", () => { // Changed test name
        const obj = { a: 'hello', b: 'world' };
        const expected = { hello: 'a', world: 'b' };
        const result = invert(obj);
        expect(result).toEqual(expected);
    });

    test("Inverts object with numeric values (keys become strings)", () => { // Changed test name
        const obj = { a: 1, b: 2, c: 3 };
        const expected = { '1': 'a', '2': 'b', '3': 'c' }; // Numeric keys are stringified
        const result = invert(obj);
        expect(result).toEqual(expected);
    });

    test("Handles value collisions (last key wins)", () => { // Changed test name
        const obj = { a: 'hello', b: 'world', c: 'hello' };
        const expected = { hello: 'c', world: 'b' }; // 'c' overwrites 'a' for value 'hello'
        const result = invert(obj);
        expect(result).toEqual(expected);
    });

    test("Handles empty object", () => {
        const obj = {};
        const expected = {};
        const result = invert(obj);
        expect(result).toEqual(expected);
      });

    // Test case adjusted: removed boolean value as it's not a valid key type per function signature
    test("Inverts object keys and values with mixed types (excluding boolean)", () => {
        const obj = { a: 1, b: 'hello', num1: 'a', strHello: 'b' };
        // Expected: numeric values become string keys
        // Note: 'hello' key gets overwritten by 'strHello'
        const finalExpected = { '1': 'a', hello: 'b', a: 'num1', b: 'strHello' }; // Correct expected result
        const result = invert(obj);
        expect(result).toEqual(finalExpected);
    })
})

// entries
describe('entries', () => {
    test("Gets key-value pairs from an object", () => { // Changed test name
        const obj = { a: 1, b: 2, c: 3 };
        // Use expect.arrayContaining and expect.objectContaining for potentially unstable order
        const expected = [['a', 1], ['b', 2], ['c', 3]];
        const result = entries(obj);
        expect(result).toHaveLength(expected.length);
        expect(result).toEqual(expect.arrayContaining(expected));
    });

    test("Gets entries from an object with mixed value types", () => { // Changed test name
        const obj = { a: 1, b: 'hello', c: true };
        const expected = [['a', 1], ['b', 'hello'], ['c', true]];
        const result = entries(obj);
         expect(result).toHaveLength(expected.length);
        expect(result).toEqual(expect.arrayContaining(expected));
    })

    test("Handles empty object", () => {
        const obj = {};
        const expected: [string, any][] = [];
        const result = entries(obj);
        expect(result).toEqual(expected);
      });
})

// values
describe('values', () => {
    test("Gets values from an object", () => { // Changed test name
        const obj = { a: 1, b: 2, c: 3 };
        const expected = [1, 2, 3];
        const result = values(obj);
        // Order isn't strictly guaranteed, but usually insertion order. Sort for safety.
        expect(result.sort()).toEqual(expected.sort());
    });

    test("Gets values from an object with mixed types", () => { // Changed test name
        const obj = { a: 1, b: 'hello', c: true };
        const expected = [1, 'hello', true];
        const result = values(obj);
        // Sort might be tricky with mixed types, rely on typical order or use contains check
         expect(result).toHaveLength(expected.length);
         expect(result).toEqual(expect.arrayContaining(expected));
    })

     test("Handles empty object", () => {
        const obj = {};
        const expected: any[] = [];
        const result = values(obj);
        expect(result).toEqual(expected);
      });
})

// keys
describe('keys', () => {
    test("Gets keys from an object", () => { // Changed test name
        const obj = { a: 1, b: 2, c: 3 };
        const expected = ['a', 'b', 'c'];
        const result = keys(obj);
        // Order isn't strictly guaranteed, but usually insertion order. Sort for safety.
        expect(result.sort()).toEqual(expected.sort());
    });

    test("Gets keys regardless of value types", () => { // Changed test name
        const obj = { a: 1, b: 'hello', c: true };
        const expected = ['a', 'b', 'c'];
        const result = keys(obj);
        expect(result.sort()).toEqual(expected.sort());
    })

     test("Handles empty object", () => {
        const obj = {};
        const expected: string[] = [];
        const result = keys(obj);
        expect(result).toEqual(expected);
      });
})

// hasKey
describe('hasKey', () => {
    test("Returns true if object has the key", () => { // Changed test name
        const obj = { a: 1, b: 2, c: 3 };
        expect(hasKey(obj, 'a')).toBe(true);
        expect(hasKey(obj, 'c')).toBe(true);
    });

    test("Returns false if object does not have the key", () => { // Changed test name
        const obj = { a: 1, b: 2 };
        expect(hasKey(obj, 'c')).toBe(false);
        // expect(hasKey(obj, 1)).toBe(false); // TS prevents non-string keys here
    })

    test("Handles empty object", () => {
        const obj = {};
        expect(hasKey(obj, 'a')).toBe(false);
      });

    test("Works with inherited properties (using 'in')", () => {
        const proto = { inherited: true };
        const obj = Object.create(proto);
        obj.own = false;
        expect(hasKey(obj, 'own')).toBe(true);
        expect(hasKey(obj, 'inherited')).toBe(true); // 'in' operator checks prototype chain
      });
})

// hasValue
describe('hasValue', () => {
    test("Returns true if object has the value", () => { // Changed test name
        const obj = { a: 1, b: 2, c: 3 };
        expect(hasValue(obj, 1)).toBe(true);
        expect(hasValue(obj, 3)).toBe(true);
    });

    test("Returns true if object has the value (mixed types)", () => { // Changed test name
        const obj = { a: 1, b: 'hello', c: true };
        expect(hasValue(obj, 'hello')).toBe(true);
        expect(hasValue(obj, true)).toBe(true);
    })

    test("Returns false if object does not have the value", () => { // Changed test name
        const obj = { a: 1, b: 2, c: 3 };
        expect(hasValue(obj, 4)).toBe(false);
    })

    test("Handles empty object", () => {
        const obj = {};
        expect(hasValue(obj, 1)).toBe(false);
      });

    test("Handles object values (referential equality)", () => {
        const val1 = { id: 1 };
        const val2 = { id: 2 };
        const obj = { x: val1, y: val2 };
        expect(hasValue(obj, val1)).toBe(true);
        expect(hasValue(obj, { id: 1 })).toBe(false); // Different object reference
      });
})