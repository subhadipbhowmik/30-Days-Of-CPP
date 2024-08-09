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
### Example 2: Display Even Numbers from 2 to 10
```cpp
#include <iostream>

int main() {
    int i = 2;
    while (i <= 10) {
        std::cout << i << std::endl;
        i += 2;
    }
    return 0;
}
```

### Example 3: Calculate the Sum of Natural Numbers from 1 to 10
```cpp
#include <iostream>

int main() {
    int i = 1;
    int sum = 0;
    while (i <= 10) {
        sum += i;
        i++;
    }
    std::cout << "Sum = " << sum << std::endl;
    return 0;
}
```
### Example 4: Check if a Number is Prime

```cpp
#include <iostream>

int main() {
    int num;
    bool isPrime = true;
    std::cout << "Enter a number: ";
    std::cin >> num;

    int i = 2;
    while (i <= num / 2) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
        i++;
    }

    if (isPrime)
        std::cout << num << " is a prime number." << std::endl;
    else
        std::cout << num << " is not a prime number." << std::endl;

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

### Example 5: Display Numbers from 1 to 5

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

### Example 6: Display Odd Numbers from 1 to 9

```cpp
#include <iostream>

int main() {
    int i = 1;
    do {
        std::cout << i << std::endl;
        i += 2;
    } while (i < 10);
    return 0;
}
```
### Example 7: Display Multiplication Table of a Given Number

```cpp
#include <iostream>

int main() {
    int num;
    std::cout << "Enter a number: ";
    std::cin >> num;

    int i = 1;
    do {
        std::cout << num << " * " << i << " = " << num * i << std::endl;
        i++;
    } while (i <= 10);

    return 0;
}
```
### Example 8: Sum of Digits of a Number

```cpp
#include <iostream>

int main() {
    int num, sum = 0;
    std::cout << "Enter a number: ";
    std::cin >> num;

    do {
        sum += num % 10;
        num /= 10;
    } while (num != 0);

    std::cout << "Sum of digits = " << sum << std::endl;

    return 0;
}
```
### Example 9: Reverse a Number
```cpp
#include <iostream>

int main() {
    int num, reversed = 0;
    std::cout << "Enter a number: ";
    std::cin >> num;

    do {
        int digit = num % 10;
        reversed = reversed * 10 + digit;
        num /= 10;
    } while (num != 0);

    std::cout << "Reversed number = " << reversed << std::endl;

    return 0;
}
```

### Example 10: Find the Greatest Common Divisor (GCD) of Two Numbers

```cpp
#include <iostream>

int main() {
    int a, b;
    std::cout << "Enter two numbers: ";
    std::cin >> a >> b;

    do {
        if (a > b)
            a -= b;
        else
            b -= a;
    } while (a != b);

    std::cout << "GCD = " << a << std::endl;

    return 0;
}
```

