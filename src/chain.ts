
class Chain<T> {
    constructor(private value: T) { }

    pipe<U, Args extends unknown[]>(fn: (value: T, ...args: Args) => U, ...args: Args): Chain<U> {
        return new Chain(fn(this.value, ...args));
    }

    unwrap(): T {
        return this.value;
    }
}

export function chain<T>(value: T): Chain<T> {
    return new Chain(value);
}