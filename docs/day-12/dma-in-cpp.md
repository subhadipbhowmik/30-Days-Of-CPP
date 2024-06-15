---
sidebar_position: 2
title: "Dynamic Memory Allocation in C++"
description: "In this tutorial we will apply the concept of dynamic memory allocation in C++. The purpose of this tutorial is to explore how the new and delete works in C++."
sidebar_label: "Dynamic Memory Allocation in C++"
slug: dma-in-cpp
---
C++ provides two primary operations for Dynamic memory allocation:
* Allocating the memory using the `new` keyword.
* De-allocating the previously allocated memory using the `delete` keyword.

## 1. Allocating memory using the `new` keyword

The new keyword in C++ is used for dynamic memory allocation. It allows you to allocate memory for variables or objects during runtime.
### Memory Allocation 
When you use `new`, memory is allocated from the heap. The heap is a region of memory that is managed by the operating system, and it's separate from the stack memory where local variables are typically stored.
The new operator returns a pointer to the memory location where the new object or variable is stored.

If the memory allocation fails (e.g., due to insufficient memory), new throws a `std::bad_alloc` exception.

### Syntax for using the `new` keyword
The syntax for the `new` keyword is:
```
data_type *ptr_name= new data_type;
```
![dma-in-cpp](../../static/img/day-12/dmaInCpp.png)

## 2. Deallocating the previously allocated memory using the `delete` keyword

The `delete` keyword in C++ is used to deallocate memory that was allocated dynamically using the new keyword.

### Matching Allocation and Deallocation
*When you dynamically allocate memory using `new`, you must deallocate it once it's no longer needed to prevent memory leaks. `delete` is used to perform this deallocation.

Memory allocated with new persists until explicitly deallocated. Therefore it is necessary to match the `new` keyword with `delete`.

### Syntax for using the `delete` keyword
To delete an allocated memory we can simply use the `delete` keyword with the pointer pointing to the allocated memory.

* For deallocating memory for a single object: `delete pointer;`
* For deallocating memory for an array of objects: `delete[] pointer;`

#### Example
```
int *ptr = new int;       // Allocate memory
delete ptr;               // Deallocate memory
```
Attempting to delete a null pointer (a pointer that doesn't point to any valid memory address) has no effect. It's safe to delete a null pointer.

Deleting a pointer that was not allocated with `new` leads to undefined behavior.

Accessing memory through a pointer after it has been deleted results in undefined behavior. It may lead to a crash, or the program may appear to work correctly despite accessing invalid memory.

## 3. Examples 
Example C++ program that takes the number of elements as input from the user and creates an array using Dynamic Memory Allocation (DMA).

```
#include <iostream>
using namespace std;
int main() {
    int n;
    // Ask the user to enter the number of elements
    cout << "Enter the number of elements: ";
    cin >> n;

    // Dynamically allocate memory for an array of integers
    int *arr = new int[n];

    // Input values into the array
    cout << "Enter " << n << " integers:" << std::endl;
    for (int i = 0; i < n; ++i) {
        cin >> arr[i];
    }

    // Display the elements of the array
    cout << "Elements of the array:" << endl;
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }

    // Deallocate memory
    delete[] arr;
    return 0;
}
```
### Output:
```
Enter the number of elements: 5
Enter 5 integers:
1
2
3
4
5
Elements of the array:
1 2 3 4 5 

=== Code Execution Successful ===
```



