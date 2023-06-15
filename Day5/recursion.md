## Recursion

### What is recursion ? How does it work?

Recursion is a programming technique where a function calls itself during its execution. In simple terms, recursion is a process of solving a problem by breaking it down into smaller instances of the same problem. Each smaller instance is solved in a similar manner until a base case is reached, which is a problem size small enough to be solved directly. The solutions to the smaller instances are then combined to obtain the solution to the original problem.

To understand recursion, it's important to grasp the concept of a recursive function. A recursive function is a function that calls itself within its own definition. It divides a larger problem into smaller subproblems and solves them recursively until reaching the base case.

Here's a general structure of a recursive function:

1. Base case(s): These are the conditions where the function does not call itself and returns a specific result. Base cases are essential to prevent infinite recursion and provide termination conditions.

2. Recursive case(s): These are the conditions where the function calls itself with a modified version of the problem. The function breaks down the original problem into smaller subproblems and calls itself to solve them.

The recursion process continues until the base case(s) is reached, at which point the function starts unwinding the stack, combining the solutions of each subproblem to obtain the final result.

Here's a simple example of a recursive function in Javascript that calculates the factorial of a number:

```javascript
function factorial(n) {
  if (n === 0) {   // base case
    return 1;
  } else {        // recursive case
    return n * factorial(n - 1);
  }
}
```

In this example, the factorial function calculates the factorial of a non-negative integer `n`. When `n` is 0, it returns 1, which is the base case. Otherwise, it calls itself with `n-1` and multiplies the result by `n`. This recursive call continues until `n` becomes 0, and then the function starts unwinding the stack, multiplying the results to obtain the factorial of the original number.

It's important to note that when using recursion, it's crucial to define the base case(s) correctly to ensure termination and avoid infinite loops. Also, recursive functions may consume more memory compared to iterative solutions, as each function call adds a new stack frame to the call stack.


### How to solve a problem recursively?

To solve a problem recursively, you can follow these general steps:

1. Identify the base case(s): Determine the simplest form of the problem that can be solved directly without further recursion. The base case(s) should be defined such that they eventually lead to a termination condition.

2. Define the recursive case(s): Determine how to break down the original problem into smaller subproblems of the same type. Identify the transformations or operations needed to convert the problem into a smaller instance. The recursive case(s) should be designed such that they make progress toward the base case(s).

3. Invoke the recursive function: Call the recursive function within itself, passing the transformed version of the problem as arguments.

4. Combine the results: When the base case is reached and the recursion starts unwinding, combine the results obtained from each recursive call to obtain the final solution to the original problem.

Let's illustrate these steps with an example. Suppose we want to solve the problem of calculating the sum of all positive integers up to a given number `n` recursively.

1. Identify the base case(s):
   - If `n` is 0, return 0 (the sum of no numbers is 0).

2. Define the recursive case(s):
   - If `n` is greater than 0, the sum is equal to `n` plus the sum of all positive integers up to `n-1`.

3. Invoke the recursive function:
   - Call the function within itself, passing `n-1` as the argument.

4. Combine the results:
   - When the base case (`n == 0`) is reached, return 0.
   - When the recursion unwinds, add `n` to the result obtained from the recursive call.

Here's the implementation of this recursive solution in Javascript:

```javascript
function recursiveSum(n) {
  if (n === 0) {  // Base case
    return 0;
  } else {       // Recursive case
    return n + recursiveSum(n - 1);
  }
}
```

By following these steps, the recursive function will repeatedly break down the problem into smaller subproblems until the base case is reached, and then combine the results to compute the final solution.

It's worth noting that not all problems are suitable for recursive solutions, and sometimes an iterative approach might be more efficient or easier to implement. Careful consideration should be given to the problem's characteristics and requirements before choosing a recursive approach.


### How to analyze the time and space complexity of a recursive algorithm?

Analyzing the time and space complexity of a recursive algorithm involves determining how the algorithm's time and space requirements grow as the input size increases. Here are the steps to analyze the complexity of a recursive algorithm:

1. Define the input size: Determine what parameter(s) or variable(s) represent the input size of the problem. This could be an array length, a number of elements, or any other relevant metric.

2. Express the recurrence relation: Identify the relationship between the input size and the number of recursive calls or iterations performed by the algorithm. Express this relationship as a recurrence relation or equation.

3. Solve the recurrence relation: Solve the recurrence relation to obtain a closed-form solution, if possible. This will provide a mathematical expression for the number of operations performed or the space used by the algorithm as a function of the input size.

4. Analyze the time complexity: Determine the growth rate of the algorithm's time requirements as the input size increases. This is typically expressed using Big O notation to describe the upper bound of the algorithm's time complexity.

5. Analyze the space complexity: Determine the growth rate of the algorithm's space requirements as the input size increases. This is also expressed using Big O notation to describe the upper bound of the algorithm's space complexity.

Let's illustrate these steps with an example. Consider a recursive algorithm to calculate the Fibonacci sequence:

```javascript
function fibonacci(n) {
  if (n <= 1) {  // Base case
    return n;
  } else {      // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
```

1. Input size: In this case, the input size is represented by the value of `n`, which indicates the position of the desired Fibonacci number in the sequence.

2. Recurrence relation: The number of recursive calls is proportional to `n`, as each call generates two additional recursive calls until the base case is reached.

3. Solve the recurrence relation: The Fibonacci sequence has an exponential time complexity of approximately O(2^n) due to the repeated calculations of subproblems.

4. Time complexity: The time complexity of this recursive Fibonacci algorithm is O(2^n). As `n` increases, the number of recursive calls grows exponentially.

5. Space complexity: The space complexity is O(n) because the recursive calls consume additional stack space proportional to the depth of the recursion, which is equal to `n` in this case.

It's important to note that recursive algorithms can sometimes be optimized by implementing memoization techniques (caching previously computed results) to avoid redundant calculations. This can significantly improve both time and space complexity in certain cases.

Analyzing the complexity of recursive algorithms requires careful consideration of the recurrence relations and how they impact the number of operations and memory usage. By following these steps, you can gain insights into the efficiency and resource requirements of a recursive algorithm.


### How can we apply recursion in a better way?

To apply recursion in a more effective and efficient way, you can consider the following approaches:

1. Identify and utilize base cases effectively: Base cases are crucial in recursive algorithms as they define the stopping condition for the recursion. By carefully selecting and defining base cases, you can handle the simplest instances of the problem directly, reducing unnecessary recursive calls.

2. Use memoization for optimization: In some recursive algorithms, there can be redundant computations of the same subproblem. By implementing memoization, you can store the results of previously solved subproblems in a cache and reuse them instead of recomputing. This can significantly improve the performance of the algorithm, especially for problems with overlapping subproblems.

3. Tail recursion: Tail recursion is a technique where the recursive call is the last operation performed in a function before returning. By structuring your recursive functions to use tail recursion, you can optimize them for tail call elimination. This optimization allows the recursion to be implemented using iteration, which can improve performance and prevent stack overflow errors in certain programming languages that support tail call optimization.

4. Divide and conquer: Recursive algorithms often follow a divide and conquer strategy. Break down the problem into smaller subproblems of the same type, solve them recursively, and combine their results to obtain the final solution. This approach is commonly used in sorting algorithms (e.g., merge sort and quicksort) and tree-based algorithms (e.g., binary search tree operations).

5. Choose the appropriate data structures: Selecting the right data structure can help optimize recursive algorithms. For example, using a stack or queue data structure can be beneficial for problems that require backtracking or maintaining a history of states during recursion.

6. Understand and analyze the time and space complexity: Recursive algorithms can have different time and space complexities depending on the nature of the problem and the implementation. Analyzing the complexity helps you understand the algorithm's efficiency and scalability and choose the best approach for solving the problem.

Remember, recursion is a powerful technique, but it may not always be the best choice for every problem. It is important to carefully evaluate the problem's characteristics, performance requirements, and constraints before deciding to use recursion or explore alternative approaches.