---
sidebar_position: 2
title: "Concepts of OOP - Classes"
description: "In this tutorial, we will learn about the concept of classes in Object-Oriented Programming (OOP) with the help of examples. Classes are the blueprint for creating objects."
sidebar_label: "Classes"
slug: concepts-of-oop-classes
---

## Classes

Classes are the fundamental building blocks of Object-Oriented Programming (OOP). A class is a blueprint for creating objects, providing initial values for state (member variables or attributes), and implementations of behavior (member functions or methods).

- ### **Defining a Class:**
  - A class definition starts with the keyword `class` followed by the class name and a pair of curly braces `{}`.
  - Member variables and member functions are declared within the class body.
  - Syntax:
    ```cpp
    class ClassName {
    public:
        // Member variables
        // Member functions
    };
    ```

- **Example:**
  - Defining a simple class `Car`:
    ```cpp
    class Car {
    public:
        string brand;
        string model;
        int year;

        void displayInfo() {
            cout << "Brand: " << brand << endl;
            cout << "Model: " << model << endl;
            cout << "Year: " << year << endl;
        }
    };
    ```

In this example, `Car` is a class with three member variables (`brand`, `model`, `year`) and one member function (`displayInfo`).
