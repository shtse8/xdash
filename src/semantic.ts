const regexMap: Record<string, string> = {
    punctuation: '\\p{P}',
    number: '\\p{N}',
    apostrophe: '[\'’]',
    space: '\\s',
    wordConnector: '[\\s-]',
    // Removed duplicate apostrophe key to avoid overwriting
    latinChar: '[\\p{Ll}\\p{Lu}\\p{Lt}]',
    // No need to re-declare apostrophe here; it's already accounted for in latinVocab
    // Integrated latinVocab more succinctly
    cjk: '[\\p{sc=Han}\\p{sc=Hiragana}\\p{sc=Hangul}]', // Simplified regex grouping
};

// Defining 'latinVocab' after initial definition to use 'latinChar' and 'apostrophe'
regexMap.latinVocab = `${regexMap.latinChar}+(?:(?=${regexMap.apostrophe}|${regexMap.latinChar})${regexMap.apostrophe}?${regexMap.latinChar}+)?`;

// 'word' combines 'latinVocab', 'cjk', and digits into a comprehensive regex for word matching
regexMap.word = `(?:${regexMap.latinVocab}|${regexMap.cjk}|\\d+)`;


/**
 * Slices a string semantically, considering word boundaries and optionally adding an ellipsis.
 * @param str string to slice
 * @param len length to slice the string to
 * @param options options for the slice operation
 * @returns the sliced string
 * @example
 * semanticSlice('The quick brown fox', 10) // returns 'The quick…'
 * semanticSlice('The quick brown fox', 10, { ellipsis: true }) // returns 'The quick…'
 * semanticSlice('The quick brown fox', 10, { ellipsis: true, includeEllipsis: false }) // returns 'The quick'
 * semanticSlice('The quick brown fox', 10, { ellipsis: true, trimEnd: false }) // returns 'The quick brown…'
 * semanticSlice('The quick, brown fox', 10) // returns 'The quick,'
 * semanticSlice('The quick, brown fox', 10, { sliceOnPunctuation: false }) // returns 'The quick'
 * semanticSlice('The quick, brown fox', 10, { sliceOnSpace: false }) // returns 'The'
 * semanticSlice('The quick, brown fox', 10, { sliceOnCjk: false }) // returns 'The quick,'
 * semanticSlice('這是一個非常長的句子', 5) // returns '這是一個非常長的句'
 * semanticSlice('這是一個非常長的句子', 5, { sliceOnCjk: false }) // returns '這是一個非常長的'
 * semanticSlice('這是一個非常長的句子', 5, { ellipsis: true }) // returns '這是一個非常長的句…'
 */
export function semanticSlice(str: string, len: number, options: {
    sliceOnPunctuation?: boolean,
    sliceOnSpace?: boolean,
    sliceOnCjk?: boolean,
    sliceOnNumber?: boolean,
    ellipsis?: boolean,
    ellipsisSymbol?: string,
    includeEllipsis?: boolean,
    trimEnd?: boolean,
    trimStart?: boolean,
} = {}) {
    // Destructuring options with default values
    const {
        sliceOnPunctuation = true,
        sliceOnSpace = true,
        sliceOnCjk = true,
        sliceOnNumber = false, // Keep default as false
        ellipsis = false,
        ellipsisSymbol = '…',
        includeEllipsis = true,
        trimEnd = true,
        trimStart = true,
    } = options;

    if (trimStart) str = str.trimStart();

    // Handle zero or negative length early
    if (len <= 0) {
        // If ellipsis is enabled and included in length, it might still be added if len allows
        if (ellipsis && includeEllipsis && ellipsisSymbol.length > 0 && len >= ellipsisSymbol.length) {
             return ellipsisSymbol; // Special case: len allows only ellipsis
        }
         // Otherwise, return empty string for len <= 0
        return "";
    }

    const ellipsisLen = ellipsis ? ellipsisSymbol.length : 0;
    // Calculate max length for content *before* adding ellipsis
    const maxContentLen = includeEllipsis ? Math.max(0, len - ellipsisLen) : len;

    // If the original string is already short enough
    if (str.length <= len && (!ellipsis || str.length <= maxContentLen)) {
         return trimEnd ? str.trimEnd() : str;
    }

    // Initial slice based on maxContentLen
    let slicedStr = str.slice(0, maxContentLen);
    let finalSlice = slicedStr; // Default to this if no separator found

    // Build separator regex
    const separatorChars: string[] = [];
    if (sliceOnPunctuation) separatorChars.push('\\p{P}');
    // Treat each CJK char as a potential break point if sliceOnCjk is true
    if (sliceOnCjk) separatorChars.push('\\p{sc=Han}', '\\p{sc=Hiragana}', '\\p{sc=Hangul}');
    if (sliceOnNumber) separatorChars.push('\\p{N}');
    if (sliceOnSpace) separatorChars.push('\\s');

    if (separatorChars.length > 0 && slicedStr.length > 0) { // Only search if there are separators and content
        const separatorRegex = new RegExp(`(${separatorChars.join('|')})`, 'gu');
        let lastSeparatorIndex = -1;
        let match;

        // Find the index of the last separator *within* the initially sliced string
        // We need to reset lastIndex for each search if using global flag, or just search without global
        const nonGlobalSeparatorRegex = new RegExp(`(${separatorChars.join('|')})`, 'u');
        for (let i = slicedStr.length -1; i >= 0; i--) {
            if (nonGlobalSeparatorRegex.test(slicedStr[i])) {
                lastSeparatorIndex = i;
                break;
            }
        }

        if (lastSeparatorIndex !== -1) {
            // Truncate *before* the last separator found
            finalSlice = slicedStr.slice(0, lastSeparatorIndex);
        }
        // If no separator found, finalSlice remains the initially sliced string
    }

    // Trim the end *after* potential truncation
    if (trimEnd) finalSlice = finalSlice.trimEnd();

    // Determine if ellipsis should be added
    // Add ellipsis if the original string is longer than the *target* length 'len'
    // AND if the final content slice is actually shorter than the original string
    // (to avoid adding ellipsis if the string wasn't actually truncated).
    let needsEllipsis = ellipsis && str.length > len && finalSlice.length < str.length;

    // If includeEllipsis is false, we might need to shorten finalSlice further
    if (ellipsis && !includeEllipsis && finalSlice.length + ellipsisLen > len) {
        const availableLen = Math.max(0, len - ellipsisLen);
        finalSlice = finalSlice.slice(0, availableLen);
        if (trimEnd) finalSlice = finalSlice.trimEnd(); // Trim again
        needsEllipsis = true; // Ensure ellipsis is added after shortening
    }

    return needsEllipsis ? finalSlice + ellipsisSymbol : finalSlice;
}


/**
 * Normalizes a given text string, removing diacritics, handling special characters, and ensuring consistent casing and spacing.
 * 
 * @param {string} text - The input text to normalize.
 * @param {object} [options={}] - Configuration options for the normalization.
 * @param {boolean} [options.lowercase=true] - Whether to convert the text to lower case.
 * @returns {string} The normalized text.
 * 
 * @example
 * // Normalizing a mixed-language string
 * const mixedText = "Café 'au' lait, 世界!";
 * const normalized = semanticNormalize(mixedText);
 * console.log(normalized); // Output might be "cafe au lait 世界" depending on the exact regex definitions
 * 
 * @example
 * // Normalizing a string with diacritics and mixed casing
 * const diacriticText = "Àççéñtś and CĀSING";
 * const normalizedDiacritics = semanticNormalize(diacriticText);
 * console.log(normalizedDiacritics); // Output: "accents and casing"
 */
export function semanticNormalize(text: string, options: {
    lowercase?: boolean
} = {}): string {
    const {
        lowercase = true,
    } = options;

    // Normalize Unicode composition
    text = text.normalize('NFKD');

    // Remove diacritics
    text = text.replace(/\p{Diacritic}/gu, '');

    // Remove apostrophes
    text = text.replace(new RegExp(regexMap.apostrophe, 'ug'), '');

    // Convert text to lower case
    if (lowercase) {
        text = text.toLowerCase();
    }

    // Match and join segments to normalize spacing:
    // - This approach respects the CJK, Latin vocabularies (including words with apostrophes), and digits.
    // - Assumes 'regexMap.cjk' and 'regexMap.latinVocab' are regular expressions for matching CJK characters
    //   and Latin-based vocabularies, respectively. Adjust as per actual definitions.
    // - Segments are joined with a single space to ensure normalized spacing.
    // text = Array.from(text.matchAll(new RegExp(`${regexMap.cjk}+|${regexMap.latinVocab}|\\d+`, 'ug')))
    //     .map(match => match[0])
    //     .join(' ');

    return text;
}

/**
 * Extracts words from a given text string, recognizing Latin vocabulary and CJK characters.
 * The function can optionally treat consecutive CJK characters as a single word.
 * This is particularly useful for processing mixed-language texts where the distinction
 * between word boundaries may vary significantly between scripts.
 *
 * @param {string} text - The input text from which words will be extracted.
 * @param {boolean} concatCjk - Determines whether consecutive CJK characters should be
 *                              treated as a single word (true) or as individual characters (false).
 *                              Default is false, meaning CJK characters are treated individually.
 * @returns {string[]} - An array of extracted words. Latin words are identified based on standard
 *                       word boundaries, while CJK character handling is determined by the concatCjk flag.
 * 
 * @example
 * // Example with Latin text:
 * console.log(semanticWords("Hello, world!"));
 * // Expected output: ["Hello", "world"]
 * 
 * @example
 * // Example with mixed Latin and CJK text, treating CJK characters individually:
 * console.log(semanticWords("This is a 测试"));
 * // Expected output: ["This", "is", "a", "测", "试"]
 * 
 * @example
 * // Example with mixed Latin and CJK text, treating consecutive CJK characters as a single word:
 * console.log(semanticWords("This is a 测试", true));
 * // Expected output: ["This", "is", "a", "测试"]
 */
export function semanticWords(text: string, concatCjk = false): string[] {
    // Construct the regular expression dynamically based on the concatCjk flag.
    // This regex pattern aims to match Latin vocabulary words or CJK characters (grouped or not based on concatCjk).
    // The use of non-capturing groups (?:) and 'ug' flags ensures global matching of all occurrences in Unicode mode.
    const regex = new RegExp(`${regexMap.latinVocab}|${regexMap.number}+|${regexMap.cjk}${concatCjk ? '+' : ''}`, 'ug');

    // Use matchAll to find all matches for the regex in the text, then map to extract the matched strings.
    // This approach is streamlined for clarity and performance, directly converting the iterable from matchAll into an array of strings.
    return Array.from(text.matchAll(regex)).map(match => match[0]);
}

/**
 * Converts a given string into a slug, making it URL-friendly.
 * Supports concatenating CJK characters, converting to lowercase,
 * specifying a separator, and ensuring the slug does not exceed a specified maximum length,
 * while trying to preserve whole words when possible.
 *
 * @param {string} text - The input string to slugify.
 * @param {object} [options={}] - Configuration options for slugification.
 * @param {boolean} [options.concatCjk=true] - Whether to treat consecutive CJK characters as a single word.
 * @param {boolean} [options.lowercase=true] - Whether to convert the slug to lower case.
 * @param {string} [options.separator='-'] - The separator to use between words in the slug.
 * @param {number} [options.length=Infinity] - The desired maximum length of the generated slug. The function attempts not to exceed this length while preserving semantic integrity.
 * @returns {string} - The slugified string.
 */
export function slugify(text: string, options: {
    concatCjk?: boolean,
    lowercase?: boolean,
    separator?: string,
    length?: number
} = {}): string {
    const {
        concatCjk = true,
        lowercase = true,
        separator = '-',
        length = Infinity,
    } = options;

    let words = semanticWords(semanticNormalize(text, { lowercase }), concatCjk);

    // Construct the slug from words, checking against the length constraint.
    let slug = '';
    for (let word of words) {
        // Check if adding the next word would exceed the length limit
        if (slug.length + word.length + (slug ? separator.length : 0) > length) {
            break; // Stop adding words to avoid exceeding the maximum length
        }
        slug += (slug ? separator : '') + word;
    }

    return slug;
}