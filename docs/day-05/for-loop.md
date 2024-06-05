---
sidebar_position: 2
title: "For Loop in C++"
description: "In this tutorial, we will learn about the for loop in C++ programming with the help of examples. The for loop is used to execute a block of code multiple times."
sidebar_label: "For Loop"
slug: for-loop-in-cpp
---

TASK:

 ## 1. What is the For Loop in C++?

A For loop is a repetition control structure that allows us to write a loop that is executed a specific number of times. The loop enables us to perform n number of steps together in one line. 

### Syntax: 
```cpp
for (initialization expr; test expr; update expr)
{    
     // body of the loop
     // statements we want to execute
}
```
IMAGE FILE:
![For Loop](../../static/img/day-05/for-loop-in-cpp.png)

## 2. Explain the Syntax of For Loop in C++.

### Syntax: 
```cpp
for (initialization expr; test expr; update expr)
{    
     // body of the loop
     // statements we want to execute
}
```
Here,

Initialization – this expression initializes variable(s) and is executed only once.

Condition – if the specified test condition is True, the body of the for loop is executed. In case the test condition returns False, the for loop is terminated.

Update – this expression updates the value of initialized variables and then the condition is evaluated again.

## 3. C++ for Loop Example

The program uses a for loop to print "Hello World!" five times to the console.

## Example
```cpp

#include <iostream>

using namespace std;

int main() {
        for (int i = 1; i <= 5; ++i) {
        cout << i << " ";
    }
    return 0;
}
```

## 4. C++ Infinite for Loop

The program uses a for loop without any conditions, which creates an infinite loop that continuously prints "This loop will run forever." to the console.

## Example
```cpp
#include <iostream>

using namespace std;

int main() {
    for (;;) {
        cout << "This loop will run forever." << endl;
    }
    return 0;
}

```
## 5. C++ Nested for Loop
The program uses nested for loops to iterate through values of i from 1 to 3 and j from 1 to 2, printing each combination to the console.

## Example 
```cpp
#include <iostream>

using namespace std;

int main() {
    for (int i = 1; i <= 3; ++i) {
        for (int j = 1; j <= 2; ++j) {
            cout << "i = " << i << ", j = " << j << endl;
        }
    }
    return 0;
}
