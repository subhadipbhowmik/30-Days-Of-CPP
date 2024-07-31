---
sidebar_position: 1
title: "First C++ Program: Hello, World!"
description: "Learn how to write and execute your first C++ program with a simple 'Hello, World!' example."
sidebar_label: "First C++ Program"
slug: first-cpp-program
---

## Your First Steps in C++: Hello, World!

Welcome to the exciting world of C++ programming! Today, we'll embark on a journey together, crafting our very first C++ program - the classic "Hello, World!". This simple program lays the foundation for understanding core C++ concepts.

### Setting Up

Before diving into code, you'll need a text editor or an Integrated Development Environment (IDE) to write and compile your C++ program. Popular choices include Notepad++, Visual Studio Code, or Code::Blocks.

![first-programme-in-cpp](../../static/img/day-02/first-program.png) 

### Write a Simple "Hello, World!" Program in C++

```
#include <iostream>

int main() {
  std::cout << "Hello, World!" << std::endl;
  return 0;
}

```
### 2. Output of the program.
When you run this program, it will display the following output:
``` 
Hello, World!
```
You'll need a C++ compiler to run this program. Here's a general process:

- Save the code in a file with a `.cpp` extension (e.g., `hello_world.cpp`).
- Compile the code using a C++ compiler. The specific command will vary depending on your compiler.
- Execute the compiled program (the generated executable file).

![first-programme-in-cpp](../../static/img/day-02/first-program.png) 

### 3. Explain the code line by line.

1. `#include <iostream>`: This line is called a preprocessor directive. It instructs the compiler to include the contents of the `<iostream> `header file. This header file provides essential input/output functionalities like cout for printing to the console.


2. `int main()`: This line declares the main function, which is the program's entry point. The int keyword specifies that the main function will return an integer value (usually 0 to indicate successful execution).


3. { }: The curly braces mark the beginning and end of the code block for the main function. All the statements within this block will be executed when the program runs.

4. std::cout &gt; &gt; "Hello, World!" &gt; &gt; std::endl;: This line is the heart of the program. It performs the following actions:

   - std::cout: This is an object of the ostream class (from &gt;iostream&lt;) used for standard output (printing to the console).
   - &gt; &gt;: This is the stream insertion operator. It's used to send data to the output stream (cout) on the left side.
   - "Hello, World!": This is the actual string literal that you want to print.
   - std::endl: This manipulator inserts a newline character after the string, ensuring the output appears on a new line.
5. return 0; : This line exits the main function and returns the value 0 to the operating system. A return value of 0 typically indicates successful program execution.

### 4. Explain Basic Structure of C++ Program.
1. Preprocessor Directives (Optional):

- Lines starting with `#`.
- Not actual C++ statements but instructions for the preprocessor (a separate program that runs before compilation).
- Common example: `#include <iostream>` - This includes the `iostream` header file, providing input/output functionalities like cout for printing to the console.
2. Namespaces (Optional):

- Lines using the `namespace` keyword.
- Help organize code by grouping related elements (like functions, classes) under a specific namespace.
- Common example: `using namespace std;` - This brings the std namespace (containing standard objects like `cout`) into scope, avoiding repetitive use of `std::`.
3. Function Definitions:

- Functions are reusable blocks of code that perform specific tasks.
- Defined using a return type, name, parameter list (optional), and a code block within curly braces `({})`.
- The `main` function is the entry point of the program, where execution begins.
4. Variable Declarations:

Variables store data during program execution.
Declared using a data type (e.g., `int`, `double`) and a name following specific naming rules (letters, numbers, underscores, case-sensitive).
Example: `int age = 25;` - Declares an integer variable `age` and initializes it with the value 25.
5. Statements:

Lines that perform actions or control the program flow.
Examples:
 - `cout << "Hello, World!" << endl;` - Prints "Hello, World!" to the console.
 - `if (age >= 18) { ... }` - Conditional statement to check if age is greater than or equal to 18 and execute code within the block if true.
 - `for (int i = 0; i < 3; i++) { ... }` - Loop that iterates three times.
 
 Additional Syntax Elements:


5. Semicolons (;):

In C++, semicolons are used to terminate most statements.
They act as a separator between different instructions.
Example:
cppCopyint x = 5;
cout << "Hello";

Forgetting semicolons is a common mistake for beginners and can lead to compilation errors.

6. Curly Braces ({}):

Used to group multiple statements into a single block.
Essential for defining the scope of functions, loops, and conditional statements.
Also used to define the body of classes and namespaces.
Example:
cppCopyif (condition) {
    // Multiple statements can be placed here
    statement1;
    statement2;
}


7. Parentheses ():

Used in function declarations and calls to enclose parameters.
Required in conditional statements and loops to enclose conditions.
Example:
cppCopyint add(int a, int b) {
    return a + b;
}

if (x > 0) {
    // Do something
}



Data Types:

C++ provides several built-in data types:

Integer types:

int: Whole numbers (e.g., -5, 0, 42)
short: Smaller range integer
long: Larger range integer
unsigned variations of the above


Floating-point types:

float: Single-precision decimal numbers
double: Double-precision decimal numbers


Character types:

char: Single character (e.g., 'A', '7', '$')


Boolean type:

bool: True or false values


Derived types:

arrays: Collections of elements of the same type
pointers: Store memory addresses
references: Aliases for existing variables



Example:
cppCopyint age = 25;
float pi = 3.14159f;
char grade = 'A';
bool isStudent = true;
int numbers[5] = {1, 2, 3, 4, 5};  // Array
int* ptr = &age;  // Pointer
int& ageRef = age;  // Reference

8. Operators:

C++ provides various types of operators:
a. Arithmetic operators:

Addition (+), Subtraction (-), Multiplication (*), Division (/), Modulus (%)
Example: int result = 10 + 5 * 2;  // result is 20

b. Comparison operators:

Equal to (==), Not equal to (!=), Greater than (>), Less than (<),
Greater than or equal to (>=), Less than or equal to (<=)
Example: if (age >= 18) { cout << "Adult"; }

c. Logical operators:

AND (&&), OR (||), NOT (!)
Example: if (age > 18 && hasLicense) { cout << "Can drive"; }

d. Assignment operators:

Simple assignment (=)
Compound assignments (+=, -=, *=, /=, %=)
Example:
cppCopyint x = 5;
x += 3;  // Equivalent to x = x + 3;



9. Control Structures:

Control structures direct the flow of program execution:
a. if-else statements:
cppCopyif (condition) {
    // Code executed if condition is true
} else if (another_condition) {
    // Code executed if another_condition is true
} else {
    // Code executed if all conditions are false
}
b. switch statements:
cppCopyswitch (variable) {
    case value1:
        // Code for value1
        break;
    case value2:
        // Code for value2
        break;
    default:
        // Code if no case matches
}
c. Loops:

for loop: Used when number of iterations is known
cppCopyfor (int i = 0; i < 5; i++) {
    cout << i << " ";
}

while loop: Executes while a condition is true
cppCopywhile (condition) {
    // Code to repeat
}

do-while loop: Executes at least once, then repeats while condition is true
cppCopydo {
    // Code to repeat
} while (condition);



10. Functions:

Functions are reusable blocks of code:

Function declaration: Tells compiler about function name, return type, and parameters
Function definition: Provides the actual body of the function
Example:
cppCopy// Declaration
int add(int a, int b);

// Definition
int add(int a, int b) {
    return a + b;
}

// Function call
int result = add(5, 3);


Function overloading: Multiple functions can have the same name if they differ in parameter types or number.

11. Basic Input/Output:

C++ uses streams for input/output operations:

cout for output:
cppCopycout << "Hello, " << name << "!";

cin for input:
cppCopyint age;
cin >> age;

Formatting output:
cppCopy#include <iomanip>
cout << fixed << setprecision(2) << 3.14159;  // Outputs 3.14



12. Header Files:

Header files contain declarations of functions and variables:

Standard library headers: <iostream>, <string>, <vector>, etc.
User-defined headers: Created for custom libraries
Usage:
cppCopy#include <iostream>  // Angular brackets for standard headers
#include "myheader.h"  // Quotes for user-defined headers



13. Compilation Process:

C++ programs go through several stages before execution:

Preprocessing: Handles directives like #include and #define
Compilation: Converts C++ code to object code
Linking: Combines object code with libraries to create an executable

14. Comments (Optional):

- Lines starting with `//` (single line comment) or `/* ... */` (multi-line comment).
- Provide explanations within the code for better understanding.
- Ignored by the compiler but essential for human-readable code.
Here's a basic program structure summarizing these elements:
```
C++
#include <iostream> // Preprocessor directive (optional)

using namespace std; // Namespaces (optional)

// Function definitions
int main() {
  // Variable declarations and statements
  cout << "Hello, World!" << endl;
  return 0;
}
```


Remember, this is a basic structure, and more complex programs may involve additional elements like classes, objects, and header files for custom functions.