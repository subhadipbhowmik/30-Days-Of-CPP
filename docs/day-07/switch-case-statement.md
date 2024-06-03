---
sidebar_position: 1
title: "Switch Case Statement in C++"
description: "In this tutorial, we will learn about the switch case statement in C++ programming with the help of examples. The switch case statement is used to execute one statement from multiple conditions."
sidebar_label: "Switch Case Statement"
slug: switch-case-statement-in-cpp
---



### 1. What is the Switch Case Statement in C++?
The switch case statement in C++ is a control structure used to handle multiple selections by passing control to one of the case statements within its body. It is a more efficient alternative to using multiple if-else-if statements when you need to compare a variable to several constant values.


### 2. Explain the Syntax of Switch Case Statement in C++.
The basic syntax of a switch case statement in C++ is as follows:

```cpp
switch (expression) {
    case constant1:
        // code to be executed if expression equals constant1;
        break;
    case constant2:
        // code to be executed if expression equals constant2;
        break;
    ...
    default:
        // code to be executed if expression does not match any constant;
}
```
- expression: This is the variable or value being compared.
- case constant: These are the values that expression is compared against. If a match is found, the corresponding block of code is executed.
- break: This statement terminates the switch case block. If omitted, execution will fall through to the next case.
- default: This is an optional case that runs if no other cases match. It's similar to the else in an if-else-if ladder.

### 3. How does the Switch Case Statement work in C++?
The switch case statement evaluates the expression inside the switch and compares it with the constants of each case. When it finds a matching case, it executes the associated code block. If the break statement is encountered, the switch case block is terminated, and control is passed to the next line of code after the switch block. If no match is found, and a default case is provided, the code in the default block is executed.

![Switch in CPP](../../static/img/day-07/switch-case.png)

### 4. C++ Switch Case Statement Example
Here is a simple example of using a switch case statement in C++:

```cpp
#include <iostream>
using namespace std;

int main() {
    int day = 4;

    switch (day) {
        case 1:
            cout << "Monday";
            break;
        case 2:
            cout << "Tuesday";
            break;
        case 3:
            cout << "Wednesday";
            break;
        case 4:
            cout << "Thursday";
            break;
        case 5:
            cout << "Friday";
            break;
        case 6:
            cout << "Saturday";
            break;
        case 7:
            cout << "Sunday";
            break;
        default:
            cout << "Invalid day";
    }

    return 0;
}
```
In this example, the output will be:
```
Thursday
```
### 5. C++ Switch Case Statement with Break
The break statement is crucial in a switch case to prevent the fall-through behavior, where execution continues to the next case even after a match is found. Here’s an example demonstrating its importance:
```cpp
#include <iostream>
using namespace std;

int main() {
    int number = 2;

    switch (number) {
        case 1:
            cout << "Number is 1";
            break;
        case 2:
            cout << "Number is 2";
            // No break statement here
        case 3:
            cout << " or maybe 3";
            break;
        default:
            cout << "Number is not 1, 2, or 3";
    }

    return 0;
}
```
In this example, the output will be:

```
Number is 2 or maybe 3
```
Without the break statement after case 2, the code "falls through" to case 3, and both case messages are printed.

Using break statements appropriately ensures that only the matching case's code is executed, preventing unexpected behavior.


