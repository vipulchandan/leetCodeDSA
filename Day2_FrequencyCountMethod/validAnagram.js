// 242. Valid Anagram

/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 10^4
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/


var isAnagram = function(s, t) {
    // Define the number of characters (assumed to be ASCII)
    let NO_OF_CHARS = 256;
    
    // Create two arrays to store the count of characters in each string
    let count1 = new Array(NO_OF_CHARS).fill(0);
    let count2 = new Array(NO_OF_CHARS).fill(0);

    // Initialize the count arrays to zero
    for(let i=0; i<NO_OF_CHARS; i++) {
        count1[i] = 0;
        count2[i] = 0;
    }

    // Count the occurrence of each character in both strings
    for(let i=0; i<s.length && i<t.length; i++) {
        count1[s[i].charCodeAt(0)]++; // Increment count for character at position i in string s
        count2[t[i].charCodeAt(0)]++; // Increment count for character at position i in string t
    }

    // Check if the lengths of the strings are different (early exit if not anagrams)
    if(s.length !== t.length) {
        return false;
    }

    // Compare the count of each character in the two count arrays
    for(let i=0; i<NO_OF_CHARS; i++) {
        if(count1[i] !== count2[i]) {
            return false; // If counts differ, not an anagram
        }
    }
    return true; // If all counts are equal, strings are anagrams
};


const s = "anagram";
const t = "nagaram";
console.log(isAnagram(s, t));