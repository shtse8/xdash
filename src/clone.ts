export function structureClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}