### 1. What is a Function in C++?

A Function in c++ is a block of code that perform specific task and can be called by its name, optionally taking input parameters and returning a value. Functions help in modularizing code, making it reusable and easier to manage.

IMAGE FILE:
![Function in CPP](../../static/img/day-07/function-in-cpp.png)

### 2. Explain the Syntax of Function in C++.

### Syntax
```cpp
void myFunction() {
  // code to be executed
}
```
## Explaination

 myFunction() is the name of the function.
 void means that the function does not have a return value. You will learn more about return values later in the next chapter.
 inside the function (the body), add code that defines what the function should do.

### 3. Types of Functions in C++

## Built-in Functions
Built-in functions are also called library functions. These are the functions that are provided by C++ and we need not write them ourselves. We can directly use these functions in our code.

## User-Defined Functions
C++ also allows its users to define their own functions. These are the user-defined functions. We can define the functions anywhere in the program and then call these functions from any part of the code.

### 4. How to Declare and Define a Function in C++?

In C++, declaring and defining a function involves two main steps: the function declaration (also known as the function prototype) and the function definition.

## Function Declaration
A function declaration specifies the function's name, return type, and parameters without including the function body. It informs the compiler about the function's existence before its actual definition.

### Syntax
```cpp
returnType functionName(parameterType1 parameterName1, parameterType2 parameterName2, ...);

```
## Example
```cpp
int add(int a, int b);
```
## Function Definition
A function definition includes the function's body, which contains the actual code that will be executed when the function is called.

### Syntax
```cpp
returnType functionName(parameterType1 parameterName1, parameterType2 parameterName2, ...) {
    // Function body: code to be executed
}
```
## Example
```cpp
#include <iostream>

using namespace std;

// Function definition
int add(int a, int b) {
    return a + b;
}

```
## Output 
  7

### 5. How to Call a Function in C++?

Calling a function in C++ involves using the function name followed by parentheses containing any necessary arguments.

### Syntax
```cpp
functionName(argument1, argument2, ...);
```
## Example
```cpp
#include <iostream>

using namespace std;
// Function declaration (prototype)
int add(int a, int b);

int main() {
    int num1 = 3;
    int num2 = 4;
    
    // Function call
    int result = add(num1, num2);
    
    // Display the result
    cout << "The sum is: " << result << endl;
    
    return 0;
}
```
## Output 
  7
### 6. C++ Function Example

This example calculates the factorial of a given number.

## Example
```cpp
#include <iostream>

using namespace std;

// Function declaration (prototype)
int factorial(int n);

int main() {
    int number;
    cout << "Enter a positive integer: ";
    cin >> number;

    // Function call
    int result = factorial(number);

    // Display the result
    cout << "Factorial of " << number << " = " << result << endl;

    return 0;
}

// Function definition
int factorial(int n) {
    if (n == 0 || n == 1)
        return 1;
    else
        return n * factorial(n - 1);
}

```
### 7. C++ Function with Parameters

Information can be passed to functions as a parameter. Parameters act as variables inside the function.

### Syntax
```cpp
void functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}
```
## Example : In this example, the function calculates and returns the area of a rectangle using its length and width as parameters.
```cpp
#include <iostream>

using namespace std;

// Function declaration (prototype)
double calculateArea(double length, double width);

int main() {
    double length, width;

    // Input length and width from the user
    cout << "Enter length of the rectangle: ";
    cin >> length;
    cout << "Enter width of the rectangle: ";
    cin >> width;

    // Function call
    double area = calculateArea(length, width);

    // Display the area
    cout << "Area of the rectangle: " << area << endl;

    return 0;
}

// Function definition
double calculateArea(double length, double width) {
    return length * width;
}

```
### 8. C++ Function with Return Value

The return statement returns the flow of the execution to the `function` from where it is called. 

### Syntax
```cpp
return[expression];
```
## Example : function that calculates the sum of two integers and returns the result:
```cpp
#include <iostream>

using namespace std;

// Function declaration (prototype)
int sum(int a, int b);

int main() {
    int num1, num2;

    // Input two numbers from the user
    cout << "Enter first number: ";
    cin >> num1;
    cout << "Enter second number: ";
    cin >> num2;

    // Function call
    int result = sum(num1, num2);

    // Display the result
    cout << "Sum: " << result << endl;

    return 0;
}

// Function definition
int sum(int a, int b) {
    return a + b;
}

```
### 9. C++ Function with Default Arguments

A default argument is a value provided in a function declaration that is automatically assigned by the compiler if the calling function doesn’t provide a value for the argument. In case any value is passed, the default value is overridden. 

## Example : 
```cpp
#include <iostream>
using namespace std;
 
int sum(int x, int y, int z = 0, int w = 0) //assigning default values to z,w as 0
{
    return (x + y + z + w);
}
 
// Driver Code
int main()
{
    // Statement 1
    cout << sum(10, 15) << endl;
   
    // Statement 2
    cout << sum(10, 15, 25) << endl;
   
    // Statement 3
    cout << sum(10, 15, 25, 30) << endl;
    return 0;
}
```
## Output
  25
  50
  80
  
### 10. C++ Function with Function Overloading

Function overloading is a feature of object-oriented programming where two or more functions can have the same name but different parameters. When a function name is overloaded with different jobs it is called Function Overloading. In Function Overloading “Function” name should be the same and the arguments should be different. 

## Example
```cpp
#include <iostream>
using namespace std;


void add(int a, int b)
{
cout << "sum = " << (a + b);
}

void add(double a, double b)
{
	cout << endl << "sum = " << (a + b);
}

// Driver code
int main()
{
	add(10, 2);
	add(5.3, 6.2);

	return 0;
}
```
## Output
sum = 12
sum = 11.5

### 11. C++ Function with Recursion

Recursion is the technique of making a function call itself. This technique provides a way to break complicated problems down into simple problems which are easier to solve.

##Example : function that demonstrates recursion by calculating the factorial of a given number:
```cpp
#include <iostream>

using namespace std;

// Function declaration
int factorial(int n);

int main() {
    int number;

    // Input a number from the user
    cout << "Enter a non-negative integer: ";
    cin >> number;

    // Call the factorial function
    int result = factorial(number);

    // Display the result
    cout << "Factorial of " << number << " = " << result << endl;

    return 0;
}

// Function definition
int factorial(int n) {
    // Base case: factorial of 0 or 1 is 1
    if (n == 0 || n == 1) {
        return 1;
    }
    // Recursive case: factorial of n is n multiplied by factorial of (n-1)
    else {
        return n * factorial(n - 1);
    }
}

```
### 12. C++ Function with Inline Function

C++ provides inline functions to reduce the function call overhead. An inline function is a function that is expanded in line when it is called. When the inline function is called whole code of the inline function gets inserted or substituted at the point of the inline function call.

## Syntax:

inline return-type function-name(parameters)
{
    // function code
}  

## Example : In this example, we'll create an inline function to calculate the square of a number.
```cpp
#include <iostream>

using namespace std;

// Inline function declaration
inline int square(int x) {
    return x * x;
}

int main() {
    int num;

    // Input a number from the user
    cout << "Enter a number: ";
    cin >> num;

    // Call the inline function
    int result = square(num);

    // Display the result
    cout << "Square of " << num << " = " << result << endl;

    return 0;
}

```
