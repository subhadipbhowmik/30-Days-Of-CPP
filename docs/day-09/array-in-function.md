---
sidebar_position: 3
title: "Array in Function in C++"
description: "In this tutorial, we will learn about Arrays in Function in C++ programming with the help of examples. An array is a collection of elements of the same data type that are stored in contiguous memory locations. Arrays are used to store multiple values in a single variable."
sidebar_label: "Array in Function"
slug: array-in-function-in-cpp
---

## What is an Array in Function in C++?

In C++, an array can be passed to a function as an argument. This allows the function to access and manipulate the elements of the array.

## Explain the Syntax of an Array in Function in C++.

When passing an array to a function, the array is usually passed by reference, meaning the function receives a pointer to the first element of the array. Here’s the basic syntax:

```cpp
return_type function_name(data_type array_name[], int size);
```

## How to Declare and Define an Array in Function in C++?

To declare and define a function that takes an array as a parameter, you specify the array's data type, the array parameter, and any additional parameters, like the size of the array.

```cpp
void printArray(int arr[], int size) {
    for(int i = 0; i < size; ++i) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

int main() {
    int myArray[] = {10, 12, 13, 14, 15};
    int size = sizeof(myArray) / sizeof(myArray[0]);
    printArray(myArray, size);
    return 0;
}
```
 **Output**
```cpp
10 12 13 14 15 
```

## Example of Array in Function in C++ 

Here's a simple example that demonstrates passing an array to a function and printing its elements:

```cpp
#include <iostream>

void printArray(int arr[], int size) {
    for(int i = 0; i < size; ++i) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

int main() {
    int myArray[] = {1, 2, 3, 4, 5};
    int size = sizeof(myArray) / sizeof(myArray[0]);
    printArray(myArray, size);
    return 0;
}
```
**Output**
```cpp
1 2 3 4 5 
```
Sure, let's summarize the different methods to pass arrays to functions in C++ with a concise example. 

## Methods to Pass Arrays to Functions in C++

In C++, you can pass arrays to functions in three common ways: as a pointer, as an unsized array, or as a sized array.

1. **Passing Array as a Pointer**

   - The array name is treated as a pointer to the first element.
   - Syntax:
     ```cpp
     return_type function_name(data_type *array_name) {
         // statements
     }
     ```

2. **Passing Array as an Unsized Array**

   - The function accepts the array without specifying its size.
   - Syntax:
     ```cpp
     return_type function_name(data_type array_name[]) {
         // statements
     }
     ```

3. **Passing Array as a Sized Array**

   - The function accepts the array with a specified size.
   - Syntax:
     ```cpp
     return_type function_name(data_type array_name[size_of_array]) {
         // statements
     }
     ```

**Note:** Regardless of the method used, arrays decay to pointers when passed to functions, losing their size information.

### Example: Code to Illustrate Different Ways to Pass Arrays to a Function

```cpp
#include <iostream>
using namespace std;

// Passing array as a sized array argument
void printArraySized(int arr[3], int n) {
    cout << "Array as Sized Array Argument: ";
    for (int i = 0; i < n; ++i) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

// Passing array as an unsized array argument
void printArrayUnsized(int arr[], int n) {
    cout << "Array as Unsized Array Argument: ";
    for (int i = 0; i < n; ++i) {
        cout << *(arr + i) << " ";
    }
    cout << endl;
}

// Passing array as a pointer argument
void printArrayPointer(int* ptr, int n) {
    cout << "Array as Pointer Argument: ";
    for (int i = 0; i < n; ++i) {
        cout << ptr[i] << " ";
    }
    cout << endl;
}

// Driver code
int main() {
    int arr[] = {10, 20, 30};

    // Call function printArray and pass array and its size to it.
    printArraySized(arr, 3);
    printArrayUnsized(arr, 3);
    printArrayPointer(arr, 3);

    return 0;
}
```

**Output**

```
Array as Sized Array Argument: 10 20 30 
Array as Unsized Array Argument: 10 20 30 
Array as Pointer Argument: 10 20 30 
```

This example demonstrates how arrays can be passed to functions in different ways in C++. Each method essentially treats the array as a pointer, allowing the function to access and manipulate the array elements.

## How to Return an Array from a Function in C++?

In C++, you cannot return an array directly from a function. Instead, you can return a pointer to the first element of an array, or better yet, use a `std::vector` or a `std::array` from the C++ Standard Library.

Example using a pointer:

```cpp
int* createArray(int size) {
    int* arr = new int[size]; // dynamically allocate array
    for(int i = 0; i < size; ++i) {
        arr[i] = i * 2;
    }
    return arr;
}

int main() {
    int size = 5;
    int* myArray = createArray(size);
    for(int i = 0; i < size; ++i) {
        std::cout << myArray[i] << " ";
    }
    delete[] myArray; // don't forget to free the allocated memory
    return 0;
}
```
**Output**

```cpp
0 2 4 6 8 
```