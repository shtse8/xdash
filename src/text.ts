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
        sliceOnPunctuation ? regexMap.punctuation : '',
        sliceOnCjk ? regexMap.cjk : '',
        sliceOnNumber ? regexMap.number : '',
        sliceOnSpace ? regexMap.space : '',
    ].filter(Boolean).join('');

    // Calculate the effective length of the string slice, considering the ellipsis symbol if included
    const ellipsisLen = includeEllipsis && ellipsis ? ellipsisSymbol.length : 0;
    const effectiveLength = Math.max(0, len - ellipsisLen);

    // Regex to match up to the effective length, optionally stopping at a separator if present
    const regex = new RegExp(`^(.{0,${effectiveLength}})([${separators}])?`, 'su');
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
 * Splits a string semantically, considering word boundaries and optionally adding an ellipsis.
 * @param str string to split
 * @param len length to split the string by
 * @returns an array of the split string segments
 * @example
 * semanticSplit('The quick brown fox', 10) // returns ['The quick…', 'brown fox']
 * semanticSplit('The quick, brown fox', 10) // returns ['The quick,', 'brown fox']
 * semanticSplit('The quick, brown fox', 10, { ellipsis: true }) // returns ['The quick…', 'brown fox']
 */
export function semanticSplit(str: string, len: number): string[] {
    // Initialize an array to hold the result segments.
    const result: string[] = [];

    // Continue splitting the string until its length is less than or equal to the target length.
    while (str.length > len) {
        // Use semanticSlice with a set of options that disable most semantic considerations.
        // If no suitable split point is found, it defaults to a more permissive set of conditions.
        let sliceOptions = {
            ellipsis: false,
            trimStart: false,
            trimEnd: false,
            sliceOnCjk: false,
            sliceOnSpace: false,
            sliceOnNumber: false,
        };
        let slicedStr = semanticSlice(str, len, sliceOptions);

        // If the slice operation did not return a result, try again without the restrictive options.
        if (!slicedStr) {
            sliceOptions = { ...sliceOptions, sliceOnCjk: true, sliceOnSpace: true, sliceOnNumber: true };
            slicedStr = semanticSlice(str, len, sliceOptions);
        }

        // Break the loop if no slicing is possible to avoid an infinite loop.
        if (!slicedStr) break;

        // Add the sliced part to the result array.
        result.push(slicedStr);

        // Update the remaining part of the string to continue splitting.
        str = str.slice(slicedStr.length);
    }

    // Add the remaining part of the string to the result array.
    result.push(str);

    return result;
}