---
sidebar_position: 2
title: "C++ Memory Address"
description: "In this tutorial, we will learn about the concept of C++ memory Address ."
sidebar_label: "C++ Memory Address"
slug: memory address in c++
---

## Memory Address

In the example from the previous page, the & operator was used to create a reference variable. But it can also be used to get the memory address of a variable; which is the location of where the variable is stored on the computer.

When a variable is created in C++, a memory address is assigned to the variable. And when we assign a value to the variable, it is stored in this memory address.

To access it, use the & operator, and the result will represent where the variable is stored:

- ### **Example**
  
    ```cpp
      string food = "Pizza";

      cout << &food; // Outputs 0x6dfed4
    ```

Note: The memory address is in hexadecimal form (0x..). Note that you may not get the same result in your program.
