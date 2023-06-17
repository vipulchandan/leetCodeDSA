// 560. Subarray Sum Equals K

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

 

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 2 * 10^4
// -1000 <= nums[i] <= 1000
// -10^7 <= k <= 10^7

var subarraySum = function(nums, k) {
    let count = 0;
    let prefixSum = 0;

    let map = new Map();
    map.set(0, 1);

    for(let i=0; i<nums.length; i++) {
        prefixSum += nums[i];
        count += map.get(prefixSum - k) || 0;

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }
    return count;
};

const nums = [1,2,3];
const k = 3;

console.log(subarraySum(nums, k));

//TC : O(n)
//SC: O(n)
