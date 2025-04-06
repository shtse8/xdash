// Removed bun:test import
import { not, or, and, xor, ensure, throttle, debounce, once, bind, memoize } from '../src/function'; // Changed import path
import { isArray } from '../src/typed'; // Added specific import for isArray

// Helper function for async delays
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// not
describe('not', () => {
    test("Returns false for true function", () => {
        const input = () => true;
        const result = not(input);
        expect(result()).toBe(false);
    })

    test("Returns true for false function", () => {
        const input = () => false;
        const result = not(input);
        expect(result()).toBe(true);
    })
})


// or
describe('or', () => {
    test("Returns true for true functions", () => {
        const input = [() => true, () => true];
        const result = or(...input);
        expect(result()).toBe(true);
    })

    test("Returns true for mixed functions", () => {
        const input = [() => true, () => false];
        const result = or(...input);
        expect(result()).toBe(true);
    })

    test("Returns false for false functions", () => {
        const input = [() => false, () => false];
        const result = or(...input);
        expect(result()).toBe(false);
    })
})

// and
describe('and', () => {
    test("Returns true for true functions", () => {
        const input = [() => true, () => true];
        const result = and(...input);
        expect(result()).toBe(true);
    })

    test("Returns false for mixed functions", () => {
        const input = [() => true, () => false];
        const result = and(...input);
        expect(result()).toBe(false);
    })

    test("Returns false for false functions", () => {
        const input = [() => false, () => false];
        const result = and(...input);
        expect(result()).toBe(false);
    })
})


// xor
describe('xor', () => {
    test("Returns false for true functions", () => {
        const input = [() => true, () => true];
        const result = xor(...input);
        expect(result()).toBe(false);
    })

    test("Returns true for mixed functions", () => {
        const input = [() => true, () => false];
        const result = xor(...input);
        expect(result()).toBe(true);
    })

    test("Returns false for false functions", () => {
        const input = [() => false, () => false];
        const result = xor(...input);
        expect(result()).toBe(false);
    })

    test("Returns true for exactly one true function among many", () => {
        const input = [() => false, () => false, () => true, () => false];
        const result = xor(...input);
        expect(result()).toBe(true);
      });

    test("Returns false for multiple true functions among many", () => {
        const input = [() => false, () => true, () => true, () => false];
        const result = xor(...input);
        expect(result()).toBe(false);
      });
})

// ensure
describe('ensure', () => {
    test("Returns the value if the check function returns true", () => {
        const ensureArray = ensure(isArray);
        const arr = [1, 2, 3];
        expect(ensureArray(arr)).toBe(arr);
    })

    test("Throws an error if the check function returns false", () => {
        const ensureArray = ensure(isArray, 'Custom error: Not an array');
        expect(() => ensureArray("hello")).toThrow('Custom error: Not an array');
    })

    test("Uses default error message if none provided", () => {
        const ensureIsString = ensure((val: unknown): val is string => typeof val === 'string');
        expect(() => ensureIsString(123)).toThrow('Value does not match the expected type');
      });

    test("Works with type predicates", () => {
        const isString = (val: unknown): val is string => typeof val === 'string';
        const ensureString = ensure(isString);
        const str = "hello";
        expect(ensureString(str)).toBe(str);
        expect(() => ensureString(123)).toThrow();
      });

    test("Works with boolean returning functions and arguments", () => {
        const isLongerThan = (val: string, minLength: number) => val.length > minLength;
        const ensureLongerThan5 = ensure(isLongerThan, 'String must be longer than 5 chars');
        const longStr = "abcdef";
        const shortStr = "abc";
        expect(ensureLongerThan5(longStr, 5)).toBe(longStr);
        expect(() => ensureLongerThan5(shortStr, 5)).toThrow('String must be longer than 5 chars');
      });
})

// throttle
describe('throttle', () => {
    // Removed jest.useFakeTimers()

    let func: jest.Mock;
    let throttledFunc: (...args: any[]) => void;
    const wait = 50; // Use a shorter wait time for real timer tests

    beforeEach(() => {
        func = jest.fn();
    });

    // Removed afterEach with jest.clearAllTimers()

    test('calls the function immediately by default (leading: true)', () => {
        throttledFunc = throttle(func, wait);
        throttledFunc();
        expect(func).toHaveBeenCalledTimes(1);
    });

    test('throttles subsequent calls within the wait period', async () => {
        throttledFunc = throttle(func, wait);
        throttledFunc(); // Called immediately
        throttledFunc(); // Throttled
        throttledFunc(); // Throttled
        expect(func).toHaveBeenCalledTimes(1);

        await delay(wait / 2);
        throttledFunc(); // Still throttled
        expect(func).toHaveBeenCalledTimes(1);

        await delay(wait / 2 + 1); // Pass the wait period
        throttledFunc(); // Called again (leading edge of next window)
        expect(func).toHaveBeenCalledTimes(2);
    });

    test('calls function on the trailing edge if trailing: true', async () => {
        func = jest.fn(); // Re-init func for accurate count
        throttledFunc = throttle(func, wait, { leading: true, trailing: true });
        throttledFunc(1); // Called (leading)
        await delay(1); // Ensure timestamp differs slightly
        throttledFunc(2); // Throttled, args saved for trailing
        await delay(1);
        throttledFunc(3); // Throttled, args updated for trailing

        expect(func).toHaveBeenCalledTimes(1);
        expect(func).toHaveBeenCalledWith(1);

        await delay(wait + 10); // Trigger trailing call (add buffer)

        expect(func).toHaveBeenCalledTimes(2);
        expect(func).toHaveBeenCalledWith(3); // Called with last args

        // Call again after trailing edge, should trigger leading call
        await delay(1); // Ensure time passes
        throttledFunc(4);
        expect(func).toHaveBeenCalledTimes(3);
        expect(func).toHaveBeenCalledWith(4);
    });


    test('calls function immediately if leading is true, trailing is false', async () => {
        throttledFunc = throttle(func, wait, { leading: true, trailing: false });
        throttledFunc();
        expect(func).toHaveBeenCalledTimes(1);
        throttledFunc(); // Throttled
        await delay(wait + 10); // Wait past throttle period
        throttledFunc(); // Called again
        expect(func).toHaveBeenCalledTimes(2);
    });

    test('does not call immediately if leading is false', () => {
        throttledFunc = throttle(func, wait, { leading: false, trailing: true });
        throttledFunc();
        expect(func).not.toHaveBeenCalled();
    });

    test('calls function on trailing edge if leading is false', async () => {
        throttledFunc = throttle(func, wait, { leading: false, trailing: true });
        throttledFunc(1);
        await delay(1);
        throttledFunc(2);

        expect(func).not.toHaveBeenCalled();

        await delay(wait + 10); // Trigger trailing call

        expect(func).toHaveBeenCalledTimes(1);
        expect(func).toHaveBeenCalledWith(2); // Called with last args
    });

    test('does not call function if both leading and trailing are false', async () => {
        throttledFunc = throttle(func, wait, { leading: false, trailing: false });
        throttledFunc();
        await delay(wait + 10);
        expect(func).not.toHaveBeenCalled();
    });

    test('handles multiple arguments correctly', async () => {
        func = jest.fn(); // Re-init func
        throttledFunc = throttle(func, wait); // Default: leading=true, trailing=true
        throttledFunc(1, 'a'); // Called (leading)
        await delay(wait / 2);
        throttledFunc(2, 'b'); // Throttled, args saved for trailing
        await delay(wait + 10); // Trigger trailing call
        expect(func).toHaveBeenCalledTimes(2);
        expect(func).toHaveBeenNthCalledWith(1, 1, 'a');
        expect(func).toHaveBeenNthCalledWith(2, 2, 'b');
    });
})

// debounce
describe('debounce', () => {
    // Removed jest.useFakeTimers()

    let func: jest.Mock;
    let debouncedFunc: (...args: any[]) => void;
    const wait = 50; // Use a shorter wait time

    beforeEach(() => {
        func = jest.fn();
    });

     // Removed afterEach with jest.clearAllTimers()

    test('executes the function only once after the wait period for multiple calls', async () => {
        debouncedFunc = debounce(func, wait);
        debouncedFunc();
        await delay(wait / 2);
        debouncedFunc(); // Reset timer
        await delay(wait / 2);
        debouncedFunc(); // Reset timer again

        expect(func).not.toHaveBeenCalled(); // Not called yet

        await delay(wait + 10); // Wait for debounce period to pass after last call
        expect(func).toHaveBeenCalledTimes(1);
    });

    test('executes immediately on the first call when immediate is true', async () => {
        debouncedFunc = debounce(func, wait, { immediate: true });
        debouncedFunc();
        expect(func).toHaveBeenCalledTimes(1);

        // Subsequent calls within wait period should not trigger
        debouncedFunc();
        await delay(wait / 2);
        debouncedFunc();
        expect(func).toHaveBeenCalledTimes(1);

        // Call after wait period should trigger immediately again
        await delay(wait + 10);
        debouncedFunc();
        expect(func).toHaveBeenCalledTimes(2);
    });

    test('calls the debounced function with the last call\'s arguments', async () => {
        debouncedFunc = debounce(func, wait);
        debouncedFunc(1);
        await delay(1);
        debouncedFunc(2);
        await delay(1);
        debouncedFunc(3); // This call's arguments should be used

        await delay(wait + 10);
        expect(func).toHaveBeenCalledWith(3);
        expect(func).toHaveBeenCalledTimes(1);
    });

    test('does not call the function if timeout is reset (if not immediate)', async () => {
        debouncedFunc = debounce(func, wait);
        debouncedFunc(); // Start timer
        await delay(wait / 2);
        debouncedFunc(); // Reset timer
        await delay(wait / 2);
        // Timer reset again, wait another full period
        await delay(wait + 10);
        expect(func).toHaveBeenCalledTimes(1); // Should have been called once after the second reset
    });

    test('handles immediate=true correctly with arguments', async () => {
        debouncedFunc = debounce(func, wait, { immediate: true });
        debouncedFunc(1);
        expect(func).toHaveBeenCalledWith(1);
        expect(func).toHaveBeenCalledTimes(1);

        debouncedFunc(2); // Should not trigger
        expect(func).toHaveBeenCalledTimes(1);

        await delay(wait + 10); // Wait period passes
        debouncedFunc(3); // Should trigger immediately again
        expect(func).toHaveBeenCalledTimes(2);
        expect(func).toHaveBeenCalledWith(3);
    });
})

// once
describe('once', () => {
    test('calls the function exactly once', () => {
        const mockFn = jest.fn();
        const onceFn = once(mockFn);

        onceFn();
        onceFn();
        onceFn();

        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    test('returns the correct value on the first and subsequent calls', () => {
        const returnValue = { data: 'test value' };
        const testFn = () => returnValue;
        const onceFn = once(testFn);

        expect(onceFn()).toBe(returnValue);
        expect(onceFn()).toBe(returnValue);
    });

    test('handles arguments passed to the function on the first call', () => {
        const add = jest.fn((a: number, b: number) => a + b);
        const onceAdd = once(add);

        expect(onceAdd(2, 3)).toBe(5);
        expect(add).toHaveBeenCalledWith(2, 3);

        expect(onceAdd(10, 10)).toBe(5);
        expect(add).toHaveBeenCalledTimes(1);
    });

    test('works with functions that return undefined', () => {
        const mockFn = jest.fn(() => undefined);
        const onceFn = once(mockFn);
        expect(onceFn()).toBeUndefined();
        expect(onceFn()).toBeUndefined();
        expect(mockFn).toHaveBeenCalledTimes(1);
      });
});

// bind
describe('bind', () => {
    test('binds a function to a context and preserves `this`', () => {
        const obj = {
            name: 'foo',
            greet() {
                return `Hello, ${this.name}!`;
            }
        };
        const greet = bind(obj.greet, obj);
        expect(greet()).toBe('Hello, foo!');

        const detachedGreet = obj.greet;
        expect(() => detachedGreet()).toThrow();

        const boundDetachedGreet = bind(detachedGreet, obj);
        expect(boundDetachedGreet()).toBe('Hello, foo!');
    });

    test('binds a function to a different context', () => {
        const obj = {
            name: 'foo',
            greet() {
                return `Hello, ${this.name}!`;
            }
        };
        const obj2 = { name: 'bar' };
        const greet = bind(obj.greet, obj2);
        expect(greet()).toBe('Hello, bar!');
    });

    test('passes arguments correctly to the bound function', () => {
        const obj = {
            value: 10,
            add(a: number, b: number) {
                return this.value + a + b;
            }
        };
        const boundAdd = bind(obj.add, obj);
        expect(boundAdd(5, 3)).toBe(18);
      });
});

// memoize
describe('memoize', () => {
    let consoleSpy: jest.SpiedFunction<typeof console.log>;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('calls the original function only once for the same arguments', () => {
        const complexCalc = (a: number, b: number) => {
            console.log('Performing complex calculation...');
            return a * b + a - b;
        };
        const memoizedCalc = memoize(complexCalc);

        memoizedCalc(5, 3);
        memoizedCalc(5, 3);
        memoizedCalc(5, 3);

        expect(consoleSpy).toHaveBeenCalledTimes(1);
        expect(consoleSpy).toHaveBeenCalledWith('Performing complex calculation...');
    });

    test('returns the correct memoized value', () => {
        const add = (a: number, b: number) => {
            console.log('Adding...');
            return a + b;
        };
        const memoizedAdd = memoize(add);

        expect(memoizedAdd(1, 2)).toBe(3);
        expect(memoizedAdd(1, 2)).toBe(3);
        expect(consoleSpy).toHaveBeenCalledTimes(1);

        expect(memoizedAdd(2, 3)).toBe(5);
        expect(memoizedAdd(2, 3)).toBe(5);
        expect(consoleSpy).toHaveBeenCalledTimes(2);
    });

    test('differentiates calls based on arguments', () => {
        const greet = (name: string) => {
            console.log('Greeting...');
            return `Hello, ${name}!`;
        };
        const memoizedGreet = memoize(greet);

        expect(memoizedGreet('World')).toBe('Hello, World!');
        expect(memoizedGreet('Alice')).toBe('Hello, Alice!');
        expect(memoizedGreet('World')).toBe('Hello, World!');

        expect(consoleSpy).toHaveBeenCalledTimes(2);
    });

    test('handles multiple arguments correctly for cache key', () => {
        const process = (a: number, b: string, c: boolean) => {
            console.log('Processing...');
            return `${a}-${b}-${c}`;
        };
        const memoizedProcess = memoize(process);

        memoizedProcess(1, 'a', true);
        memoizedProcess(1, 'a', true);
        memoizedProcess(1, 'a', false);
        memoizedProcess(2, 'a', true);

        expect(consoleSpy).toHaveBeenCalledTimes(3);
    });

    test('handles simple object arguments (beware of key order)', () => {
        const processObj = (config: { id: number, active: boolean }) => {
            console.log('Processing object...');
            return `ID: ${config.id}, Active: ${config.active}`;
        };
        const memoizedProcessObj = memoize(processObj);

        memoizedProcessObj({ id: 1, active: true });
        memoizedProcessObj({ id: 1, active: true });
        memoizedProcessObj({ id: 2, active: false });

        expect(consoleSpy).toHaveBeenCalledTimes(2);

    });

     test('handles arguments resulting in the same JSON key', () => {
        const fn = jest.fn((arg) => typeof arg);
        const memoizedFn = memoize(fn);

        memoizedFn(123);
        memoizedFn("123");

        expect(fn).toHaveBeenCalledTimes(2);

        memoizedFn([1, 2]);
        memoizedFn([1, 2]);

        expect(fn).toHaveBeenCalledTimes(3);
      });
});