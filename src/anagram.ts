// Algorithm to determine if two strings are an anagram

/**
 * A word is an anagram of another, if you can rearrange its characters to produce the second word.
 *  
 * Given two strings, determine if the are anagrams of each other
 */

export function areAnagrams(string1: string, string2: string): boolean {
    for (const permutation of permutations(string1)) {
        if (permutation === string2) return true;
    }
    return false;
}