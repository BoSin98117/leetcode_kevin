/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. 

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

// 
function groupAnagrams(strs) {
    let grouped = {};
    for (let i = 0; i < strs.length; i++) {
        const word = strs[i];
        console.log("word is: " + word);
        // This will split the word into an array of characters,
        // sort the word alphabetically
        // then joins them back into a word that is alphabetically sorted.
        // time = t, i, m, e | e, i, m, t | eimt
        const key = word.split('').sort().join('');
        console.log("key is: " + key);

        // If that key DOES NOT exist in our object...
        if (!grouped[key]) {
            // We will set that KEY to an EMPTY ARRAY
            grouped[key] = [];
        };

        // Push the word into the appropriate key array.
        grouped[key].push(word);
        console.log(grouped);

        console.log("\n");
    }

    // OBJECT.VALUES(GROUPED) - If we pass in an OBJECT(GROUP), OBJECT.VALUES will return an ARRAY of the values in that object.  In this case, it will return an array of arrays.//////
    return Object.values(grouped);
}

groupAnagrams(strs = ["eat", "tea", "tan", "ate", "nat", "bat"]);

// module.exports = groupAnagrams;


/*
Time Complexity: O(N K log K) - Where N is number of strings, and K is length of strings
N = number of strings
K log K = the SORT method

Space Complexity: O(N K) - Data stored in our grouped Hash Table which is an object of arrays with key/value pairs
*/


