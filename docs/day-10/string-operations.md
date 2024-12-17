---
sidebar_position: 6
title: "String Operations in C++"
description: "C++ empowers you to work with text data seamlessly using the `std::string` class. This class offers a safe and versatile alternative to C-style strings, providing a rich set of built-in methods for creating, manipulating, and managing strings. From basic operations like concatenation and substring extraction to conversions and advanced modifications, `std::string` streamlines string handling in your C++ programs."
sidebar_label: "String Operations"
slug: string-operations-in-cpp
---

## String Operations in C++ with `std::string`

The `std::string` class in C++ provides a robust and safe way to manage and manipulate text data. Unlike C-style strings (arrays of characters), `std::string` offers built-in functionalities for various string operations, improving readability, maintainability, and memory safety.


![String in CPP](../../static/img/day-10/string-operations-in-cpp.png)


Here, we'll explore some fundamental string operations using `std::string`:

**1. Creating Strings:**

There are multiple ways to create `std::string` objects:

* **Empty String:**
  ```c++
  std::string str;  // Creates an empty string
  ```

* **From a String Literal:**
  ```c++
  std::string message = "Hello, world!";
  ```

* **From a C-Style String:**
  ```c++
  const char* c_str = "Welcome";
  std::string cpp_str(c_str);
  ```

**2. Accessing Characters:**

You can access individual characters using the index operator (`[]`):

```c++
std::string name = "Alice";
char first_letter = name[0]; // first_letter will be 'A'
```

**3. String Length:**

The `length()` member function determines the string's length (excluding the null terminator):

```c++
std::string greeting = "Hi there!";
int string_length = greeting.length(); // string_length will be 9
```

**4. Concatenation (String Addition):**

The `+` operator or the `append()` method allows string concatenation:

```c++
std::string first_name = "John";
std::string last_name = "Doe";
std::string full_name = first_name + " " + last_name; // full_name becomes "John Doe"

full_name.append(" (Jr.)"); // full_name becomes "John Doe (Jr.)" (using append())
```

**5. Substring Extraction:**

The `substr(start, length)` method extracts a substring:

```c++
std::string quote = "Knowledge is power.";
std::string sub_string = quote.substr(8, 6); // sub_string becomes "power"
```

**6. Searching for Substrings:**

The `find(substr)` method searches for the first occurrence of a substring:

```c++
std::string sentence = "The quick brown fox jumps over the lazy dog.";
int position = sentence.find("fox"); // position will be 4 (index of "f")
```

**7. String Comparison:**

The comparison operators (`==`, `<`, `>`, etc.) can be used for lexicographic comparisons:

```c++
std::string word1 = "apple";
std::string word2 = "banana";

if (word1 < word2) {
  std::cout << word1 << " comes before " << word2 << std::endl;
}
```

**8. Modifying Strings:**

`std::string` offers various methods for modifying strings:

* `assign(str)`: Replaces the entire content with a new string.
* `replace(start, length, new_str)`: Replaces a substring with a new string.
* `insert(position, str)`: Inserts a string at a specified position.
* `erase(start, length)`: Removes a portion of the string.

**9. Conversion:**

`std::string` can be converted to other data types using methods like:

* `stoi()`: Converts string to integer.
* `stod()`: Converts string to double.
* `to_string(num)`: Converts a number to a string.

**10. Additional Methods:**

`std::string` provides many more methods for advanced string manipulations, such as trimming whitespace, finding the last occurrence of a substring, and converting to uppercase/lowercase. Refer to C++ documentation for a complete list.

**Benefits of `std::string`:**

* **Memory Management:** Handles memory allocation and deallocation internally.
* **Safety:** Protects against buffer overflows inherent in C-style strings.
* **Rich Functionality:** Provides a wide range of built-in methods for string manipulation.
* **Readability:** Improves code readability with clear and concise string operations.

By mastering these fundamental string operations with `std::string`, you'll be well-equipped to effectively work with text data in your C++ programs.
