// 930. Binary Subarrays With Sum

/*
Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

A subarray is a contiguous part of the array.

 

Example 1:

Input: nums = [1,0,1,0,1], goal = 2
Output: 4
Explanation: The 4 subarrays are bolded and underlined below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
Example 2:

Input: nums = [0,0,0,0,0], goal = 0
Output: 15
 

Constraints:

1 <= nums.length <= 3 * 104
nums[i] is either 0 or 1.
0 <= goal <= nums.length
*/

var numSubarraysWithSum = function(nums, goal) {
  // Initialize variables: left and right pointers, current sum, answer count, and prefix count
  let left = 0;
  let right = 0;
  let sum = 0;
  let answer = 0;
  let prefix = 0;

  // Iterate through the nums array using the right pointer
  for (right = 0; right < nums.length; right++) {
    // Add the current number to the sum
    sum += nums[right];

    // Adjust the window if the sum exceeds the goal
    while (sum > goal && left < right) {
      // Subtract the number at the left pointer from the sum
      sum -= nums[left];
      // Move the left pointer to the right and reset the prefix count
      left++;
      prefix = 0;
    }

    // Move the left pointer and update the prefix count while the number is zero
    while (nums[left] === 0 && left < right) {
      sum -= nums[left];
      left++;
      prefix++;
    }

    // If the sum equals the goal, update the answer by adding the prefix count + 1
    if (sum === goal) {
      answer += prefix + 1;
    }
  }

  // Return the final answer count
  return answer;
};

const nums = [1,0,1,0,1];
const goal = 2;
console.log(numSubarraysWithSum(nums, goal));