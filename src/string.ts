/**
 * Capitalizes the first letter of a string
 * @param str string to capitalize
 * @returns the string with the first letter capitalized
 * @example
 * capitalize('foo') // returns 'Foo'
 * capitalize('FOO') // returns 'FOO'
 * capitalize('123') // returns '123'
 * capitalize('') // returns ''
 */
export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to camelCase
 * @param str string to convert
 * @returns the string in camelCase
 * @example
 * camelCase('foo-bar') // returns 'fooBar'
 * camelCase('foo_bar') // returns 'fooBar'
 * camelCase('FooBar') // returns 'fooBar'
 * camelCase('FOO_BAR') // returns 'fooBar'
 */
export function camelCase(str: string): string {
    const words = separateWords(str);
    return words
        .map((word, index) =>
            index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
}

/**
 * Converts a string to kebab-case
 * @param str string to convert
 * @param options options for the conversion
 * @returns the string in kebab-case
 * @example
 * kebabCase('fooBar') // returns 'foo-bar'
 * kebabCase('foo_bar') // returns 'foo-bar'
 * kebabCase('foo-bar') // returns 'foo-bar'
 * kebabCase('FOO_BAR') // returns 'foo-bar'
 * kebabCase('foo') // returns 'foo'
 * kebabCase('') // returns ''
 * kebabCase('fooBar', { screaming: true }) // returns 'FOO-BAR'
 * kebabCase('foo_bar', { screaming: true }) // returns 'FOO-BAR'
 * kebabCase('foo-bar', { screaming: true }) // returns 'FOO-BAR'
 * kebabCase('FOO_BAR', { screaming: true }) // returns 'FOO-BAR'
 * kebabCase('foo', { screaming: true }) // returns 'FOO'
 */
export function kebabCase(str: string, options = { screaming: false }) {
    const words = separateWords(str).map(word => word.toLowerCase());
    const kebab = words.join('-');
    return options.screaming ? kebab.toUpperCase() : kebab;
}

/**
 * Converts a string to snake_case
 * @param str string to convert
 * @param options options for the conversion
 * @returns the string in snake_case
 * @example
 * snakeCase('fooBar') // returns 'foo_bar'
 * snakeCase('foo-bar') // returns 'foo_bar'
 * snakeCase('foo_bar') // returns 'foo_bar'
 * snakeCase('FOO_BAR') // returns 'foo_bar'
 * snakeCase('foo') // returns 'foo'
 * snakeCase('') // returns ''
 * snakeCase('fooBar', { screaming: true }) // returns 'FOO_BAR'
 * snakeCase('foo-bar', { screaming: true }) // returns 'FOO_BAR'
 * snakeCase('foo_bar', { screaming: true }) // returns 'FOO_BAR'
 * snakeCase('FOO_BAR', { screaming: true }) // returns 'FOO_BAR'
 * snakeCase('foo', { screaming: true }) // returns 'FOO'
 * snakeCase('fooBar', { screaming: true }) // returns 'FOO_BAR'
 * snakeCase('foo-bar', { screaming: true }) // returns 'FOO_BAR'
 */
export function snakeCase(str: string, options = { screaming: false }) {
    const words = separateWords(str).map(word => word.toLowerCase());
    const snake = words.join('_');
    return options.screaming ? snake.toUpperCase() : snake;
}

/**
 * Converts a string to PascalCase
 * @param str string to convert
 * @returns the string in PascalCase
 * @example
 * pascalCase('fooBar') // returns 'FooBar'
 * pascalCase('foo-bar') // returns 'FooBar'
 * pascalCase('foo_bar') // returns 'FooBar'
 * pascalCase('FOO_BAR') // returns 'FooBar'
 * pascalCase('foo') // returns 'Foo'
 * pascalCase('') // returns ''
 */
export function pascalCase(str: string): string {
    const words = separateWords(str);
    return words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}

/**
 * Converts a string to lower case
 * @param str string to convert
 * @returns the string in lower case
 * @example
 * lowerCase('FOO') // returns 'foo'
 * lowerCase('foo') // returns 'foo'
 * lowerCase('123') // returns '123'
 * lowerCase('') // returns ''
 */
export function lowerCase(str: string): string {
    return str.toLowerCase();
}

/**
 * Converts a string to upper case
 * @param str string to convert
 * @returns the string in upper case
 * @example
 * upperCase('foo') // returns 'FOO'
 * upperCase('FOO') // returns 'FOO'
 * upperCase('123') // returns '123'
 * upperCase('') // returns ''
 * upperCase('foo-bar') // returns 'FOO-BAR'
 */
export function upperCase(str: string): string {
    return str.toUpperCase();
}

/**
 * Detects the case of a string
 * @param str string to detect the case of
 * @returns the detected case of the string
 * @example
 * detectCase('fooBar') // returns 'camel'
 * detectCase('foo-bar') // returns 'kebab'
 * detectCase('FOO-BAR') // returns 'screaming-kebab'
 * detectCase('foo_bar') // returns 'snake'
 * detectCase('FOO_BAR') // returns 'screaming-snake'
 * detectCase('FooBar') // returns 'pascal'
 * detectCase('FOO BAR') // returns 'upper'
 * detectCase('foo bar') // returns 'lower'
 * detectCase('fooBar-baz') // returns 'mixed
 * detectCase('foo BAR') // returns 'mixed
 * detectCase('') // returns 'none' 
 */
export function detectCase(str: string): 'camel' | 'kebab' | 'screaming-kebab' | 'snake' | 'screaming-snake' | 'pascal' | 'lower' | 'upper' | 'mixed' | 'none' {
    if (!str) {
        return 'none';
    }

    const hasDash = str.includes('-');
    const hasUnderscore = str.includes('_');
    const hasSpace = str.includes(' ');
    const noSeparator = !hasDash && !hasUnderscore && !hasSpace;

    if ((hasDash && (hasUnderscore || hasSpace)) || (hasUnderscore && hasSpace)) {
        return 'mixed';
    }

    if (hasDash) {
        if (str === str.toUpperCase()) {
            return 'screaming-kebab';
        }
        if (str === str.toLowerCase()) {
            return 'kebab';
        }
    }

    if (hasUnderscore) {
        if (str === str.toUpperCase()) {
            return 'screaming-snake';
        }
        if (str === str.toLowerCase()) {
            return 'snake';
        }
    }

    if (str === str.toUpperCase()) {
        return 'upper';
    }

    if (str === str.toLowerCase()) {
        return 'lower';
    }

    if (noSeparator) {
        if (str[0] === str[0].toUpperCase()) {
            return 'pascal';
        }
        return 'camel';
    }

    return 'mixed';
}

/**
 * Separates words in a string based on the detected case.
 * @param str The string to separate.
 * @returns An array of separated words.
 * @example
 * separateWords('fooBar') // returns ['foo', 'Bar']
 * separateWords('foo-bar') // returns ['foo', 'bar']
 * separateWords('FOO_BAR') // returns ['FOO', 'BAR']
 * separateWords('foo bar') // returns ['foo', 'bar']
 * separateWords('') // returns []
 * separateWords('fooBar-baz') // returns ['foo', 'Bar', 'baz']
 */
export function separateWords(str: string): string[] {
    const caseType = detectCase(str);

    switch (caseType) {
        case 'camel':
        case 'pascal':
            // Split and filter empty strings
            return str.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ').filter(Boolean);
        case 'snake':
        case 'screaming-snake':
            return str.split('_').filter(Boolean);
        case 'kebab':
        case 'screaming-kebab':
            return str.split('-').filter(Boolean);
        case 'lower':
        case 'upper':
            return str.split(' ').filter(Boolean);
        case 'mixed':
            // Attempt a more robust split for mixed cases, e.g., by space, dash, underscore, or case change
            // This is a basic attempt, might need refinement based on desired behavior for complex mixed cases
             return str.replace(/([a-z])([A-Z])/g, '$1 $2') // Camel/Pascal case changes
                       .split(/[\s_-]+/) // Split by space, underscore, or dash
                       .filter(Boolean);
            // throw new Error('Cannot separate words in a mixed case string'); // Original behavior
        case 'none':
            return [];
        default:
            // Should not happen if detectCase is exhaustive
            return [];
    }
}


/**
 * Splits a string into an array of substrings based on a separator
 * @param str string to split
 * @param separator separator to split the string by
 * @param limit maximum number of substrings to return
 * @returns an array of substrings
 */
export function split(str: string, separator: string | RegExp, limit?: number): string[] {
    return str.split(separator, limit);
}
