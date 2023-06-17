// 326. Power of Three

/*
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

 

Example 1:

Input: n = 27
Output: true
Explanation: 27 = 33
Example 2:

Input: n = 0
Output: false
Explanation: There is no x where 3x = 0.
Example 3:

Input: n = -1
Output: false
Explanation: There is no x where 3x = (-1).
 

Constraints:

-2^31 <= n <= 2^31 - 1
*/

var isPowerOfThree = function(n) {
    if(n === 1) {
        return true 
    }
    if(n<3) {
        return false
    }
    return isPowerOfThree(n/3)
};

const n = 27;
console.log(isPowerOfThree(n));

// Time Complexity: O(logn)
// Space Complexity: O(logn)