---

sidebar_position: 3
title: "Pass By Value in C++"
description: "In this tutorial, we will learn about Pass By Value in C++ programming with the help of examples. Pass By Value means passing a copy of the actual parameter to the function. Changes made to the parameter inside the function do not affect the original variable."
sidebar_label: "Pass By Value"
slug: pass-by-value-in-cpp
---

Before going to Pass By Reference, one should properly learn about Pass By Value. So here we go...

## 1. What is Pass By Value in C++?

Pass By Value in C++ means passing a copy of the actual parameter to a function. The function operates on the copy, and any modifications to the parameter inside the function do not affect the original variable. This method ensures that the original data remains unchanged.

![Passing by Value in C++](../../static/img/day-11/reference-in-cpp.png)

## 2. Explain the Syntax of Pass By Value in C++.

The syntax for passing by value is straightforward. You simply pass the variable as an argument to the function. The function definition includes the parameter type and name without any special symbols.

**Syntax:**

```cpp
void functionName(dataType parameter);
```

## 3. How to Use Pass By Value in C++?

**Using Pass By Value**
When you use pass by value, you call the function with the actual parameter, and a copy of it is passed to the function.

```cpp
#include <iostream>

void increment(int num) {
    num++;
    std::cout << "Inside function: " << num << std::endl; // Outputs: 6
}

int main() {
    int value = 5;
    increment(value);
    std::cout << "Outside function: " << value << std::endl; // Outputs: 5
    return 0;
}
```

### 4. C++ Pass By Value Example
Here is a simple example demonstrating pass by value:

**Example:**

```cpp
#include <iostream>

void multiplyByTwo(int num) {
    num = num * 2;
    std::cout << "Inside function: " << num << std::endl; // Outputs: 20
}

int main() {
    int original = 10;
    multiplyByTwo(original);

    std::cout << "Outside function: " << original << std::endl; // Outputs: 10
    return 0;
}
```

### 5. Advantages of Pass By Value

- **Data Safety**: Since the function works on a copy, the original data remains unchanged.
- **Simplicity**: Easy to understand and implement, especially for small data types.


### 6. Disadvantages of Pass By Value

- **Performance**: For large data types, copying can be inefficient and consume more memory.
- **Limited Modifiability**: The function cannot modify the original variable.

### 7. When to Use Pass By Value?

- **Small Data Types**: Use pass by value for small data types like integers, characters, and small structures.
- **Read-Only Operations**: When you do not need to modify the original variable and only need to read its value.

**Example of Pass By Value with Small Data Types:**

```cpp
#include <iostream>

void display(char ch) {
    std::cout << "Character: " << ch << std::endl;
}

int main() {
    char letter = 'A';
    display(letter);

    return 0;
}
```

**Example of Pass By Value with Structures:**

```cpp
#include <iostream>

struct Point {
    int x, y;
};

void displayPoint(Point p) {
    std::cout << "Point: (" << p.x << ", " << p.y << ")" << std::endl;
}

int main() {
    Point pt = {10, 20};
    displayPoint(pt);

    return 0;
}
```

By using pass by value, you ensure **data integrity** while performing read-only operations or working with small data types. However, be mindful of performance implications when dealing with larger objects.

## 8. Conclusion

Pass by value is a fundamental concept in C++ programming, providing a straightforward way to pass data to functions. While it has its advantages, such as **data safety** and **simplicity**, it also has performance drawbacks for large data types. Understanding when and how to use pass by value effectively is crucial for writing efficient and maintainable C++ code.

By understanding the differences between pass by value and other parameter passing methods, such as pass by reference, you can make informed decisions about the best approach to use in your C++ programming.