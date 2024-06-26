---
sidebar_position: 6
title: "Dynamic Memory Allocation in C++"
description: "C++ offers dynamic memory allocation for flexible memory usage. The `new` operator allocates memory at runtime, ideal for unknown data sizes or resizable data structures. Remember to deallocate with `delete` to avoid memory leaks and dangling pointers. Use smart pointers for safer memory management!"
sidebar_label: "Dynamic Memory Allocation"
slug: dynamic-memory-allocation-in-cpp
---

## Dynamic Memory Allocation in C++

In C++, dynamic memory allocation refers to the process of allocating memory for variables during program execution (runtime) at the programmer's request. This stands in contrast to static memory allocation, where memory is allocated for variables at compile time based on their declaration.

![Dynamic Memory Allocation in CPP](../../static/img/day-09/dynamic-memory-allocation.png)

**Why Use Dynamic Memory Allocation?**

There are several scenarios where dynamic memory allocation becomes necessary:

- **Uncertain Data Size at Compile Time:** When the size of data you need to store is unknown until runtime (e.g., user input, processing large datasets), dynamic allocation allows you to request the appropriate amount of memory on the fly.
- **Resizing Data Structures:** Dynamic memory allocation enables you to create data structures like linked lists or dynamic arrays that can grow or shrink in size as needed during program execution.
- **Passing Data by Reference:** Sometimes, you might want to pass a large data structure by reference to a function to avoid copying the entire data. Dynamic allocation allows you to allocate the memory for the data structure on the heap (explained below) and pass the reference to the function.

**Key Concepts:**

* **Heap:** The heap is a region of memory managed by the operating system that can be used for dynamic memory allocation. Programs can request memory from the heap and release it when no longer needed.
* **`new` Operator:** The `new` operator is used to allocate memory on the heap. It takes the data type as an argument and returns a pointer to the newly allocated memory block.
* **`delete` Operator:** The `delete` operator is used to deallocate memory that was previously allocated using `new`. It takes a pointer to the memory block as an argument and returns the memory to the heap.

**Example:**

```c++
#include <iostream>

int main() {
  // Requesting memory for an integer at runtime
  int* num = new int;

  // Assigning a value to the allocated memory
  *num = 42;

  // Accessing the value using the pointer
  std::cout << "Number: " << *num << std::endl;

  // Deallocating the memory when finished
  delete num;

  return 0;
}
```

**Important Considerations:**

* **Memory Leaks:** If you allocate memory using `new` but forget to deallocate it using `delete`, it leads to a memory leak. This means the memory remains allocated even though your program doesn't need it anymore, potentially causing performance issues and memory exhaustion.
* **Dangling Pointers:** If you deallocate memory pointed to by a pointer but continue to use the pointer itself, it becomes a dangling pointer. Accessing a dangling pointer can lead to undefined behavior or program crashes.
* **Alternatives:** In modern C++, consider using smart pointers (e.g., `std::unique_ptr`, `std::shared_ptr`) that automatically manage memory allocation and deallocation, helping to avoid memory leaks and dangling pointers.
