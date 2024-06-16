---
sidebar_position: 3
title: "Concepts of OOP - Objects"
description: "In this tutorial, we will learn how to create and use objects in Object-Oriented Programming (OOP) with the help of examples. Objects are instances of classes."
sidebar_label: "Objects"
slug: concepts-of-oop-objects
---

## Objects

Objects are instances of classes. They are created using the class definition and can be used to access member variables and functions.

- **Creating an Object:**
  - Syntax:
    ```cpp
    ClassName objectName;
    ```
  - Example:
    ```cpp
    Car myCar;
    ```

- **Accessing Members:**
  - Member variables and functions are accessed using the dot operator (`.`).
  - Example:
    ```cpp
    myCar.brand = "Toyota";
    myCar.model = "Corolla";
    myCar.year = 2020;
    myCar.displayInfo();
    ```

- **Example Program:**
  - Creating and using an object of the `Car` class:
    ```cpp
    #include <iostream>
    using namespace std;

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

    int main() {
        Car myCar;
        myCar.brand = "Toyota";
        myCar.model = "Corolla";
        myCar.year = 2020;
        myCar.displayInfo();

        return 0;
    }
    ```

In this example, an object `myCar` of the class `Car` is created, and its member variables are accessed and modified.
