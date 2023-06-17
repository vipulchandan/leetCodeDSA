// 125. Valid Palindrome

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 10^5
s consists only of printable ASCII characters.
*/

var isPalindrome = function(s) {
    // Convert the input string to lowercase and remove non-alphanumeric characters
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the modified string has a length less than or equal to 1
    if(s.length <= 1) {
        return true;
    }

    // Check if the first and last characters of the string are the same
    if(s[0] === s[s.length - 1]) {
        // Recursively call the isPalindrome function with a substring excluding the first and last characters
        return isPalindrome(s.slice(1, s.length - 1));
    } else {
        return false;
    }
};


const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

// Time Complexity: O(n)
// Space Complexity: O(n)