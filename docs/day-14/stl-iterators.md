---
sidebar_position: 4
title: "STL Iterators"
description: "In this tutorial, we will learn about Iterators in the Standard Template Library (STL) in C++ with the help of examples. Iterators are used to point to the elements of containers."
sidebar_label: "STL Iterators"
slug: stl-iterators-in-cpp
---

## STL Iterators

### What are Iterators in STL?
Iterators are objects used to iterate through the elements of a container. They act as pointers and provide a way to access elements in a container sequentially.

### Types of Iterators
1. **Input Iterator**: Reads elements from a sequence.
2. **Output Iterator**: Writes elements to a sequence.
3. **Forward Iterator**: Reads and writes elements sequentially.
4. **Bidirectional Iterator**: Supports moving forward and backward through a sequence.
5. **Random Access Iterator**: Provides random access to elements, supporting arithmetic operations like addition and subtraction.

### Example:
```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> vec = {1, 2, 3, 4, 5};

    // Forward iterator example
    std::cout << "Forward traversal using iterators: ";
    for (auto it = vec.begin(); it != vec.end(); ++it) {
        std::cout << *it << " ";
    }

    // Reverse iterator example
    std::cout << "\nReverse traversal using reverse iterators: ";
    for (auto rit = vec.rbegin(); rit != vec.rend(); ++rit) {
        std::cout << *rit << " ";
    }

    return 0;
}
