---
sidebar_position: 2
title: "Class and Object in C++"
description: "In this tutorial, we will learn what is class and what is object."
sidebar_label: "Class and Object"
slug: class-and-object-in-cpp
---

## What is Class in C++?
A class is a blueprint or template for creating objects. It defines a type by bundling data and methods that work on the data into a single unit.A class encapsulates data for the object and methods to manipulate that data.

Components of a Class:
1) Data Members: Variables that hold the data for the class.
2) Member Functions: Functions that operate on the data members and define the behavior of the class.

## Syntax
```cpp
class ClassName {
public:
    // Public data members and member functions
    int data;
    void function() {
        // Implementation
    }

private:
    // Private data members and member functions
    int privateData;
    void privateFunction() {
        // Implementation
    }
};
```
## Example
```cpp
class Car {
public:
    string brand;
    string model;
    int year;

    void displayInfo() {
        cout << "Brand: " << brand << ", Model: " << model << ", Year: " << year << endl;
    }
};
```

## What is Object in C++?
An object is an instance of a class. When a class is defined, no memory is allocated until an object of that class is created. An object is a concrete entity based on a class and is composed of data members and member functions as defined in the class.

 ## Creating an Object:
Objects are created by declaring a variable of the class type.

## Syntax
ClassName objectName;

## Example
Car myCar;  // Create an object of type Car
myCar.brand = "Toyota";
myCar.model = "Corolla";
myCar.year = 2020;
myCar.displayInfo();  // Call the member function


IMAGE FILE:
![Class and Object in CPP](C:\Users\Shruti\OneDrive\Desktop\30-Days-Of-CPP\static\img\day-12\oop2.png)