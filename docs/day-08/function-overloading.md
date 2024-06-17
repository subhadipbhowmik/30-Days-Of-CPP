---
sidebar_position: 2
title: "Function Overloading in C++"
description: "In this tutorial, we will learn about Function Overloading in C++ programming with the help of examples. Function overloading is a feature in C++ where two or more functions can have the same name but different parameters."
sidebar_label: "Function Overloading"
slug: function-overloading-in-cpp
---

## 1. What is Function Overloading in C++?
Function overloading is a feature in C++ that allows you to define multiple functions with the same name, but with different parameters. This can be useful for creating functions that perform similar tasks, but with different inputs.

## 2. Explain the Syntax of Function Overloading in C++
To overload a function, you simply need to declare multiple functions with the same name, but with different parameter lists. The compiler will then choose the correct function to call based on the types of the arguments that you pass to it.
Here is an example of function overloading in C++:

## Function Overloading in C++
Function overloading in C++ is a feature that allows you to define multiple functions with the same name but with different parameter lists within the same scope. The parameter lists can differ in the number of parameters, the types of parameters, or both. The compiler determines which function to call based on the arguments used when the function is invoked.

Here are the key points about function overloading:

1. Same Function Name: All the overloaded functions must have the same name.
2. Different Parameter Lists: The functions must differ in the number and/or type of their parameters. This difference in the parameter list is known as the function's signature.
3. Return Type: The return type of the functions can be different, but the return type alone is not enough to distinguish overloaded functions.

## Syntax of Function Overloading in C++
The syntax of function overloading in C++ involves defining multiple functions with the same name but different parameter lists within the same scope. Here’s how you can do it, along with explanations and examples:

### Basic Syntax

1. **Function Declarations/Definitions**:
   ```cpp
   return_type function_name(parameter_list);
   return_type function_name(parameter_list);
   ```

   - **return_type**: The return type of the function (e.g., `int`, `void`, `double`).
   - **function_name**: The name of the function.
   - **parameter_list**: A list of parameters that differ between overloaded functions.

2. **Function Calls**:
   ```cpp
   function_name(arguments);
   ```

  ## How to Declare and Define a Function Overloading in C++
  Declaring and defining function overloading in C++ involves creating multiple functions with the same name but different parameter lists within the same scope. Here’s a step-by-step guide on how to declare and define overloaded functions.

### Declaration of Overloaded Functions

Function declarations, also known as function prototypes, provide the compiler with information about the function's name, return type, and parameters without giving the function's actual body.

1. **Function Declaration Syntax**:
   ```cpp
   return_type function_name(parameter_list);
   ```

2. **Example of Declarations**:
   ```cpp
   int add(int a, int b);              // Declaration 1
   double add(double a, double b);     // Declaration 2
   int add(int a, int b, int c);       // Declaration 3
   ```

### Definition of Overloaded Functions

Function definitions provide the actual body of the function.

1. **Function Definition Syntax**:
   ```cpp
   return_type function_name(parameter_list) {
       // Function body
   }
   ```

2. **Example of Definitions**:
   ```cpp
   int add(int a, int b) {
       return a + b;
   }

   double add(double a, double b) {
       return a + b;
   }

   int add(int a, int b, int c) {
       return a + b + c;
   }
   ```

### Complete Example with Declarations and Definitions

```cpp
#include <iostream>
using namespace std;

// Declarations
int add(int a, int b);
double add(double a, double b);
int add(int a, int b, int c);

int main() {
    // Calling overloaded functions
    cout << "Sum of 2 and 3: " << add(2, 3) << endl;           // Calls add(int, int)
    cout << "Sum of 2.5 and 3.5: " << add(2.5, 3.5) << endl;   // Calls add(double, double)
    cout << "Sum of 1, 2, and 3: " << add(1, 2, 3) << endl;    // Calls add(int, int, int)
    return 0;
}

// Definitions
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}
```

### Explanation

1. **Declarations**:
   - The function prototypes for `add` are declared before `main()`.
   - These prototypes inform the compiler about the existence of these functions and their signatures.

2. **Definitions**:
   - The actual function bodies are defined after `main()`.
   - Each overloaded function performs addition, but they differ in their parameter lists.

3. **Function Calls in `main()`**:
   - `add(2, 3)` calls the first `add` function (`int add(int, int)`).
   - `add(2.5, 3.5)` calls the second `add` function (`double add(double, double)`).
   - `add(1, 2, 3)` calls the third `add` function (`int add(int, int, int)`).

### Summary

To declare and define overloaded functions in C++, you:

1. **Declare** the functions with the same name but different parameter lists.
2. **Define** each function with the same name but different parameter lists.
3. **Call** the appropriate overloaded function based on the arguments provided.

This approach allows you to use the same function name for different tasks based on different input parameters, enhancing code readability and maintainability.

## C++ Function Overloading Example
This example shows how to use function overloading to create multiple functions with the same name but different parameter lists, enhancing code readability and functionality.

### Example: Area Calculation

We will overload a function named `area` to calculate the area of different shapes: a rectangle, a circle, and a triangle.

### Code Example

```cpp
#include <iostream>
#include <cmath> // For M_PI and sqrt
using namespace std;

// Function to calculate the area of a rectangle
double area(double length, double width) {
    return length * width;
}

// Function to calculate the area of a circle
double area(double radius) {
    return M_PI * radius * radius;
}

// Function to calculate the area of a triangle using Heron's formula
double area(double side1, double side2, double side3) {
    double s = (side1 + side2 + side3) / 2; // Semi-perimeter
    return sqrt(s * (s - side1) * (s - side2) * (s - side3));
}

int main() {
    double length = 5.0, width = 3.0;
    double radius = 4.0;
    double side1 = 3.0, side2 = 4.0, side3 = 5.0;

    cout << "Area of rectangle: " << area(length, width) << endl;
    cout << "Area of circle: " << area(radius) << endl;
    cout << "Area of triangle: " << area(side1, side2, side3) << endl;

    return 0;
}
```

### Explanation

1. **Function to Calculate the Area of a Rectangle**:
   ```cpp
   double area(double length, double width) {
       return length * width;
   }
   ```
   - This function takes two parameters: `length` and `width`.
   - It returns the area of the rectangle using the formula \( \text{area} = \text{length} \times \text{width} \).

2. **Function to Calculate the Area of a Circle**:
   ```cpp
   double area(double radius) {
       return M_PI * radius * radius;
   }
   ```
   - This function takes one parameter: `radius`.
   - It returns the area of the circle using the formula \( \text{area} = \pi \times \text{radius}^2 \).
   - `M_PI` is a constant representing the value of π (pi).

3. **Function to Calculate the Area of a Triangle Using Heron's Formula**:
   ```cpp
   double area(double side1, double side2, double side3) {
       double s = (side1 + side2 + side3) / 2; // Semi-perimeter
       return sqrt(s * (s - side1) * (s - side2) * (s - side3));
   }
   ```
   - This function takes three parameters: `side1`, `side2`, and `side3`.
   - It calculates the area of the triangle using Heron's formula:
     - First, it computes the semi-perimeter \( s \).
     - Then, it calculates the area using the formula \( \text{area} = \sqrt{s \times (s - \text{side1}) \times (s - \text{side2}) \times (s - \text{side3})} \).

4. **Main Function**:
   ```cpp
   int main() {
       double length = 5.0, width = 3.0;
       double radius = 4.0;
       double side1 = 3.0, side2 = 4.0, side3 = 5.0;

       cout << "Area of rectangle: " << area(length, width) << endl;
       cout << "Area of circle: " << area(radius) << endl;
       cout << "Area of triangle: " << area(side1, side2, side3) << endl;

       return 0;
   }
   ```
   - The `main` function initializes the dimensions of different shapes.
   - It calls the overloaded `area` functions with appropriate arguments for each shape.
   - It prints the calculated areas of the rectangle, circle, and triangle.

### Output

The program will output the calculated areas for the rectangle, circle, and triangle:

```
Area of rectangle: 15
Area of circle: 50.2655
Area of triangle: 6
```

This example demonstrates how function overloading can be used to create multiple functions with the same name but different parameter lists, allowing you to perform similar operations on different types or numbers of inputs.

### Summary

Function overloading in C++ allows multiple functions with the same name but different parameter lists. This enhances code readability and usability by enabling functions to perform similar tasks with different types or numbers of inputs. The compiler uses the function signature (name + parameter list) to determine which function to call.

```cpp
int add(int a, int b) {
  return a + b;
}

float add(float a, float b) {
  return a + b;
}

string add(string a, string b) {
  return a + b;
}
```

IMAGE FILE:
![Ternary in CPP](../../static/img/day-08/function-overloading.png)

## 3. How to Declare and Define a Function Overloading in C++?

To declare a function overload, you simply need to define two or more functions with the same name, but with different parameter lists. The compiler will then choose the appropriate function to call based on the types of arguments that are passed in.
For example, the following code shows two overloaded functions named add():

```cpp
int add(int x, int y) {
  return x + y;
}

double add(double x, double y) {
  return x + y;
}
```

The first add() function takes two integer arguments and returns an integer. The second add() function takes two double arguments and returns a double.
When you call the add() function, the compiler will choose the appropriate function to call based on the types of arguments that you pass in. For example, the following code will call the first add() function:

```cpp
int sum = add(1, 2);
```

The following code will call the second add() function:

```cpp
double sum = add(1.5, 2.5);
```

Function overloading can be a very useful feature, but it is important to use it carefully. If you are not careful, you can easily create situations where the compiler is unable to determine which function to call. This can lead to errors in your code.

## 4. C++ Function Overloading Example

```cpp
#include <iostream>
using namespace std;

// Prototype three print functions.
int print(std::string s); // Print a string.
int print(double dvalue); // Print a double.
int print(double dvalue, int prec); // Print a double with a
// given precision.

int main(int argc, char *argv[]) {
  const double d = 893094.2987;

  if (argc < 2) {
    // These calls to print invoke print( char *s ).
    print("This is a string.");
    print(d);
  } else {
    // These calls to print invoke print( double dvalue, int prec ).
    print(d, 2);
    print(d, 5);
  }

  return 0;
}

// Define the three print functions.
int print(std::string s) {
  std::cout << s << std::endl;
  return 0;
}

int print(double dvalue) {
  std::cout << dvalue << std::endl;
  return 0;
}

int print(double dvalue, int prec) {
  std::cout.precision(prec);
  std::cout << fixed;
  std::cout << dvalue << std::endl;
  return 0;
}
```

This program defines three functions named print(). The first print() function takes a string argument and prints it to the console. The second print() function takes a double argument and prints it to the console. The third print() function takes two arguments: a double and an integer. The integer argument specifies the precision to which the double should be printed.

The main() function calls the print() functions with different arguments. The first two calls to print() invoke the first print() function, which prints a string and a double to the console, respectively. The last two calls to print() invoke the third print() function, which prints the double argument with the specified precision.

Here is the output of the program:

```cpp
This is a string.
893094.2987
893094.2987
893094.29870
```