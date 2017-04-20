// Algorithm to determine if two strings are an anagram

export function areAnagrams(string1: string, string2: string): boolean {
    for (const permutation of permutations(string1)) {
        if (permutation === string2) return true;
    }
    return false;
}