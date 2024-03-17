import { describe, test, it, expect } from 'bun:test'
import x from '../src/index'

describe('SemanticWords', () => {
    test("Extracts words from English text", () => {
        const text = "Hello, World!";
        const expected = ["Hello", "World"];
        const result = x.semanticWords(text);
        expect(result).toEqual(expected);
    });

    test("Extracts words from text with diacritics", () => {
        const text = "Café à l'enfant";
        const expected = ["Café", "à", "l'enfant"]; // Adjust expected output based on your normalization
        const result = x.semanticWords(text);
        expect(result).toEqual(expected);
    });

    test("Handles CJK characters individually by default", () => {
        const text = "你好世界";
        const expected = ["你", "好", "世", "界"];
        const result = x.semanticWords(text);
        expect(result).toEqual(expected);
    });

    test("Concatenates CJK characters when concatCjk is true", () => {
        const text = "你好世界";
        const expected = ["你好世界"];
        const result = x.semanticWords(text, true);
        expect(result).toEqual(expected);
    });

    test("Extracts mixed Latin and CJK words correctly", () => {
        const text = "This is a 测试";
        const expected = ["This", "is", "a", "测试"];
        const result = x.semanticWords(text, true);
        expect(result).toEqual(expected);
    });
})


describe('semanticNormalize', () => {
    test("Normalizes Unicode composition and removes diacritics", () => {
        const input = "Café à l'enfant";
        const expected = "cafe a lenfant"; // Assuming diacritics removal and lowercase conversion
        const result = x.semanticNormalize(input);
        expect(result).toBe(expected);
    });

    test("Removes apostrophes and converts to lowercase", () => {
        const input = "DON'T STOP, won’t stop";
        const expected = "dont stop, wont stop"; // Assuming apostrophe removal and lowercase conversion
        const result = x.semanticNormalize(input);
        expect(result).toBe(expected);
    });

    test("Normalizes spacing and handles CJK characters", () => {
        const input = "   Hello   世界    !   ";
        const expected = "   hello   世界    !   "; // Assuming spacing normalization and lowercase conversion
        // Note: Depending on how you handle punctuation, you might need to adjust the expected result.
        const result = x.semanticNormalize(input);
        expect(result).toBe(expected);
    });

    test("Handles mixed scripts and numbers", () => {
        const input = "ABC123def 你好 456GHI";
        const expected = "abc123def 你好 456ghi"; // Assuming lowercase conversion and proper script handling
        const result = x.semanticNormalize(input);
        expect(result).toBe(expected);
    });


    test("Handles full-width characters", () => {
        const input = "1 ２ 3 ４ Ａ Ｂ Ｃ ａ ｂ ｃ";
        const expected = "1 2 3 4 a b c a b c"; // Assuming lowercase conversion and proper script handling
        const result = x.semanticNormalize(input);
        expect(result).toBe(expected);
    });
})

describe('slugify', () => {
    test("slugifies English text with default options", () => {
        const input = "Hello, World!";
        const expected = "hello-world";
        const result = x.slugify(input);
        expect(result).toBe(expected);
    });

    test("handles custom separator and lowercase option", () => {
        const input = "Hello, World!";
        const options = { separator: "_", lowercase: false };
        const expected = "Hello_World";
        const result = x.slugify(input, options);
        expect(result).toBe(expected);
    });

    test("concatenates CJK characters when specified", () => {
        const input = "你好 世界";
        const options = { concatCjk: true };
        const expected = "你好-世界";
        const result = x.slugify(input, options);
        expect(result).toBe(expected);
    });

    test("not concatenates CJK characters when specified", () => {
        const input = "你好 世界";
        const options = { concatCjk: false };
        const expected = "你-好-世-界";
        const result = x.slugify(input, options);
        expect(result).toBe(expected);
    });

    test("applies length constraint correctly", () => {
        const input = "A long sentence with a length constraint";
        const options = { length: 10 };
        const expected = "a-long";
        const result = x.slugify(input, options);
        expect(result).toBe(expected);
    });

    test("does not end with separator when length limit reached", () => {
        const input = "Hello world";
        const options = { length: 11 }; // "Hello-world".length = 11, but checking edge case
        const expected = "hello-world";
        const result = x.slugify(input, options);
        expect(result).toBe(expected);
    });
})


describe('semanticSlice', () => {
    test("Slices at punctuation with default options", () => {
        const input = "Hello, world!";
        const expected = "Hello";
        const result = x.semanticSlice(input, 5);
        expect(result).toBe(expected);
    });

    test("Slices at spaces with custom ellipsis", () => {
        const input = "Hello amazing world";
        const options = { ellipsis: true, ellipsisSymbol: '...', includeEllipsis: false };
        const expected = "Hello...";
        const result = x.semanticSlice(input, 10, options);
        expect(result).toBe(expected);
    });

    test("Handles CJK characters and slices accordingly", () => {
        const input = "你好世界";
        const expected = "你好";
        const result = x.semanticSlice(input, 2, { sliceOnCjk: true });
        expect(result).toBe(expected);
    });

    test("Ignores numbers when sliceOnNumber is false", () => {
        const input = "1234567890";
        const options = { sliceOnNumber: false };
        const expected = ""; // Expect empty string because slicing at numbers is disabled
        const result = x.semanticSlice(input, 5, options);
        expect(result).toBe(expected);
    });

    test("Includes ellipsis within length calculation", () => {
        const input = "Hello world";
        const options = { ellipsis: true, includeEllipsis: true };
        const expected = "Hello…";
        const result = x.semanticSlice(input, 6, options); // "Hello" + "…" = 6 characters
        expect(result).toBe(expected);
    });

    test("Trims start and end as required", () => {
        const input = "  Hello world  ";
        const expected = "Hello";
        const result = x.semanticSlice(input, 5);
        expect(result).toBe(expected);
    });
})
