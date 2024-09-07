---
sidebar_position: 2
title: "Types Of pointers"
description: "In this tutorial, we will learn about different types of Pointers in C++ programming with the help of examples."
sidebar_label: "Types Of pointers"
slug: Types_Of_Pointer
---

## Initialization of Pointers in C++?
Initializing pointers in C++ is an essential step to ensure that they point to a valid memory location before use. 

### Example:
```cpp
int a = 10;
int* ptr = &a; // ptr now holds the address of variable a
```
## Dereferencing of Pointers in C++?
Dereferencing a pointer means accessing the value stored at the memory address the pointer holds. This is done using the asterisk * operator:


### Example:
```cpp
int a = 10;
int* ptr = &a;
cout << *ptr; // Outputs the value of a, which is 10

```


## Null Pointers in C++?
A pointer that is not initialized or that you explicitly want to point to nothing can be set to nullptr (in C++11 and later) or NULL:


### Example:
```cpp
int* ptr = nullptr;
```

## Pointer Arithmetic in C++?
Pointers can be incremented or decremented to point to other memory locations. This is commonly used with arrays.


### Example:
```cpp
int arr[] = {10, 20, 30};
int* ptr = arr; // Points to the first element
ptr++;          // Now points to the second element
cout << *ptr;   // Outputs 20

```


## Pointers and Arrays in C++?
The name of an array acts as a pointer to the first element of the array.


### Example:
```cpp
int arr[] = {10, 20, 30};
int* ptr = arr;  // Equivalent to int* ptr = &arr[0];
cout << *(ptr + 1); // Outputs 20

```


## Pointers and Functions in C++?
Pointers can be used to pass variables to functions by reference, allowing the function to modify the original variable.


### Example:
```cpp
void increment(int* ptr) {
    (*ptr)++;
}

int main() {
    int a = 10;
    increment(&a);
    cout << a; // Outputs 11
    return 0;
}

```

## Dynamic Memory Allocation in C++?
Pointers are essential for dynamic memory allocation using new and delete.


### Example:
```cpp
int* ptr = new int;   // Allocate memory for an integer
*ptr = 20;
delete ptr;          // Free the allocated memory

int* arr = new int[10]; // Allocate memory for an array of 10 integers
delete[] arr;          // Free the allocated memory

```


## Pointers to Pointers in C++?
A pointer can point to another pointer, allowing for multi-level indirection.


### Example:
```cpp
int a = 10;
int* ptr = &a;
int** ptr2 = &ptr;
cout << **ptr2; // Outputs 10
```


## Function Pointers in C++?
Function pointers store the address of a function and can be used to call functions dynamically.


### Example:
```cpp

void myFunction(int a) {
    cout << a;
}

int main() {
    void (*funcPtr)(int) = myFunction;
    funcPtr(10); // Calls myFunction(10)
    return 0;
}

```


## Smart Pointers in C++?
Modern C++ provides smart pointers (unique_ptr, shared_ptr, weak_ptr) to manage dynamically allocated memory automatically.


### Example:
```cpp
#include <memory>

std::unique_ptr<int> ptr = std::make_unique<int>(10);
std::shared_ptr<int> sharedPtr = std::make_shared<int>(20);
std::weak_ptr<int> weakPtr = sharedPtr;

```

# Summary Table

| Pointer Type                | Description                           | Usage                                      |
|-----------------------------|---------------------------------------|--------------------------------------------|
| Null Pointer                | Points to `nullptr`                   | Indicates no valid memory location         |
| Void Pointer                | Holds address of any data type        | Generic pointer usage                      |
| Wild Pointer                | Uninitialized pointer                 | Avoid using, can cause undefined behavior  |
| Dangling Pointer            | Points to deallocated memory          | Set to `nullptr` after deleting memory     |
| Constant Pointer            | Cannot change the address it holds    | Always point to the same address           |
| Pointer to Constant         | Points to a constant value            | Data pointed to should not be modified     |
| Constant Pointer to Const   | Both a constant pointer and points to a constant | Neither address nor value should be changed |
| Function Pointer            | Points to a function                  | Callbacks and function tables              |
| Null Pointer Constant       | Defined by the macro `NULL`           | Use `nullptr` in modern C++                |
| Smart Pointers              | Provide automatic memory management   | Safer and more efficient memory management |



## Key Points to Remember
- Always initialize pointers.
- Use nullptr instead of NULL in modern C++.
- Be cautious with pointer arithmetic and avoid accessing out-of-bounds memory.
- Use delete to free dynamically allocated memory to avoid memory leaks.
- Prefer smart pointers to raw pointers for automatic memory management.




