## Time Complexity , Space Complexity & BigO Notation

### 01. What do you mean by Time & Space Complexity?

Time and space complexity are concepts used in computer science to analyze the efficiency of algorithms and the resources they require. They help us understand how the execution time and memory usage of an algorithm grow as the input size increases.

1. Time Complexity: Time complexity refers to the amount of time an algorithm takes to run as a function of the input size. It measures the number of operations or steps an algorithm needs to perform in order to solve a problem. Time complexity is usually expressed using big O notation, which provides an upper bound on the growth rate of the algorithm's runtime.

   For example, if an algorithm has a time complexity of O(n), it means that the runtime grows linearly with the input size. If the input size doubles, the runtime will also roughly double. Common time complexities include O(1) (constant time), O(log n) (logarithmic time), O(n) (linear time), O(n^2) (quadratic time), and O(2^n) (exponential time), among others.

2. Space Complexity: Space complexity refers to the amount of memory or space an algorithm requires to run as a function of the input size. It measures the additional memory needed by an algorithm beyond the input data itself. Similar to time complexity, space complexity is also expressed using big O notation.

   For example, if an algorithm has a space complexity of O(n), it means that the space usage grows linearly with the input size. If the input size doubles, the space usage will also roughly double. Common space complexities include O(1) (constant space), O(n) (linear space), O(n^2) (quadratic space), and O(log n) (logarithmic space), among others.

Analyzing time and space complexity helps in comparing different algorithms and selecting the most efficient one for a given problem. Ideally, we aim to design algorithms with lower time and space complexities to ensure faster execution and optimal resource utilization. However, it's important to note that time and space complexity are theoretical measures and may differ based on various factors, such as hardware, programming language, and specific implementation details.


### 02. Difference between Time & Space Complexity?

The main difference between time complexity and space complexity lies in what they measure:

1. Time Complexity: Time complexity measures the amount of time or number of operations an algorithm requires to solve a problem as a function of the input size. It focuses on the efficiency of the algorithm in terms of runtime. Time complexity helps us understand how the execution time of an algorithm grows as the input size increases. It answers questions like "How much time will the algorithm take to run?" or "How does the algorithm's performance scale with larger inputs?"

2. Space Complexity: Space complexity measures the amount of memory or space an algorithm requires to solve a problem as a function of the input size. It focuses on the efficiency of the algorithm in terms of memory usage. Space complexity helps us understand how the additional memory usage of an algorithm grows as the input size increases. It answers questions like "How much memory will the algorithm consume?" or "How does the algorithm's memory usage scale with larger inputs?"

In summary, time complexity analyzes the runtime efficiency of an algorithm, while space complexity analyzes the memory usage efficiency. Both are crucial factors to consider when evaluating the performance and efficiency of algorithms. By understanding the time and space complexities of different algorithms, we can make informed decisions about which algorithm to use based on the specific requirements and constraints of a problem.


### 03. What do you mean by BigO notation?

Big O notation, also known as asymptotic notation, is a mathematical notation used to describe the upper bound or worst-case behavior of an algorithm's time or space complexity. It provides a way to express how the performance of an algorithm scales with the size of the input.

In Big O notation, the letter "O" represents the order of growth or the rate of increase. The notation is followed by a function in parentheses, which represents the growth rate of the algorithm in terms of the input size (n).

Here are some commonly used Big O notations:

1. O(1) (constant time): The algorithm's runtime or space usage remains constant regardless of the input size. It indicates that the algorithm has a fixed and predictable execution time.

2. O(log n) (logarithmic time): The algorithm's runtime or space usage grows logarithmically with the input size. It indicates that the algorithm's performance improves as the input size increases, but at a decreasing rate.

3. O(n) (linear time): The algorithm's runtime or space usage grows linearly with the input size. It indicates that the algorithm's performance scales directly with the input size.

4. O(n^2) (quadratic time): The algorithm's runtime or space usage grows quadratically with the input size. It indicates that the algorithm's performance degrades quickly as the input size increases.

5. O(2^n) (exponential time): The algorithm's runtime or space usage grows exponentially with the input size. It indicates that the algorithm's performance becomes impractical for larger input sizes.

Big O notation allows us to compare the efficiency and scalability of different algorithms without getting into precise details. It focuses on the dominant term or the highest order of growth in the algorithm's complexity. By using Big O notation, we can make informed decisions about choosing the most efficient algorithm for a given problem.


### 04. What is the Worst Case vs Best case vs average case?

When analyzing the performance of an algorithm, we often consider three different cases: the worst case, the best case, and the average case. These cases help us understand the behavior of the algorithm under different scenarios and provide a more comprehensive view of its efficiency.

1. Worst Case: The worst case refers to the scenario in which an algorithm takes the maximum amount of time or space to complete its execution. It represents the input that causes the algorithm to perform the most operations or consume the most resources. Analyzing the worst case is important because it gives us an upper bound on the algorithm's performance. We use the worst case to determine the upper limit of the time or space complexity of an algorithm.

2. Best Case: The best case refers to the scenario in which an algorithm takes the minimum amount of time or space to complete its execution. It represents the most favorable input that allows the algorithm to perform optimally. The best case is often used to understand the lower limit of an algorithm's performance. However, the best case scenario may not always be realistic or representative of the algorithm's typical behavior.

3. Average Case: The average case refers to the scenario in which an algorithm's performance is averaged over all possible inputs of a given size. It represents the expected behavior of the algorithm under typical or random inputs. Analyzing the average case is often more practical and realistic because it takes into account the distribution of inputs. However, determining the average case can be challenging, as it requires knowledge of the input distribution or assumptions about the input characteristics.

It's important to note that when discussing time and space complexity, the focus is primarily on the worst-case scenario. This is because worst-case analysis provides an upper bound on the algorithm's performance, ensuring that the algorithm will not exceed a certain level of inefficiency regardless of the input. However, it's also valuable to consider the best and average cases to gain a more comprehensive understanding of the algorithm's behavior and performance in different scenarios.


### 05. Explain the difference between O(1) vs O(n) space complexities 

The difference between O(1) and O(n) space complexities lies in how the space usage of an algorithm scales with the input size.

1. O(1) Space Complexity (Constant Space):
   - An algorithm with O(1) space complexity requires a constant amount of additional memory regardless of the input size.
   - It means that the algorithm uses a fixed amount of space that does not depend on the size of the input.
   - Regardless of whether the input has 10 elements or 10,000 elements, the algorithm will use the same amount of memory.
   - In other words, the space usage of the algorithm remains constant and does not grow with the input size.

2. O(n) Space Complexity (Linear Space):
   - An algorithm with O(n) space complexity requires additional memory that scales linearly with the input size.
   - It means that the amount of additional memory used by the algorithm is directly proportional to the size of the input.
   - If the input has 10 elements, the algorithm may use 10 units of memory. If the input has 10,000 elements, the algorithm may use 10,000 units of memory.
   - In this case, the space usage of the algorithm grows linearly with the input size.

To summarize, O(1) space complexity indicates a constant amount of memory usage regardless of the input size, while O(n) space complexity signifies that the algorithm's space usage grows linearly with the input size. Algorithms with O(1) space complexity are generally considered more efficient in terms of memory usage, as they use a fixed and predictable amount of memory regardless of the input size. However, it's important to note that the time complexity of an algorithm may also play a significant role in determining overall efficiency, and a trade-off between time and space complexity is often considered when designing algorithms.


### 06. Provide an example of O(1) algorithm 

An example of an algorithm with O(1) time complexity in JavaScript is finding the length of an array using the `length` property. 

Here's an example:

```javascript
function getArrayLength(arr) {
  return arr.length;
}
```

In this algorithm, the time complexity is O(1) because accessing the `length` property of an array takes a constant amount of time, regardless of the size of the array. Whether the array has 10 elements or 10,000 elements, retrieving the length of the array using the `length` property is a quick operation that doesn't depend on the size of the array.

The space complexity of this algorithm is also O(1) because it doesn't require any additional memory beyond the input array and the return value. The space usage remains constant, regardless of the input size.

In summary, finding the length of an array using the `length` property is an example of an algorithm with O(1) time complexity and O(1) space complexity in JavaScript.