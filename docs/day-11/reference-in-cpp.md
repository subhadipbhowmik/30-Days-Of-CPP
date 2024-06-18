---
sidebar_position: 4
title: "Reference in C++"
description: "In this tutorial, we will learn about Reference in C++ programming with the help of examples. A reference is an alias for a variable. It is a way to access the value of a variable using a different name. A reference is similar to a pointer, but it is simpler to use and safer than a pointer."
sidebar_label: "Reference"
slug: reference-in-cpp
---

## 1. What is a Reference in C++?

When a variable is declared as a reference, it becomes an alternative name for an existing variable. A variable can be declared as a reference by putting ‘&’ in the declaration. 

Also, we can define a reference variable as a type of variable that can act as a reference to another variable. ‘&’ is used for signifying the address of a variable or any memory. Variables associated with reference variables can be accessed either by its name or by the reference variable associated with it.

## 2. Explain the Syntax of a Reference in C++.

The syntax for declaring a reference involves using the `&` symbol. You place the `&` symbol between the data type and the reference variable name.

```cpp
dataType &referenceName = variableName;
```

## 3. How to Declare and Define a Reference in C++?

### Declaring and Defining a Reference

When you declare and define a reference, you must initialize it at the same time. References cannot be left uninitialized.

```cpp
int original = 10;
int &ref = original; // 'ref' is a reference to 'original'
```

## 4. C++ Reference Example

Here is a simple example demonstrating the use of a reference:

```cpp
#include <iostream>

int main() {
    int original = 10;
    int &ref = original;

    std::cout << "Original: " << original << std::endl; // Outputs: 10
    std::cout << "Reference: " << ref << std::endl; // Outputs: 10

    ref = 20;
    std::cout << "After modifying reference:" << std::endl;
    std::cout << "Original: " << original << std::endl; // Outputs: 20
    std::cout << "Reference: " << ref << std::endl; // Outputs: 20

    return 0;
}
```

![String in CPP](../../static/img/day-11/reference-in-cpp.png)


## 5. How to Pass a Reference to a Function in C++?

To pass a reference to a function, you use the same `&` syntax in the function parameter list. This allows the function to modify the original variable.

```cpp
#include <iostream>

void increment(int &num) {
    num++;
}

int main() {
    int value = 5;
    increment(value);
    std::cout << "Value after increment: " << value << std::endl; // Outputs: 6
    return 0;
}
```

## 6. How to Return a Reference from a Function in C++?

- Declare a function with return type and parameter as reference variables.
- Perform the required actions with the reference variable inside the function.
- Return the reference variable. 

For example, the following function returns a reference to an integer: 

```cpp
int& returnValue(int& x) {
  // Print the address.
  std::cout << "x = " << x << " The address of x is " << &x << std::endl;

  // Return reference.
  return x;
}
```

This function can be used as follows:

```cpp
int main() {
  int x = 10;

  // Get a reference to x.
  int& ref = returnValue(x);

  // Modify the value of x through the reference.
  ref = 20;

  // Print the value of x.
  std::cout << "x = " << x << std::endl;

  return 0;
}
```

Output:

```cpp
x = 10 The address of x is 0x7ffeed345678
x = 20
```

### Example of Returning a Reference from a Function

```cpp
#include <iostream>

int& getElement(int arr[], int index) {
    return arr[index]; // Returning a reference to the array element
}

int main() {
    int myArray[5] = {1, 2, 3, 4, 5};
    int &element = getElement(myArray, 2); // Get reference to the third element

    std::cout << "Original element: " << element << std::endl; // Outputs: 3
    element = 10; // Modify the element through the reference
    std::cout << "Modified element: " << myArray[2] << std::endl; // Outputs: 10

    return 0;
}
```

### Important Considerations

- **Lifetime of the referred object**: Ensure that the object whose reference is returned is still alive when the reference is used. Returning references to local variables within a function is dangerous because the local variables will be destroyed when the function scope ends.
- **Const references**: Use const references when you don't need to modify the object, which helps in avoiding accidental changes.

```cpp
const int& getElement(const int arr[], int index) {
    return arr[index];
}
```

By using references, you can efficiently manage large data and enhance performance by avoiding unnecessary copying of objects.


