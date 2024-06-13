---
sidebar_position: 3
title: "Member Initializer List"
description: "Constructors can also initialize class members using an initializer list, which can be more efficient."
sidebar_label: "Member Initializer List"
slug: member-init-list
---

### What does it mean?

Constructors can also initialize class members using an initializer list, which can be more efficient.

```cpp
class Example {
public:
    int value;

    // Using Initializer List
    Example(int v) : value(v) {
        std::cout << "Constructor with Initializer List Called" << std::endl;
    }
};
```
Using an initializer list is often more efficient than assigning values in the constructor body, especially for complex data members or base class initialization.

![member-init-list](../../static/img/day-12/member-init-list.png)
