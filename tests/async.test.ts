// Removed bun:test import, relying on globals provided by 'bun test'
import { merge, merge2, map, filter, fromEvent, fromEventHandler, until } from '../src/async'; // Changed import path

async function* asyncGenerator<T>(array: T[]): AsyncGenerator<T> {
    for (const item of array) {
        yield await new Promise(resolve => setTimeout(() => resolve(item), 10));
    }
}

describe('merge', () => {
    test('correctly merges values from multiple async iterators', async () => { // Changed 'it' to 'test' for consistency
        const iter1 = asyncGenerator([1, 3, 5]);
        const iter2 = asyncGenerator([2, 4, 6]);
        const merged = merge(iter1, iter2);

        const result = [];
        for await (const value of merged) {
            result.push(value);
        }

        // Since execution order can vary, we check that all items are present and sorted
        expect(result.sort()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('handles empty iterators correctly', async () => { // Changed 'it' to 'test'
        const iter1 = asyncGenerator([]);
        const iter2 = asyncGenerator([1, 2, 3]);
        const merged = merge(iter1, iter2);

        const result = [];
        for await (const value of merged) {
            result.push(value);
        }

        expect(result).toEqual([1, 2, 3]);
    });

    test('completes when all iterators are completed', async () => { // Changed 'it' to 'test'
        const iter1 = asyncGenerator([1]);
        const iter2 = asyncGenerator([2]);
        const merged = merge(iter1, iter2);

        const result = [];
        for await (const value of merged) {
            result.push(value);
        }

        expect(result.length).toBe(2);
        expect(result.includes(1)).toBeTruthy();
        expect(result.includes(2)).toBeTruthy();
    });

    test('handles errors thrown by an iterator', async () => { // Changed 'it' to 'test'
        async function* errorGenerator() {
            yield 1;
            throw new Error('Test error');
        }

        const iter1 = asyncGenerator([1, 2]);
        const iter2 = errorGenerator();
        const merged = merge(iter1, iter2);

        // Use an immediately invoked async function and pass the resulting promise to expect
        await expect((async () => {
            const result = [];
            for await (const value of merged) {
                result.push(value);
            }
        })()).rejects.toThrow('Test error');
    });
});

// merge2
describe('merge2', () => {
    test('correctly merges values from two async iterators', async () => { // Changed 'it' to 'test'
        const iter1 = asyncGenerator([1, 3, 5]);
        const iter2 = asyncGenerator([2, 4, 6]);
        const merged = merge2(iter1, iter2);

        const result = [];
        for await (const value of merged) {
            result.push(value);
        }

        // Since execution order can vary, we check that all items are present and sorted
        expect(result.sort()).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('handles empty iterators correctly', async () => { // Changed 'it' to 'test'
        const iter1 = asyncGenerator([]);
        const iter2 = asyncGenerator([1, 2, 3]);
        const merged = merge2(iter1, iter2);

        const result = [];
        for await (const value of merged) {
            result.push(value);
        }

        expect(result).toEqual([1, 2, 3]);
    });

    test('completes when both iterators are completed', async () => { // Changed 'it' to 'test'
        const iter1 = asyncGenerator([1]);
        const iter2 = asyncGenerator([2]);
        const merged = merge2(iter1, iter2);

        const result = [];
        for await (const value of merged) {
            result.push(value);
        }

        expect(result.length).toBe(2);
        expect(result.includes(1)).toBeTruthy();
        expect(result.includes(2)).toBeTruthy();
    });

    test('handles errors thrown by an iterator', async () => { // Changed 'it' to 'test'
        async function* errorGenerator() {
            yield 1;
            throw new Error('Test error');
        }

        const iter1 = asyncGenerator([1, 2]);
        const iter2 = errorGenerator();
        const merged = merge2(iter1, iter2);

        // Use an immediately invoked async function and pass the resulting promise to expect
        await expect((async () => {
            const result = [];
            for await (const value of merged) {
                result.push(value);
            }
        })()).rejects.toThrow('Test error');
    });
});

// map
describe('map', () => {
    test('correctly maps values from an async iterator', async () => { // Changed 'it' to 'test'
        const iter = asyncGenerator([1, 2, 3]);
        const doubled = map(iter, x => x * 2);

        const result = [];
        for await (const value of doubled) {
            result.push(value);
        }

        expect(result).toEqual([2, 4, 6]);
    });

    test('handles empty iterators correctly', async () => { // Changed 'it' to 'test'
        const iter = asyncGenerator<number>([]); // Added type argument
        const doubled = map(iter, x => x * 2);

        const result = [];
        for await (const value of doubled) {
            result.push(value);
        }

        expect(result).toEqual([]);
    });

    test('handles errors thrown by an iterator', async () => { // Changed 'it' to 'test'
        async function* errorGenerator() {
            yield 1;
            throw new Error('Test error');
        }

        const iter = errorGenerator();
        const doubled = map(iter, x => x * 2);

        // Use an immediately invoked async function and pass the resulting promise to expect
        await expect((async () => {
            const result = [];
            for await (const value of doubled) {
                result.push(value);
            }
        })()).rejects.toThrow('Test error');
    });
});

// filter
describe('filter', () => {
    test('correctly filters values from an async iterator', async () => { // Changed 'it' to 'test'
        const iter = asyncGenerator([1, 2, 3, 4, 5]);
        const evens = filter(iter, x => x % 2 === 0);

        const result = [];
        for await (const value of evens) {
            result.push(value);
        }

        expect(result).toEqual([2, 4]);
    });

    test('handles empty iterators correctly', async () => { // Changed 'it' to 'test'
        const iter = asyncGenerator<number>([]);
        const evens = filter(iter, x => x % 2 === 0);

        const result = [];
        for await (const value of evens) {
            result.push(value);
        }

        expect(result).toEqual([]);
    });

    test('handles errors thrown by an iterator', async () => { // Changed 'it' to 'test'
        async function* errorGenerator() {
            yield 1;
            throw new Error('Test error');
        }

        const iter = errorGenerator();
        const evens = filter(iter, x => x % 2 === 0);

        // Use an immediately invoked async function and pass the resulting promise to expect
        await expect((async () => {
            const result = [];
            for await (const value of evens) {
                result.push(value);
            }
        })()).rejects.toThrow('Test error');
    });
});


// fromEventHandler

describe('fromEventHandler', () => {
    // Mock event emitter to simulate on/off event handling
    class MockEventEmitter {
        private listeners = new Set<(data: any) => void>();

        on(listener: (data: any) => void) {
            this.listeners.add(listener);
        }

        off(listener: (data: any) => void) {
            this.listeners.delete(listener);
        }

        emit(data: any) {
            // Use Array.from to avoid issues if listener modifies the set during iteration
            Array.from(this.listeners).forEach(listener => listener(data));
        }

        get listenerCount() { // Helper for testing cleanup
            return this.listeners.size;
        }
    }

    let emitter: MockEventEmitter;

    beforeEach(() => {
        emitter = new MockEventEmitter();
    });

    test('captures and yields a single event', async () => { // Changed 'it' to 'test'
        const generator = fromEventHandler<number>(
            emitter.on.bind(emitter),
            emitter.off.bind(emitter)
        );

        setTimeout(() => emitter.emit(1), 10);

        const result = await generator.next();
        expect(result.value).toBe(1);
        expect(result.done).toBeFalsy();
        await generator.return(undefined); // Close generator for cleanup
    });

    test('captures and yields multiple events in order', async () => { // Changed 'it' to 'test'
        const generator = fromEventHandler<number>(
            emitter.on.bind(emitter),
            emitter.off.bind(emitter)
        );

        setTimeout(() => emitter.emit(1), 10);
        setTimeout(() => emitter.emit(2), 20);

        const results = [];
        results.push((await generator.next()).value);
        results.push((await generator.next()).value);

        expect(results).toEqual([1, 2]);
        await generator.return(undefined); // Close generator
    });

    test('removes event listeners when generator is closed', async () => { // Changed 'it' to 'test'
        const onSpy = jest.fn(emitter.on.bind(emitter));
        const offSpy = jest.fn(emitter.off.bind(emitter));

        const generator = fromEventHandler<number>(onSpy, offSpy);

        // Start consuming
        const promise = generator.next();

        // Emit after starting consumption but before closing
        setTimeout(() => emitter.emit(1), 5);

        await promise; // Wait for the first event to ensure listener is attached

        expect(emitter.listenerCount).toBe(1); // Listener should be attached

        // Close the generator
        await generator.return(undefined);

        expect(onSpy).toHaveBeenCalledTimes(1);
        expect(offSpy).toHaveBeenCalledTimes(1);
        expect(emitter.listenerCount).toBe(0); // Listener should be removed
    });
});

// fromEvent
describe('fromEvent', () => {
    // Mock EventEmitter to simulate Node.js EventEmitter for testing purposes
    class MockNodeEventEmitter<T, E extends string = string> {
        private listeners: Map<E, ((data: T) => void)[]> = new Map();

        on(eventName: E, listener: (data: T) => void) {
            const eventListeners = this.listeners.get(eventName) || [];
            eventListeners.push(listener);
            this.listeners.set(eventName, eventListeners);
        }

        off(eventName: E, listener: (data: T) => void) {
            const eventListeners = this.listeners.get(eventName) || [];
            const index = eventListeners.indexOf(listener);
            if (index !== -1) {
                eventListeners.splice(index, 1);
            }
            // No need to set back if empty, get handles it
        }

        emit(eventName: E, data: T) {
            const eventListeners = this.listeners.get(eventName) || [];
            // Use slice to prevent issues if listener modifies the array during iteration
            eventListeners.slice().forEach((listener) => listener(data));
        }

         listenerCount(eventName: E): number { // Helper for testing
            return (this.listeners.get(eventName) || []).length;
        }
    }

    test('captures and yields events from an EventEmitter', async () => { // Changed 'it' to 'test'
        const emitter = new MockNodeEventEmitter<number, 'data'>();
        const generator = fromEvent<number, 'data'>(emitter, 'data');

        // Emit some data asynchronously
        setTimeout(() => emitter.emit('data', 1), 10);
        setTimeout(() => emitter.emit('data', 2), 20);

        const results = [];
        // Consume only the first two emitted events for this test
        results.push((await generator.next()).value);
        results.push((await generator.next()).value);

        expect(results).toEqual([1, 2]);
        await generator.return(undefined); // Close generator
    });

    test('removes event listeners when the generator is closed', async () => { // Changed 'it' to 'test'
        const emitter = new MockNodeEventEmitter<number, 'data'>();

        // Spy on the actual methods
        const onSpy = jest.spyOn(emitter, 'on');
        const offSpy = jest.spyOn(emitter, 'off');

        const generator = fromEvent<number, 'data'>(emitter, 'data');

        // Start consuming
        const promise = generator.next();

        // Emit after starting consumption but before closing
        setTimeout(() => emitter.emit('data', 1), 5);

        await promise; // Wait for the first event

        expect(emitter.listenerCount('data')).toBe(1); // Listener should be attached

        // Close the generator
        await generator.return(undefined);

        expect(onSpy).toHaveBeenCalledTimes(1);
        expect(offSpy).toHaveBeenCalledTimes(1);
        expect(emitter.listenerCount('data')).toBe(0); // Listener should be removed

        // Restore spies
        onSpy.mockRestore();
        offSpy.mockRestore();
    });

     // Test with addListener/removeListener interface
     test('works with addListener/removeListener interface', async () => {
        class MockAltEventEmitter {
            listeners = new Set<(data: any) => void>();
            addListener(event: string, listener: (data: any) => void) {
                if (event === 'altData') this.listeners.add(listener);
            }
            removeListener(event: string, listener: (data: any) => void) {
                 if (event === 'altData') this.listeners.delete(listener);
            }
            emit(event: string, data: any) {
                if (event === 'altData') {
                     Array.from(this.listeners).forEach(l => l(data));
                }
            }
             get listenerCount() { return this.listeners.size; }
        }

        const emitter = new MockAltEventEmitter();
        const addSpy = jest.spyOn(emitter, 'addListener');
        const removeSpy = jest.spyOn(emitter, 'removeListener');

        const generator = fromEvent<string>(emitter, 'altData');

        setTimeout(() => emitter.emit('altData', 'hello'), 10);

        const result = await generator.next();
        expect(result.value).toBe('hello');
        expect(emitter.listenerCount).toBe(1);

        await generator.return(undefined);

        expect(addSpy).toHaveBeenCalledTimes(1);
        expect(removeSpy).toHaveBeenCalledTimes(1);
        expect(emitter.listenerCount).toBe(0);

        addSpy.mockRestore();
        removeSpy.mockRestore();
    });
});

// until
describe('until', () => {
    test('yields all values if predicate never true', async () => { // Changed 'it' to 'test'
        const source = asyncGenerator([1, 2, 3]);
        const results: number[] = [];

        for await (const value of until(source, (x) => x > 3)) {
            results.push(value);
        }

        expect(results).toEqual([1, 2, 3]);
    });

    test('stops yielding when predicate becomes true (inclusive)', async () => { // Changed 'it' to 'test' and clarified behavior
        const source = asyncGenerator([1, 2, 3, 4, 5]);
        const results: number[] = [];

        for await (const value of until(source, (x) => x >= 3)) { // Predicate checks the *current* value
            results.push(value);
        }

        expect(results).toEqual([1, 2, 3]); // Yields the value that satisfies the predicate, then stops
    });

    test('yields nothing from an empty generator', async () => { // Changed 'it' to 'test'
        const source = asyncGenerator<number>([]); // Added type argument
        const results: number[] = [];

        for await (const value of until(source, (x) => x >= 3)) {
            results.push(value);
        }

        expect(results).toEqual([]);
    });

    test('stops immediately if predicate true for first value (inclusive)', async () => { // Changed 'it' to 'test' and clarified behavior
        const source = asyncGenerator([3, 4, 5]);
        const results: number[] = [];

        for await (const value of until(source, (x) => x === 3)) {
            results.push(value);
        }

        expect(results).toEqual([3]); // Yields the first value, predicate is true, stops
    });
});