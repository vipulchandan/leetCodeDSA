// 189. Rotate Array

/**
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 10^5
-2^31 <= nums[i] <= 2^31 - 1
0 <= k <= 10^5
*/


var rotate = function(nums, k) {
    // Calculate the effective rotation amount
    k = k % nums.length;

    // Reverse the entire array
    let l = 0;
    let r = nums.length - 1;
    while(l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]]; // Swap elements using destructuring assignment
        l++;
        r--;
    }

    // Reverse the first k elements
    l = 0;
    r = k - 1;
    while(l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]]; // Swap elements using destructuring assignment
        l++;
        r--;
    }

    // Reverse the remaining n-k elements
    l = k;
    r = nums.length - 1;
    while(l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]]; // Swap elements using destructuring assignment
        l++;
        r--;
    }

    return nums;
};

const nums = [1,2,3,4,5,6,7];
const k = 3;
console.log(rotate(nums, k));