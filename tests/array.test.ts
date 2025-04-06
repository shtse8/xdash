import {
    compact,
    uniq,
    uniqBy,
    map,
    filter,
    reduce,
    difference,
    intersection,
    union,
    last,
    first,
    take,
    takeRight,
    hasOne,
    groupBy,
    firstOrDefault,
    flatMap,
    lastOrDefault, // Added missing import
    chunk,         // Added missing import
    concat         // Added missing import
} from '../src/array';


describe('compact', () => {
    test('removes null, undefined, false, and 0 values', () => {
        const input = [1, null, 2, undefined, 3, false, 0, '', 4]; // Added false, 0, ''
        const expected = [1, 2, 3, 4]; // filter(Boolean) removes '', 0, false, null, undefined
        const result = compact(input);
        expect(result).toEqual(expected);
    });

    test('returns empty array when input is empty', () => {
        const input: (number | null | undefined)[] = [];
        const expected: number[] = [];
        const result = compact(input);
        expect(result).toEqual(expected);
    });

    test('handles array with only falsy values', () => {
        const input = [null, undefined, false, 0];
        const expected: never[] = []; // Expect empty array of never type
        const result = compact(input);
        expect(result).toEqual(expected);
      });
});

describe('uniq', () => {
    test('returns unique primitive elements', () => {
        const input = [1, 2, 3, 2, 1, 'a', 'b', 'a'];
        // Set iteration order is insertion order
        const expected = [1, 2, 3, 'a', 'b'];
        const result = uniq(input);
        expect(result).toEqual(expected);
    });

    test('returns unique elements with objects (referential equality)', () => {
        const obj1 = { id: 1 };
        const obj2 = { id: 2 };
        const input = [obj1, obj2, obj1];
        const expected = [obj1, obj2]; // Only unique references
        const result = uniq(input);
        expect(result).toEqual(expected);
    });

    test('returns unique elements with empty array', () => {
        const input: number[] = [];
        const expected: number[] = [];
        const result = uniq(input);
        expect(result).toEqual(expected);
    });
});

describe('uniqBy', () => {
    test('returns unique elements based on identity', () => {
        const input = [1, 2, 3, 2, 1];
        const expected = [1, 2, 3];
        const result = uniqBy(input, x => x);
        expect(result).toEqual(expected);
    });

    test('returns unique elements based on mapping function', () => {
        const input = [1.2, 2.5, 3.1, 2.9, 1.8];
        const expected = [1.2, 2.5, 3.1]; // Keeps first element for each unique Math.floor result
        const result = uniqBy(input, Math.floor);
        expect(result).toEqual(expected);
    });

    test('returns unique elements based on object property', () => {
        const input = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'C' }];
        const expected = [{ id: 1, name: 'A' }, { id: 2, name: 'B' }]; // Keeps first object with id 1
        const result = uniqBy(input, x => x.id);
        expect(result).toEqual(expected);
    });

    test('handles empty array', () => {
        const input: { id: number }[] = [];
        const expected: { id: number }[] = [];
        const result = uniqBy(input, x => x.id);
        expect(result).toEqual(expected);
    });
});

describe('map', () => {
    test('returns mapped array', () => {
        const input = [1, 2, 3];
        const expected = [2, 4, 6];
        const result = map(input, x => x * 2);
        expect(result).toEqual(expected);
    });

    test('provides index and array to callback', () => {
        const input = ['a', 'b'];
        const callback = jest.fn((value, index, array) => `${value}-${index}-${array.length}`);
        const expected = ['a-0-2', 'b-1-2'];
        const result = map(input, callback);
        expect(result).toEqual(expected);
        expect(callback).toHaveBeenCalledTimes(2);
        expect(callback).toHaveBeenNthCalledWith(1, 'a', 0, input);
        expect(callback).toHaveBeenNthCalledWith(2, 'b', 1, input);
      });

    test('handles empty array', () => {
        const input: number[] = [];
        const expected: string[] = [];
        const result = map(input, x => `item-${x}`);
        expect(result).toEqual(expected);
    });
});

describe('filter', () => {
    test('returns filtered array based on predicate', () => {
        const input = [1, 2, 3, 4, 5];
        const expected = [2, 4];
        const result = filter(input, x => x % 2 === 0);
        expect(result).toEqual(expected);
    });

    test('provides index and array to callback', () => {
        const input = ['a', 'b', 'c'];
        const callback = jest.fn((value, index, array) => index % 2 === 0 && array.length === 3);
        const expected = ['a', 'c'];
        const result = filter(input, callback);
        expect(result).toEqual(expected);
        expect(callback).toHaveBeenCalledTimes(3);
        expect(callback).toHaveBeenNthCalledWith(1, 'a', 0, input);
        expect(callback).toHaveBeenNthCalledWith(2, 'b', 1, input);
        expect(callback).toHaveBeenNthCalledWith(3, 'c', 2, input);
      });

    test('handles empty array', () => {
        const input: number[] = [];
        const expected: number[] = [];
        const result = filter(input, x => x > 0);
        expect(result).toEqual(expected);
    });
});

describe('reduce', () => {
    test('returns sum of array elements', () => {
        const input = [1, 2, 3];
        const expected = 6;
        const result = reduce(input, (acc, x) => acc + x, 0);
        expect(result).toBe(expected);
    });

    test('returns sum with a non-zero initial value', () => {
        const input = [1, 2, 3];
        const expected = 10;
        const result = reduce(input, (acc, x) => acc + x, 4);
        expect(result).toBe(expected);
    });

    test('returns initial value when input array is empty', () => {
        const input: number[] = [];
        const expected = 4;
        const result = reduce(input, (acc, x) => acc + x, 4);
        expect(result).toBe(expected);
    });

    test('flattens an array of arrays', () => {
        const input = [[1, 2], [3, 4]];
        const expected = [1, 2, 3, 4];
        const result = reduce(input, (acc, x) => acc.concat(x), [] as number[]);
        expect(result).toEqual(expected);
      });

    test('provides index and array to callback', () => {
        const input = ['a', 'b'];
        const callback = jest.fn((acc, value, index, array) => acc + `${value}${index}${array.length}`);
        const expected = 'start-a02b12';
        const result = reduce(input, callback, 'start-');
        expect(result).toEqual(expected);
        expect(callback).toHaveBeenCalledTimes(2);
        expect(callback).toHaveBeenNthCalledWith(1, 'start-', 'a', 0, input);
        expect(callback).toHaveBeenNthCalledWith(2, 'start-a02', 'b', 1, input);
      });
});

describe('difference', () => {
    test('returns the difference between two arrays', () => {
        const input = [[1, 2, 3, 'a'], [2, 3, 4, 'b']];
        const expected = [1, 'a'];
        const result = difference(...input);
        expect(result).toEqual(expected);
    });

    test('returns the difference with an empty array', () => {
        const input = [[1, 2, 3], []];
        const expected = [1, 2, 3];
        const result = difference(...input);
        expect(result).toEqual(expected);
    });

    test('returns empty array when the first array is empty', () => {
        const input: number[][] = [[], [1, 2], [3]];
        const expected: number[] = [];
        const result = difference(...input);
        expect(result).toEqual(expected);
    });

    test('returns the difference with multiple exclusion arrays', () => {
        const input = [[1, 2, 3, 4, 5], [2, 3], [4, 6]];
        const expected = [1, 5];
        const result = difference(...input);
        expect(result).toEqual(expected);
    });

    test('handles duplicate values correctly', () => {
        const input = [[1, 2, 2, 3, 3], [2, 4, 4]];
        const expected = [1, 3, 3]; // Keeps duplicates from the first array if not excluded
        const result = difference(...input);
        expect(result).toEqual(expected);
    });
});

describe('intersection', () => {
    test('returns the intersection of two arrays', () => {
        const input = [[1, 2, 3, 'a'], [2, 3, 4, 'a']];
        const expected = [2, 3, 'a'];
        const result = intersection(...input);
        // Order might not be guaranteed depending on Set implementation details across JS engines, sort for stable test
        expect(result.sort()).toEqual(expected.sort());
    });

    test('returns empty array when intersecting with an empty array', () => {
        const input = [[1, 2, 3], []];
        const expected: number[] = [];
        const result = intersection(...input);
        expect(result).toEqual(expected);
    });

    test('returns empty array when intersecting multiple empty arrays', () => {
        const input: number[][] = [[], [], []];
        const expected: number[] = [];
        const result = intersection(...input);
        expect(result).toEqual(expected);
    });

    test('returns intersection of multiple arrays', () => {
        const input = [[1, 2, 3, 4], [2, 4, 6], [0, 4, 2]];
        const expected = [2, 4];
        const result = intersection(...input);
        expect(result.sort()).toEqual(expected.sort());
    });

    test('handles duplicate values correctly', () => {
        const input = [[1, 2, 2, 3], [2, 2, 4]];
        const expected = [2]; // Only the unique intersecting value
        const result = intersection(...input);
        expect(result).toEqual(expected);
    });
});

describe('union', () => {
    test('returns the union of two arrays', () => {
        const input = [[1, 2, 3], [2, 3, 4]];
        const expected = [1, 2, 3, 4];
        const result = union(...input);
        // Order might not be guaranteed, sort for stable test
        expect(result.sort()).toEqual(expected.sort());
    });

    test('returns the union with an empty array', () => {
        const input = [[1, 2, 3], []];
        const expected = [1, 2, 3];
        const result = union(...input);
        expect(result.sort()).toEqual(expected.sort());
    });

    test('returns empty array when unioning multiple empty arrays', () => {
        const input: number[][] = [[], [], []];
        const expected: number[] = [];
        const result = union(...input);
        expect(result).toEqual(expected);
    });

    test('returns the union of multiple arrays with duplicates', () => {
        const input = [[1, 2, 'a'], [2, 3, 'b', 'a'], [4, 'c']];
        const expected = [1, 2, 3, 4, 'a', 'b', 'c'];
        const result = union(...input);
        expect(result.sort()).toEqual(expected.sort());
    });
});

describe('last', () => {
    test('returns the last element of a non-empty array', () => {
        const input = [1, 2, 3];
        const expected = 3;
        const result = last(input);
        expect(result).toBe(expected);
    });

    test('returns the last element for single-element array', () => {
        const input = ['hello'];
        const expected = 'hello';
        const result = last(input);
        expect(result).toBe(expected);
      });

    test('throws an error when the input array is empty', () => {
        const input: number[] = [];
        expect(() => last(input)).toThrow('Array is empty');
    });
});

describe('lastOrDefault', () => {
    test('returns the last element of a non-empty array', () => {
      expect(lastOrDefault([1, 2, 3], 0)).toBe(3);
    });

    test('returns the default value for an empty array', () => {
      expect(lastOrDefault([], 'default')).toBe('default');
    });

    test('returns the default value when it is null', () => {
      expect(lastOrDefault([], null)).toBeNull();
    });

    test('returns the last element even if it is falsy', () => {
      expect(lastOrDefault([1, 2, 0], 10)).toBe(0);
      expect(lastOrDefault([1, 2, false], true)).toBe(false);
    });
  });

describe('concat', () => {
    test('concatenates two arrays', () => {
        const input = [[1, 2], [3, 4]];
        const expected = [1, 2, 3, 4];
        const result = concat(...input);
        expect(result).toEqual(expected);
    });

    test('concatenates multiple arrays', () => {
        const input = [[1], [2, 3], [4, 5, 6]];
        const expected = [1, 2, 3, 4, 5, 6];
        const result = concat(...input);
        expect(result).toEqual(expected);
      });

    test('concatenates with empty arrays', () => {
        const input = [[1, 2], [], [3]];
        const expected = [1, 2, 3];
        const result = concat(...input);
        expect(result).toEqual(expected);
    });

    test('returns empty array when concatenating only empty arrays', () => {
        const input: number[][] = [[], [], []];
        const expected: number[] = [];
        const result = concat(...input);
        expect(result).toEqual(expected);
    });
});

describe('first', () => {
    test('returns the first element of a non-empty array', () => {
        const input = [1, 2, 3];
        const expected = 1;
        const result = first(input);
        expect(result).toBe(expected);
    });

    test('returns the first element for single-element array', () => {
        const input = ['hello'];
        const expected = 'hello';
        const result = first(input);
        expect(result).toBe(expected);
      });

    test('throws an error when the input array is empty', () => {
        const input: number[] = [];
        expect(() => first(input)).toThrow('Array is empty');
    });
});

describe('take', () => {
    test('returns the first n elements', () => {
        const input = [1, 2, 3, 4, 5];
        const expected = [1, 2];
        const result = take(input, 2);
        expect(result).toEqual(expected);
    });

    test('returns all elements when n is greater than array length', () => {
        const input = [1, 2, 3];
        const expected = [1, 2, 3];
        const result = take(input, 5);
        expect(result).toEqual(expected);
    });

    test('returns an empty array when n is zero', () => {
        const input = [1, 2, 3];
        const expected: number[] = [];
        const result = take(input, 0);
        expect(result).toEqual(expected);
    });

    test('returns an empty array when n is negative', () => {
        const input = [1, 2, 3];
        const expected: number[] = [];
        const result = take(input, -2);
        expect(result).toEqual(expected);
    });

    test('returns an empty array when input array is empty', () => {
        const input: number[] = [];
        const expected: number[] = [];
        const result = take(input, 2);
        expect(result).toEqual(expected);
    });

    // Bun's slice behavior might differ from Node for NaN/Infinity, let's test standard JS behavior
    test('returns an empty array when n is NaN', () => {
        const input = [1, 2, 3];
        const expected: number[] = [];
        const result = take(input, NaN); // slice(0, NaN) is slice(0, 0)
        expect(result).toEqual(expected);
    });

    test('returns all elements when n is Infinity', () => {
        const input = [1, 2, 3];
        const expected = [1, 2, 3];
        const result = take(input, Infinity); // slice(0, Infinity) takes all
        expect(result).toEqual(expected);
    });
});

describe('takeRight', () => {
    test('returns the last n elements', () => {
        const input = [1, 2, 3, 4, 5];
        const expected = [4, 5];
        const result = takeRight(input, 2);
        expect(result).toEqual(expected);
    });

    test('returns all elements when n is greater than array length', () => {
        const input = [1, 2, 3];
        const expected = [1, 2, 3];
        const result = takeRight(input, 5);
        expect(result).toEqual(expected);
    });

    test('returns an empty array when n is zero', () => {
        const input = [1, 2, 3];
        const expected: number[] = [];
        const result = takeRight(input, 0);
        expect(result).toEqual(expected);
    });

     test('returns an empty array when n is negative', () => {
        const input = [1, 2, 3];
        const expected: number[] = [];
        const result = takeRight(input, -2); // slice(-(-2)) -> slice(2) - incorrect, slice handles negative index
        expect(result).toEqual(expected); // slice(-negative) should be empty
    });

    test('returns an empty array when input array is empty', () => {
        const input: number[] = [];
        const expected: number[] = [];
        const result = takeRight(input, 2);
        expect(result).toEqual(expected);
    });

    test('returns an empty array when n is NaN', () => {
        const input = [1, 2, 3];
        const expected: number[] = [];
        const result = takeRight(input, NaN); // slice(-NaN) -> slice(0) - incorrect, handled by explicit check
        expect(result).toEqual(expected);
    });

    test('returns all elements when n is Infinity', () => {
        const input = [1, 2, 3];
        const expected = [1, 2, 3];
        const result = takeRight(input, Infinity); // slice(-Infinity) takes all
        expect(result).toEqual(expected);
    });
});

describe('hasOne', () => {
    test('returns true when exactly one element is truthy', () => {
        expect(hasOne([false, 0, '', 1, null, undefined])).toBe(true);
        expect(hasOne([true])).toBe(true);
    });

    test('returns false when no elements are truthy', () => {
        expect(hasOne([false, 0, '', null, undefined])).toBe(false);
        expect(hasOne([])).toBe(false);
    });

    test('returns false when multiple elements are truthy', () => {
        expect(hasOne([true, 1, 'hello'])).toBe(false);
        expect(hasOne([1, 2, 3])).toBe(false);
    });

    test('uses custom predicate function', () => {
        const input = [1, 2, 3, 4, 5];
        const isEqualTo3 = (x: number) => x === 3;
        const isEven = (x: number) => x % 2 === 0;
        expect(hasOne(input, isEqualTo3)).toBe(true);
        expect(hasOne(input, isEven)).toBe(false); // 2 and 4 are even
    });
});

describe('groupBy', () => {
    test('groups array elements by the result of the iteratee function', () => {
        const input = [6.1, 4.2, 6.3];
        const expected = { 6: [6.1, 6.3], 4: [4.2] };
        const result = groupBy(input, Math.floor);
        expect(result).toEqual(expected);
    });

    test('groups by string length', () => {
        const input = ['one', 'two', 'three'];
        const expected = { 3: ['one', 'two'], 5: ['three'] };
        const result = groupBy(input, x => x.length);
        expect(result).toEqual(expected);
    });

     test('groups by object property', () => {
        const input = [{ type: 'A', val: 1 }, { type: 'B', val: 2 }, { type: 'A', val: 3 }];
        const expected = { A: [{ type: 'A', val: 1 }, { type: 'A', val: 3 }], B: [{ type: 'B', val: 2 }] };
        const result = groupBy(input, item => item.type);
        expect(result).toEqual(expected);
      });

    test('returns an empty object for an empty array', () => {
        const input: number[] = [];
        const expected = {};
        const result = groupBy(input, x => x);
        expect(result).toEqual(expected);
    });
});

describe('firstOrDefault', () => {
    test('returns the first element of a non-empty array', () => {
        expect(firstOrDefault([1, 2, 3], 0)).toBe(1);
    });

    test('returns the default value for an empty array', () => {
        expect(firstOrDefault([], 'default')).toBe('default');
    });

    test('returns the default value when it is null', () => {
        expect(firstOrDefault([], null)).toBeNull();
    });

    test('returns the first element even if it is falsy', () => {
        expect(firstOrDefault([0, 1, 2], 10)).toBe(0);
        expect(firstOrDefault([false, true], true)).toBe(false);
      });
});

describe('flatMap', () => {
    function duplicate(n: number): number[] {
        return [n, n];
      }
    test('maps and flattens the array', () => {
        const input = [1, 2];
        const expected = [1, 1, 2, 2];
        const result = flatMap(input, duplicate);
        expect(result).toEqual(expected);
    });

    test('handles empty array input', () => {
        const input: number[] = [];
        const expected: number[] = [];
        const result = flatMap(input, duplicate);
        expect(result).toEqual(expected);
    });

    test('handles mapping function returning empty arrays', () => {
        const input = [1, 2, 3];
        const mapFn = (n: number) => (n % 2 === 0 ? [n] : []);
        const expected = [2];
        const result = flatMap(input, mapFn);
        expect(result).toEqual(expected);
      });
});

describe('chunk', () => {
    test('splits an array into chunks of the specified size', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });

    test('returns the original array in a single chunk if size is larger than array length', () => {
      expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
    });

    test('returns an empty array if the input array is empty', () => {
      expect(chunk([], 3)).toEqual([]);
    });

    test('returns an array of single-element chunks if size is 1', () => {
      expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    });

    // Original implementation might fail for size <= 0, let's assume it should return empty
    test('returns an empty array if size is 0 or negative', () => {
      expect(chunk([1, 2, 3], 0)).toEqual([]);
      expect(chunk([1, 2, 3], -1)).toEqual([]);
    });
  });