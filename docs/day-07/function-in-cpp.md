---
sidebar_position: 3
title: "Function in C++"
description: "In this tutorial, we will learn about functions in C++ programming with the help of examples. A function is a block of code that performs a specific task. It is used to break the code into smaller modules that can be reused."
sidebar_label: "Function"
slug: function-in-cpp
---


## Functions in C++

In this tutorial, we will learn about functions in C++ programming with the help of examples. A function is a block of code that performs a specific task. It is used to break the code into smaller modules that can be reused. Think of it as an independent unit that takes some input (parameters), performs some operations, and returns an output (or no output if not specified). They are used to organize, improve code readability, and make code reusable.

**Function Syntax:**

```c++
return_type function_name(parameter_list) {
  // Body of the function
  return value;
}
```

The above statement is an example of a function declaration in C++. It suggests that to declare a function, its `return type`, `function name`, and `parameter list` must be declared.

**Example:**

```c++
int add(int a, int b) {
  return a + b;
}
```

This function takes two integers as parameters and returns their sum. To call the function, you would simply write:

```c++
int sum = add(1, 2);
```

**How to Declare a Function:**

To declare a function in C++, we must first define its return type:

* `void`: Indicates the function doesn't return any value.
* `int`, `float`, etc.: Denotes the data type of the value the function returns.

Next, provide the function name with arguments (parameters) in the parameter list, or leave it empty if not required. Here's an example:

```c++
int add(int a, int b)
```

Now, define the body of the function, which specifies the specific task you want the function to perform.

**Advantages of Functions:**

* **Reduced Redundancy:** Functions minimize code redundancy by allowing you to write a block of code once and reuse it throughout your program.
* **Improved Readability:** Functions enhance code readability by breaking down complex logic into smaller, more manageable units.
* **Enhanced Maintainability:** Functions improve code maintainability by encapsulating specific functionalities, making it easier to modify or debug specific sections.
* **Promotes Reusability:** Functions promote code reusability by allowing you to utilize the same function in different parts of your program or even across multiple projects.

**Standard Practices:**

* A function can take parameters or not.
* It can be defined inside a class or outside.
* It can use global variables, local variables, parameters, or nothing at all.
* It can return a value or not (void type).

**Function Examples:**

Here are some more examples of functions:

```c++
// Factorial function
int factorial(int n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Function with parameters
int multiply(int a, int b) {
  return a * b;
}

// Function with return value
int sum(int x, int y) {
  return x + y;
}
```

**C++ Function with Default Arguments:**

A default argument is a value assigned to a parameter in the function declaration. If no value is provided during the function call, the default value is automatically used. Here's an example:

```c++
int sum(int x, int y, int z = 0, int w = 0) {
  return (x + y + z + w);
}
```

**C++ Function with Function Overloading:**

Function overloading allows you to define multiple functions with the same name but different parameter lists. The compiler chooses the appropriate function based on the number and types of arguments passed during the call. Here's an example:

```c++
int add(int a, int b) {
  return a + b;
}

float add(float a, float b) {
  return a + b;
}
```

**C++ Function with Recursion:**

Recursion is a technique where a function calls itself. This is useful for breaking down complex problems into smaller, self-similar subproblems. Here's an example of a recursive function to calculate factorial:

```c++
int factorial(int n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
```
