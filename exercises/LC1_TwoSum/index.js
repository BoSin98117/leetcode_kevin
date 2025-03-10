/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. 

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1] 

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

function twoSum(arr, target) {
    // Create Hash Table Object to store each element that is visited from Input Array
    // Input array: [2, 4, 1, 6]
    // numsVisited{2: 0, 4: 1, 1: 2, 6: 3} | 2:index[0], 4:index[1], 1:index[2], 6:index[3]
    const numsVisited = {};
    // Create an array to return the indices of the values that add up to Target
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const complement = target - num;
        console.log("\n");
        console.log("i = " + i);
        console.log("num[i] = " + num);
        console.log("complement = " + complement);
        // UNDEFINED - we make it undefined bc Javascript see's 0 as a falsy value.  So if we push to res[], the first index is 0, and Javascript will consider it falsy.  Making it undefined will resolve this.
        if (numsVisited[complement] !== undefined) {
            res.push(numsVisited[complement]);
            res.push(i);

            console.log("numsVisited[complement] = " + numsVisited[complement]);
        }
        numsVisited[num] = i;
        console.log(numsVisited);
    }
    console.log("res.push 'numsVisited[complement]' and 'i' = " + res);;
    return res;
}
// module.exports = twoSum;
twoSum([2, 7, 0, 4, 5, 6], 5);


/*
Time Complexity: O(n) - We traverse the list containing n elements only once.  Each look up in the Hash Table costs only O(1) time.
Space Complexity: O(n) - Number of key value pairs stored in Hash Table.  It stores at most n elements of the Input Array.
*/
//

