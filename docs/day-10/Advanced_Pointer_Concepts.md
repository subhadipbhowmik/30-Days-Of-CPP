# Advanced Pointer Concepts in C++

## 1. Pointer to Pointer (Double Pointers)

A pointer to a pointer (double pointer) holds the address of another pointer, which in turn holds the address of a variable. This allows for multiple levels of indirection.

**Usage**:
- Useful in dynamic memory allocation for multidimensional arrays.
- Used in functions to modify the original pointer.

**Example**:
```cpp
#include <iostream>

int main() {
    int a = 10;
    int* ptr = &a;     // Pointer to an integer
    int** ptr2 = &ptr; // Pointer to a pointer

    std::cout << "Value of a: " << a << std::endl;           // Outputs 10
    std::cout << "Value pointed to by ptr: " << *ptr << std::endl; // Outputs 10
    std::cout << "Value pointed to by ptr2: " << **ptr2 << std::endl; // Outputs 10

    return 0;
}
```


## 2. Const Pointers and Pointers to Const

## Const Pointers
A const pointer is a pointer whose address cannot be changed after it has been initialized. This means the pointer will always point to the same memory location.

**Syntax** :
int* const ptr = &a;

**Usage**:

Use when you want the pointer to always point to the same address.
**Example:**

```cpp
Copy code
int a = 10;
int b = 20;
int* const ptr = &a; // ptr is a const pointer to an integer
// ptr = &b; // Error: cannot change the address ptr points to
*ptr = 15; // Allowed: can change the value at the address
```
## Pointers to Const
A pointer to const is a pointer that points to a constant value. This means the value being pointed to cannot be changed through the pointer.


**Syntax**:
const int* ptr = &a;

**Usage**:

Use when the data being pointed to should not be modified through the pointer.
**Example**:

```cpp
Copy code
int a = 10;
const int* ptr = &a; // ptr is a pointer to a const integer
// *ptr = 15; // Error: cannot change the value at the address
ptr = &b; // Allowed: can change the address ptr points to
```

## Const Pointer to Const
Combines both concepts: the pointer itself cannot change, and the value it points to cannot be changed.

**Syntax**:
const int* const ptr = &a;

**Example**:

```cpp
Copy code
const int a = 10;
const int* const ptr = &a; // ptr is a const pointer to a const integer
// *ptr = 15; // Error: cannot change the value at the address
// ptr = &b; // Error: cannot change the address ptr points to
```
