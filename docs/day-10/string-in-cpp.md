---
sidebar_position: 2
title: "String in C++"
description: "In this tutorial, we will learn about Strings in C++ programming with the help of examples. A string is a sequence of characters that is used to represent text. In C++, strings are represented using the `std::string` class. The `std::string` class provides various member functions to manipulate strings."
sidebar_label: "String"
slug: string-in-cpp
---


## What is a String in C++?
   - In C++, a string is a sequence of characters stored in contiguous memory. Strings represent textual data and are essential in almost every C++ program. C++ provides the `std::string` class in the `<string>` header to work with strings efficiently.

## Explain the Syntax of a String in C++:
   - The syntax for declaring a string in C++ using the `std::string` class is:
     ```cpp
     std::string str;
     ```
   - This declares a string variable named `str`.

## How to Declare and Define a String in C++?
   - **Declaration**: Declaring a string variable without initializing it:
     ```cpp
     std::string str;
     ```
   - **Definition (with Initialization)**: Defining and initializing a string variable:
     ```cpp
     std::string str = "Hello, World!";
     ```

## C++ String Example:
   - Here's a simple example that demonstrates the usage of strings in C++:
     ```cpp
     #include <iostream>
     #include <string>

     int main() {
         std::string str = "Hello, World!";
         std::cout << str << std::endl;
         return 0;
     }
     ```
   - This program declares and initializes a string variable `str` and then prints it to the console.

   **Output**
   ```cpp
   Hello, World!
   ```


 ## How to Input and Output a String in C++?
   - Inputting a string from the user:
     ```cpp
        #include <iostream>
        #include <string>

        int main() {
        std::string str;
        std::cout << "Enter a string: ";
        std::cin >> str;
        std::cout << "You entered: " << str << std::endl;
        return 0;
   }

     ```
   - This code prompts the user to enter a string, reads it from the standard input, and then outputs it back to the console.

  **Output**
   ```cpp
  Enter a string: Hello
  You entered: Hello

   ```
## How to Concatenate Strings in C++?
   - Concatenating two strings:
     ```cpp
       #include <iostream>
       #include <string>

        int main() {
        std::string str1 = "Hello";
        std::string str2 = " World!";
        std::string result = str1 + str2;
        std::cout << result << std::endl;
        return 0;
       }

     ```
   - This code concatenates the strings `str1` and `str2` to form the string `result`.

  **Output**
   ```cpp
   Hello World!
   ```
## How to Compare Strings in C++?
   - Comparing two strings:
     ```cpp
     #include <iostream>
     #include <string>

      int main() {
      std::string str1 = "apple";
      std::string str2 = "banana";

        if (str1 == str2) {
        std::cout << "Strings are equal" << std::endl;
        } else {
        std::cout << "Strings are not equal" << std::endl;
       }

        return 0;
        }
     ```
   - This code compares the strings `str1` and `str2` for equality.

  **Output**
   ```cpp
   Strings are not equal
   ```
## How to Find the Length of a String in C++?
   - Finding the length of a string:
     ```cpp
     #include <iostream>
     #include <string>

     int main() {
      std::string str = "Hello";
       int length = str.length();
       std::cout << "Length: " << length << std::endl;
       return 0;
      }

     ```
   - This code finds the length of the string `str` using the `length()` member function of the `std::string` class.

  **Output**
   ```cpp
   length: 5
   ```
## How to Access Characters in a String in C++?
   - Accessing characters in a string:
     ```cpp
     std::string str = "Hello";
     char firstChar = str[0]; // 'H'
     ```
   - This code accesses the first character of the string `str` using array subscript notation.


## How to Modify a String in C++?
- Modifying a string:
      ```cpp
         std::string str = "Hello";
        str[0] = 'J'; // Change 'H' to 'J'
      ```
- This code modifies the first character of the string `str` from `'H'` to `'J'`.


## How to Convert a String to Uppercase and Lowercase in C++?
- Converting a string to uppercase:
      ```cpp
      std::string str = "Hello";
      std::transform(str.begin(), str.end(), str.begin(), ::toupper);
      ```
 - Converting a string to lowercase:
      ```cpp
      std::string str = "Hello";
      std::transform(str.begin(), str.end(), str.begin(), ::tolower);
      ```
    - These codes use the `std::transform` algorithm along with '::toupper' and `::tolower` functions from the `<cctype>` header to convert the string `str` to uppercase and lowercase, respectively.

## How to Convert a String to Integer in C++?
- Converting a string to an integer:
      ```cpp
      std::string str = "123";
      int num = std::stoi(str);
      ```
       - This code converts the string `"123"` to the integer `123` using the `std::stoi` function.

## How to Convert an Integer to String in C++?
 - Converting an integer to a string:
      ```cpp
      int num = 123;
      std::string str = std::to_string(num);
      ```
 - This code converts the integer `123` to the string `"123"` using the `std::to_string` function.

## How to Convert a String to Character Array in C++?
 - Converting a string to a character array (C-style string):
      ```cpp
      std::string str = "Hello";
      const char* charArray = str.c_str();
      ```
 - This code obtains a pointer to the underlying character array of the string `str` using the `c_str()` member function.

## How to Convert a Character Array to String in C++?
- Converting a character array (C-style string) to a string:
      ```cpp
      const char* charArray = "Hello";
      std::string str(charArray);
      ```
 - This code initializes a string `str` with the content of the character array `charArray`.

## How to Convert a String to C-Style String in C++?
 - Converting a string to a C-style string (character array):
      ```cpp
      std::string str = "Hello";
      const char* cStyleStr = str.c_str();
      ```
 - This code obtains a pointer to the C-style string representation of the string `str` using the `c_str()` member function.

## How to Convert a C-Style String to String in C++?
 - Converting a C-style string (character array) to a string:
      ```cpp
      const char* cStyleStr = "Hello";
      std::string str(cStyleStr);
      ```
 - This code initializes a string `str` with the content of the C-style string `cStyleStr`.
## How to Split a String in C++?
  - C++ does not have a built-in function for splitting strings like some other languages. However, you can achieve this using techniques like `std::stringstream`, `std::getline()`, or using libraries like `boost::split()`.


