---
sidebar_position: 1
title: "Memory Management - new and delete Operators"
description: "In this tutorial, we will learn about `new` and `delete` operators in C++ programming with the help of examples. These operators are used for dynamic memory allocation and deallocation in C++."
sidebar_label: "New and Delete Operators"
slug: memory-management-new-delete-operators
---


## Memory Management in C++
Memory management is a critical aspect of programming in C++, as it involves allocating and deallocating memory dynamically at runtime. Proper memory management ensures that programs run efficiently and avoid issues such as memory leaks, fragmentation, and corruption.

#### `new` and `delete` Operators

The `new` and `delete` operators are fundamental for dynamic memory management in C++. They allow you to allocate and deallocate memory during runtime.

- **`new` Operator:**
  - Allocates memory from the heap.
  - Returns a pointer to the allocated memory.
  - Syntax: 
    ```cpp
    type* pointer = new type;       // For a single element
    type* pointer = new type[size]; // For an array
    ```
  - Example:
    ```cpp
    int* p = new int;       // Allocates memory for a single integer
    int* arr = new int[10]; // Allocates memory for an array of 10 integers
    ```

- **`delete` Operator:**
  - Deallocates memory that was previously allocated using `new`.
  - Frees the memory, making it available for future allocations.
  - Syntax:
    ```cpp
    delete pointer;       // For a single element
    delete[] pointer;     // For an array
    ```
  - Example:
    ```cpp
    delete p;       // Deallocates memory for the single integer
    delete[] arr;   // Deallocates memory for the array of integers
    ```
