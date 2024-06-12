---
sidebar_position: 1
title: "Pointers in C++"
description: "In this tutorial, we will learn about Pointers in C++ programming with the help of examples. A pointer is a variable that stores the memory address of another variable. Pointers are used to store the address of variables, arrays, and functions in C++."
sidebar_label: "Pointers"
slug: pointers-in-cpp
---


# Pointers in C++
![Multidimentional-array](../../static/img/day-11/pointers.png)

## 1. What is a Pointer in C++?

A pointer in C++ is a variable that stores the memory address of another variable. Pointers provide a way to indirectly access and manipulate the variable's value. They are fundamental to C++ programming, enabling dynamic memory allocation, the creation of complex data structures (like linked lists, trees, and graphs), and efficient passing of large data structures to functions.

### Key Points:
- **Memory Address:** Pointers store addresses of variables.
- **Dynamic Memory:** Enables dynamic allocation and deallocation of memory using operators like `new` and `delete`.
- **Data Structures:** Useful for implementing data structures such as arrays, linked lists, and trees.
- **Function Arguments:** Allow passing large structures and arrays efficiently by reference rather than by value.

## 2. Syntax of a Pointer in C++

The syntax for declaring a pointer involves specifying the data type it points to, followed by an asterisk (`*`), and then the pointer's name. Here is the general form:

```cpp
type* pointer_name;
```

Example:

```cpp
int* ptr;
double* dptr;
char* cptr;
```

## 3. How to Declare and Define a Pointer in C++

### Declaration:
A pointer is declared by specifying the type of data it will point to, followed by an asterisk (`*`) and the pointer's name.

```cpp
int* ptr; // Declaration of a pointer to an integer
```

### Definition (Initialization):
To initialize a pointer, assign it the address of a variable using the address-of operator (`&`).

```cpp
int var = 10;
int* ptr = &var; // ptr now holds the address of var
```

Example:

```cpp
#include <iostream>

int main() {
    int var = 10;
    int* ptr = &var;
    
    std::cout << "Value of var: " << var << std::endl;
    std::cout << "Address of var: " << &var << std::endl;
    std::cout << "Pointer ptr value (address of var): " << ptr << std::endl;
    std::cout << "Value at address ptr: " << *ptr << std::endl;
    
    return 0;
}
```

## 4. How to Access the Value of a Pointer in C++

The value stored at the memory address pointed to by a pointer can be accessed using the dereference operator (`*`).

```cpp
#include <iostream>

int main() {
    int var = 10;
    int* ptr = &var;
    int value = *ptr; // Dereferencing the pointer to get the value of var
    
    std::cout << "Value at address ptr: " << *ptr << std::endl;
    std::cout << "Value stored in var: " << value << std::endl;
    
    return 0;
}
```

## 5. How to Access the Address of a Pointer in C++

To access the address stored in a pointer, you simply use the pointer variable itself.

```cpp
#include <iostream>

int main() {
    int var = 10;
    int* ptr = &var;
    
    std::cout << "Address stored in ptr: " << ptr << std::endl;
    
    return 0;
}
```

## 6. How to Declare and Define a Pointer to a Pointer in C++

A pointer to a pointer stores the address of another pointer. This can be declared by adding another asterisk (`*`).

```cpp
int var = 10;
int* ptr = &var;
int** ptr_to_ptr = &ptr; // Pointer to a pointer

#include <iostream>

int main() {
    int var = 10;
    int* ptr = &var;
    int** ptr_to_ptr = &ptr;
    
    std::cout << "Value of var: " << var << std::endl;
    std::cout << "Value at ptr (address of var): " << *ptr << std::endl;
    std::cout << "Value at ptr_to_ptr (address of ptr): " << **ptr_to_ptr << std::endl;
    
    return 0;
}
```

## 7. How to Declare and Define a Pointer to an Array in C++

A pointer can point to the first element of an array. The array name itself can be used as a pointer to the first element.

```cpp
int arr[5] = {1, 2, 3, 4, 5};
int* ptr = arr; // or int* ptr = &arr[0];

#include <iostream>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int* ptr = arr;
    
    for(int i = 0; i < 5; i++) {
        std::cout << "Value at ptr + " << i << ": " << *(ptr + i) << std::endl;
    }
    
    return 0;
}
```

## 8. How to Declare and Define a Pointer to a Function in C++

A function pointer can be declared by specifying the function's return type and parameter types, followed by an asterisk and the pointer's name.

```cpp
// Function declaration
int add(int, int);

// Function pointer declaration and definition
int (*func_ptr)(int, int) = &add;

// Function definition
int add(int a, int b) {
    return a + b;
}

#include <iostream>

int main() {
    // Function pointer usage
    int result = func_ptr(5, 3);
    
    std::cout << "Result of function call: " << result << std::endl;
    
    return 0;
}
```

## 9. How to Pass a Pointer to a Function in C++

You can pass a pointer to a function by specifying the pointer type in the function's parameter list. This allows the function to modify the variable pointed to by the pointer.

```cpp
#include <iostream>

void increment(int* ptr) {
    (*ptr)++;
}

int main() {
    int var = 10;
    increment(&var); // Passing the address of var
    std::cout << "Value of var after increment: " << var << std::endl;
    return 0;
}
```

## 10. How to Return a Pointer from a Function in C++

To return a pointer from a function, specify the pointer type as the function's return type. This is often used when dynamically allocating memory within a function.

```cpp
int* createArray(int size) {
    int* arr = new int[size];
    for(int i = 0; i < size; i++) {
        arr[i] = i * 10;
    }
    return arr;
}

#include <iostream>

int main() {
    int* myArray = createArray(5);
    for(int i = 0; i < 5; i++) {
        std::cout << "myArray[" << i << "] = " << myArray[i] << std::endl;
    }
    delete[] myArray; // Remember to free the allocated memory
    return 0;
}
```

By understanding and using these concepts, you can effectively manage memory and improve the efficiency of your C++ programs.

