---
sidebar_position: 1
title: "Function Overloading in C++"
description: "Function overloading is a feature of object-oriented programming where two or more functions can have the same name but different parameters."
sidebar_label: "Function Overloading"
slug: function-overloading-in-cpp
---

# Function Overloading in C++

Function overloading is a feature of object-oriented programming (OOP) where two or more functions can have the same name but different parameters. It allows you to define multiple functions with the same name within the same scope, as long as their parameter lists are different in terms of number, type, or both.

## Why Use Function Overloading?
1. **Code Readability:** Function overloading can make your code more readable by using the same name for similar operations. For example, you can have multiple calculateArea() functions, each accepting different parameters (e.g., radius, length and width, base and height).

2. **Convenience:** It provides a convenient way to define functions that perform similar operations on different types or numbers of arguments without having to invent new function names.

## How Function Overloading Works?
Function overloading works based on the signature of the function, which includes the function name and the parameter list. The compiler distinguishes between overloaded functions by looking at the number, types, and order of the parameters.

Example of Function Overloading
    ```cpp
        #include <iostream>
        using namespace std;

        // Function to add two integers
        int add(int a, int b) {
            return a + b;
        }

        // Function to add three integers
        int add(int a, int b, int c) {
            return a + b + c;
        }

        // Function to add two doubles
        double add(double a, double b) {
            return a + b;
        }

        int main() {
            cout << "Sum of 2 and 3 is: " << add(2, 3) << endl;
            cout << "Sum of 2, 3, and 4 is: " << add(2, 3, 4) << endl;
            cout << "Sum of 2.5 and 3.5 is: " << add(2.5, 3.5) << endl;
            return 0;
        }
    ```

In this example, the add function is overloaded three times. The compiler determines which version of add to call based on the number and types of arguments provided.

## Rules for Function Overloading
1. **Function Signature:** Overloaded functions must differ in the number or types of their parameters. Return type alone is not sufficient to differentiate functions.

2. **Scope:** Function overloading is only applicable within the same scope. You cannot overload functions from different scopes, such as functions in different namespaces.

3. **Default Arguments:** Default arguments can be used in overloaded functions, but they do not participate in distinguishing between overloaded functions.

4. **Function Templates:** Function templates can also be overloaded, allowing you to define generic functions that can operate on different types.

## Functions that cannot be overloaded in C++
1. Functions with different return types cannot be overloaded.
2. Static member functions with the same name and parameter types cannot be overloaded.
3. Parameters declared as arrays are adjusted to pointers, so functions cannot be overloaded based on array versus pointer types.
4. Functions cannot be overloaded based on whether a parameter is a function type or a pointer to the same function type.
5. Functions cannot be overloaded based on const and/or volatile qualifiers on parameters, as these qualifiers are ignored when determining the function being declared, defined, or called.

## Conclusion
Function overloading is a powerful feature in C++ that allows you to define multiple functions with the same name, providing flexibility and readability to your code. By carefully designing overloaded functions, you can create more intuitive and expressive interfaces for your classes and functions.