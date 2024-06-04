---
sidebar_position: 3
title: "Array in Function in C++"
description: "In this tutorial, we will learn about Arrays in Function in C++ programming with the help of examples. An array is a collection of elements of the same data type that are stored in contiguous memory locations. Arrays are used to store multiple values in a single variable."
sidebar_label: "Array in Function"
slug: array-in-function-in-cpp
---

## What is an Array in Function in C++?

In C++, an array can be passed to a function as an argument. This allows the function to access and manipulate the elements of the array.

## Explain the Syntax of an Array in Function in C++.

When you pass an array to a function in C++, you're typically passing a pointer to the first element of the array. This allows the function to access and manipulate the array elements.Here’s the basic syntax:

```cpp
return_type function_name(data_type array_name[], int size);
```
Here:

- **return_type** is the type of value the function returns.
- **data_type** is the type of the array elements (e.g., int, float).
- **array_name** is the name of the array parameter.
- **int size** is an additional parameter to pass the size of the array.

## How to Declare and Define an Array in Function in C++?

To declare and define a function that takes an array as a parameter, you specify the array's data type, the array parameter, and any additional parameters, like the size of the array.

```cpp
void printArray(int arr[], int size) {
    for(int i = 0; i < size; ++i) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

int main() {
    int myArray[] = {10, 12, 13, 14, 15};
    int size = sizeof(myArray) / sizeof(myArray[0]);
    printArray(myArray, size);
    return 0;
}
```

- **printArray:** This function takes two parameters, an integer array arr and its size size.
- **main:** We define an array myArray and calculate its size. We then call printArray, passing myArray and its size.

 **Output**
```cpp
10 12 13 14 15 
```

## Example of Array in Function in C++ 

Here's a simple example that demonstrates passing an array to a function and printing its elements:

```cpp
#include <iostream>

void printArray(int arr[], int size) {
    for(int i = 0; i < size; ++i) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

int main() {
    int myArray[] = {1, 2, 3, 4, 5};
    int size = sizeof(myArray) / sizeof(myArray[0]);
    printArray(myArray, size);
    return 0;
}
```

**Explaination:**

1. **Including the iostream library**
  ```cpp
   #include <iostream>
  ```
    - This line includes the input-output stream library, which allows the program to use `std::cout` for printing to the console.

2. **Defining the `printArray` function**
    - This function is defined to print the elements of an array.
    - **Parameters:**
        - `int arr[]`: An array of integers. The array is passed as a pointer to its first element.
        - `int size`: The number of elements in the array.
    - **Function Body:**
        - A `for` loop iterates from `0` to `size - 1`.
        - In each iteration, it prints the `i-th` element of the array followed by a space.
        - After the loop completes, `std::cout << std::endl;` prints a newline character to move to the next line in the console.

3. **Defining the `main` function**
    - **Variable Definition:**
        - `int myArray[] = {1, 2, 3, 4, 5};`: This line declares and initializes an array `myArray` with 5 elements.
    - **Calculating Array Size:**
        - `int size = sizeof(myArray) / sizeof(myArray[0]);`: 
            - `sizeof(myArray)`: This expression returns the total size in bytes of the `myArray` array.
            - `sizeof(myArray[0])`: This expression returns the size in bytes of the first element of `myArray` (an `int` in this case).
            - Dividing the total size by the size of one element gives the number of elements in the array.
    - **Calling `printArray`:**
        - `printArray(myArray, size);`: This calls the `printArray` function, passing `myArray` and its size as arguments.
    - **Returning 0:**
        - `return 0;`: This indicates that the program ended successfully.
 **Output**
When this code is executed, it will produce the following output:
```cpp
1 2 3 4 5 
```
Each element of the array `myArray` is printed in order, followed by a space, and then a newline character is printed at the end.

## Methods to Pass Arrays to Functions in C++

In C++, you can pass arrays to functions in three common ways: as a pointer, as an unsized array, or as a sized array.

1. **Passing Array as a Pointer**

   - The array name is treated as a pointer to the first element.
   - Syntax:
     ```cpp
     return_type function_name(data_type *array_name) {
         // statements
     }
     ```

2. **Passing Array as an Unsized Array**

   - The function accepts the array without specifying its size.
   - Syntax:
     ```cpp
     return_type function_name(data_type array_name[]) {
         // statements
     }
     ```

3. **Passing Array as a Sized Array**

   - The function accepts the array with a specified size.
   - Syntax:
     ```cpp
     return_type function_name(data_type array_name[size_of_array]) {
         // statements
     }
     ```

**Note:** Regardless of the method used, arrays decay to pointers when passed to functions, losing their size information.


### Example: Code to Illustrate Different Ways to Pass Arrays to a Function

```cpp
#include <iostream>
using namespace std;

// Passing array as a sized array argument
void printArraySized(int arr[3], int n) {
    cout << "Array as Sized Array Argument: ";
    for (int i = 0; i < n; ++i) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

// Passing array as an unsized array argument
void printArrayUnsized(int arr[], int n) {
    cout << "Array as Unsized Array Argument: ";
    for (int i = 0; i < n; ++i) {
        cout << *(arr + i) << " ";
    }
    cout << endl;
}

// Passing array as a pointer argument
void printArrayPointer(int* ptr, int n) {
    cout << "Array as Pointer Argument: ";
    for (int i = 0; i < n; ++i) {
        cout << ptr[i] << " ";
    }
    cout << endl;
}

// Driver code
int main() {
    int arr[] = {10, 20, 30};

    // Call function printArray and pass array and its size to it.
    printArraySized(arr, 3);
    printArrayUnsized(arr, 3);
    printArrayPointer(arr, 3);

    return 0;
}
```

**Explanation**

1. **Including the iostream library**
    - This line includes the input-output stream library, which allows the program to use `std::cout` for printing to the console.

2. **Passing array as a sized array argument**
    - This function takes an array with a specified size (`int arr[3]`) and prints its elements.
    - Even though the array size is specified, the function still needs the size `n` to control the loop for printing elements.
    - In this case, the size `n` must not exceed the specified size of the array (`3`).

3. **Passing array as an unsized array argument**
    - This function takes an array without specifying its size (`int arr[]`).
    - The function uses pointer arithmetic to access array elements (`*(arr + i)`).

4. **Passing array as a pointer argument**
    - This function takes a pointer to the array (`int* ptr`).
    - Array names decay to pointers when passed to functions, so this method is effectively the same as passing an array.

5. **Main function**
    - An array `arr` with three integers is declared and initialized.
    - The three functions are called, each demonstrating a different way of passing the array and printing its elements.

 **Output**

The output of the program is:
```cpp
Array as Sized Array Argument: 10 20 30 
Array as Unsized Array Argument: 10 20 30 
Array as Pointer Argument: 10 20 30 
```

Each function prints the elements of the array in the same order, showing that all three methods of passing arrays work similarly.

## How to Return an Array from a Function in C++

In C++, you cannot return an array directly from a function. Instead, you can return a pointer to a dynamically allocated array. Here's an example:

```cpp
int* createArray(int size) {
    int* arr = new int[size]; // dynamically allocate array
    for(int i = 0; i < size; ++i) {
        arr[i] = i * 2;
    }
    return arr;
}

int main() {
    int size = 5;
    int* myArray = createArray(size);
    for(int i = 0; i < size; ++i) {
        std::cout << myArray[i] << " ";
    }
    delete[] myArray; // don't forget to free the allocated memory
    return 0;
}
```

**Detailed Explanation**

1. **Function to create an array**
    - This function dynamically allocates an array of integers with a given size.
    - The `new` operator is used to allocate memory on the heap.
    - A `for` loop initializes each element of the array to `i * 2`.
    - The function returns a pointer to the first element of the array.

2. **Main function**
    - The size of the array to be created is set to 5.
    - The `createArray` function is called to create the array, and the returned pointer is stored in `myArray`.
    - A `for` loop prints each element of the dynamically allocated array.
    - `delete[] myArray` frees the allocated memory to prevent memory leaks.

 **Output**

The output of the program is:
```cpp
0 2 4 6 8 
```

The elements of the dynamically allocated array are printed, showing the initialized values.

