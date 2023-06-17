// 1. Two Sums
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

var twoSum = function(nums, target) {
    let ans = new Array(2); // Array to store the indices of the two numbers
    
    let map = new Map(); // Map to store numbers encountered and their indices
    for(let i=0; i<nums.length; i++) {
        let complement = target - nums[i]; // Calculate the complement for the current number
        
        if(map.has(complement)) {
            // If the complement exists in the map, it means we have found the two numbers that add up to the target
            ans[0] = map.get(complement); // Get the index of the complement from the map and store it as the second element of the ans array
            ans[1] = i; // Store the current index as the first element of the ans array
            break; // Exit the loop since the solution has been found
        }

        map.set(nums[i], i); // Add the current number and its index to the map
    }
    return ans; // Return the array with the indices of the two numbers
};

const nums = [2,7,11,15]; 
const target = 9

console.log(twoSum(nums, target));