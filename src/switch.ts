// R represents the union of return types from .case()
// E represents the return type from .default()
// If no default is provided, E remains 'never' initially
export class InlineSwitch<T, R = never, E = never> {
    private cases = new Map<T, () => any>();
    private defaultCase?: () => any;

    constructor(private readonly value: T) { }

    // Method to add a case
    case<U>(caseValue: T, result: () => U): InlineSwitch<T, R | U> {
        this.cases.set(caseValue, result);
        return this as any;
    }

    // Method to set the default case
    // When default is called, E becomes U, and we omit 'default' method
    default<U>(result: () => U): Omit<InlineSwitch<T, R, U>, 'default'> {
        if (this.defaultCase) {
            throw new Error("Default case already set.");
        }
        this.defaultCase = result;
        return this as any;
    }

    // Method to execute the switch
    // Execute returns the type from a matching case (R) or the default case (E)
    // If no default case is provided (E is never) and no case matches, it throws an error.
    execute(): R | E {
        const caseFn = this.cases.get(this.value);
        if (caseFn) {
            return caseFn();
        }

        if (this.defaultCase) {
            return this.defaultCase();
        }

        // If we reach here, no case matched and no default was provided.
        throw new Error(`No matching case found for value: ${this.value} and no default case was provided.`);
        // The return type R | E is correct because if E is never, and no R matches,
        // the function throws, satisfying the type contract.
    }
}

/**
 * Creates a new InlineSwitch instance for given value. This utility function
 * facilitates a fluent interface for conditional logic based on the value provided,
 * allowing for a more readable and expressive alternative to traditional switch
 * statements or if-else chains. The InlineSwitch class supports adding cases
 * with `.case()` method calls and optionally setting a default case with `.default()`.
 * The `.execute()` method evaluates the cases against the value and returns the
 * result of the matching case or the default case, if provided.
 *
 * @param value The value to be matched against the defined cases in the InlineSwitch instance.
 * @returns A new instance of InlineSwitch configured with the provided value.
 *
 * @example
 * // Using inlineSwitch to determine fruit colors.
 * const fruitColor = inlineSwitch('apple')
 *   .case('apple', () => 'red')
 *   .case('banana', () => 'yellow')
 *   .case('orange', () => 'orange')
 *   .default(() => 'unknown color')
 *   .execute();
 *
 * console.log(fruitColor); // Outputs: 'red'
 *
 * @example
 * // Using inlineSwitch with mixed return types and a default case.
 * const processedValue = inlineSwitch('kiwi')
 *   .case('apple', () => 42)
 *   .case('banana', () => true)
 *   .case('orange', () => 'orange')
 *   .default(() => null)
 *   .execute();
 *
 * console.log(processedValue); // Outputs: null
 */
export function inlineSwitch<T>(value: T) {
    return new InlineSwitch(value);
}
