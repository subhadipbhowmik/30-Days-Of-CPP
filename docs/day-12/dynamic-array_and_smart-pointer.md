---
sidebar_position: 2
title: "Memory Management - Dynamic Arrays and Smart Pointers"
description: "In this tutorial, we will learn about dynamic arrays and smart pointers in C++ programming with the help of examples. Dynamic arrays allow flexible array sizing, and smart pointers manage memory automatically."
sidebar_label: "Dynamic Arrays and Smart Pointers"
slug: memory-management-dynamic-arrays-smart-pointers
---

## Dynamic Arrays

Dynamic arrays are arrays whose size can be determined at runtime. They are created using the `new` operator and must be deallocated using the `delete` operator to avoid memory leaks.

- **Creating Dynamic Arrays:**
  - Syntax:
    ```cpp
    type* array = new type[size];
    ```
  - Example:
    ```cpp
    int size = 5;
    int* dynamicArray = new int[size];
    ```

- **Accessing and Modifying Elements:**
  - Elements are accessed and modified using pointers.
  - Example:
    ```cpp
    dynamicArray[0] = 1;   // Assigns value to the first element
    int value = dynamicArray[1]; // Retrieves value of the second element
    ```

- **Deallocating Dynamic Arrays:**
  - Syntax:
    ```cpp
    delete[] array;
    ```
  - Example:
    ```cpp
    delete[] dynamicArray;
    ```

## Smart Pointers

Smart pointers are a feature of the C++ Standard Library that help manage dynamic memory by ensuring proper deallocation. They are part of the `<memory>` header.

- **Types of Smart Pointers:**
  - **`std::unique_ptr`:**
    - Ensures that only one pointer can own a resource at a time.
    - Automatically deletes the resource when the `unique_ptr` goes out of scope.
    - Syntax:
      ```cpp
      std::unique_ptr<int> ptr(new int(10));
      ```

  - **`std::shared_ptr`:**
    - Allows multiple pointers to share ownership of a resource.
    - The resource is deleted when the last `shared_ptr` pointing to it is destroyed.
    - Syntax:
      ```cpp
      std::shared_ptr<int> ptr1 = std::make_shared<int>(10);
      std::shared_ptr<int> ptr2 = ptr1; // Shared ownership
      ```

  - **`std::weak_ptr`:**
    - Holds a non-owning reference to a resource managed by `std::shared_ptr`.
    - Used to break cyclic dependencies between `shared_ptr`s.
    - Syntax:
      ```cpp
      std::weak_ptr<int> weakPtr = sharedPtr;
      ```

