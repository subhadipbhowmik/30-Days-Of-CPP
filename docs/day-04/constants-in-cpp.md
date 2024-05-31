---
sidebar_position: 1
title: "Constants in C++"
description: "The C++ const keyword is used to specify that the value of a variable cannot be changed. In this tutorial, you will learn about C++ constants with the help of examples."
sidebar_label: "Constants"
slug: constants-in-cpp
---

## What is Constants in C++?
Constants in C++ are fixed values that cannot be altered during the execution of a program. They are used to define values that should remain unchanged throughout the program, providing a way to ensure data integrity and improving code readability.



IMAGE FILE:
![Constants in CPP](../../static/img/day-04/constants-in-cpp.png)

## How to Declare Constants in C++?
Constants can be declared in C++ using the `const` keyword. The `const` keyword is placed before the data type of the variable to indicate that its value will not change.

### Example:
```cpp
const int DAYS_IN_WEEK = 7;
const float PI = 3.14159;
```

## How to Define Constants in C++?
Constants are defined at the time of declaration by assigning them a fixed value. Once defined, their value cannot be modified.

### Example:
```cpp
const double GRAVITY = 9.81; // gravitational constant in m/s^2
const char NEWLINE = '\n'; // newline character
```

## How to Use Constants in C++?
Constants are used just like regular variables in expressions, function calls, and other places where a variable would be used. The key difference is that their value remains unchanged.

### Example

```cpp
const int MAX_USERS = 100;

int main() {
    int users = MAX_USERS;
    std::cout << "Maximum number of users: " << users << std::endl;
    return 0;
}
```

## What are the Advantages of Constants in C++?
- Readability: Constants make the code more readable by giving meaningful names to fixed values.
- Maintainability: Constants allow easy modification of values without changing multiple instances in the code.
- Safety: Constants prevent accidental modification of values that should remain fixed, reducing bugs and errors.
- Optimization: Constants can sometimes allow the compiler to optimize the code better since their values are known at compile time.

## Best Practices for Using Constants in C++:
- Use Descriptive Names: Choose names that clearly describe the value or purpose of the constant.
- All Uppercase with Underscores: Use all uppercase letters with underscores to separate words for naming constants, making them easily distinguishable from variables.
- Define Constants at the Top: Define all constants at the beginning of the file or in a dedicated section for easy reference and modification.
- Group Related Constants: Group related constants together to improve code organization.
- Use constexpr for Compile-Time Constants: Use constexpr when the constant value can be determined at compile time for better performance.

### Example:
```cpp
constexpr int ARRAY_SIZE = 50;
const double SPEED_OF_LIGHT = 299792458.0; // in meters per second
```

## Examples of Constants in C++

```cpp
#include <iostream>

const int MAX_AGE = 120;
constexpr double PLANCK_CONSTANT = 6.62607015e-34;

int main() {
    const char GRADE = 'A';
    const std::string SCHOOL_NAME = "Greenwood High";

    std::cout << "Max age allowed: " << MAX_AGE << std::endl;
    std::cout << "Planck constant: " << PLANCK_CONSTANT << std::endl;
    std::cout << "Grade: " << GRADE << std::endl;
    std::cout << "School name: " << SCHOOL_NAME << std::endl;

    return 0;
}
```

