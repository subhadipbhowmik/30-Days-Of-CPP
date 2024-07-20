---
sidebar_position: 5
title: "Switch Statement in C++"
description: "In this tutorial, we will learn about the switch Statements in C++ programming with the help of examples. The switch statement in C++ is a flow control statement ."
sidebar_label: "Switch Statement in C++"
slug: switch statement
---
# Switch Statement in C++

This repository provides an explanation of switch statements in C++, along with examples of their usage.

## Table of Contents

- [Introduction](#introduction)
- [Basic switch Statement](#basic-switch-statement)
- [switch Statement](#switch-statement)
- [Rules for switch Statement](#Rules-of-the-switch-case-statement)
- [Working  of switch Statement](#Working-of-switch-Statement)
- [Example of switch Statement](#example)

## Introduction

The C++ Switch case statement evaluates a given expression and based on the evaluated value(matching a certain condition), it executes the statements associated with it. It is an alternative to the long if-else-if ladder which provides an easy way to dispatch execution to different parts of code based on the value of the expression.

## Basic switch Statement

```cpp
switch (expression) {
    case value_1:
        // statements_1;
        break;
    case value_2:
        // statements_2;
        break;
    .....
    .....
    default:
        // default_statements;
        break;
}
```


## Rules of the switch case statement

```cpp
There are some rules that we need to follow when using switch statements in C++. They are as follows:

-The case value must be either int or char type.
-There can be any number of cases.
-No duplicate case values are allowed.
-Each statement of the case can have a break statement. It is optional.
-The default Statement is also optional.

```


## Working of switch Statement

```cpp
The working of the switch statement in C is as follows:

-Step 1: The switch expression is evaluated.
-Step 2: The evaluated value is then matched against the present case values.
-Step 3A: If the matching case value is found, that case block is executed.
-Step 3B: If the matching code is not found, then the default case block is executed if present.
-Step 4A: If the break keyword is present in the block, then program control comes out of the switch statement.
-Step 4B: If the break keyword is not present, then all the cases after the matching case are executed.
-Step 5: Statements after the switch statement is executed.

```
## Example of switch
```
// C Program to create a simpe calculator using switch
// statement
#include <iostream>
#include <stdlib.h>
using namespace std;

// driver code
int main()
{
    // switch variable
    char choice;
    // operands
    int x, y;

    while (1) {
        cout << "Enter the Operator (+,-,*,/)\nEnter x to "
                "exit\n";
        cin >> choice;

        // for exit
        if (choice == 'x') {
            exit(0);
        }

        cout << "Enter the two numbers: ";
        cin >> x >> y;

        // switch case with operation for each operator
        switch (choice) {
        case '+':
            cout << x << " + " << y << " = " << x + y
                 << endl;
            break;

        case '-':
            cout << x << " - " << y << " = " << x - y
                 << endl;
            break;

        case '*':
            cout << x << " * " << y << " = " << x * y
                 << endl;
            break;
        case '/':
            cout << x << " / " << y << " = " << x / y
                 << endl;
            break;
        default:
            printf("Invalid Operator Input\n");
        }
    }
    return 0;
}
```
## Output:

```
Enter the operator (+, -, *, /)

Enter x to exit

+
Enter the two numbers: 100 + 200
100 + 200 = 300

```