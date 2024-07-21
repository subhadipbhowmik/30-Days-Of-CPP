---
sidebar_position: 2
title: "Input and Output in C++"
description: "In this tutorial, we will learn to use the cin object to take input from the user, and the cout object to display output to the user with the help of examples."
sidebar_label: "Input and Output"
slug: input-output-in-cpp
---

import BackToTop from '@site/src/components/BackToTop/BackToTop';

## What is Input and Output in C++?

Input and Output (I/O) in C++ refer to the process of communicating with the user or other parts of the program. Input typically involves receiving data from an external source, such as the user via keyboard, or from a file. Output involves displaying information to the user, writing data to files, or sending data to other devices.




IMAGE FILE:
![Input Output in CPP](../../static/img/day-04/input-output-in-cpp.png)


## Why do we use Input and Output in C++?

Input and Output are essential for creating interactive programs. They allow users to provide input to the program, which can then process the data and produce output, making the program more useful and versatile.

## How to take input from the user in C++?

In C++, you can take input from the user using the `std::cin` object, which is part of the `<iostream>` library. Here's an example:

```cpp
#include <iostream>

int main() {
    int num;
    std::cout << "Enter a number: ";
    std::cin >> num;
    std::cout << "You entered: " << num << std::endl;
    return 0;
}
```

## How to display output to the user in C++?

To display output to the user in C++, you can use the `std::cout` object, also part of the `<iostream>` library. Here's an example:

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, world!" << std::endl;
    return 0;
}
```

## Take Multiple Inputs from the User in C++

To take multiple inputs from the user in C++, you can simply use multiple `std::cin` statements. Here's an example:

```cpp
#include <iostream>

int main() {
    int num1, num2;
    std::cout << "Enter two numbers: ";
    std::cin >> num1 >> num2;
    std::cout << "Sum: " << num1 + num2 << std::endl;
    return 0;
}
```

<BackToTop />