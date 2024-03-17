import { describe, test, it, expect, jest, beforeEach } from 'bun:test'
import x from '../src/index'

// not 
describe('not', () => {
    test("Returns false for true function", () => {
        const input = () => true;
        const result = x.not(input);
        expect(result()).toBe(false);
    })

    test("Returns true for false function", () => {
        const input = () => false;
        const result = x.not(input);
        expect(result()).toBe(true);
    })
})


// or 
describe('or', () => {
    test("Returns true for true functions", () => {
        const input = [() => true, () => true];
        const result = x.or(...input);
        expect(result()).toBe(true);
    })

    test("Returns true for mixed functions", () => {
        const input = [() => true, () => false];
        const result = x.or(...input);
        expect(result()).toBe(true);
    })

    test("Returns false for false functions", () => {
        const input = [() => false, () => false];
        const result = x.or(...input);
        expect(result()).toBe(false);
    })
})

// and
describe('and', () => {
    test("Returns true for true functions", () => {
        const input = [() => true, () => true];
        const result = x.and(...input);
        expect(result()).toBe(true);
    })

    test("Returns false for mixed functions", () => {
        const input = [() => true, () => false];
        const result = x.and(...input);
        expect(result()).toBe(false);
    })

    test("Returns false for false functions", () => {
        const input = [() => false, () => false];
        const result = x.and(...input);
        expect(result()).toBe(false);
    })
})


// or
describe('or', () => {
    test("Returns true for true functions", () => {
        const input = [() => true, () => true];
        const result = x.or(...input);
        expect(result()).toBe(true);
    })

    test("Returns true for mixed functions", () => {
        const input = [() => true, () => false];
        const result = x.or(...input);
        expect(result()).toBe(true);
    })

    test("Returns false for false functions", () => {
        const input = [() => false, () => false];
        const result = x.or(...input);
        expect(result()).toBe(false);
    })
})


// xor
describe('xor', () => {
    test("Returns false for true functions", () => {
        const input = [() => true, () => true];
        const result = x.xor(...input);
        expect(result()).toBe(false);
    })

    test("Returns true for mixed functions", () => {
        const input = [() => true, () => false];
        const result = x.xor(...input);
        expect(result()).toBe(true);
    })

    test("Returns false for false functions", () => {
        const input = [() => false, () => false];
        const result = x.xor(...input);
        expect(result()).toBe(false);
    })
})

// ensure
describe('ensure', () => {
    test("Returns true for true function", () => {
        const isArray = x.isArr;
        const ensureArray = x.ensure(isArray);
        const arr = [1, 2, 3];
        expect(ensureArray(arr)).toBe(arr);
    })

    test("Returns false for false function", () => {
        const isArray = x.isArr;
        const ensureArray = x.ensure(isArray);
        expect(() => ensureArray("hello")).toThrow();
    })
})

// throttle
describe('throttle', () => {
    let func: jest.Mock;
    let throttledFunc: Function;
    const wait = 100; // Milliseconds

    beforeEach(() => {
        func = jest.fn();
    });

    // Test case 1: Throttling Function Calls
    it('calls the function at most once within specified milliseconds', async () => {
        throttledFunc = x.throttle(func, wait);
        throttledFunc();
        throttledFunc();
        throttledFunc();

        await new Promise((r) => setTimeout(r, wait + 50)); // Wait for throttle period + buffer
        expect(func).toHaveBeenCalledTimes(2);
    });

    // Test case 2: Leading Call
    it('calls function immediately if leading is true', () => {
        throttledFunc = x.throttle(func, wait, { leading: true, trailing: false });
        throttledFunc();
        expect(func).toHaveBeenCalledTimes(1);
    });

    // Test case 3: Trailing Call
    it('ensures function is called after the last trigger if trailing is true', async () => {
        throttledFunc = x.throttle(func, wait, { trailing: true, leading: false });
        throttledFunc();
        throttledFunc();
        await new Promise((r) => setTimeout(r, wait + 50));
        expect(func).toHaveBeenCalledTimes(1); // Once for leading, once for trailing
    });

    // Test case 4: No Leading or Trailing Call
    it('does not call function if both leading and trailing are false', async () => {
        throttledFunc = x.throttle(func, wait, { leading: false, trailing: false });
        throttledFunc();
        await new Promise((r) => setTimeout(r, wait + 50));
        expect(func).toHaveBeenCalledTimes(0);
    });
})

// debounce
describe('debounce', () => {
    let func: jest.Mock;
    let debouncedFunc: Function;
    const wait = 100; // Milliseconds

    beforeEach(() => {
        func = jest.fn();
    });

    // Test case 1: Debouncing Multiple Calls
    it('executes the function only once for multiple calls within the debounce period', async () => {
        debouncedFunc = x.debounce(func, wait);
        debouncedFunc();
        debouncedFunc();
        debouncedFunc();

        await new Promise((r) => setTimeout(r, wait * 1.5)); // Wait more than debounce period
        expect(func).toHaveBeenCalledTimes(1);
    });

    // Test case 2: Immediate Execution
    it('executes immediately on the first call when immediate is true', () => {
        debouncedFunc = x.debounce(func, wait, { immediate: true });
        debouncedFunc();
        expect(func).toHaveBeenCalledTimes(1);
    });

    // Test case 3: Arguments Handling
    it('calls the debounced function with the last call\'s arguments', async () => {
        debouncedFunc = x.debounce(func, wait);
        debouncedFunc(1);
        debouncedFunc(2);
        debouncedFunc(3); // This call's arguments should be used

        await new Promise((r) => setTimeout(r, wait * 1.5));
        expect(func).toHaveBeenCalledWith(3);
    });

    // Test case 4: Execution Delay
    it('delays the function execution by the specified milliseconds', async () => {
        const startTime = Date.now();
        debouncedFunc = x.debounce(() => {
            expect(Date.now() - startTime).toBeGreaterThanOrEqual(wait);
        }, wait);
        debouncedFunc();

        await new Promise((r) => setTimeout(r, wait * 1.5));
    });

})

// once
describe('once', () => {
    // Test case 1: Calls the function exactly once
    it('calls the function exactly once', () => {
        const mockFn = jest.fn();
        const onceFn = x.once(mockFn);

        onceFn();
        onceFn();
        onceFn();

        expect(mockFn).toHaveBeenCalledTimes(1);
    });

    // Test case 2: Returns the correct value on the first and subsequent calls
    it('returns the correct value on the first and subsequent calls', () => {
        const returnValue = 'test value';
        const testFn = () => returnValue;
        const onceFn = x.once(testFn);

        expect(onceFn()).toBe(returnValue);
        expect(onceFn()).toBe(returnValue);
        expect(onceFn()).toBe(returnValue);
    });

    // Test case 3: Handles arguments passed to the function
    it('handles arguments passed to the function', () => {
        const add = (a: number, b: number) => a + b;
        const onceAdd = x.once(add);

        expect(onceAdd(2, 3)).toBe(5);
        // Subsequent calls should return the same value regardless of the arguments
        expect(onceAdd(10, 10)).toBe(5);
    });

    // Test case 4: Does not execute the function more than once
    it('does not execute the function more than once', () => {
        let counter = 0;
        const increment = () => { counter += 1; return counter; };
        const onceIncrement = x.once(increment);

        onceIncrement();
        onceIncrement();
        onceIncrement();

        expect(counter).toBe(1);
    });
});

// bind
describe('bind', () => {
    // Test case 1: Binds a function to a context
    it('binds a function to a context', () => {
        const obj = {
            name: 'foo',
            greet() {
                return `Hello, ${this.name}!`;
            }
        };
        const greet = x.bind(obj.greet, obj);
        expect(greet()).toBe('Hello, foo!');
    });

    // Test case 2: Binds a function to a different context
    it('binds a function to a different context', () => {
        const obj = {
            name: 'foo',
            greet() {
                return `Hello, ${this.name}!`;
            }
        };
        const obj2 = { name: 'bar' };
        const greet = x.bind(obj.greet, obj2);
        expect(greet()).toBe('Hello, bar!');
    });
});

// memoize
describe('memoize', () => {
    // Test case 1: Memoizes a function
    it('memoizes a function', () => {
        const add = jest.fn((a: number, b: number) => {
            console.log('Calculating sum');
            return a + b;
        });
        const memoizedAdd = x.memoize(add);

        memoizedAdd(1, 2);
        memoizedAdd(1, 2);
        memoizedAdd(2, 3);
        memoizedAdd(2, 3);

        expect(add).toHaveBeenCalledTimes(2);
    });

    // Test case 2: Returns the correct value
    it('returns the correct value', () => {
        const add = (a: number, b: number) => a + b;
        const memoizedAdd = x.memoize(add);

        expect(memoizedAdd(1, 2)).toBe(3);
        expect(memoizedAdd(1, 2)).toBe(3);
        expect(memoizedAdd(2, 3)).toBe(5);
        expect(memoizedAdd(2, 3)).toBe(5);
    });

    // Test case 3: Handles multiple arguments
    it('handles multiple arguments', () => {
        const add = jest.fn((a: number, b: number, c: number) => a + b + c);
        const memoizedAdd = x.memoize(add);

        memoizedAdd(1, 2, 3);
        memoizedAdd(1, 2, 3);
        memoizedAdd(2, 3, 4);
        memoizedAdd(2, 3, 4);

        expect(add).toHaveBeenCalledTimes(2);
    });
});