---
sidebar_position: 3
title: "Keywords and Identifiers in C++"
description: "Keywords and Identifiers in C++.  This is a simple program to demonstrate the use of keywords and identifiers in C Plus Plus."
sidebar_label: "Keywords and Identifiers"
slug: keywords-and-identifiers-in-cpp
---


### 1. What is Keywords and Identifiers in C++?
## Keywords:
- Keywords are predefined words that have special meanings to the C++ compiler.
- They are part of the language syntax and serve specific purposes.
- For example, int, if, while, and class are keywords.
- Keywords cannot be used as identifiers (variable names, function names, etc.) because they already have predefined meanings12.
## Identifiers:
- Identifiers are unique names given to variables, functions, classes, and other entities by the programmer.
- They help us create meaningful and descriptive names for program elements.
- Examples of identifiers: money, accountBalance, studentAge, and calculateSum.
### Rules for naming identifiers:
- Can consist of letters (A-Z or a-z), digits (0-9), and underscores (_).
- Must begin with a letter or an underscore.
- Are case-sensitive (e.g., Num and num are different).
- Cannot use reserved keywords as identifiers.
- Must be unique within their namespace (e.g., no two variables with the same name in the same scope)31.
### 2. Why do we use Keywords and Identifiers in C++?
#### we use keywords:
- Syntax: Keywords define the syntax and structure of the language. They help the compiler understand the code.
- Reserved Meanings: Each keyword has a reserved purpose (e.g., if for conditional statements, while for loops, class for defining classes).
- Consistency: Using keywords ensures consistency across different C++ programs.
- Efficiency: Keywords allow the compiler to optimize code execution.
- Readability: They make the code more readable and self-explanatory.
#### we use identifiers:
- Descriptive Names: Identifiers give meaningful names to program entities (e.g., totalAmount, calculateAverage).
- Readability: Well-chosen identifiers enhance code readability for both programmers and collaborators.
- Avoid Magic Numbers: Instead of using raw numbers (e.g., 42), we use identifiers (e.g., MAX_SCORE) to make the code self-documenting.
- Modularity: Identifiers help organize code into logical units (functions, classes, etc.).
- Avoid Confusion: Descriptive identifiers prevent confusion and improve maintainability.

### 3. Write a simple program to demonstrate the use of Keywords and Identifiers in C++.
```cpp
#include <iostream>
using namespace std;

// Example of identifiers
class Car_24 {
    string Brand;
    string model;
    int year;
};

void calculateSum(int a, int b) {
    int _sum = a + b;
    cout << "The sum is: " << _sum << endl;
}

int main() {
    // Identifiers used as variable names
    int studentAge = 20;
    double accountBalance = 1000.50;
    string student_Name = "Karan";

    calculateSum(2, 10);
    return 0;
}
```
```
The sum is: 12
```
![keywords-and-identifiers-in-cpp](../../static/img/day-02/keywords-in-cpp.png)

### 4. List of Keywords in C++
Here are some commonly used C++ keywords:

if, else, while, for, switch, return, class, int, double, void, const, static, public, private, and many more
### 5. Rules for defining Identifiers in C++
Remember these rules when defining identifiers:

- Begin with a letter or an underscore.
- Consist of letters, digits, and underscores.
- Avoid using reserved keywords as identifiers.
- Be case-sensitive (e.g., myVar and MyVar are different).
### 6. Examples of Identifiers in C++
- Valid Identifiers: totalPoints, list_1, floatNumber
- Invalid Identifiers: 1list, n_float, float (because it’s a keyword)
### 7. Difference between Keywords and Identifiers in C++
- Keywords are predefined words with specific meanings in the language.
- Identifiers are user-defined names for program elements.
- Keywords cannot be used as identifiers



