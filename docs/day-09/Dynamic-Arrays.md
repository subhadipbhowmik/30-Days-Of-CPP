---
sidebar_position: 4
title: "Dynamic Arrays in C++"
description: "In this tutorial, we will learn about dynamic arrays in C++ programming with the help of examples. Dynamic arrays allow flexible memory allocation at runtime."
sidebar_label: "Dynamic Arrays"
slug: Dynamic-Arrays
---

# Dynamic Arrays in C++

This repository provides an explanation of dynamic arrays in C++, along with examples of their usage.

## Table of Contents

- [Introduction](#introduction)
- [Dynamic Memory Allocation](#dynamic-memory-allocation)
- [Dynamic Array Initialization](#dynamic-array-initialization)
- [Resizing Dynamic Arrays](#resizing-dynamic-arrays)
- [Using `std::vector`](#using-stdvector)

## Introduction

Dynamic arrays allow flexible memory allocation at runtime, providing more flexibility compared to static arrays. Dynamic arrays are managed using pointers and dynamic memory functions.

## Dynamic Memory Allocation

Dynamic memory allocation is done using the `new` keyword. To create a dynamic array, allocate memory for the desired number of elements:

```cpp
#include <iostream>

int main() {
    int size = 5;
    int* numbers = new int[size]; // Allocates memory for an array of 5 integers

    // Initializing the array
    for (int i = 0; i < size; ++i) {
        numbers[i] = i + 1;
    }

    // Printing the array
    for (int i = 0; i < size; ++i) {
        std::cout << numbers[i] << " ";
    }

    delete[] numbers; // Deallocates the memory

    return 0;
}
```

## Dynamic Array Initialization

Dynamic arrays can be initialized similarly to static arrays, but using dynamic memory allocation:

```cpp

#include <iostream>

int main() {
    int size = 5;
    int* numbers = new int[size]{1, 2, 3, 4, 5}; // Initializes the array

    // Printing the array
    for (int i = 0; i < size; ++i) {
        std::cout << numbers[i] << " ";
    }

    delete[] numbers; // Deallocates the memory

    return 0;
}
```

## Resizing Dynamic Arrays

Resizing a dynamic array involves creating a new array of the desired size and copying the elements from the old array:

```cpp

#include <iostream>

int main() {
    int oldSize = 5;
    int newSize = 10;
    int* oldArray = new int[oldSize]{1, 2, 3, 4, 5};

    int* newArray = new int[newSize];

    // Copying elements to the new array
    for (int i = 0; i < oldSize; ++i) {
        newArray[i] = oldArray[i];
    }

    delete[] oldArray; // Deallocates the old array

    // Initializing the new elements
    for (int i = oldSize; i < newSize; ++i) {
        newArray[i] = i + 1;
    }

    // Printing the new array
    for (int i = 0; i < newSize; ++i) {
        std::cout << newArray[i] << " ";
    }

    delete[] newArray; // Deallocates the new array

    return 0;
}
```

## Using `std::vector`

The `std::vector` class in the Standard Template Library (STL) provides a dynamic array with built-in functions for resizing and memory management:

```cpp

#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};

    numbers.push_back(6); // Adds a new element

    // Printing the vector
    for (int number : numbers) {
        std::cout << number << " ";
    }

    return 0;
}
```

Using `std::vector` simplifies dynamic array management by handling memory allocation and resizing automatically.