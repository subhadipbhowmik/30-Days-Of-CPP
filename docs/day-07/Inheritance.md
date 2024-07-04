---
sidebar_position: 4
title: "Inheritance in OOPS"
description: "Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows one class (subclass or derived class) to inherit properties and behaviors from another class (superclass or base class)"
sidebar_label: "Inheritance in OOPS"
slug: Inheritance in OOPS
---

Inheritance is a fundamental concept in Object-Oriented Programming (OOP) that allows one class (subclass or derived class) to inherit properties and behaviors from another class (superclass or base class). This promotes code reuse and facilitates the creation of hierarchical relationships between classes.

### Key Aspects of Inheritance:

1. **Base Class (Superclass)**: The class whose properties and behaviors are inherited by another class is called the base class or superclass.

2. **Derived Class (Subclass)**: The class that inherits properties and behaviors from another class is called the derived class or subclass.

3. **Extending Functionality**: Inheritance allows the subclass to extend or modify the behavior of the superclass without altering the original implementation of the superclass.

4. **Types of Inheritance**:
   - **Single Inheritance**: A subclass inherits from only one superclass.
   - **Multiple Inheritance**: A subclass inherits from multiple superclasses (supported in some languages like C++).
   - **Multilevel Inheritance**: A subclass inherits from another subclass, forming a chain of inheritance.
   - **Hierarchical Inheritance**: Multiple subclasses inherit from the same superclass.

### Example Demonstrating Inheritance:

Let's illustrate inheritance with a practical example in C++:

```cpp
#include <iostream>
#include <string>
using namespace std;

// Base class (Superclass)
class Vehicle {
protected:  // Protected access specifier
    string brand;

public:
    // Constructor of the base class
    Vehicle(string b) {
        brand = b;
    }

    // Method to display information
    void displayInfo() {
        cout << "Brand: " << brand << endl;
    }
};

// Derived class (Subclass) inheriting from Vehicle
class Car : public Vehicle {
private:
    int year;

public:
    // Constructor of the derived class
    Car(string b, int y) : Vehicle(b) {
        year = y;
    }

    // Method to display car details (overrides displayInfo() method)
    void displayDetails() {
        cout << "Car Details:" << endl;
        displayInfo();  // Accessing base class method
        cout << "Year: " << year << endl;
    }
};

int main() {
    // Creating an object of the derived class Car
    Car car1("Toyota", 2022);

    // Using methods of the derived class
    car1.displayDetails();

    return 0;
}
```

### Explanation:

- **Base Class `Vehicle`**: The `Vehicle` class is defined as a base class with a `brand` attribute and a method `displayInfo()` to display the brand.

- **Derived Class `Car`**: The `Car` class inherits from `Vehicle` using `public` inheritance (`class Car : public Vehicle`). This means that `Car` inherits all the public and protected members of `Vehicle`.

- **Constructor Initialization**: In the `Car` constructor (`Car(string b, int y) : Vehicle(b)`), the `Vehicle` constructor is called explicitly to initialize the `brand` attribute inherited from `Vehicle`.

- **Method Overriding**: The `displayDetails()` method in `Car` overrides the `displayInfo()` method from `Vehicle`. It calls the `displayInfo()` method of the base class (`Vehicle`) using `displayInfo()` and then displays additional information (`year` of the car).

- **Usage in `main()` Function**: In `main()`, an object `car1` of class `Car` is created with the brand "Toyota" and year 2022. It demonstrates how the derived class (`Car`) inherits and extends functionality from the base class (`Vehicle`) and uses both inherited and new methods (`displayInfo()` and `displayDetails()`).

### Benefits of Inheritance:

- **Code Reuse**: Inheritance promotes code reuse by allowing subclasses to inherit existing functionality from their superclass, reducing redundancy and improving maintainability.

- **Hierarchy**: It enables the creation of hierarchical relationships among classes, reflecting real-world relationships and enhancing the organization of code.

- **Polymorphism**: Inheritance facilitates polymorphism, where objects of different classes can be treated as objects of their superclass, allowing for more flexible and modular code.

- **Extensibility**: Subclasses can extend or modify the behavior of their superclass, adding new features or refining existing ones without modifying the base class. 