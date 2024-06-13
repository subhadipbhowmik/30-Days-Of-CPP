---
sidebar_position: 2
title: "String in C++"
description: "In this tutorial, we will learn about Strings in C++ programming with the help of examples. A string is a sequence of characters that is used to represent text. In C++, strings are represented using the `std::string` class. The `std::string` class provides various member functions to manipulate strings."
sidebar_label: "String"
slug: string-in-cpp
---

### What is a String in C++?
In C++, a string is a sequence of characters stored in contiguous memory locations. It's a data type used to represent text rather than numerical values.

### Explain the Syntax of a String in C++.
The syntax for declaring a string in C++ is
```cpp

std::string myString;

```
Here, std::string is the data type for the string, and myString is the name of the string variable.

![String in CPP](../../static/img/day-10/string-in-cpp.png)


### How to Declare and Define a String in C++?

## Declaration
```cpp

std::string myString;

```
## Defination
```cpp

myString = "Hello, World!";

```

### C++ String Example

```cpp

#include <iostream>
#include <string>

int main() {
    std::string greeting = "Hello, World!";
    std::cout << greeting << std::endl;
    return 0;
}

```

### How to Input and Output a String in C++?

## Input
```cpp

std::string userInput;
std::cin >> userInput;

```
## Output
```cpp

std::cout << userInput << std::endl;

```

### How to Concatenate Strings in C++?
```cpp

std::string str1 = "Hello";
std::string str2 = "World";
std::string result = str1 + str2;

```

### How to Compare Strings in C++?

```cpp

std::string str1 = "Hello";
std::string str2 = "World";
if (str1 == str2) {
    // Strings are equal
} else {
    // Strings are not equal
}

```

### How to Find the Length of a String in C++?

```cpp

std::string myString = "Hello";
int length = myString.length();

```

### How to Access Characters in a String in C++?
```cpp

std::string myString = "Hello";
char firstChar = myString[0];

```

### How to Modify a String in C++?

```cpp

std::string myString = "Hello";
myString[0] = 'J'; // Changes 'H' to 'J'

```

### How to Convert a String to Uppercase and Lowercase in C++?

```cpp

std::string myString = "Hello";
std::transform(myString.begin(), myString.end(), myString.begin(), ::toupper);
// To lowercase: std::transform(myString.begin(), myString.end(), myString.begin(), ::tolower);

```

### How to Convert a String to Integer in C++?
```cpp

std::string numString = "123";
int num = std::stoi(numString);

```

### How to Convert an Integer to String in C++?
```cpp

int num = 123;
std::string numString = std::to_string(num);

```

### How to Convert a String to Character Array in C++?

```cpp

std::string myString = "Hello";
const char* charArray = myString.c_str();

```

###  How to Convert a Character Array to String in C++?

```cpp

const char* charArray = "Hello";
std::string myString(charArray);

```

### How to Convert a String to C-Style String in C++?

```cpp

std::string myString = "Hello";
const char* cStyleString = myString.c_str();

```

### How to Convert a C-Style String to String in C++?

```cpp
const char* cStyleString = "Hello";
std::string myString(cStyleString);

```

### How to Split a String in C++?
To split a string using a delimiter, we can use std::getline combined with std::stringstream to extract all the tokens from the string separated by a specified delimiter, and keep storing the token in a vector of string.
