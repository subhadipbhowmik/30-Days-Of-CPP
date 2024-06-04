---
sidebar_position: 3
title: "Function in C++"
description: "In this tutorial, we will learn about functions in C++ programming with the help of examples. A function is a block of code that performs a specific task. It is used to break the code into smaller modules that can be reused."
sidebar_label: "Function"
slug: function-in-cpp
---

TASK:

1. What is a Function in C++?
2. Explain the Syntax of Function in C++.
3. Types of Functions in C++
4. How to Declare and Define a Function in C++?
5. How to Call a Function in C++?
6. C++ Function Example
7. C++ Function with Parameters
8. C++ Function with Return Value
9. C++ Function with Default Arguments
10. C++ Function with Function Overloading
11. C++ Function with Recursion
12. C++ Function with Inline Function

## What is a Function in C++?

In C++, a function is a block of code that performs a specific task. It is used to break the code into smaller modules that can be reused. Think of it as an machine or an input box which takes some input performs some task or operations and then generates an output as result. They are used to organise, reuse and improve code readability.

IMAGE FILE:
![Function in CPP](../../static/img/day-07/function-in-cpp.png)

## Syntax of Function in C++:

```cpp
return_type function_name(parameter_list){
    //body of function
    return value;
}
```

The above statement is a example of a function in C++. It suggest that to declare a function it's `return type`, `function name` and `parameter list` must be declared.
Example:

```cpp
int add(int a, int b){
    return a+b;
}
```

This function takes two integers as parameters and returns their sum. To call the function, you would simply write:

```cpp
int sum = add(1, 2);
```

## How declare a Function in C++?

To declare a function in C++, we must first define it's return type as :

```cpp
void
```

or

```cppp
int
```

now we should provide the function name with the arguments of function in the parameter list or leave it empty if not required. Example is as follows:

```cpp
int add(int a, int b)
```

now define the bofy of function i.e. the specific task you want to apply to that particulare function as follows:

```cpp
int add(int a, int b){
    return a+b;
}
```

Here in this example we have performed the task of returning the sum of two numbers.

## Advantages of Function in C++

- Redundancy: It reduces code redundancy.
- Readability: It makes code easier to read.
- Efficiency: It improves code readability.
- Reusability: It makes code reusable.

## Some standard practices

A function need not necessarily return any value. It can also take parameters. It can also be defined inside the class. It can also be defined inside the namespace.
It can use a `global variable`,`local variable`,`parameter` or nothing at all.

Some more examples:

```cpp
int factorial(int n){
    if(n==0 || n==1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}

factorial(5);
```
