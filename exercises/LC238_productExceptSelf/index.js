/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation. 

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0] 

Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/

// // 
// const productExceptSelf = nums => {
//   // Output Array will be all 1's
//   let output = nums.map(n => 1);
//   // Set product to 1 initially
//   // This will be the accumulated value 
//   let product = 1;

//   // console.log("output[] = " + output + "\n");

//   // Multiply from the LEFT
//   for (let i = 0; i < nums.length; i++) {
//     // console.log("output[i] = " + output[i]);
//     // console.log("product = " + product);
//     output[i] = output[i] * product;
//     // console.log("output[i] * product = " + output[i]);
//     // Mulitply product by the current number at nums[i]
//     // Accumulated value of the LEFT
//     product = product * nums[i];
//   }

//   // console.log("LEFT output[] = " + output + "\n");

//   // Reset product to 1
//   product = 1;

//   // Multiply from the RIGHT
//   for (let j = nums.length - 1; j >= 0; j--) {
//     output[j] = output[j] * product;
//     // Accumulated value of the RIGHT
//     product = product * nums[j];
//   }

//   // console.log("RIGHT output[] = " + output);

//   return output;
// };

// // module.exports = productExceptSelf;
// productExceptSelf([1, 2, 3, 4]);

/*
Time Complexity: O(n) - There are for loop but NO NESTED FOR LOOP
Space Complexity: O(1) - The OUTPUT ARRAY does not count as extra space for the purpose of space complexity analysis.
*/



var productExceptSelf = function (nums) {
  let output = []
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    output[i] = product
    product = nums[i] * product
  }

  product = 1
  for (let j = nums.length - 1; j >= 0; j--) {
    output[j] = product * output[j]
    product = nums[j] * product
  }

  return output
};
