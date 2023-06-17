// 1248. Count Number of Nice Subarrays

/*
Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

Return the number of nice sub-arrays.

 

Example 1:

Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
Example 2:

Input: nums = [2,4,6], k = 1
Output: 0
Explanation: There is no odd numbers in the array.
Example 3:

Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
Output: 16
 

Constraints:

1 <= nums.length <= 50000
1 <= nums[i] <= 10^5
1 <= k <= nums.length
*/

var numberOfSubarrays = function(nums, k) {
  // Initialize variables: left and right pointers, count of odd numbers, answer, and prefix count
  let left = 0;
  let right = 0;
  let noOfOdd = 0;
  let answer = 0;
  let prefix = 0;

  // Iterate through the nums array using the right pointer
  for (right = 0; right < nums.length; right++) {
    // Check if the current number is odd
    if (nums[right] % 2 !== 0) {
      noOfOdd++;
    }

    // Adjust the window if the count of odd numbers exceeds k
    while (noOfOdd > k && left < right) {
      // If the number at the left pointer is odd, decrement the count of odd numbers
      if (nums[left] % 2 !== 0) {
        noOfOdd--;
      }
      // Move the left pointer to the right and reset the prefix count
      left++;
      prefix = 0;
    }

    // Move the left pointer and update the prefix count while the number is even
    while (nums[left] % 2 === 0 && left < right) {
      left++;
      prefix++;
    }

    // If the count of odd numbers is equal to k, update the answer by adding the prefix count + 1
    if (noOfOdd === k) {
      answer += prefix + 1;
    }
  }

  // Return the final answer
  return answer;
};

const nums = [2,2,2,1,2,2,1,2,2,2];
const k = 2;

console.log(numberOfSubarrays(nums, k));