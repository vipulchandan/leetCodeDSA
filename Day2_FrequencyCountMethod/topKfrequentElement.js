// 347. Top K Frequent Elements

/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
*/

var topKFrequent = function(nums, k) {
    // Create an object to store the frequency count of numbers
    let freqCount = {};
    // Create an array to store the result
    let result = [];

    // Count the frequency of each number in the input array
    for(let i of nums) {
        // If the number exists as a key, increment its count; otherwise, initialize it with 1
        freqCount[i] = (freqCount[i] || 0) + 1;
    }

    // Convert the frequency count object to an array of objects with 'num' and 'count' properties
    for(let key in freqCount) {
        result.push({ num: key, count: freqCount[key] });
    }

    // Sort the result array in descending order based on the count
    result.sort((a, b) => b.count - a.count);

    // Extract the top k frequent numbers and convert them back to numbers
    result = result.slice(0, k).map((item) => Number(item.num));

    // Return the final result
    return result;
};

const nums = [1,1,1,2,2,3];
const k = 2;
console.log(topKFrequent(nums, k));