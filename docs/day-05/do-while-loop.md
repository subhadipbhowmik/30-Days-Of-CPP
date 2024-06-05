---
sidebar_position: 3
title: "While and Do-While Loop in C++"
description: "In this tutorial, we will learn about the while and do-while loop in C++ programming with the help of examples. The while loop is used to execute a block of code multiple times."
sidebar_label: "While and Do-While Loop"
slug: while-and-do-while-loop-in-cpp
---

TASK:

1. C++ while and do...while Loop
2. C++ while Loop
3. Flowchart of while Loop
4. Example 1: Display Numbers from 1 to 5
5. C++ do...while Loop
6. Flowchart of do...while Loop
7. Example 2: Display Numbers from 1 to 5

IMAGE FILE:
![Do While Loop](../../static/img/day-05/while-do-while-loop-in-cpp.png)TASK:

## 1. C++ while and do...while Loop

The `while`loop loops through a block of code as long as a specified condition is true:

The `do/while` loop is a variant of the `while` loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

IMAGE FILE:
![Do While Loop](../../static/img/day-05/while-do-while-loop-in-cpp.png)

## 2. C++ while Loop

The `while`loop loops through a block of code as long as a specified condition is true:

### Syntax
```cpp
while (condition) {
  // code block to be executed
}

```

## 3. Example 1: Display Numbers from 1 to 5

The program uses a while loop to print numbers from 1 to 5 to the console.
```cpp
#include <iostream>

using namespace std;

int main() {
    int i = 1;
    while (i <= 5) {
        cout << i << endl;
        ++i;
    }
    return 0;
}

```
## 4. C++ do...while Loop

The `do/while` loop is a variant of the `while` loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

### Syntax
```cpp
do {
  // code block to be executed
}
while (condition);
```

## 5. Example 2: Display Numbers from 1 to 5

The program uses a do-while loop to print numbers from 1 to 5 to the console.

```cpp
#include <iostream>

using namespace std;

int main() {
    int i = 1;
    do {
        cout << i << endl;
        ++i;
    } while (i <= 5);
    return 0;
}
```
