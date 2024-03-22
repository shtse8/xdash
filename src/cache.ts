
import { EventEmitter } from "events";


/**
 * A class that emits an event when invalidated
 */
export class Invalidator extends EventEmitter {
    invalidate() {
        this.emit('invalidate')
    }
}

export interface CacheOptions {
    ttl?: number
    invalidator?: Invalidator
}

/**
 * Caches the result of a function
 * @param fn function to cache
 * @param options cache options
 * @returns a function that caches the result of the input function
 * @example
 * const cachedFunc = cacheFunc(async () => {
 *  return 'hello'
 * }, { ttl: 1000 })
 * 
 * console.log(await cachedFunc()) // 'hello'
 * console.log(await cachedFunc()) // 'hello'
 * 
 * @example
 * const invalidator = new Invalidator()
 * const cachedFunc = cacheFunc(async () => {
 * return 'hello'
 * }, { ttl: 1000, invalidator })
 * 
 * console.log(await cachedFunc()) // 'hello'
 * invalidator.invalidate()
 * console.log(await cachedFunc()) // 'hello'
 * 
 * @example
 * class Example {
 *  const fn = cacheFunc(bindSelf(this)._fn)
 *  async _fn() {
 *     return 'hello'
 *  }
 * }
 */
export function cacheFunc<T, Args extends readonly unknown[]>(fn: (...args: Args) => Promise<T>, options?: CacheOptions) {
    const cache = new Cache<T>(options)
    return (...args: Args) => cache.run(fn)
}

/**
 * A class that caches a value
 */
export class Cache<T> {
    private value: T | undefined
    private updatedAt: Date | undefined
    private ttl: number;
    constructor(options?: CacheOptions) {
        this.ttl = options?.ttl || 1000 * 60 * 60
        options?.invalidator?.on('invalidate', () => this.invalidate())
    }

    set(value: T) {
        this.value = value
        this.updatedAt = new Date()
    }

    async run(fn: () => Promise<T>) {
        if (!this.value || !this.updatedAt) {
            this.value = await fn()
            this.updatedAt = new Date()
            return this.value
        }
        if (Date.now() - this.updatedAt.getTime() > this.ttl) {
            this.value = await fn()
            this.updatedAt = new Date()
            return this.value
        }
        return this.value
    }

    invalidate() {
        this.value = undefined
        this.updatedAt = undefined
    }

    get() {
        if (!this.value || !this.updatedAt) {
            return undefined
        }
        if (Date.now() - this.updatedAt.getTime() > this.ttl) {
            return undefined
        }
        return this.value
    }

}