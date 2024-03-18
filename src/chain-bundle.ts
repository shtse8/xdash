import {
    filter,
    map,
    union,
    uniq,
    uniqBy,
    first,
    firstOrDefault,
    flatMap,
} from './array';
import {
    filterKeys,
    invert,
    entries,
    values,
    keys,
    mapKeys,
    mapValues
} from './object';

enum ChainType {
    Array = 'array',
    Object = 'object'
}

export interface ChainBase<T> {
    value(): T;
}


type ResolveValueToChain<T> = T extends Array<infer U> ? ArrayChain<U> : T extends Record<string, infer U> ? ObjectChain<U> : T extends string ? StringChain : T extends number ? NumberChain : ChainBase<T>;

interface ArrayChain<T> extends ChainBase<T[]> {
    // filter(fn: (value: T, index: number) => unknown): ArrayChain<T>;
    // map<U>(fn: (value: T, index: number) => U): ArrayChain<U>;
    // union<U>(other: U[]): ArrayChain<T | U>;
    // uniq(): ArrayChain<T>;
    // uniqBy<U>(fn: (value: T) => U): ArrayChain<T>;
    // first(): ResolveValueToChain<T>;
    // firstOrDefault(defaultValue: T): ResolveValueToChain<T>;
    // flatMap<U>(fn: (value: T) => U[]): ArrayChain<U>;
}

interface ObjectChain<T> extends ChainBase<Record<string, T>> {
    // filterKeys(fn: (key: string, value: T) => unknown): ObjectChain<T>;
    // invert(): ObjectChain<string>;
    // entries(): ArrayChain<[string, T]>;
    // values(): ArrayChain<T>;
    // keys(): ArrayChain<string>;
    // mapKeys<U extends string>(fn: (key: string, value: T) => U): ObjectChain<T>;
    // mapValues<U>(fn: (value: T, key: string) => U): ObjectChain<U>;
}

interface StringChain extends ChainBase<string> {
    // toLowerCase(): StringChain;
    // toUpperCase(): StringChain;
    // trim(): StringChain;
    // first(): StringChain;
    // firstOrDefault(defaultValue: string): StringChain;
    // last(): StringChain;
    // lastOrDefault(defaultValue: string): StringChain;
}

export interface NumberChain extends ChainBase<number> {
    // round(): NumberChain;
    // floor(): NumberChain;
    // ceil(): NumberChain;
    // abs(): NumberChain;
    // min(value: number): NumberChain;
    // max(value: number): NumberChain;
}

export class Chain<I, O> implements ChainBase<O> {
    static ops: Record<string, Function> = {}
    static install(ops: Record<string, Function>) {
        this.ops = { ...this.ops, ...ops };
    }

    constructor(private initialValue: I, private ops: ((value: any) => any)[] = []) { }

    apply(op: (value: any, ...args: any[]) => any, ...args: any[]): ChainBase<unknown> {
        return new Chain(this.initialValue, [...this.ops, (value: any) => op(value, ...args)]);
    }

    value(): any {
        return this.ops.reduce((acc, fn) => fn(acc), this.initialValue);
    }
}
export function chain<T>(value: string): StringChain;
export function chain<T>(value: number): NumberChain;
export function chain<T>(value: Record<string, T>): ObjectChain<T>;
export function chain<T>(value: T[]): ArrayChain<T>;
export function chain<T>(value: T): ChainBase<T> {
    const handler = {
        get(target: any, prop: string) {
            if (prop in target) {
                return target[prop];
            }
            if (prop in Chain.ops) {
                return (...args: any[]) => new Proxy(target.apply(Chain.ops[prop], ...args), handler);
            } else {
                throw new Error(`Method ${String(prop)} does not exist`);
            }
        }
    }
    return new Proxy(new Chain(value), handler);
}
