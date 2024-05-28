# Structure of a C++ Program

A typical C++ program consists of several parts:

## Preprocessor Directives

These are commands to the compiler and are preceded by a `#` symbol. Common preprocessor directives include `#include` for including header files and `#define` for defining constants.

## Main Function

Every C++ program must have a `main()` function, which serves as the entry point of the program. Execution of the program begins from here.

## Function Definitions

Additional functions may be defined to perform specific tasks within the program. These functions can be defined before or after the `main()` function.

## Header Files

C++ programs often use header files to declare functions, classes, and constants. These header files are included at the beginning of the program using the `#include` directive.

## Namespace

Namespace is used to avoid naming conflicts and to organize code into logical groups. Standard library elements are typically in the `std` namespace.

## Comments

Comments are used to document the code and improve its readability. They can be single-line (`//`) or multi-line (`/* */`).

# Example C++ Program

Here's an example of a simple C++ program that calculates the factorial of a number:

```cpp
#include <iostream>

// Function to calculate factorial
int factorial(int n) {
    if (n == 0 || n == 1)
        return 1;
    else
        return n * factorial(n - 1);
}

int main() {
    int num;
    std::cout << "Enter a number: ";
    std::cin >> num;
    std::cout << "Factorial of " << num << " is: " << factorial(num) << std::endl;
    return 0;
}
