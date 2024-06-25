---
sidebar_position: 3
title: "Inline Function in C++"
description: "In this tutorial, we will learn about Inline Function in C++ programming with the help of examples. An inline function is a function that is expanded in line when it is called. When the inline function is called, the compiler replaces the function call with the corresponding function code."
sidebar_label: "Inline Function"
slug: inline-function-in-cpp
---


### What is Inline Function in C++?
An inline function in C++ is a function that is expanded in place at each point in the code where it is called, instead of being called like a regular function. The compiler replaces the function call with the actual code of the function. Inline functions are typically used for small, frequently called functions, where the overhead of a function call would be significant.


![Function in CPP](../../static/img/day-08/inline-function.png)


### Explain the Syntax of Inline Function in C++.
```cpp

inline return_type function_name(parameters) {
    // Function body
}

```
Here, inline is the keyword indicating that the function is inline, return_type is the type of value the function returns, function_name is the name of the function, and parameters are the input parameters to the function.


### How to Declare and Define an Inline Function in C++?
You can declare and define an inline function in the same way you declare and define a regular function, but with the inline keyword added:

```cpp
inline int add(int a, int b) {
    return a + b;
}

```

This declares and defines an inline function add that takes two int parameters and returns their sum.


### C++ Inline Function Example.
```cpp
#include <iostream>
using namespace std;

// Inline function to calculate the square of a number
inline int square(int x) {
    return x * x;
}

int main() {
    int num = 5;
    
    // Calling the inline function
    cout << "Square of " << num << " is: " << square(num) << endl;
    
    return 0;
}

```
