/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. 

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false 

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/


function isAnagram(s, t) {
    // If the length of the strings are not equal, then it's not an anagram.
    if (s.length !== t.length) {
        return false;
    }

    // Create a Hash Map to keep a character count of each character.  
    // 'HELLO' = {H: 1, E: 1, L: 2, O: 1}
    const sCharCounts = {};

    // Fill up sCharCounts Hash Map
    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        // The character at sCharCounts[sChar] is equal to itself + 1 (sCharCounts[sChar] + 1) or 1 (meaning it was the first time the character is put into our sCharCounts Hash Map).
        sCharCounts[sChar] = sCharCounts[sChar] + 1 || 1;
    }

    // Now loop through t
    for (let i = 0; i < t.length; i++) {
        const tChar = t[i];
        // If the character at t[i] (tChar) is not in our sCharCounts{} Hash Map (!sCharCounts[]) or the character is in our sCharCounts{} Hash Map but it's value is '0' (!sCharCounts[]), then return false.
        if (!sCharCounts[tChar]) {
            return false;
            // If there is a tChar in sCharCounts then decrement it by 1.  We do this because sometimes there are duplicate characters in a string which means the value for that character is equal to the number of times it appears in our sCharCounts{} Hash Map.
        } else {
            sCharCounts[tChar]--
        }
    }

    // If we run through the loop for t and never return false, then we have a valid Anagram.
    return true;
}

module.exports = isAnagram;

/*
Time Complexity: O(n)
Space Complexity: O(1) - Our hash table will have a maximum of 26 key-value pairs because Leetcode will only pass in characters that are 'a - z' and they are LOWERCASE..
*/
//