// 3. Longest Substring Without Repeating Characters

/*
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 10^4
s consists of English letters, digits, symbols and spaces.
*/

var lengthOfLongestSubstring = function(s) {
    let frequency = {};

    let start = 0;
    let ans = 0;
    for(let end=0; end<s.length; end++) {
        while (frequency[s[end]] === 1) {
            frequency[s[start]] = 0;
            start++;
        }
        frequency[s[end]] = 1;
        ans = Math.max(ans, end-start+1);
    }
    return ans;
};

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));