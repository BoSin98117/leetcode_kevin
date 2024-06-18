/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false 

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/


const isValid = s => {
    let stack = [];
    let pairsHashMap = { "(": ")", "{": "}", "[": "]" };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        // If pairsHashMap[char] is a key, then we push it into our stack[].
        // stack.push(char) = key
        if (pairsHashMap[char]) {
            stack.push(char);
            // Now we have pushed the keys: (, {, and [ into our stack[].
            // So now if we pop the values out of our stack[] and it's not equal to the char, then we would return false.
            // stack.pop() = value
        } else if (pairsHashMap[stack.pop()] !== char) {
            return false;
        }
    }

    // We do not return true; because the stack may contain keys that were not popped off.
    // We return stack.length === 0; because we want to make sure that there are no other keys left in our stack.  This statement would be equal to returning true.
    return stack.length === 0;
};

module.exports = isValid;

/*
Time Complexity: O(n) - We iterate through the input string just once
Space Complexity: O(n) - In worst case, stack is same length as input string
*/
////