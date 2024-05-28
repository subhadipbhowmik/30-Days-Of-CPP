# Basic C++ Syntax Explanation and Examples:

## 1. Comments:

Comments are used to document code for better understanding. They are ignored by the compiler.

### Examples:

```cpp
// This is a single-line comment

/*
   This is a multi-line comment
*/

```
## 2. Main Function:

The `main()` function is the entry point of any C++ program. It's where the execution of the program begins.

### Example:
```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!";
    return 0;
}

```

## 3. Data Types:

C++ supports various data types for different kinds of values.

### Example:

```cpp
int age = 25;         // Integer
float pi = 3.14;      // Floating point number
char grade = 'A';     // Character
bool isTrue = true;   // Boolean (true/false)


```

## 4. Variables:

Variables are used to store data values.

### Example:

```cpp
int x = 5;      // Declare and initialize an integer variable
float y = 3.14; // Declare and initialize a floating point variable
```

## 5. Control Structures:

Control structures help in controlling the flow of the program.

### Example:

```cpp
if (x > 0) {
    // Code block executed if condition is true
} else {
    // Code block executed if condition is false
}

while (x > 0) {
    // Code block executed repeatedly while condition is true
}

for (int i = 0; i < 5; i++) {
    // Code block executed repeatedly with incrementing i from 0 to 4
}

```
## 6. Functions:

Functions are blocks of code that perform a specific task.

### Example:

```cpp
int add(int a, int b) {
    return a + b;
}

```
## 7. Classes:

Classes are user-defined data types that contain data members and member functions.

### Example:

```cpp
class Rectangle {
public:
    int width;
    int height;
    
    int area() {
        return width * height;
    }
};

```