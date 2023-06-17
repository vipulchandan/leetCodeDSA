// 1839. Longest Substring Of All Vowels in Order

/*
A string is considered beautiful if it satisfies the following conditions:

Each of the 5 English vowels ('a', 'e', 'i', 'o', 'u') must appear at least once in it.
The letters must be sorted in alphabetical order (i.e. all 'a's before 'e's, all 'e's before 'i's, etc.).
For example, strings "aeiou" and "aaaaaaeiiiioou" are considered beautiful, but "uaeio", "aeoiu", and "aaaeeeooo" are not beautiful.

Given a string word consisting of English vowels, return the length of the longest beautiful substring of word. If no such substring exists, return 0.

A substring is a contiguous sequence of characters in a string.

 

Example 1:

Input: word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"
Output: 13
Explanation: The longest beautiful substring in word is "aaaaeiiiiouuu" of length 13.
Example 2:

Input: word = "aeeeiiiioooauuuaeiou"
Output: 5
Explanation: The longest beautiful substring in word is "aeiou" of length 5.
Example 3:

Input: word = "a"
Output: 0
Explanation: There is no beautiful substring, so return 0.
*/

var longestBeautifulSubstring = function(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxLength = 0;
    let currentLength = 0;
    let currentVowel = null;
    let start = 0;

    for (let i = 0; i < word.length; i++) {
        if (currentVowel === null && word[i] === 'a') {
        currentLength = 1;
        currentVowel = 'a';
        } else if (currentVowel !== null && word[i] === vowels[vowels.indexOf(currentVowel) + 1]) {
        currentLength++;
        currentVowel = word[i];
        } else if (word[i] === currentVowel) {
        currentLength++;
        } else if (word[i] === 'a') {
        currentLength = 1;
        currentVowel = 'a';
        start = i; // Reset the starting position
        } else {
        currentLength = 0;
        currentVowel = null;
        start = i + 1; // Move the starting position
        }

        if (currentVowel === 'u') {
        maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
};

const word = "aeiaaioaaaaeiiiiouuuooaauuaeiu";
console.log(longestBeautifulSubstring(word));