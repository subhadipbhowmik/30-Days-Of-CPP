---
sidebar_position: 1
title: "First C++ Program: Hello, World!"
description: "Learn how to write and execute your first C++ program with a simple 'Hello, World!' example."
sidebar_label: "First C++ Program"
slug: first-cpp-program
---

## Your First Steps in C++: Hello, World!

Welcome to the exciting world of C++ programming! Today, we'll embark on a journey together, crafting our very first C++ program - the classic "Hello, World!". This simple program lays the foundation for understanding core C++ concepts.

**Setting Up**

Before diving into code, you'll need a text editor or an Integrated Development Environment (IDE) to write and compile your C++ program. Popular choices include Notepad++, Visual Studio Code, or Code::Blocks.

![first-programme-in-cpp](../../static/img/day-02/first-program.png) 

**Hello, World! Breakdown**

Let's dissect the code line by line and understand its purpose:

```c++
#include <iostream>

using namespace std;

int main() {
  cout << "Hello, World!" << endl;
  return 0;
}
```

1. **`#include <iostream>`:** This line tells the compiler to include the `iostream` header file, which provides functionalities for input and output operations in C++.

2. **`using namespace std;`:** This statement instructs the code to use elements from the `std` namespace, which contains standard C++ objects like `cout` (used for output) and `endl` (used for adding a newline character).

3. **`int main() { ... }`:** The `main` function is the entry point of your program. Any code execution begins here. The `int` keyword specifies that the `main` function will return an integer value (in this case, 0 to indicate successful execution).

4. **`cout << "Hello, World!" << endl;`:** This line performs the magic!  
   - `cout` is an object of the `ostream` class used for standard output.
   - `<<` is the insertion operator, which sends data to the output stream.
   - `"Hello, World!"` is the string literal (text enclosed in double quotes) that we want to print.
   - `endl` adds a newline character after the printed message.

5. **`return 0;`:** This statement indicates successful program termination by returning the value 0 from the `main` function.

## **Compiling and Running**

Once you've written the code, save the file with a `.cpp` extension (e.g., `helloworld.cpp`). Use your chosen compiler to compile the code and generate an executable file. Running the executable will display the glorious "Hello, World!" message on your screen.

## **Congratulations!**

You've successfully created your first C++ program! This is a significant milestone in your programming journey. Now that you've grasped the fundamentals, you can explore more complex C++ concepts and build upon this foundation to create amazing programs.

## **Further Exploration**

There's a vast world of C++ waiting to be discovered. Here are some suggestions for your next steps:

- Experiment with different messages and explore various output formatting options.
- Try taking user input using the `cin` object from the `iostream` header.
- Learn about variables, data types, and operators to perform calculations and manipulations within your program.

Remember, practice is key! The more you code, the more comfortable you'll become with C++. Happy coding!