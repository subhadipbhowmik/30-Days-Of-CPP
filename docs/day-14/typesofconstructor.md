---
sidebar_position: 2
title: "Types of Constructors in C++"
description: "In this tutorial, we will learn about different types of constructors in C++ programming, including default, parameterized, copy, and delegating constructors."
sidebar_label: "Types of Constructors"
slug: types-of-constructors-in-cpp
---

## Types of Constructors in C++

There are several types of constructors in C++ that serve different purposes and have different ways of initializing objects.

- ### **Default Constructor:**
  - A constructor with no parameters.
  - Automatically called when an object is created with no arguments.
  - Example:
    ```cpp
    class Car {
    public:
        // Default Constructor
        Car() {
            // Initialization code
        }
    };
    ```

- ### **Parameterized Constructor:**
  - A constructor with parameters.
  - Used to initialize member variables with values provided during object creation.
  - Example:
    ```cpp
    class Car {
    public:
        // Parameterized Constructor
        Car(string b, string m, int y) {
            brand = b;
            model = m;
            year = y;
        }
    };
    ```

- ### **Copy Constructor:**
  - A constructor that creates a new object as a copy of an existing object.
  - Automatically called when a new object is initialized with an existing object.
  - Example:
    ```cpp
    class Car {
    public:
        // Copy Constructor
        Car(const Car &other) {
            brand = other.brand;
            model = other.model;
            year = other.year;
        }
    };
    ```

- ### **Delegating Constructor:**
  - A constructor that calls another constructor of the same class.
  - Used to avoid code duplication by reusing initialization logic.
  - Example:
    ```cpp
    class Car {
    public:
        // Delegating Constructor
        Car() : Car("Unknown", "Unknown", 0) {}
    };
    ```

Each type of constructor serves a specific purpose and allows for flexible object initialization in C++.

