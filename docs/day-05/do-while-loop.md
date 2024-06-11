---
sidebar_position: 3
title: "While and Do-While Loop in C++"
description: "In this tutorial, we will learn about the while and do-while loop in C++ programming with the help of examples. The while loop is used to execute a block of code multiple times."
sidebar_label: "While and Do-While Loop"
slug: while-and-do-while-loop-in-cpp
---

## while Loop

A `while` loop in C++ repeatedly executes a block of statements as long as a specified condition is true. The condition is evaluated before the execution of the loop's body.



![Do While Loop](../../static/img/day-05/while-do-while-loop-in-cpp.png)




### Flowchart of while Loop

```plaintext
      +----------------------+
      |      Start           |
      +----------------------+
                |
                v
      +----------------------+
      |  Condition?          |
      +----------------------+
         |          |
         |          v
      True         False
         |          |
         v          v
+----------------+  |
|  Loop Body     |  |
+----------------+  |
         |          |
         +----------+
                |
                v
      +----------------------+
      |      End             |
      +----------------------+
```

### Example 1: Display Numbers from 1 to 5

```cpp
#include <iostream>

int main() {
    int i = 1;
    while (i <= 5) {
        std::cout << i << std::endl;
        i++;
    }
    return 0;
}
```

## do...while Loop

A `do...while` loop in C++ is similar to a `while` loop, except that the condition is evaluated after the execution of the loop's body. This guarantees that the loop body is executed at least once.

### Flowchart of do...while Loop

```plaintext
      +----------------------+
      |      Start           |
      +----------------------+
                |
                v
      +----------------------+
      |  Loop Body           |
      +----------------------+
                |
                v
      +----------------------+
      |  Condition?          |
      +----------------------+
         |          |
         |          v
      True         False
         |          |
         v          v
+----------------+  |
|  Loop Body     |  |
+----------------+  |
         |          |
         +----------+
                |
                v
      +----------------------+
      |      End             |
      +----------------------+
```

### Example 2: Display Numbers from 1 to 5

```cpp
#include <iostream>

int main() {
    int i = 1;
    do {
        std::cout << i << std::endl;
        i++;
    } while (i <= 5);
    return 0;
}
```
