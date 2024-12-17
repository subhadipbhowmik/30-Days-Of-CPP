---
sidebar_position: 2
title: "Class and Object"
description: Classes are user-defined data types that encapsulate data (attributes) and functions (methods) into a single unit. They serve as blueprints for creating objects."
sidebar_label: "Class and Object"
slug: Class and Object
---  

### Class

In OOP, a **class** is a blueprint or template for creating objects. It defines a blueprint for how an object should be structured (its attributes) and what actions it can perform (its methods). Think of a class as a blueprint for a house: it specifies what the house will look like and what features it will have.

**Example:**

```cpp
// Example of a class in C++
#include <iostream>
using namespace std;

// Defining a class named Car
class Car {
private:  // Private members are only accessible within the class
    string brand;
    int year;

public:  // Public members are accessible from outside the class
    // Constructor - initialize object data
    Car(string b, int y) {
        brand = b;
        year = y;
    }

    // Method to display details of the car
    void displayDetails() {
        cout << "Brand: " << brand << ", Year: " << year << endl;
    }
};
```

**Explanation:**

- **Class Definition**: In the example above, `Car` is a class that encapsulates the concept of a car. It has **attributes** (`brand` and `year`) and **methods** (`displayDetails()`).

- **Private Members**: `brand` and `year` are private members of the class, which means they can only be accessed within the `Car` class itself. This is an example of **encapsulation**, where the internal state of an object is protected from outside interference.

- **Public Members**: `Car(string b, int y)` is a **constructor**. Constructors are special methods that are automatically called when an object of the class is created. They initialize the object's state. In this case, it initializes the `brand` and `year` attributes based on the values provided during object creation.

- **Methods**: `displayDetails()` is a method that belongs to the `Car` class. It is a **public method** because it's declared under the `public` section of the class. This method displays the details of the car (its `brand` and `year`).

### Object

An **object** is an instance of a class. It is a concrete entity based on the blueprint provided by the class. Using our previous analogy, if a class is a blueprint of a house, an object is an actual house built according to that blueprint.

**Example:**

```cpp
int main() {
    // Creating objects of the Car class
    Car car1("Toyota", 2022);
    Car car2("BMW", 2023);

    // Using object methods to display details
    car1.displayDetails();  // Output: Brand: Toyota, Year: 2022
    car2.displayDetails();  // Output: Brand: BMW, Year: 2023

    return 0;
}
```

**Explanation:**

- **Object Creation**: `car1` and `car2` are objects of the `Car` class. They are created using the constructor `Car(string b, int y)`. When `car1` is created, it initializes `brand` as "Toyota" and `year` as 2022. Similarly, `car2` initializes `brand` as "BMW" and `year` as 2023.

- **Method Invocation**: `car1.displayDetails()` and `car2.displayDetails()` are method calls on the objects `car1` and `car2`, respectively. These calls invoke the `displayDetails()` method defined in the `Car` class, which outputs the details (`brand` and `year`) of each car object.
 