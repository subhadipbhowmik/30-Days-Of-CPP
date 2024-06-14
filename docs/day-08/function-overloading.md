---
sidebar_position: 2
title: "Function Overloading in C++"
description: "In this tutorial, we will learn about Function Overloading in C++ programming with the help of examples. Function overloading is a feature in C++ where two or more functions can have the same name but different parameters."
sidebar_label: "Function Overloading"
slug: function-overloading-in-cpp
---

## 1. What is Function Overloading in C++?
Function overloading is a feature in C++ that allows you to define multiple functions with the same name, but with different parameters. This can be useful for creating functions that perform similar tasks, but with different inputs.

## 2. Explain the Syntax of Function Overloading in C++
To overload a function, you simply need to declare multiple functions with the same name, but with different parameter lists. The compiler will then choose the correct function to call based on the types of the arguments that you pass to it.
Here is an example of function overloading in C++:

```cpp
int add(int a, int b) {
  return a + b;
}

float add(float a, float b) {
  return a + b;
}

string add(string a, string b) {
  return a + b;
}
```

IMAGE FILE:
![Ternary in CPP](../../static/img/day-08/function-overloading.png)

## 3. How to Declare and Define a Function Overloading in C++?

To declare a function overload, you simply need to define two or more functions with the same name, but with different parameter lists. The compiler will then choose the appropriate function to call based on the types of arguments that are passed in.
For example, the following code shows two overloaded functions named add():

```cpp
int add(int x, int y) {
  return x + y;
}

double add(double x, double y) {
  return x + y;
}
```

The first add() function takes two integer arguments and returns an integer. The second add() function takes two double arguments and returns a double.
When you call the add() function, the compiler will choose the appropriate function to call based on the types of arguments that you pass in. For example, the following code will call the first add() function:

```cpp
int sum = add(1, 2);
```

The following code will call the second add() function:

```cpp
double sum = add(1.5, 2.5);
```

Function overloading can be a very useful feature, but it is important to use it carefully. If you are not careful, you can easily create situations where the compiler is unable to determine which function to call. This can lead to errors in your code.

## 4. C++ Function Overloading Example

```cpp
#include <iostream>
using namespace std;

// Prototype three print functions.
int print(std::string s); // Print a string.
int print(double dvalue); // Print a double.
int print(double dvalue, int prec); // Print a double with a
// given precision.

int main(int argc, char *argv[]) {
  const double d = 893094.2987;

  if (argc < 2) {
    // These calls to print invoke print( char *s ).
    print("This is a string.");
    print(d);
  } else {
    // These calls to print invoke print( double dvalue, int prec ).
    print(d, 2);
    print(d, 5);
  }

  return 0;
}

// Define the three print functions.
int print(std::string s) {
  std::cout << s << std::endl;
  return 0;
}

int print(double dvalue) {
  std::cout << dvalue << std::endl;
  return 0;
}

int print(double dvalue, int prec) {
  std::cout.precision(prec);
  std::cout << fixed;
  std::cout << dvalue << std::endl;
  return 0;
}
```

This program defines three functions named print(). The first print() function takes a string argument and prints it to the console. The second print() function takes a double argument and prints it to the console. The third print() function takes two arguments: a double and an integer. The integer argument specifies the precision to which the double should be printed.

The main() function calls the print() functions with different arguments. The first two calls to print() invoke the first print() function, which prints a string and a double to the console, respectively. The last two calls to print() invoke the third print() function, which prints the double argument with the specified precision.

Here is the output of the program:

```cpp
This is a string.
893094.2987
893094.2987
893094.29870
```