---
sidebar_position: 5
title: "Exit function in C++"
description: "In this tutorial, we will learn about the Exit function in C++ programming with the help of examples. The Exit function is used to terminate a program immediately."
sidebar_label: "Exit function"
slug: Exit-function-in-cpp
---

## What is the Exit Function in C++?
The exit function is a way to stop your program immediately. Think of it as an emergency stop button for your program.

## When to Use Exit 
You might use exit if something goes wrong in your program and you need to stop everything right away. For example, if you ask the user for a number and they enter something wrong, you might want to stop the program.

## How to Use Exit
1. Include the Header File:
- Before you can use the exit function, you need to include the library that contains it. You do this with #include `<`cstdlib`>`.
2. Call exit with a Status Code:
- You call the exit function and give it a number. This number is called the status code. By convention:
   - 0 or EXIT_SUCCESS means the program finished successfully.
   - 1 or EXIT_FAILURE means the program encountered an error.
3. The syntax for using the exit function:
```cpp
     exit( status_code );

```

## C++ Exit Function Example:
```cpp
include <iostream>
#include <cstdlib>

int main() {
    std::cout << "This program will now exit." << std::endl;

    // Exit the program with a success status
    exit(EXIT_SUCCESS);

    // This line will not be executed
    std::cout << "This line will not be printed." << std::endl;

    return 0;
}
```
### In this Example:
 - The program prints a message.
 - Then it calls exit(EXIT_SUCCESS) to stop the program.
 - The line after exit will never be executed because exit stops the program immediately.

 ## C++ Exit Function Example with a Condition:
 ```cpp
#include <iostream>
#include <cstdlib>

int main() {
    int value;
    std::cout << "Enter a positive number: ";
    std::cin >> value;
    if (value <= 0) {
        std::cerr << "Error: The number must be positive." << std::endl;
        exit(EXIT_FAILURE); // Stop the program with an error status
    }

    std::cout << "You entered a positive number: " << value << std::endl;
    return 0;
}
```

### In this Example:
- The program asks the user to enter a positive number.
- If the user enters a non-positive number (like 0 or a negative number), it prints an error message and stops the program with exit(EXIT_FAILURE).
- If the user enters a positive number, it prints the number and finishes normally.


### Summary
- The exit function stops your program immediately.
- You need to include `<`cstdlib`>` to use exit.
- You give exit a status code: EXIT_SUCCESS (0) for success and EXIT_FAILURE (1) for failure.
- Use exit when you need to stop the program due to an error or special condition.
