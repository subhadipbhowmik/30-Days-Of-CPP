---
sidebar_position: 3
title: "All About String Class"
description: "In this tutorial, we will learn about the String Class in C++ programming with the help of examples. A string is a sequence of characters that is used to represent text. In C++, strings are represented using the `std::string` class. The `std::string` class provides various member functions to manipulate strings."
sidebar_label: "String Class"
slug: string-class-in-cpp
---

### What is a String Class in C++?
The string class in C++ is a class that represents a sequence of characters. It is part of the standard library and is declared in the header file <string>. The string class provides a number of functions for manipulating strings, such as concatenation, finding and replacing characters, and splitting strings into tokens.

![Function in CPP](../../static/img/day-10/string-class.png)

### Explain the Syntax of a String Class in C++.
The syntax for declaring a string object in C++ is:

```cpp

#include <string>

std::string myString;

```
Here, std::string is the string class, and myString is an instance of the class.

### How to Declare and Define a String Class in C++?
To declare and define a string class in C++, you can simply create an object of the std::string class. 
## Here's how:
```cpp

#include <string>

std::string myString = "Hello, World!";

```

### C++ String Class Example.
Here's a basic example demonstrating the usage of the C++ string class:
```cpp

#include <iostream>
#include <string>

int main() {
    std::string greeting = "Hello, ";
    std::string name = "Tina";
    std::cout << greeting + name << std::endl;
    return 0;
}

```

### How to Input and Output a String Class in C++?

You can use the standard input/output operations to work with string classes in C++.
## Here's an example:

```cpp

#include <iostream>
#include <string>

int main() {
    std::string inputString;
    std::cout << "Enter a string: ";
    std::cin >> inputString;
    std::cout << "You entered: " << inputString << std::endl;
    return 0;
}

```

### How to Concatenate String Classes in C++?

In C++, you can concatenate string classes using the + operator or the append() function.
## Examples of both methods:
```cpp

#include <iostream>
#include <string>

int main() {
    std::string firstString = "Hello, ";
    std::string secondString = "World!";
    
    // Using the + operator
    std::string result1 = firstString + secondString;
    std::cout << "Concatenated string using + operator: " << result1 << std::endl;
    
    // Using the append() function
    firstString.append(secondString);
    std::cout << "Concatenated string using append(): " << firstString << std::endl;
    
    return 0;
}

```

### What is the std::string class in C++?

The std::string class provides a number of member functions that can be used to manipulate strings, such as:

length(): - Returns the length of the string.
size(): - Returns the number of characters in the string.
capacity(): - Returns the number of characters that the string can hold without reallocating memory.
at(): - Returns the character at a specified index in the string.
front(): - Returns the first character in the string.
back(): - Returns the last character in the string.
append(): - Appends a character or string to the end of the string.
insert(): - Inserts a character or string at a specified index in the string.
erase(): - Erases a character or string from the string.
find(): - Finds the first occurrence of a character or string in the string.
replace(): - Replaces a character or string in the string with another character or string.
substr(): - Returns a substring of the string.

### How do you find the length of a std::string?

There are two ways to find the length of a std::string in C++:

- Using the length() member function: The length() member function returns the number of characters in the string. The syntax is:

```cpp
string.length();
```

- Using the size() member function: The size() member function returns the number of characters in the string, including the null terminator. The syntax is:

```cpp
string.size();
```

### How do you compare two std::string objects in C++?

There are three ways to compare two std::string objects in C++:

- Using the compare() function:

```cpp
int compare(const std::string& str) const;
```

- using relational operators:

```cpp
std::string str1 = "Hello";
std::string str2 = "World";

if (str1 == str2) {
  std::cout << "str1 is equal to str2" << std::endl;
} else if (str1 != str2) {
  std::cout << "str1 is not equal to str2" << std::endl;
} else if (str1 < str2) {
  std::cout << "str1 is less than str2" << std::endl;
} else if (str1 > str2) {
  std::cout << "str1 is greater than str2" << std::endl;
} else if (str1 <= str2) {
  std::cout << "str1 is less than or equal to str2" << std::endl;
} else if (str1 >= str2) {
  std::cout << "str1 is greater than or equal to str2" << std::endl;
}
```

- Using the strcmp() function:

```cpp
std::string str1 = "Hello";
std::string str2 = "World";

int result = strcmp(str1.c_str(), str2.c_str());

if (result < 0) {
  std::cout << "str1 is less than str2" << std::endl;
} else if (result > 0) {
  std::cout << "str1 is greater than str2" << std::endl;
} else {
  std::cout << "str1 is equal to str2" << std::endl;
}
```

Which method you choose to compare two std::string objects depends on your specific needs. The compare() function is the most versatile method, as it allows you to compare two strings