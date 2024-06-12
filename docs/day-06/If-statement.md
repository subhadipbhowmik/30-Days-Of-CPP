---
sidebar_position: 4
title: "If Statements in C++"
description: "In this tutorial, we will learn about the If Statements in C++ programming with the help of examples. The If statement is used to conditional execution."
sidebar_label: "If Statements in C++"
slug: If-Statements
---
# If Statements in C++

This repository provides an explanation of if statements in C++, along with examples of their usage.

## Table of Contents

- [Introduction](#introduction)
- [Basic If Statement](#basic-if-statement)
- [If-Else Statement](#if-else-statement)
- [Nested If Statements](#nested-if-statements)
- [If-Else If-Else Ladder](#if-else-if-else-ladder)
## Introduction

If statements in C++ are used for conditional execution, allowing you to control the flow of your program based on certain conditions.

## Basic If Statement

```cpp
int x = 10;

if (x > 5) {
    std::cout << "x is greater than 5" << std::endl;
}
```
In this example, the condition `x > 5` is evaluated. If it's true (which it is, since `x` is `10`), the code inside the curly braces `{}` is executed, and "x is greater than 5" is printed.`

## If-Else Statement

```cpp
int y = 2;

if (y % 2 == 0) {
    std::cout << "y is even" << std::endl;
} else {
    std::cout << "y is odd" << std::endl;
}

```
In this example, if `y` is divisible by `2` (i.e., it's an even number), the first block of code is executed. Otherwise, if the condition is false, the code inside the `else` block is executed.`

## Nested If Statements

```cpp
int a = 5;
int b = 10;

if (a > 0) {
    if (b > 5) {
        std::cout << "Both a and b are positive and b is greater than 5" << std::endl;
    }
}

```
Here, we have an if statement nested inside another if statement. Both conditions must be true for the inner block of code to execute.

## If-Else If-Else Ladder

```cpp
int mark = 70;

if (mark >= 90) {
    std::cout << "Grade A" << std::endl;
} else if (mark >= 80) {
    std::cout << "Grade B" << std::endl;
} else if (mark >= 70) {
    std::cout << "Grade C" << std::endl;
} else {
    std::cout << "Grade D" << std::endl;
}

```
In this example, the program checks the value of `mark` against multiple conditions in a sequential manner. Once a condition is met, the corresponding block of code is executed, and the rest of the conditions are skipped.