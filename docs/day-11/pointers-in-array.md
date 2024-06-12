---
sidebar_position: 2
title: "Pointers in Array in C++"
description: "In this tutorial, we will learn about Pointers in Array in C++ programming with the help of examples. A pointer is a variable that stores the memory address of another variable. Pointers are used to store the address of variables, arrays, and functions in C++."
sidebar_label: "Pointers in Array"
slug: pointers-in-array-in-cpp
---

### 1. What are Pointers in Array?
- In C++, pointers can be used with arrays to access their elements and perform operations. So, when we define a pointer to an array, we are essentially creating a pointer that points to the same address as the array name.
- Here is a simple program that demonstrates the use of pointers in array.
```cpp
#include <iostream> 
using namespace std; 

int main() 
{ 
	int arr[5] = { 10, 20, 30, 40, 50 }; 
	int* ptr = arr;                       //Pointer to the first element of an array

	cout << "*arr = " << *arr << endl;    //An array name is a pointer to its first element
	cout << "arr = " << arr << endl; 
	cout << "*ptr = " << *ptr << endl; 
	cout << "ptr = " << ptr << endl; 

	return 0; 
}

```
Output
```
*arr = 10
arr = 0x7ffc096e3bc0
*ptr = 10
ptr = 0x7ffc096e3bc0
```

### 2. Why do we need pointers in array?
- They provide a way to pass arrays to functions without passing the entire array (which can be inefficient if the array is large).
- They allow us to dynamically allocate memory for arrays at runtime.
- They can be used to implement data structures like linked lists, trees, etc.

### 3. Example Program to Traverse an Array using Pointer
```cpp
#include<iostream>
using namespace std;

int main() {
    int arr[] = {18, 23, 36, 45, 57};
    int *ptr = arr; // Pointer to the first element of the array

    for(int i = 0; i < 5; i++) {
        cout << "Element at index " << i << " is: " << *(ptr + i) << endl;
    }

    return 0;
}
```
Output
```
Element at index 0 is: 18
Element at index 1 is: 23
Element at index 2 is: 36
Element at index 3 is: 45
Element at index 4 is: 57
```
Here,
- arr is an Array of Integers.
- *ptr is a Pointer that points to the first element of the Array arr.
- The for loop iterates over each element of the array. *(ptr + i) gives the value at the ith index of the array. This is because adding i to the pointer ptr moves it i places in memory. Since ptr is a pointer to an integer, each move is the size of an integer.

### Practice Questions
1. What is a Pointer in C++?
2. Explain the Syntax of a Pointer in C++.
3. How to Declare and Define a Pointer in C++?
4. How to Access the Value of a Pointer in C++?
5. How to Access the Address of a Pointer in C++?
6. How to Declare and Define a Pointer to a Pointer in C++?
7. How can you use a Pointer to traverse an Array in C++?
8. How can you pass an Array to a function using a Pointer in C++?
9. What is Dynamic Memory Allocation for arrays using Pointers in C++?
10. How can you return an Array from a function using a Pointer in C++?

IMAGE FILE:
![Function in CPP](../../static/img/day-11/array-with-pointers.png)
