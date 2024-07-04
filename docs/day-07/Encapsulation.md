---
sidebar_position: 3
title: "Encapsulation in OOPS"
description: "Encapsulation is one of the fundamental concepts in Object-Oriented Programming (OOP) that facilitates the bundling of data (attributes) and methods (functions) that operate on the data into a single unit (class). "
sidebar_label: "Encapsulation in OOPS"
slug: Encapsulation in OOPS
---

Encapsulation is one of the fundamental concepts in Object-Oriented Programming (OOP) that facilitates the bundling of data (attributes) and methods (functions) that operate on the data into a single unit (class). It is often described as the mechanism that restricts direct access to some of an object's components, usually to increase modularity and flexibility of the code.

### Key Aspects of Encapsulation:

1. **Data Hiding**: Encapsulation hides the internal state (data members) of an object from the outside world. This means that the data within an object is not directly accessible to other classes or functions, which prevents unintended or unauthorized access and modification.

2. **Access Control**: By using access specifiers (`public`, `private`, `protected`), encapsulation controls how the data can be accessed and modified. Typically:
   - **Private members** are accessible only within the same class. They are hidden from the outside world.
   - **Public members** are accessible from outside the class. They define the interface through which the outside world interacts with the object.

3. **Information Hiding**: Encapsulation enables information hiding, which means that the internal details or implementation of an object are hidden and inaccessible to users of the object. Only the interface (public methods) is exposed, which abstracts away the complex implementation details.

### Example Demonstrating Encapsulation:

Let's revisit the `Car` class example and demonstrate encapsulation:

```cpp
#include <iostream>
#include <string>
using namespace std;

// Example of a class demonstrating encapsulation
class Car {
private:
    string brand;  // Private member variable
    int year;      // Private member variable

public:
    // Constructor to initialize private variables
    Car(string b, int y) {
        brand = b;
        year = y;
    }

    // Public method to display details
    void displayDetails() {
        cout << "Brand: " << brand << ", Year: " << year << endl;
    }

    // Getter method for brand (Accesses private member)
    string getBrand() {
        return brand;
    }

    // Setter method for year (Modifies private member)
    void setYear(int y) {
        year = y;
    }
};

int main() {
    // Creating an object of the Car class
    Car car1("Toyota", 2022);

    // Accessing and modifying private members using public methods
    car1.displayDetails();    // Output: Brand: Toyota, Year: 2022

    // Accessing private member brand using getter method
    cout << "Brand of car1: " << car1.getBrand() << endl;  // Output: Brand of car1: Toyota

    // Modifying private member year using setter method
    car1.setYear(2023);
    car1.displayDetails();    // Output: Brand: Toyota, Year: 2023

    return 0;
}
```

### Explanation:

- **Private Members**: In the `Car` class, `brand` and `year` are declared as private members. They are not accessible directly from outside the class, ensuring data hiding and encapsulation.

- **Public Methods**: `displayDetails()`, `getBrand()`, and `setYear()` are public methods of the `Car` class. They provide controlled access to the private members:
  - `displayDetails()` method allows displaying the details of the car object (`brand` and `year`).
  - `getBrand()` method is a getter that returns the value of the private member `brand`, allowing controlled access to retrieve the brand information.
  - `setYear(int y)` method is a setter that modifies the value of the private member `year`, allowing controlled modification of the year information.

- **Usage in `main()` Function**: In `main()`, we create an object `car1` of the `Car` class and demonstrate how to access and modify the private members (`brand` and `year`) using the public methods (`getBrand()` and `setYear()`).

### Benefits of Encapsulation:

- **Modularity**: Encapsulation promotes modularity by dividing the program into smaller, manageable parts (classes) with clearly defined interfaces.
  
- **Security**: Data hiding ensures that sensitive data is not accessible directly, reducing the risk of accidental modification or misuse.

- **Flexibility and Maintainability**: Encapsulation allows the internal implementation details of an object to change without affecting other parts of the program, as long as the public interface remains unchanged.

- **Code Reusability**: Encapsulated classes can be reused in different parts of a program or in different programs, promoting code reusability.
 