---
sidebar_position: 1
title: "Multi-Dimensional Array in C++"
description: "In this tutorial, we will learn about Multi-Dimensional Arrays in C++ programming with the help of examples. A multi-dimensional array is an array of arrays. In C++, we can create a two-dimensional array, three-dimensional array, and so on."
sidebar_label: "Multi-Dimensional Array"
slug: multi-dimensional-array-in-cpp
---

### What is a Multi-Dimensional Array in C++?
A multi-dimensional array in C++ is an array that holds elements in more than one dimension. Unlike a one-dimensional array, which is a list of elements accessed by a single index, a multi-dimensional array is accessed by multiple indices. Common examples include 2D arrays (matrices) and 3D arrays (cubes).

![Multidimentional-array](../../static/img/day-10/multidimentional-array.png)

### Explain the Syntax of a Multi-Dimensional Array in C++.
```cpp

data_type array_name[size1][size2]...[sizeN];

```

Here, data_type is the type of elements the array will hold, array_name is the name of the array, and size1, size2, ..., sizeN are the sizes of each dimension of the array.


### How to Declare and Define a Multi-Dimensional Array in C++?
```cpp

int arr[3][4]; // Declares a 2D array with 3 rows and 4 columns

// Another way to declare and initialize a 2D array:
int arr2[2][3] = {{1, 2, 3}, {4, 5, 6}};

```

### C++ Multi-Dimensional Array Example.

```cpp

#include <iostream>
using namespace std;

int main() {
    int arr[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    
    // Accessing elements of the array
    cout << "Elements of the 2D array:" << endl;
    for (int i = 0; i < 3; ++i) {
        for (int j = 0; j < 3; ++j) {
            cout << arr[i][j] << " ";
        }
        cout << endl;
    }
    
    return 0;
}

```

