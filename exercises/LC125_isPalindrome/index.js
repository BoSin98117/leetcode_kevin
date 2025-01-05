/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. 

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome. 

Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/


function isPalindrome(s) {
    // Sanitize the input string(s) by removing all alphanumeric characters and lowercasing it.
    // \W - grab all NON-Alphanumeric characters such as SPACES, COLONS, COMMAS, etc..
    // '_' - Include underscores(_) as well.
    // "" - means that we want to replace all NON-Alphanumeric characters with an empty string
    s = s.toLowerCase().replace(/[\W_]/g, "")
    // .replace() takes in 2 arguements
    // 1. what we want to replace (the regular expression: /[\W_]/g)
    // the square brackets [] in the regular expression indicates a capture group
    // 2. what we want to replace it with (an empty string: "")


    // Create 2 pointers, left and right
    let left = 0;   // left pointer at the start of our input string
    let right = s.length - 1;   // right pointer at the end of our input string

    // While left < right
    while (left < right) {
        if (s[left] !== s[right]) {
            // If the charaster at left is !== to the character at right, return false
            return false;
        }
        // If it is equal, move Left pointer UP and Right pointer DOWN.
        left++;
        right--;
    }

    // If we did not return FALSE in the WHILE LOOP, then it is a valid palindrome.
    return true;
}

module.exports = isPalindrome;

/*
Time Complexity - O(n) - Iterate through the string
Space Complexity - O(1) - Left and Right pointers take up constant space
*/

/*
"A man, a plan, a canal: Panama"
After Sanitizing:
amanaplanacanalpanama

*/