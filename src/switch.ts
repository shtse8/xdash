class InlineSwitch<T, R = never, E = undefined> {
    private cases = new Map<T, () => any>();
    private defaultCase?: () => any;

    constructor(private readonly value: T) { }

    // Method to add a case
    case<U>(caseValue: T, result: () => U): InlineSwitch<T, R | U> {
        this.cases.set(caseValue, result);
        return this as any;
    }

    // Method to set the default case
    default<U>(result: () => U): Omit<InlineSwitch<T, R | U, never>, 'default'> {
        if (this.defaultCase) {
            throw new Error("Default case already set.");
        }
        this.defaultCase = result;
        return this as any;
    }

    // Method to execute the switch
    execute(): R | E {
        const result = this.cases.get(this.value);
        if (result) {
            return result();
        }

        if (this.defaultCase) {
            return this.defaultCase();
        }

        return undefined as any;
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
