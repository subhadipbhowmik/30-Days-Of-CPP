---
sidebar_position: 1
title: "Pointers in C++"
description: "In this tutorial, we will learn about Pointers in C++ programming with the help of examples. A pointer is a variable that stores the memory address of another variable. Pointers are used to store the address of variables, arrays, and functions in C++."
sidebar_label: "Pointers"
slug: pointers-in-cpp
---

## What is a Pointer in C++?

A pointer is a variable that stores the memory address of an object. Pointers are used extensively in both C and C++ for three main purposes:

- To allocate new objects on the heap,
- To pass functions to other functions
- To iterate over elements in arrays or other data structures.

In C-style programming, raw pointers are used for all these scenarios. However, raw pointers are the source of many serious programming errors. Therefore, their use is strongly discouraged except where they provide a significant performance benefit and there is no ambiguity as to which pointer is the owning pointer that is responsible for deleting the object. Modern C++ provides smart pointers for allocating objects, iterators for traversing data structures, and lambda expressions for passing functions. By using these language and library facilities instead of raw pointers, you will make your program safer, easier to debug, and simpler to understand and maintain.

## Explain the Syntax of a Pointer in C++.

Here's how to declare a pointer in C++:

```cpp
data_type* pointer_name;
```
```cpp
int num = 10;
int* ptr = &num;
```

In this example, * is the dereference operator. It is used to access the value that the pointer is pointing to. For example, to print the value of num using the pointer ptr, you can use the following code:

```cpp
cout << *ptr << endl;
```

This will print the value 10 to the console.
Pointers can be used to point to any type of data, including arrays, structures, and classes. They can also be used to point to functions.


![Multidimentional-array](../../static/img/day-11/pointers.png)

## How to Declare and Define a Pointer in C++?

Declare the pointer variable.

To declare a pointer variable, you need to use the * operator. For example, to declare a pointer variable named ptr that points to an integer variable named num, you can use the following code:

```cpp
int* ptr;
```

This code declares a pointer variable named ptr that points to an integer variable.

Initialize the pointer variable.

Once you have declared the pointer variable, you need to initialize it. To initialize a pointer variable, you need to assign it the address of a variable. For example, to initialize the pointer variable ptr to point to the integer variable num, you can use the following code:

```cpp
ptr = &num;
```

## How to Access the Value of a Pointer in C++?

To access the value of a pointer in C++, you need to use the dereferencing operator (*). The dereferencing operator returns the value of the variable that the pointer points to.

For example, if you have a pointer to an integer variable, you can use the dereferencing operator to get the value of the integer variable.

Here is an example:

```cpp
int my_int = 10;
int* my_pointer = &my_int;

// Get the value of the integer variable using the dereferencing operator
int value = *my_pointer;

// Print the value of the integer variable
std::cout << value << std::endl;
```

This code will print the value 10 to the console.
You can also use the dereferencing operator to modify the value of the variable that the pointer points to.
For example, you can use the following code to increment the value of the integer variable:

```cpp
*my_pointer++;
```

## How to Access the Address of a Pointer in C++?

To access the address of a pointer in C++, you can use the address-of operator (&). This operator returns the memory address of the variable that it is applied to. For example, if you have the following code:

```cpp
int x = 10;
int *ptr = &x;
```

The variable ptr will store the memory address of the variable x. You can then use the dereference operator (*) to access the value stored at the memory location pointed to by ptr. For example, the following code will print the value 10 to the console:

```cpp
cout << *ptr << endl;
```

## How to Declare and Define a Pointer to a Pointer in C++?

To declare a pointer to a pointer in C++, you need to use the asterisk (*) symbol twice. For example, the following code declares a pointer to a pointer to an integer:

```cpp
int** pInt;
```
This means that the variable pInt can store the address of a pointer to an integer.
To define a pointer to a pointer, you need to assign it the address of a pointer to an integer. For example, the following code defines pInt to point to the pointer pInt2:

```cpp
int* pInt2 = new int;
pInt = &pInt2;
```

The new operator allocates a new integer on the heap and returns a pointer to it. The & operator gets the address of a variable. So, the above code assigns the address of pInt2 to pInt.
Once pInt is defined, you can use it to access the integer that pInt2 points to. For example, the following code prints the value of the integer to the console:

```cpp
cout << *pInt << endl;
```

## How to Declare and Define a Pointer to an Array in C++?

To declare a pointer to an array in C++, you can use the following syntax:

```cpp
// Declare a pointer to an array of integers
int* arr_ptr;

// Initialize the pointer to point to the first element of the array
arr_ptr = &arr[0];
```

Here, arr_ptr is a pointer to an array of integers. The & operator is used to get the address of the first element of the array.
To access the elements of the array through the pointer, you can use the dereference operator (*). For example, the following code will print the first element of the array:

```cpp
cout << *arr_ptr << endl;
```

You can also use the pointer to iterate over the elements of the array. For example, the following code will print all elements of the array:

```cpp
for (int i = 0; i < 10; i++) {
  cout << *(arr_ptr + i) << endl;
}
```

Here, the arr_ptr + i expression gives the address of the ith element of the array.

Here is an example of how to use a pointer to an array in C++:

```cpp
#include <iostream>

using namespace std;

int main() {
  // Declare an array of integers
  int arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

  // Declare a pointer to the array
  int* arr_ptr = arr;

  // Print the elements of the array using the pointer
  for (int i = 0; i < 10; i++) {
    cout << *(arr_ptr + i) << endl;
  }

  return 0;
}
```

Output:

```cpp
1
2
3
4
5
6
7
8
9
10
```

## How to Declare and Define a Pointer to a Function in C++?

To declare a pointer to a function in C++, you can use the following syntax:

```cpp
// Declare a pointer to a function that takes two integers as arguments and returns an integer
int (*function_pointer)(int, int);

// Define the function that the pointer will point to
int add(int a, int b) {
  return a + b;
}

// Assign the address of the function to the pointer
function_pointer = add;

// Call the function through the pointer
int result = function_pointer(1, 2);

// Print the result
std::cout << result << std::endl;
```

Output:

```cpp
3
```

In this example, we first declare a pointer to a function that takes two integers as arguments and returns an integer. We then define the function that the pointer will point to, which is a function called add() that takes two integers as arguments and returns their sum. We then assign the address of the add() function to the pointer. Finally, we call the add() function through the pointer and print the result.
Function pointers can be useful for a variety of purposes, such as passing functions as arguments to other functions or storing functions in an array. They can also be used to implement callback functions, which are functions that are called when a certain event occurs.

## How to Pass a Pointer to a Function in C++?

Here are the steps on how to pass a pointer to a function in C++:
- Declare a function that takes a pointer as a parameter. 

For example, the following function takes an integer pointer as a parameter and increments the value pointed to by the pointer:

```cpp
void increment(int *p) {
  *p += 1;
}
```

- Declare a pointer variable and point it to the variable or array you want to pass to the function. 

For example, the following code declares a pointer variable named p and points it to the integer variable x:

```cpp
int x = 5;
int *p = &x;
```

- Call the function by passing the pointer as an argument. 

For example, the following code calls the increment() function and passes the pointer p as an argument:

```cpp
increment(p);
```

After the increment() function is called, the value of the variable x will be incremented to 6.
Here is an example of a complete program that passes a pointer to a function: