---
sidebar_position: 1
title: "Strings in C++"
description: "In this tutorial, we will learn about Strings in C++ programming with the help of examples. Strings are used to store and manipulate text in C++."
sidebar_label: "Strings in C++"
slug: Strings
---

# Strings in C++

This repository provides an explanation of strings in C++, along with examples of their usage.

## Table of Contents

- [Introduction](#introduction)
- [Creating Strings](#creating-strings)
- [String Operations](#string-operations)
- [String Functions](#string-functions)
- [String Manipulation](#string-manipulation)

## Introduction

Strings in C++ are used to store and manipulate sequences of characters. The standard library provides a `std::string` class to handle strings efficiently and intuitively.

## Creating Strings

Strings can be created and initialized in various ways in C++:

```cpp
#include <iostream>
#include <string>

int main() {
    // Using the string class
    std::string str1 = "Hello, World!";
    std::string str2("Hello, C++!");

    // Using the C-style string
    const char* cstr = "Hello, C-Style!";
    
    std::cout << str1 << std::endl;
    std::cout << str2 << std::endl;
    std::cout << cstr << std::endl;

    return 0;
}
```

## String Operations

#### Concatenation

Strings can be concatenated using the `+` operator:

``` cpp
#include <iostream>
#include <string>

int main() {
    std::string firstName = "John";
    std::string lastName = "Doe";
    std::string fullName = firstName + " " + lastName;

    std::cout << "Full Name: " << fullName << std::endl;

    return 0;
}
```

#### Accessing Characters

You can access individual characters in a string using the `[]` operator or the `at()` method:

``` cpp
#include <iostream>
#include <string>

int main() {
    std::string str = "Hello, World!";
    char ch1 = str[0]; // Accessing the first character
    char ch2 = str.at(1); // Accessing the second character

    std::cout << "First character: " << ch1 << std::endl;
    std::cout << "Second character: " << ch2 << std::endl;

    return 0;
}
```

## String Functions

#### Length

The `length()` or `size()` method returns the number of characters in the string:

``` cpp
#include <iostream>
#include <string>

int main() {
    std::string str = "Hello, World!";
    std::cout << "Length of string: " << str.length() << std::endl;
    std::cout << "Size of string: " << str.size() << std::endl;

    return 0;
}
```

#### Substring

The `substr()` method extracts a substring from the string:

``` cpp
#include <iostream>
#include <string>

int main() {
    std::string str = "Hello, World!";
    std::string subStr = str.substr(7, 5); // Extracts "World"

    std::cout << "Substring: " << subStr << std::endl;

    return 0;
}
```

#### Find

The `find()` method searches for a substring within the string:

``` cpp
#include <iostream>
#include <string>

int main() {
    std::string str = "Hello, World!";
    size_t pos = str.find("World");

    if (pos != std::string::npos) {
        std::cout << "'World' found at position: " << pos << std::endl;
    } else {
        std::cout << "'World' not found" << std::endl;
    }

    return 0;
}
```

## String Manipulation

#### Replace

The `replace()` method replaces part of the string with another string:

```cpp 
#include <iostream>
#include <string>

int main() {
    std::string str = "Hello, World!";
    str.replace(7, 5, "C++"); // Replaces "World" with "C++"

    std::cout << "Replaced string: " << str << std::endl;

    return 0;
}
```
#### Inserting

The `insert()` method inserts a string at a specified position:

```cpp

#include <iostream>
#include <string>

int main() {
    std::string str = "Hello, World!";
    str.insert(7, "beautiful "); // Inserts "beautiful " at position 7

    std::cout << "Inserted string: " << str << std::endl;

    return 0;
}
```

#### Erasing

The `erase()` method removes part of the string:

```cpp

#include <iostream>
#include <string>

int main() {
    std::string str = "Hello, World!";
    str.erase(5, 7); // Removes ", World"

    std::cout << "Erased string: " << str << std::endl;

    return 0;
}
```







