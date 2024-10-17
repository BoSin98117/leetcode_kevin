//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
    let startIndex = 0; // Start iterating on the first character in the string
    let maxLength = 1;  // Our longest substring has to be at least 1

    // Helper function that has LEFT and RIGHT pointers,
    function expandAroundMiddle(left, right) {
        // While there is a left and right pointer && the left === right
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // Get the length of the string.  Add '1' because array indices start at 0
            // 0 1 2 3 4 5 6 7 | If our longest palindrome is index 2 to 6 with index 4 as the middle, we subtract 6 - 2 = 4 + 1 = 5 | So our maxLength would be 5 (from index 2 to index 6)
            const currentPalLength = right - left + 1;
            if (currentPalLength > maxLength) {
                maxLength = currentPalLength;
                startIndex = left;
            }

            // expand from the middle //
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundMiddle(i - 1, i + 1);   // This is the middle of left and right.  This is for ODD NUMBER of characters.  For example: aba - 'b' is the CENTER
        expandAroundMiddle(i, i + 1); // This is the space in between each character.  It is for EVEN NUMBER of characters in the string.  For example: abba - 4 characters.  This code will treat the SPACE between 'b' and 'b' as the CENTER.  
    }

    return s.slice(startIndex, startIndex + maxLength);
}

module.exports = longestPalindrome;

/*
Expand Around The Center Method
Have our center both be the character we are iterating on AND the space in between each character.

Time Complexity O(n^2) - Expanding a palindrome around its center could take up to O(n), and we do this for EACH CHARACTER.
Space Complexity O(1)
*/
