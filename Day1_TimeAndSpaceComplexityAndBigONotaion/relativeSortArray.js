// 1122. Relative Sort Array

// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

 

// Example 1:

// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]
// Example 2:

// Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
// Output: [22,28,8,6,17,44]
 

// Constraints:

// 1 <= arr1.length, arr2.length <= 1000
// 0 <= arr1[i], arr2[i] <= 1000
// All the elements of arr2 are distinct.
// Each arr2[i] is in arr1.

var relativeSortArray = function(arr1, arr2) {
    let countArr = Array(1001).fill(0); // Array to count the occurrences of each element in arr1
    let indexSortedArray = 0; // Variable to track the current index in arr1 where sorted elements will be placed

    for(let i=0; i<arr1.length; i++) {
        countArr[arr1[i]]++; // Count the occurrences of each element in arr1 by incrementing the corresponding index in countArr
    }

    for(let i=0; i<arr2.length; i++) {
        while(countArr[arr2[i]]-- > 0) {
            // Place the current element from arr2 in the current index of arr1 indicated by indexSortedArray
            arr1[indexSortedArray++] = arr2[i];
        }
    }

    for(let i=0; i<=1000; i++) {
        while(countArr[i]-- > 0) {
            // Place the remaining elements in arr1 (not present in arr2) in ascending order
            arr1[indexSortedArray++] = i;
        }
    }

    return arr1; // Return the sorted arr1
};

const arr1 = [2,3,1,3,2,4,6,7,9,2,19];
const arr2 = [2,1,4,3,9,6]

console.log(relativeSortArray(arr1, arr2));