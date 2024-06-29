---
sidebar_position: 3
title: "Lambda Expressions in C++"
description: "Discover the power of lambda expressions in C++, their syntax, and practical applications with detailed examples. Lambda expressions provide a concise way to define anonymous functions directly in your code."
sidebar_label: "Lambda Expressions in C++"
slug: lambda-expressions-in-cpp
---

## Introduction:

Lambda expressions in C++ offer a concise way to define anonymous functions directly in the code. They are particularly useful for short snippets of code that are passed as arguments to algorithms or for defining simple callback functions.

![30-days-of-cpp-introduction](../../static/img/day-21/Macros%20in%20cpp.jpg)


#### 1. Basic Syntax:

A lambda expression starts with `[]`, followed by an optional parameter list `()`, an optional `mutable` specifier, an optional exception specification, an optional return type, and a function body `{}`.

```cpp
#include <iostream>

int main() {
    auto add = [](int a, int b) -> int {
        return a + b;
    };

    std::cout << "Sum: " << add(5, 3) << std::endl;  // Output: Sum: 8
    return 0;
}
```

#### 2. Capturing Variables:

Lambdas can capture variables from their enclosing scope. The capture clause `[]` specifies how variables should be captured.

```cpp
#include <iostream>

int main() {
    int x = 10;
    int y = 20;

    auto add = [x, y]() -> int {
        return x + y;
    };

    std::cout << "Captured Sum: " << add() << std::endl;  // Output: Captured Sum: 30
    return 0;
}
```

#### 3. Capture by Reference and by Value:

Variables can be captured by reference using `&` or by value. Capture all variables by value with `[=]` and by reference with `[&]`.

```cpp
#include <iostream>

int main() {
    int x = 10;
    int y = 20;

    auto add = [&]() -> int {
        return x + y;
    };

    x = 15;
    std::cout << "Modified Captured Sum: " << add() << std::endl;  // Output: Modified Captured Sum: 35
    return 0;
}
```

#### 4. Using Lambda Expressions with Standard Algorithms:

Lambdas are often used with standard algorithms to define custom behavior.

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5, 6};

    std::for_each(numbers.begin(), numbers.end(), [](int n) {
        std::cout << n << " ";
    });
    // Output: 1 2 3 4 5 6
    return 0;
}
```

#### 5. Mutable Lambdas:

By default, lambdas cannot modify captured variables. Use the `mutable` keyword to allow modifications.

```cpp
#include <iostream>

int main() {
    int x = 10;

    auto add_and_modify = [x]() mutable -> int {
        x += 5;
        return x;
    };

    std::cout << "Mutable Lambda Result: " << add_and_modify() << std::endl;  // Output: Mutable Lambda Result: 15
    std::cout << "Original x: " << x << std::endl;  // Output: Original x: 10
    return 0;
}
```

#### 6. Practical Examples and Exercises:

**Example 1: Sorting with a Lambda**

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> numbers = {5, 2, 9, 1, 5, 6};

    std::sort(numbers.begin(), numbers.end(), [](int a, int b) {
        return a > b;
    });

    for (int n : numbers) {
        std::cout << n << " ";
    }
    // Output: 9 6 5 5 2 1
    return 0;
}
```

**Example 2: Filtering with a Lambda**

```cpp
#include <vector>
#include <iostream>
#include <algorithm>

int main() {
    std::vector<int> numbers = {5, 2, 9, 1, 5, 6};
    std::vector<int> filtered;

    std::copy_if(numbers.begin(), numbers.end(), std::back_inserter(filtered), [](int n) {
        return n > 4;
    });

    for (int n : filtered) {
        std::cout << n << " ";
    }
    // Output: 5 9 5 6
    return 0;
}
```

**Exercises:**

1. Define a lambda to calculate the factorial of a number.
2. Implement a lambda for checking if a number is prime.
3. Create a lambda that reverses the order of elements in a `std::vector<int>`.