// 238. Product of Array Except Self

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

2 <= nums.length <= 10^5
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

var productExceptSelf = function(nums) {
    const res = new Array(nums.length).fill(1);  // Initialize the result array with all elements set to 1

    let prefix = 1;  // Initialize the prefix product variable to 1
    for(let i = 0; i < nums.length; i++) {
        res[i] = prefix;  // Assign the current prefix product to the corresponding index in the result array
        prefix *= nums[i];  // Update the prefix product by multiplying it with the current number
    }

    let postfix = 1;  // Initialize the postfix product variable to 1
    for(let i = nums.length - 1; i >= 0; i--) {
        res[i] *= postfix;  // Multiply the current postfix product with the corresponding index in the result array
        postfix *= nums[i];  // Update the postfix product by multiplying it with the current number
    }

    return res;  // Return the resulting array
};

const nums = [1,2,3,4];
console.log(productExceptSelf(nums));