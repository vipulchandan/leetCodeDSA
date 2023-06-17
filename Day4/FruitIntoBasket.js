// 904. Fruit Into Baskets

/*
You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.

 

Example 1:

Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.
Example 2:

Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].
Example 3:

Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].
 

Constraints:

1 <= fruits.length <= 10^5
0 <= fruits[i] < fruits.length
*/

var totalFruit = function(fruits) {
  // Create a map to store the count of each fruit
  let map = new Map();
  // Initialize the left and right pointers to track the sliding window
  let left = 0;
  let right = 0;
  // Initialize the count of distinct elements and the maximum length
  let countOfDistinctElement = 0;
  let maxLength = 0;

  // Iterate through the fruits array using the right pointer
  for (right = 0; right < fruits.length; right++) {
    // Update the count of the current fruit in the map
    map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);

    // If the count of the current fruit is 1, it means it's a distinct element
    if (map.get(fruits[right]) === 1) {
      countOfDistinctElement++;
    }

    // If the count of distinct elements exceeds 2, we need to adjust the window
    while (countOfDistinctElement > 2) {
      // Decrease the count of the fruit at the left pointer
      map.set(fruits[left], map.get(fruits[left]) - 1);

      // If the count becomes 0, it means the fruit is no longer in the window
      if (map.get(fruits[left]) === 0) {
        countOfDistinctElement--;
      }
      // Move the left pointer to the right to shrink the window
      left++;
    }

    // Update the maximum length if necessary
    maxLength = Math.max(maxLength, right - left + 1);
  }

  // Return the maximum length of the window
  return maxLength;
};

// const fruits = [1,2,1];
const fruits = [1,2,3,2,2]
console.log(totalFruit(fruits));