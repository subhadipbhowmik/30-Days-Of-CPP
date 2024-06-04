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

To declare a function in C++, we must first define it's return type as : `void` or `int`
now we should provide the function name with the arguments of function in the parameter list or leave it empty if not required. Example is as follows:

```cpp
int add(int a, int b)
```

now define the body of function i.e. the specific task you want to apply to that particulare function as follows:

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

## Function Example

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

The output will be:

```txt
120
```

## C++ Function with Parameters

```cpp
int multiply(int a, int b){
    return a*b;
}

int main(){
    multiply(5, 6);
    //returns 30 as result

    return 0;
}
```

The output will be:

```txt
30
```

## C++ Function with Return Value

As the name itself suggest the function which returns some value after the completion or exceution of task is known as function with return value.

```cpp
int factorial(int n){
    if(n==0 || n==1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
```

Since it is a function with return value, the value returned by the function is stored in the variable or constant, hence the type of function can't be variable or if we don't declare the return type it must be error.

## C++ Function with Default Arguments

A default argument is a value that is assigned to a parameter when the function is called if no other value is provided by the user. Example:

```cpp
int sum(int x, int y, int z = 0, int w = 0) //assigning default values to z,w as 0
{
    return (x + y + z + w);
}

sum(1,2,3,4);   // sum(1,2,3,4) = 10
sum(1,2);       // sum(1,2) = 3
```

The output will be:

```txt
10
3
```

## C++ Function with Function Overloading

Function Overloading is a feature in C++ that allows you to define multiple functions with the same name but different parameters.
This is useful when you want to perform different operations on the same function. The compiler will choose the correct function to call based on the number, type of arguments passed.
Example:

```cpp
int add(int a, int b){
    return a+b;
}

float add(float a, float b){
    return a+b;
}

int main(){
    add(1, 2);
    add(1.0, 2.0);

    return 0;
}
```

The output will be:

```txt
3
3.0
```

## C++ Function with Recursion

Recursion is a type of function which calls or utilises itself over and over again till base condition is reached. Example:

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

The `factorial` function here calls itself over and over again for all values of `n` till the `n` becomes 0 or 1.
Hence the control flow is:

```txt
factorial(5):
    5*factorial(4):
        5*4*factorial(3):
            5*4*3*factorial(2):
                5*4*3*2*factorial(1):
                    5*4*3*2*1
                5*4*3*2
            5*4*6
        5*24
    120
```

Output:

```txt
120
```

## C++ Function with Inline Function

An inline function in C++ is a function that the compiler attempts to expand in place rather than calling it through the usual function call mechanism. This can improve performance, especially for small, frequently called functions, by eliminating the overhead of a function call. Here's an example:

```cpp
inline int factorial(int n){
    return(n<2) ? 1 : n*factorial(n-1);
}
```

The control flow is:
Enter the function.
Check the value of `n`.
If value of `n` is less than 2, return 1.
else return `n`\*`factorial(n-1)`
