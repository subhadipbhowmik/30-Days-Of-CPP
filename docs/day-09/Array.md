---
sidebar_position: 1
title: "Introduction to Arrays in C++"
description: "In this tutorial, we will learn about arrays in C++ programming with the help of examples. Arrays are used to store multiple values in a single variable."
sidebar_label: "Introduction to Arrays"
slug: Introduction-to-Arrays
---

# Introduction to Arrays in C++

This repository provides an explanation of arrays in C++, along with examples of their usage.

## Table of Contents

- [Introduction](#introduction)
- [Array Declaration](#array-declaration)
- [Array Initialization](#array-initialization)
- [Accessing Array Elements](#accessing-array-elements)
- [Array Size](#array-size)

## Introduction

An array is a collection of variables of the same type that are stored in contiguous memory locations. Arrays provide a way to store multiple values in a single variable.

## Array Declaration

To declare an array in C++, specify the type of the elements, followed by the array name, and the number of elements in square brackets:

```cpp
int numbers[5]; // Declares an array of 5 integers
```

## Array Initialization

Arrays can be initialized at the time of declaration:

```cpp

int numbers[5] = {1, 2, 3, 4, 5}; // Initializes the array with 5 integers
```

You can also partially initialize an array:

```cpp

int numbers[5] = {1, 2}; // Initializes the first two elements, the rest are set to 0
```

## Accessing Array Elements

Array elements are accessed using their index. The index of the first element is 0, the second element is 1, and so on:

```cpp

#include <iostream>

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};

    std::cout << "First element: " << numbers[0] << std::endl;
    std::cout << "Second element: " << numbers[1] << std::endl;

    return 0;
}
```

## Array Size

The size of an array can be determined using the sizeof operator:

```cpp

#include <iostream>

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};

    std::cout << "Size of array: " << sizeof(numbers) / sizeof(numbers[0]) << std::endl;

    return 0;
}
```

This code calculates the number of elements in the array by dividing the total size of the array by the size of a single element.