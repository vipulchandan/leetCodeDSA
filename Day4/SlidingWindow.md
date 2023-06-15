## Sliding Window 

### 01. What is Sliding window?Write the algorithm of sliding window using example.

A sliding window is a technique used in computer science and data processing to efficiently process or analyze data in a fixed-size window as it moves or slides through a larger dataset. The window represents a subset of the data, and by sliding it over the dataset, you can perform various operations or calculations on the elements within the window.

Here's an example algorithm for a sliding window:

1. Initialize variables: 
   - `window_start` to 0 (starting index of the window)
   - `window_end` to 0 (ending index of the window)
   - `max_sum` to 0 (maximum sum found so far)
   - `current_sum` to 0 (sum of elements within the current window)

2. Iterate while `window_end` is less than the length of the dataset:
   - Add the element at index `window_end` to `current_sum`.
   - If the window size exceeds a specific limit or condition, you may need to remove elements from the window. Adjust the window boundaries accordingly and subtract the removed element's value from `current_sum`.

   - If `current_sum` is greater than `max_sum`, update `max_sum` with the new value.

   - Increment `window_end` to slide the window forward.

3. After the loop ends, the `max_sum` will contain the maximum sum found within the sliding window.

Let's illustrate this with an example. Consider the dataset: [4, 2, 1, 7, 8, 1, 2, 8, 1, 0].

Let's find the maximum sum of a window with a size of 3.

```
Initial state:
window_start = 0
window_end = 0
max_sum = 0
current_sum = 0

Iteration 1:
window_end = 0
current_sum = 4
max_sum = 4

Iteration 2:
window_end = 1
current_sum = 4 + 2 = 6
max_sum = 6

Iteration 3:
window_end = 2
current_sum = 6 + 1 = 7
max_sum = 7

Iteration 4:
window_end = 3
current_sum = 7 + 7 = 14
max_sum = 14

Iteration 5:
window_end = 4
current_sum = 14 + 8 = 22
max_sum = 22

Iteration 6:
Remove the element 4 from the window
window_start = 1
current_sum = 22 - 4 = 18
window_end = 5
current_sum = 18 + 1 = 19
max_sum = 22

Iteration 7:
window_start = 2
window_end = 6
current_sum = 19 + 2 = 21
max_sum = 22

Iteration 8:
Remove the element 1 from the window
window_start = 3
current_sum = 21 - 1 = 20
window_end = 7
current_sum = 20 + 8 = 28
max_sum = 28

Iteration 9:
Remove the element 7 from the window
window_start = 4
current_sum = 28 - 7 = 21
window_end = 8
current_sum = 21 + 1 = 22
max_sum = 28

Iteration 10:
Remove the element 8 from the window
window_start = 5
current_sum = 22 - 8 = 14
window_end = 9
current_sum = 14 + 0 = 14
max_sum = 28

The maximum sum found within the sliding window of size 3

 is 28.
```

This example demonstrates how the sliding window algorithm can efficiently calculate the maximum sum of a fixed-size window as it slides through a dataset. The algorithm can be adapted and customized for various other operations, such as finding the minimum, average, or performing specific computations within the window.



Here's the JavaScript code that implements the sliding window algorithm to find the maximum sum of a window with a size of 3 in the given dataset:

```javascript
function findMaxSumInSlidingWindow(nums, windowSize) {
  let windowStart = 0;
  let windowEnd = 0;
  let maxSum = 0;
  let currentSum = 0;

  while (windowEnd < nums.length) {
    currentSum += nums[windowEnd];

    if (windowEnd >= windowSize - 1) {
      maxSum = Math.max(maxSum, currentSum);
      currentSum -= nums[windowStart];
      windowStart++;
    }

    windowEnd++;
  }

  return maxSum;
}

const dataset = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
const windowSize = 3;

const maxSum = findMaxSumInSlidingWindow(dataset, windowSize);
console.log("Maximum sum in the sliding window:", maxSum);
```

When you run this code, it will output:

```
Maximum sum in the sliding window: 28
```

The `findMaxSumInSlidingWindow` function takes in an array of numbers (`nums`) and the size of the window (`windowSize`). It initializes variables for the window's start and end indices, as well as for tracking the maximum sum (`maxSum`) and the current sum (`currentSum`). 

The algorithm then iterates through the dataset while sliding the window. It adds the element at the `windowEnd` index to the `currentSum`. If the window size is reached, it compares the `currentSum` with the `maxSum` and updates `maxSum` accordingly. Then, it subtracts the element at the `windowStart` index from the `currentSum` to slide the window forward.

After the loop ends, the `maxSum` variable will contain the maximum sum found within the sliding window. In this case, it will be `28`, as shown in the output.