---
sidebar_position: 4
title: "Arithmetic Operators"
description: "In this tutorial, we will learn about Arithmetic Operators in C++ programming with the help of examples."
sidebar_label: "Arithmetic Operators"
slug: Arithmetic-Operators-cpp
---

# Arithmetic Operators in C++

Arithmetic operators in C++ are symbols used to perform mathematical operations on operands. These operators allow you to perform addition, subtraction, multiplication, division, and modulus operations.

## Addition (+)

Adds two operands together.

```cpp

int result = 5 + 3; // result will be 8

```
## Subtraction (-)

Subtracts the right operand from the left operand.

```cpp

int result = 7 - 4; // result will be 3

```
## Multiplication (*)

Multiplies two operands.

```cpp

int result = 6 * 2; // result will be 12

```

## Division (/)

Divides the left operand by the right operand. If both operands are integers, the result will be an integer, with any remainder discarded.

```cpp

int result = 10 / 3; // result will be 3

```
If you want to get a floating-point result, you can use floating-point operands:

```cpp

double result = 10.0 / 3.0; // result will be approximately 3.33333

```

## Modulus (%)

Returns the remainder of the division of the left operand by the right operand.

```cpp

int result = 10 % 3; // result will be 1

```
These operators can be used with variables, constants, or expressions. They follow the usual rules of precedence and associativity. Additionally, parentheses can be used to enforce a specific order of evaluation.

## Precedence and Associativity of Arithmetic Operators

### Precedence

Precedence determines the order in which different operators are applied in an expression. In C++, the arithmetic operators are grouped into two precedence levels:

- High Precedence:
  - Multiplication(*)
  - Division(/)
  - Modulus(%)
- Low Precedence:
  - Additio(+)
  - Subtraction(-)

### Associativity

The associativity of arithmetic operators in C++ is left-to-right,i.e, when two operators of the same precedence appear in an expression, they are evaluated from left to right.

