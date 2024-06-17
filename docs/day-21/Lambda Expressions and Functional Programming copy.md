---
sidebar_position: 1
title: "Lambda Expressions in C++"
description: "In this tutorial, we will learn about lambda expressions in C++ with the help of examples. Lambda expressions provide a way to create anonymous functions, useful for functional programming in C++."
sidebar_label: "Lambda Expressions"
slug: lambda-expressions-in-cpp
---

## Introduction:

Lambda expressions provide a way to create anonymous functions (i.e., functions without a name) in C++. They are particularly useful for short snippets of code that are passed to algorithms or used as callbacks. Functional programming, which emphasizes immutability and first-class functions, can be effectively implemented in C++ using lambda expressions and the standard library's functional utilities.

![30-days-of-cpp-introduction](../../static/img/day-21/Lambda%20Function.jpg)

#### 1. Lambda Expressions:

A lambda expression in C++ allows you to define an inline function directly in the code where it is used. This is especially useful for short operations, such as those passed to algorithms.


#### 2. Syntax of Lambda Expressions:

The basic syntax of a lambda expression is:
```cpp
[capture](parameters) -> return_type { body }
```

- **Capture**: Specifies which variables are captured from the surrounding scope.
- **Parameters**: The parameters passed to the lambda, similar to a regular function.
- **Return type**: (Optional) The return type of the lambda. It can often be inferred by the compiler.
- **Body**: The code that gets executed when the lambda is called.

Example:
```cpp
auto add = [](int a, int b) -> int {
    return a + b;
};
std::cout << "Sum: " << add(2, 3) << std::endl; // Output: Sum: 5
```

#### 3. Capturing Variables:

Lambda expressions can capture variables from their enclosing scope. There are several ways to capture variables:
- **Capture by value**: `[x, y]` captures `x` and `y` by value.
- **Capture by reference**: `[&x, &y]` captures `x` and `y` by reference.
- **Capture all by value**: `[=]` captures all variables by value.
- **Capture all by reference**: `[&]` captures all variables by reference.
- **Mixed capture**: `[=, &x]` captures all variables by value except `x`, which is captured by reference.

Example:
```cpp
int x = 10;
int y = 20;

auto printSum = [x, y]() {
    std::cout << "Sum: " << x + y << std::endl;
};

printSum(); // Output: Sum: 30
```

#### 4. Using Lambdas with Standard Algorithms:

Lambdas are particularly useful with the Standard Template Library (STL) algorithms. Here’s an example using `std::for_each`:

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    std::for_each(numbers.begin(), numbers.end(), [](int n) {
        std::cout << n << " ";
    });
    // Output: 1 2 3 4 5 
    return 0;
}
```

#### 5. Lambdas as Callbacks:

Lambdas can be used as callbacks for event handling or asynchronous operations. Here’s an example with a simple callback mechanism:

```cpp
#include <iostream>
#include <functional>

void performOperation(const std::function<void(int)>& callback) {
    int result = 42; // Imagine this is the result of some operation
    callback(result);
}

int main() {
    performOperation([](int result) {
        std::cout << "Operation result: " << result << std::endl;
    });
    // Output: Operation result: 42
    return 0;
}
```

#### 6. Practical Examples and Exercises:

**Example 1: Sorting a Vector with a Lambda**

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> numbers = {5, 2, 9, 1, 5, 6};

    std::sort(numbers.begin(), numbers.end(), [](int a, int b) {
        return a < b;
    });

    for (int n : numbers) {
        std::cout << n << " ";
    }
    // Output: 1 2 5 5 6 9
    return 0;
}
```

**Example 2: Filtering Elements with `std::copy_if` and a Lambda**

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    std::vector<int> evenNumbers;

    std::copy_if(numbers.begin(), numbers.end(), std::back_inserter(evenNumbers), [](int n) {
        return n % 2 == 0;
    });

    for (int n : evenNumbers) {
        std::cout << n << " ";
    }
    // Output: 2 4 6 8 10
    return 0;
}
```

**Exercises:**

1. Write a lambda function to calculate the factorial of a number.
2. Use a lambda to transform a vector of integers by squaring each element.
3. Create a lambda that captures a local variable by reference and modifies it within the lambda.


