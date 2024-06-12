---
sidebar_position: 5
title: "Recursion in C++"
description: "In this tutorial, we will learn about recursion in C++ with the help of examples. Recursion is a programming technique where a function calls itself to solve smaller instances of a problem."
sidebar_label: "Recursion"
slug: recursion-in-cpp
---

## 1. What is Recursion in C++?

Recursion is a programming technique where a function calls itself directly or indirectly to solve smaller instances of the same problem. It is a powerful tool for solving problems that can be broken down into simpler, repetitive tasks.

![Recursion in CPP](../../static/img/day-09/recursion.png)

## 2. Why Use Recursion?

Recursion is particularly useful for:
- Problems that can naturally be divided into similar sub-problems (e.g., factorial calculation, Fibonacci series).
- Implementing algorithms in a more readable and concise way (e.g., tree traversals, searching algorithms).

## 3. How Recursion Works

A recursive function typically has two main components:
- **Base case**: A condition under which the function stops calling itself, preventing infinite recursion.
- **Recursive case**: The part of the function where the function calls itself with modified arguments.

**Example Structure:**

```cpp
void recursiveFunction() {
    if (baseCondition) {
        // Base case
        return;
    } else {
        // Recursive case
        recursiveFunction();
    }
}
```

## 4. Examples of Recursion

### 1. Factorial of a Number

The factorial of a number `n` (denoted as `n!`) is the product of all positive integers less than or equal to `n`.

**Example:**

```cpp
#include <iostream>
using namespace std;

int factorial(int n) {
    if (n == 0) {
        return 1;  // Base case
    } else {
        return n * factorial(n - 1);  // Recursive case
    }
}

int main() {
    int num = 5;
    cout << "Factorial of " << num << " is " << factorial(num) << endl;  // Output: 120
    return 0;
}
```

### 2. Fibonacci Series

The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.

**Example:**

```cpp
#include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n <= 1) {
        return n;  // Base case
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);  // Recursive case
    }
}

int main() {
    int num = 10;
    for (int i = 0; i < num; i++) {
        cout << fibonacci(i) << " ";  // Output: 0 1 1 2 3 5 8 13 21 34
    }
    cout << endl;
    return 0;
}
```

### 3. Sum of Natural Numbers

Calculate the sum of natural numbers up to a given number `n`.

**Example:**

```cpp
#include <iostream>
using namespace std;

int sum(int n) {
    if (n == 0) {
        return 0;  // Base case
    } else {
        return n + sum(n - 1);  // Recursive case
    }
}

int main() {
    int num = 10;
    cout << "Sum of first " << num << " natural numbers is " << sum(num) << endl;  // Output: 55
    return 0;
}
```

## 5. Advantages and Disadvantages of Recursion

### Advantages
- **Simplifies code**: Makes the code more elegant and easier to understand.
- **Natural fit for certain problems**: Ideal for problems like tree traversals, graph traversals, and divide-and-conquer algorithms.

### Disadvantages
- **Performance overhead**: Each function call consumes memory and processing power, which can lead to inefficiencies, especially with deep recursion.
- **Risk of stack overflow**: If the base case is not well-defined or recursion depth is too high, it can cause stack overflow errors.

## 6. Conclusion

Recursion is a fundamental concept in C++ that provides a straightforward way to solve problems by breaking them down into smaller sub-problems. Understanding how to use recursion effectively can greatly enhance your problem-solving skills and enable you to write cleaner, more efficient code.

---
