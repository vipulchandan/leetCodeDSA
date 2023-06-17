// 11. Container With Most Water

/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.


Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 10^5
0 <= height[i] <= 10^4
*/

var maxArea = function(height) {
    let res = 0;  // Initialize the maximum area to 0
    let left = 0;  // Initialize the left pointer to the start of the array
    let right = height.length - 1;  // Initialize the right pointer to the end of the array

    // Loop until the left and right pointers meet or surpass each other
    while(left < right) {
        // Calculate the area between the current left and right boundaries
        let area = (right - left) * Math.min(height[left], height[right]);

        // Update the maximum area if the calculated area is greater
        res = Math.max(res, area);

        // Move the pointer that corresponds to the smaller height
        if(height[left] < height[right]) {
            left++;  // Move the left pointer to the right
        } else {
            right--;  // Move the right pointer to the left
        }
    }

    return res;  // Return the maximum area
};

const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));