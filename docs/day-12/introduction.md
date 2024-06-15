---
sidebar_position: 1
title: "Introduction to Constructors"
description: "A constructor is a special member function that is executed whenever an object of the class is created. "
sidebar_label: "Introduction"
slug: introduction
---

### Definition

A constructor is a special member function that is executed whenever an object of the class is created. Constructors are used to initialize objects.

![introduction](../../static/img/day-12/introduction.png)

### Syntax
The constructor has the same name as the class and does not have a return type.

```cpp
class ClassName {
public:
    ClassName() {
        // Constructor body
    }
};
```