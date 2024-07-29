---
sidebar_position: 2
title: "Multidimensional Arrays in C++"
description: "In this tutorial, we will learn about multidimensional arrays in C++ programming with the help of examples. Multidimensional arrays can store data in a tabular form."
sidebar_label: "Multidimensional Arrays"
slug: Multidimensional-Arrays
---

# Multidimensional Arrays in C++

This repository provides an explanation of multidimensional arrays in C++, along with examples of their usage.

## Table of Contents

- [Introduction](#introduction)
- [2D Arrays](#2d-arrays)
- [Initializing 2D Arrays](#initializing-2d-arrays)
- [Accessing Elements in 2D Arrays](#accessing-elements-in-2d-arrays)
- [3D Arrays](#3d-arrays)

## Introduction

Multidimensional arrays are arrays of arrays. They can be used to represent data in a tabular form, such as a matrix.

## 2D Arrays

A two-dimensional (2D) array is an array of arrays. To declare a 2D array, specify the type of the elements, followed by the array name, and the number of elements in each dimension:

```cpp
int matrix[3][3]; // Declares a 3x3 matrix of integers
```

## Initializing 2D Arrays

2D arrays can be initialized at the time of declaration:

```cpp

int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

## Accessing Elements in 2D Arrays

Elements in a 2D array are accessed using two indices: the row index and the column index:

```cpp

#include <iostream>

int main() {
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    std::cout << "Element at (0,0): " << matrix[0][0] << std::endl;
    std::cout << "Element at (1,2): " << matrix[1][2] << std::endl;

    return 0;
}
```

## 3D Arrays

A three-dimensional (3D) array is an array of arrays of arrays. To declare a 3D array, specify the type of the elements, followed by the array name, and the number of elements in each dimension:

``` cpp

int cube[3][3][3]; // Declares a 3x3x3 cube of integers
```

3D arrays can be initialized and accessed similarly to 2D arrays.
