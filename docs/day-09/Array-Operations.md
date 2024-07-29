---
sidebar_position: 3
title: "Array Operations in C++"
description: "In this tutorial, we will learn about various array operations in C++ programming with the help of examples. Operations include traversal, insertion, deletion, and searching."
sidebar_label: "Array Operations"
slug: Array-Operations
---

# Array Operations in C++

This repository provides an explanation of various array operations in C++, along with examples of their usage.

## Table of Contents

- [Introduction](#introduction)
- [Array Traversal](#array-traversal)
- [Array Insertion](#array-insertion)
- [Array Deletion](#array-deletion)
- [Array Searching](#array-searching)

## Introduction

Arrays support various operations such as traversal, insertion, deletion, and searching. Understanding these operations is essential for efficient array manipulation.

## Array Traversal

Traversal means accessing each element of the array. This can be done using a loop:

```cpp
#include <iostream>

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};

    for (int i = 0; i < 5; ++i) {
        std::cout << numbers[i] << " ";
    }

    return 0;
}
```

## Array Insertion

Insertion involves adding a new element at a specific position. To insert an element, shift the existing elements to the right:

```cpp

#include <iostream>

int main() {
    int numbers[6] = {1, 2, 3, 4, 5};
    int position = 2; // Insert at index 2
    int value = 99;

    for (int i = 5; i > position; --i) {
        numbers[i] = numbers[i - 1];
    }
    numbers[position] = value;

    for (int i = 0; i < 6; ++i) {
        std::cout << numbers[i] << " ";
    }

    return 0;
}
```

## Array Deletion

Deletion involves removing an element from a specific position. To delete an element, shift the remaining elements to the left:

```cpp

#include <iostream>

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};
    int position = 2; // Delete element at index 2

    for (int i = position; i < 4; ++i) {
        numbers[i] = numbers[i + 1];
    }

    for (int i = 0; i < 4; ++i) { // Array now has one less element
        std::cout << numbers[i] << " ";
    }

    return 0;
}
```

## Array Searching

Searching involves finding the position of a specific element. A linear search checks each element until the desired element is found:

```cpp

#include <iostream>

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};
    int value = 3;
    int position = -1;

    for (int i = 0; i < 5; ++i) {
        if (numbers[i] == value) {
            position = i;
            break;
        }
    }

    if (position != -1) {
        std::cout << "Element found at index: " << position << std::endl;
    } else {
        std::cout << "Element not found" << std::endl;
    }

    return 0;
}
```