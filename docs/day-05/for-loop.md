---
sidebar_position: 2
title: "For Loop in C++"
description: "In this tutorial, we will learn about the for loop in C++ programming with the help of examples. The for loop is used to execute a block of code multiple times."
sidebar_label: "For Loop"
slug: for-loop-in-cpp
---


# C++ For Loop

## What is the For Loop in C++?
A for loop in C++ is a fundamental control structure used to execute a block of code multiple times. It is particularly useful when the number of iterations is known before the loop starts. The for loop is one of the most versatile loops in C++ and allows for concise and clear code. It consists of three main parts: initialization, condition checking, and increment/decrement. These parts are usually handled within the loop statement, making the for loop compact and easy to understand.

IMAGE FILE:
![For Loop](../../static/img/day-05/for-loop-in-cpp.png)

## Syntax of For Loop in C++
The for loop in C++ has a specific syntax that needs to be followed. Here’s the breakdown:

```cpp
for (initialization; condition; increment/decrement) {
    // Code to be executed
}
```
- **Initialization**: This step is executed once at the beginning of the loop. It’s used to initialize loop control variables. For example, int i = 0;.

- **Condition**: This boolean expression is evaluated before each iteration of the loop. If the condition is true, the loop body is executed. If it’s false, the loop terminates. For example, i < 10.

- **Increment / Decrement**: This step is executed after each iteration of the loop body. It’s used to update the loop control variables. For example, i++ or i += 2.

Here is a practical example:
```cpp
#include <iostream>
using namespace std;

int main() {

    for (int i = 0; i < 10; i++) {
        cout << "Iteration: " << i << endl;
    }

    return 0;
}
```

In this example:

- The loop starts with i = 0.

- It checks the condition i < 10.
 - If the condition is true, it prints the value of iand increments i by 1.
- The loop repeats until i is no longer less than 10.

## C++ for Loop 

Let's look at a more detailed example that calculates the sum of the first 10 natural numbers:

```cpp
#include <iostream>
using namespace std;

int main() {
    int sum = 0;

    for (int i = 1; i <= 10; i++) {
        sum += i;
    }

    cout << "The sum of the first 10 natural numbers is: " << sum << endl;
    return 0;
}
```

In this example:

- We initialize sum to 0.

- The loop variable i starts at 1 and increments until it reaches 10.
 - In each iteration, the value of i is added to sum.
- After the loop ends, the sum is printed.

## 4. C++ Infinite for Loop
An infinite for loop runs indefinitely because the terminating condition is never met. This can be useful in programs that need to run continuously until an external event occurs, such as user input or a signal from another part of the program.

Here is an example of an infinite for loop:

```cpp
#include <iostream>
using namespace std;

int main() {
    for (;;) {
        cout << "This loop will run forever" << endl;
        // You can include a break condition to exit the loop
        // For example, if you want to break the loop after some condition
        // if (someCondition) break;
    }
    return 0;
}
```

In this example:

- The initialization, condition, and increment/decrement are omitted.

- The loop runs forever, repeatedly printing the message.

- A break statement can be added to exit the loop based on a specific condition.

## 5. C++ Nested for Loop

Nested for loops are loops within loops. They are often used to work with multi-dimensional data structures, like matrices or tables. Here’s an example of nested for loops to print a multiplication table:

```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 10; i++) {

        for (int j = 1; j <= 10; j++) {
            cout << i << " * " << j << " = " << i * j << "\t";
        }

        cout << endl;
    }

    return 0;
}
```

In this example:

- The outer loop iterates from 1 to 10 (rows of the table).

- The inner loop iterates from 1 to 10 for each iteration of the outer loop (columns of the table).

- The product of i and j is printed, resulting in a multiplication table.

- Each row of the table is printed by the inner loop, and after the inner loop completes, a new line is started by the outer loop.