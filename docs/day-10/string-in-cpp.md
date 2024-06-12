---
sidebar_position: 2
title: "String in C++"
description: "In this tutorial, we will learn about Strings in C++ programming with the help of examples. A string is a sequence of characters that is used to represent text. In C++, strings are represented using the `std::string` class. The `std::string` class provides various member functions to manipulate strings."
sidebar_label: "String"
slug: string-in-cpp
---

### What are Strings in C++?
- In C++, std::string is a pre-defined data type used to store texts or a sequence of multiple characters.
- There are two ways to define a string :-
  1. C-style strings (character arrays)
  2. string class

### 1. C-Style strings
- In this method, we use an array of characters to make a string. These arrays are terminated by a null character \0.
- For example, these are four ways to create the same string.
```cpp
// C++ Program to demonstrate C-style string declaration
#include <iostream>
using namespace std;

int main()
{

	char s1[] = { 'a', 'b', 'c', '\0' };
	char s2[4] = { 'a', 'b', 'c', '\0' };
	char s3[4] = "abc";
	char s4[] = "abc";

	cout << "s1 = " << s1 << endl;
	cout << "s2 = " << s2 << endl;
	cout << "s3 = " << s3 << endl;
	cout << "s4 = " << s4 << endl;

	return 0;
}
```
Output
```
s1 = abc
s2 = abc
s3 = abc
s4 = abc
```
### 2. Using string keyword
- This provides many advantages over C-style strings like dynamic size and member functions.
- It is more convenient to define a string with the string keyword instead of using the array keyword because it is easy to write and understand.
```cpp
#include <iostream>
using namespace std;
int main() {
    string str = "30 Days of CPP";
    cout << str << endl;
    return 0;
}
```
Output
```
30 Days of CPP
```
### String Functions in C++
1. length(): This function returns the length of the string.
2. swap(): This function is used to swap the values of 2 strings.
3. size(): Used to find the size of string
4. resize(): This function is used to resize the length of the string up to the given number of characters.
5. find(): Used to find the string which is passed in parameters
6. push_back():	This function is used to push the passed character at the end of the string
7. pop_back(): This function is used to pop the last character from the string
8. clear(): This function is used to remove all the elements of the string.
9. strncmp(): This function compares at most the first num bytes of both passed strings.
10. strncpy(): This function is similar to strcpy() function, except that at most n bytes of src are copied
11. strrchr(): This function locates the last occurrence of a character in the string.
12. strcat(): This function appends a copy of the source string to the end of the destination string
13. find(): This function is used to search for a certain substring inside a string and returns the position of the first character of the substring.
14. replace(): This function is used to replace each element in the range [first, last) that is equal to old value with new value.
15. substr(): This function is used to create a substring from a given string.
16. compare(): This function is used to compare two strings and returns the result in the form of an integer.
17. erase(): This function is used to remove a certain part of a string.

### Practice Questions

1. What is a String in C++?
2. Explain the Syntax of a String in C++.
3. How to Declare and Define a String in C++?
4. C++ String Example
5. How to Input and Output a String in C++?
6. How to Concatenate Strings in C++?
7. How to Compare Strings in C++?
8. How to Find the Length of a String in C++?
9. How to Access Characters in a String in C++?
10. How to Modify a String in C++?
11. How to Convert a String to Uppercase and Lowercase in C++?
12. How to Convert a String to Integer in C++?
13. How to Convert an Integer to String in C++?
14. How to Convert a String to Character Array in C++?
15. How to Convert a Character Array to String in C++?
16. How to Convert a String to C-Style String in C++?
17. How to Convert a C-Style String to String in C++?
18. How to Split a String in C++?

IMAGE FILE:
![String in CPP](../../static/img/day-10/string-in-cpp.png)
