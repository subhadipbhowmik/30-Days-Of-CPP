---
sidebar_position: 1
title: "Deep Copying and Shallow Copying in C++"
description: "Understand the concepts of deep copying and shallow copying in C++, and learn how to implement them effectively."
sidebar_label: "Deep and Shallow Copying"
slug: deep-and-shallow-copying-in-cpp
---

# Deep Copying and Shallow Copying in C++

Deep copying and shallow copying are important concepts in C++ that deal with the duplication of objects. Understanding these concepts is crucial for managing resources, especially when dealing with dynamic memory allocation.

## Introduction to Copying Objects
Copying objects in C++ involves creating a new instance of a class with the same values as an existing instance. There are two primary types of copying:
- **Shallow Copying:** Copies all member field values. If the field is a pointer, only the pointer is copied, not the data it points to.
- **Deep Copying:** Copies all fields and duplicates dynamically allocated memory pointed to by the fields, creating independent copies of the data.
<img src="https://github.com/Salma-Mamdoh/30-Days-Of-CPP/blob/main/static/img/day-20/Day-20-deep_copying_vs_Shallow_Copying.jpg" alt="C++ deep copying and shallow copying">
## Shallow Copying
### Definition
Shallow copying duplicates an object's member fields, including pointers, but it does not copy the data pointed to by those pointers. This can lead to issues when dealing with dynamic memory allocation.

### Example and Explanation
```cpp
#include <iostream>
using namespace std;

class Shallow {
public:
    int* data;
    
    Shallow(int value) {
        data = new int(value);
    }

    // Shallow copy constructor
    Shallow(const Shallow& source) : data(source.data) {
        cout << "Shallow copy constructor - shallow copy created." << endl;
    }

    void displayData() {
        cout << "Data: " << *data << endl;
    }

    ~Shallow() {
        delete data;
        cout << "Destructor freeing data." << endl;
    }
};

int main() {
    Shallow obj1(42);
    Shallow obj2 = obj1; // Shallow copy

    obj1.displayData();
    obj2.displayData();

    return 0;
}
```
In this example, both `obj1` and `obj2` point to the same memory location. When `obj2` is destructed, it will free the memory allocated to `data`, leading to a double-free error when `obj1` is destructed.

### Issues with Shallow Copying
- **Double-Free Error:** Multiple objects trying to free the same memory.
- **Dangling Pointer:** One object may delete memory, leaving the other object with a pointer to non-existent memory.

## Deep Copying
### Definition
Deep copying involves creating a new copy of the dynamically allocated memory pointed to by the object's fields. Each object has its own copy of the data, preventing the issues associated with shallow copying.

### Example and Explanation
```cpp
#include <iostream>
using namespace std;

class Deep {
public:
    int* data;
    
    Deep(int value) {
        data = new int(value);
    }

    // Deep copy constructor
    Deep(const Deep& source) {
        data = new int(*source.data);
        cout << "Deep copy constructor - deep copy created." << endl;
    }

    void displayData() {
        cout << "Data: " << *data << endl;
    }

    ~Deep() {
        delete data;
        cout << "Destructor freeing data." << endl;
    }
};

int main() {
    Deep obj1(42);
    Deep obj2 = obj1; // Deep copy

    obj1.displayData();
    obj2.displayData();

    return 0;
}
```
In this example, `obj1` and `obj2` have their own separate copies of `data`. Each object manages its own memory, preventing the issues of double-free and dangling pointers.

## Implementing Deep Copy and Shallow Copy in C++
### Shallow Copy Implementation
Shallow copies use the default copy constructor provided by the compiler. This constructor copies the member field values directly.

### Deep Copy Implementation
To implement a deep copy, you need to define a custom copy constructor and assignment operator.
```cpp
class Deep {
public:
    int* data;
    
    Deep(int value) {
        data = new int(value);
    }

    // Deep copy constructor
    Deep(const Deep& source) {
        data = new int(*source.data);
    }

    // Deep copy assignment operator
    Deep& operator=(const Deep& source) {
        if (this == &source) {
            return *this; // self-assignment check
        }
        delete data; // free existing resource
        data = new int(*source.data); // allocate new resource
        return *this;
    }

    ~Deep() {
        delete data;
    }
};
```

## Use Cases and Best Practices
### Shallow Copying
- Suitable for objects with no pointers or dynamic memory.
- Useful when performance is critical and data sharing is acceptable.

### Deep Copying
- Necessary for objects with pointers to dynamically allocated memory.
- Prevents resource management issues like double-free and dangling pointers.

### Best Practices
- Use shallow copying for simple objects and deep copying for complex objects.
- Always provide custom copy constructors and assignment operators for deep copying.
- Use smart pointers (e.g., `std::shared_ptr`, `std::unique_ptr`) to manage dynamic memory safely.

## Conclusion
Deep copying and shallow copying are fundamental concepts in C++ for managing object duplication and memory allocation. Understanding these concepts helps in writing robust and efficient C++ code, especially when dealing with dynamic memory. 

