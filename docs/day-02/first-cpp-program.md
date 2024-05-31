---
sidebar_position: 1
title: "First CPP Program"
description: "Learn how to write and execute your first C Plus Plys program using a simple 'Hello, World!' example."
sidebar_label: "First CPP Program"
slug: first-cpp-program
---



### 1. Write a simple "Hello, World!" program in C++.
```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!";
    return 0;
}
```
### 2. Output of the program.
When you run this program, it will display the following output:
``` 
Hello, World!
```
![first-programme-in-cpp](../../static/img/day-02/first-program.png) 

### 3. Explain the code line by line.
- #include <iostream>: This line includes the standard input/output stream library (iostream). It allows us to use the std::cout (output) and std::cin (input) streams.
- int main(): This is the main function where program execution begins. It has an integer return type (int) because it returns an exit status to the operating system (usually 0 for successful execution).
- {}: The curly braces define the scope of the main function. Everything inside these braces belongs to the main function.
- std::cout << "Hello, World!";: This line uses the std::cout stream to print the text “Hello, World!” to the console. The << operator is used for output.
- return 0;: The return statement indicates that the program has completed successfully. The value 0 is returned to the operating system.
### 4. Explain Basic Structure of C++ Program.
- Preprocessor Directives: These lines start with # and include necessary libraries or perform other preprocessing tasks (e.g., #include).
- Function Definitions: The main function is the entry point of the program. Other functions can be defined as needed.
- Statements: Inside functions, we write statements (like the std::cout line) that perform actions.
- Comments: Comments (single-line or multi-line) help explain the code to other programmers.




