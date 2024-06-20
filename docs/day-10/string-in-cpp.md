---
sidebar_position: 2
title: "String in C++"
description: "In this tutorial, we will learn about Strings in C++ programming with the help of examples. A string is a sequence of characters that is used to represent text. In C++, strings are represented using the `std::string` class. The `std::string` class provides various member functions to manipulate strings."
sidebar_label: "String"
slug: string-in-cpp
---

## What is a String in C++?
A string in C++ is a sequence of characters. It is used to store text, such as names, addresses, and phone numbers. Strings are declared using the string data type.

## Explain the Syntax of a String in C++.

```cpp

std::string myString = "Hello, world!";

```
The data type of the variable is specified by using the std::string keyword. The std::string class is part of the standard library in C++.


## How to Declare and Define a String in C++?

## Declaration
There are two ways to declare a string variable in C++:

- Using the string keyword: This is the most common way to declare a string variable. The syntax is as follows:
```cpp
std::string myString = "Hello, world!";
```

- Using character arrays: This is an older way to declare a string variable. The syntax is as follows:
```cpp
char myString[] = "Hello, world!";
```

## Defination
Using String keyword:

```cpp

string myString = "Hello, World!";

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
We can concatenate strings as:
```cpp

std::string str1 = "Hello";
std::string str2 = "World";
std::string result = str1 + str2;

```

### How to Compare Strings in C++?
We can compare strings as:
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
