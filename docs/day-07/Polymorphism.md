---
sidebar_position: 5
title: "Polymorphism in OOPS"
description: "Polymorphism is a core concept in Object-Oriented Programming (OOP) that allows objects of different classes to be treated as objects of a common superclass."
sidebar_label: "Polymorphism in OOPS"
slug: Polymorphism in OOPS
---

Polymorphism is a core concept in Object-Oriented Programming (OOP) that allows objects of different classes to be treated as objects of a common superclass. It enables methods to be defined in multiple forms, allowing them to behave differently based on the object they are invoked upon. Polymorphism enhances flexibility and extensibility in software design by promoting code reuse and allowing code to be written that can work with objects of multiple types.

### Types of Polymorphism:

1. **Compile-time Polymorphism (Static Binding)**:
   - **Function Overloading**: This occurs when multiple functions in the same scope have the same name but different parameters. The correct function is selected during compile-time based on the number and types of arguments passed.

   ```cpp
   // Example of function overloading
   #include <iostream>
   using namespace std;

   class MathOperations {
   public:
       int add(int a, int b) {
           return a + b;
       }

       double add(double a, double b) {
           return a + b;
       }
   };

   int main() {
       MathOperations math;

       cout << math.add(5, 3) << endl;       // Output: 8 (int version of add is called)
       cout << math.add(2.5, 3.7) << endl;   // Output: 6.2 (double version of add is called)

       return 0;
   }
   ```

2. **Run-time Polymorphism (Dynamic Binding)**:
   - **Function Overriding**: This occurs when a derived class provides a specific implementation of a method that is already defined in its base class. The correct method is selected at runtime based on the object's actual type.

   ```cpp
   // Example of function overriding
   #include <iostream>
   using namespace std;

   // Base class
   class Animal {
   public:
       // Virtual function
       virtual void makeSound() {
           cout << "Animal makes a sound" << endl;
       }
   };

   // Derived class
   class Dog : public Animal {
   public:
       // Overridden function
       void makeSound() override {
           cout << "Dog barks" << endl;
       }
   };

   int main() {
       Animal* animal;   // Pointer to base class
       Dog dog;          // Object of derived class

       animal = &dog;    // Assigning address of derived class object to base class pointer

       // Virtual function call
       animal->makeSound();  // Output: Dog barks

       return 0;
   }
   ```

### Explanation:

- **Function Overloading**: In the `MathOperations` class example, `add()` is overloaded with two versions—one for `int` parameters and another for `double` parameters. The compiler determines which version of `add()` to call based on the arguments passed at compile-time.

- **Function Overriding**: In the `Animal` and `Dog` classes example, `makeSound()` is a virtual function in the base class `Animal` and is overridden in the derived class `Dog`. The `makeSound()` method of `Dog` is invoked through a base class pointer pointing to a `Dog` object. This demonstrates run-time polymorphism where the method called is determined dynamically at runtime based on the actual type of the object.

### Benefits of Polymorphism:

- **Flexibility**: Polymorphism allows the same code to be used with different types of objects, promoting code reuse and reducing redundancy.
  
- **Extensibility**: It enables adding new classes and methods without modifying existing code, facilitating easy extension and maintenance of software systems.

- **Modularity**: Polymorphism supports modular programming by encapsulating related behaviors within objects and allowing them to be treated uniformly through their common interfaces.

- **Dynamic Behavior**: Run-time polymorphism allows for dynamic behavior where the specific implementation of a method is determined based on the type of object at runtime, rather than compile-time.
 