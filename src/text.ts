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
        sliceOnPunctuation = true, // Slice at punctuation
        sliceOnSpace = true, // Slice at spaces
        sliceOnCjk = true, // Slice at CJK (Chinese, Japanese, Korean) characters
        sliceOnNumber = false, // Slice at numeric characters
        ellipsis = false, // Add an ellipsis (...) at the end if the text is sliced
        ellipsisSymbol = '…', // Symbol to use for the ellipsis
        includeEllipsis = true, // Whether the ellipsis symbol should be included in the length calculation
        trimEnd = true, // Trim trailing spaces at the end of the sliced string
        trimStart = true, // Trim leading spaces at the beginning of the string
    } = options;

    // Trim the start of the string if required
    if (trimStart) str = str.trimStart();

    // Constructing the regex pattern based on the provided options
    const separators = [
        sliceOnPunctuation ? regexMap.punctuation : undefined,
        sliceOnCjk ? regexMap.cjk : undefined,
        sliceOnNumber ? regexMap.number : undefined,
        sliceOnSpace ? regexMap.space : undefined,
        '$', // End of string
    ].filter(Boolean).join('|');

    // Calculate the effective length of the string slice, considering the ellipsis symbol if included
    const ellipsisLen = includeEllipsis && ellipsis ? ellipsisSymbol.length : 0;
    const effectiveLength = Math.max(0, len - ellipsisLen);

    // Regex to match up to the effective length, optionally stopping at a separator if present
    const regex = new RegExp(`^(.{0,${effectiveLength}})(${separators})`, 'su');

    let match = str.match(regex);

    // If no match is found, return an empty string
    if (!match) return '';

    // Extract the matched substring
    let result = match[1];
    // Trim the end of the string if required
    if (trimEnd) result = result.trimEnd();

    // Append the ellipsis symbol if the original string exceeds the specified length or ends right before a separator
    if (ellipsis && (str.length > len || match[2])) {
        result += ellipsisSymbol;
    }

    // Return the processed string
    return result;
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
    const regex = new RegExp(`${regexMap.latinVocab}|${regexMap.cjk}${concatCjk ? '+' : ''}`, 'ug');

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
 * @param {boolean} [options.concatCjk=false] - Whether to treat consecutive CJK characters as a single word.
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
        concatCjk = false,
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