---
sidebar_position: 1
title: "Introduction to Dynamic Memory Allocation"
description: "In this tutorial we will explore what dynamic memory allocation is and What is it used for. We will see how dynamic memory allocation is different from static memory allocation"
sidebar_label: "Introduction to Dynamic Memory Allocation"
slug: introduction-to-dma
---
## 1. What is Dynamic Memory Allocation?
Dynamic memory allocation is a part of memory management techniques in C++. Dynamic memory allocation allows a user to allocated memory at runtime, during the execution.

DMA empowers C++ programs to request memory from the operating system as needed during runtime. This is particularly useful when the size of data structures isn't known at compile time or needs to adjust dynamically throughout the program's execution. Unlike static memory allocation on the stack (fixed size), DMA leverages the heap, a more flexible memory region that expands and contracts as required.

![Introduction-to-DMA](../../static/img/day-12/introduction.png)

## 2. Need of Dynamic Memory Allocation
The question might arise that why do we need Dynamic Memory allocation and what are the benefits of doing so.

#### The advantages of Dynamic Memory Allocation are:

* **Flexibility**: It empowers you to allocate memory for data structures whose exact size is unknown until runtime. This is particularly useful for user input, reading data from files, or creating complex data structures like linked lists and trees that require dynamic memory allocation.

* **Efficiency**: DMA promotes memory usage efficiency by allocating memory only when it's truly needed. This is beneficial for scenarios where data might not be used throughout the entire program, preventing memory waste.

* **Scalability**: DMA excels at handling data structures that exhibit dynamic size changes during program execution. This makes it ideal for situations where you need to grow arrays, resize collections, or process data of varying sizes.

## 3. Problem with Static Memory Allocation

### **Fixed Sizes at Compile Time**
Once intialized, it is not possible to increase or decrease the size of the data structure we are using. 

**For Example**
```
#include <iostream>
using namespace std;

int main() {
    int numbers[5]; 
    cout << "Enter 10 numbers: ";
    for (int i = 0; i < 10; i++) { 
    cin >> numbers[i];
  }
}
```
In the code above, we have initialized an integer array 'numbers' of size 5, however at during the runtime we are prompting user to enter 10 elements, this will result in a **buffer overflow error** because we are trying to access an index postion that does not exist in the array.

### Memory Wastage
In case the programmer does not know about the required size of the structure in advance, static memory allocation often leads to wastage of memory.

**For Example**
```
#include<iostream>
using namespace std;

int main(){
    int numbers[1000];
    int n;
    //taking the number of elements as input from the user
    cout << "Enter the number of Elements to be enters in the array" << endl;
    cin >> n;
    for(auto i=0; i < n; i++)
        cin >> numbers[i];
    return 0;
}
```
In the above example, as the programmer does not know how many elements the user is going to enter at runtime, to be on the safe side one often declares a structure of size much greater than required i.e 1000 in this example.

Let's say the user enters only 5 elements at the runtime, the space of other 995 elements or memory location then gets wasted as those memory blocks are reserved for the array of size 1000 elements and thus cannot be reused by any other structure.

This phenomenon is often called **Internal Fragmentation**. Internal fragmentation occurs when a statically allocated data structure (like an array or struct) wastes some space within its allocated block. This wasted space cannot be used by other variables because the entire block is reserved for that specific data structure.










