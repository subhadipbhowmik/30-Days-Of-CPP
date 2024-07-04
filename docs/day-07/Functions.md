---
sidebar_position: 1
title: "Introduction to  CP"
description: "Welcome to the world of CPP programming! Learn about the key features of C++, its applications, and how to get started with C programming"
sidebar_label: "Introduction to C++"
slug: introduction-to-cpp
---

# Functions in C++

Functions are one of the fundamental building blocks in C++. They allow us to break down complex problems into smaller, manageable pieces. A function is a block of code that performs a specific task, and it can be called from other parts of the program.

### Syntax

The basic syntax of a function in C++ is as follows:

```cpp
return_type function_name(parameter_list) {
    // body of the function
}
```

return_type: The data type of the value the function returns.
function_name: The name of the function.
parameter_list: A comma-separated list of parameters that the function takes.

### Example 1

A Simple Function

```cpp
#include <iostream>
using namespace std;

// Function declaration
int add(int a, int b);

int main() {
    int sum = add(5, 3); // Function call
    cout << "Sum: " << sum << endl;
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}

```

In this example:

'add' is a function that takes two integers as parameters and returns their sum.
The function is declared before'main' and defined after 'main'.
The 'main' function calls 'add' and prints the result.

### Example 2

Function with No Return Value (Void Function)

```cpp
#include <iostream>
using namespace std;

// Function declaration
void printMessage();

int main() {
    printMessage(); // Function call
    return 0;
}

// Function definition
void printMessage() {
    cout << "Hello, World!" << endl;
}


```

In this example:

'printMessage' is a function that does not return any value (its return type is 'void').
It simply prints a message to the console.

### Example 3

Function with Default Arguments

```cpp
#include <iostream>
using namespace std;

// Function declaration
int multiply(int a, int b = 2);

int main() {
    int result1 = multiply(4);    // Uses default value for b
    int result2 = multiply(4, 3); // Uses provided value for b
    cout << "Result1: " << result1 << endl;
    cout << "Result2: " << result2 << endl;
    return 0;
}

// Function definition
int multiply(int a, int b) {
    return a * b;
}

```

In this example:

'multiply' has a default argument 'b' with a value of '2'.
When called with one argument, it uses the default value for 'b'.
When called with two arguments, it uses the provided values.

### Example 4

Function Overloading

```cpp
#include <iostream>
using namespace std;

// Function declarations
int add(int a, int b);
double add(double a, double b);

int main() {
    cout << "Sum of integers: " << add(5, 3) << endl;          // Calls add(int, int)
    cout << "Sum of doubles: " << add(5.5, 3.2) << endl;      // Calls add(double, double)
    return 0;
}

// Function definitions
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

```

In this example:

The 'add' function is overloaded with two different parameter lists.
One version adds integers, and the other adds doubles.

## Conclusion

Functions in C++ are a powerful tool for modularizing code. They help in organizing code, making it reusable, and improving readability. By understanding the basics of function declaration, definition, and usage, you can write more efficient and maintainable C++ programs.
