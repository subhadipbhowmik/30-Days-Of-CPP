---
sidebar_position: 6
title: "Logical Operators"
description: "In this tutorial, we will learn about Logical Operators in C++ programming with the help of examples."
sidebar_label: "Logical Operators"
slug: Logical-Operators-cpp
---
# Logical Operators in C++

This repository provides an explanation of logical operators in C++, along with examples of their usage.

## Table of Contents

- [Introduction](#introduction)
- [Logical Operators](#logical-operators)
  - [AND (`&&`)](#and-)
  - [OR (`||`)](#or-)
  - [NOT (`!`)](#not-)
- [Examples](#examples)

## Introduction

Logical operators in C++ are used to perform logical operations on boolean operands. This document provides an overview of these operators and demonstrates their usage through examples.

## Logical Operators

### AND (`&&`)

The AND operator returns `true` if both operands are `true`, otherwise it returns `false`.

### OR (`||`)

The OR operator returns `true` if at least one of the operands is `true`, otherwise it returns `false`.

### NOT (`!`)

The NOT operator negates the value of its operand. If the operand is `true`, it returns `false`, and if the operand is `false`, it returns `true`.

## Examples

```cpp
bool a = true;
bool b = false;

// Using AND operator
bool result = (a && b); // result will be false

// Using OR operator
result = (a || b); // result will be true

// Using NOT operator
result = !a; // result will be false
```