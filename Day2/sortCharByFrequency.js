// 451. Sort Characters By Frequency

/*
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

 

Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
 

Constraints:

1 <= s.length <= 5 * 10^5
s consists of uppercase and lowercase English letters and digits.
*/

var frequencySort = function(s) {
    // Create an object to store the frequency count of characters
    let freqCount = {};

    // Count the frequency of each character in the input string
    for(let char of s) {
        // If the character exists as a key, increment its count; otherwise, initialize it with 1
        freqCount[char] = (freqCount[char] || 0) + 1;
    }

    // Sort the characters based on their frequency count in descending order
    let sortedChars = Object.keys(freqCount).sort((a,b) => freqCount[b] - freqCount[a]);

    // Build the sorted string by repeating each character according to its frequency count
    let sortedString = '';
    for(let char of sortedChars) {
        sortedString += char.repeat(freqCount[char]);
    }

    // Return the final sorted string
    return sortedString;
};

const s = "tree";
console.log(frequencySort(s));