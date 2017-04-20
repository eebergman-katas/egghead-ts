// Algorithm to determine if two strings are an anagram

/**
 * A word is an anagram of another, if you can rearrange its characters to produce the second word.
 *  
 * Given two strings, determine if the are anagrams of each other
 */

// Just check if they have the exact same characters

export function areAnagrams(string1: string, string2: string): boolean {
    string1 = string1.split('').sort().join('');
    string2 = string2.split('').sort().join('');
    return string1 === string2;
}