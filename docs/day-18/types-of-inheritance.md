---
sidebar_position: 2
title: "Types of inheritance in C++"
description: "In this tutorial, we will learn about types of inheritance in C++ programming with the help of examples."
sidebar_label: "Types of inheritance in C++"
slug: Types-of-inheritance
---

## Types Of Inheritance
There are five types of inheritance in c++. They are-
1) Single inheritance
2) Multilevel inheritance
3) Multiple inheritance
4) Hierarchical inheritance
5) Hybrid inheritance


IMAGE FILE:
![Types of Inheritance in c++](C:\Users\Shruti\OneDrive\Desktop\30-Days-Of-CPP\static\img\day-18\inheritance2.png)

## Single Inheritance
Single Inheritance is the most primitive among all the types of inheritance in C++. In this inheritance, a single class inherits the properties of a base class. All the data members of the base class are accessed by the derived class according to the visibility mode (i.e., private, protected, and public) that is specified during the inheritance.

Syntax-
class base_class_1

{

    // class definition

};

class derived_class: visibility_mode base_class_1

{

    // class definition

};

Example-

#include <iostream>
using namespace std;
class electronicDevice
{
public:
    electronicDevice()
    {
        cout << "I am an electronic device.\n\n";
    }
};
class Computer: public electronicDevice
{
public:
Computer()
{
cout << "I am a computer.\n\n";
}

};

int main()

{
Computer obj; 
return 0;
}

## Multiple Inheritance
Multiple Inheritance is a feature of C++ where a class can inherit from more than one classes.  The constructors of inherited classes are called in the same order in which they are inherited. A class can be derived from more than one base class.

Syntax-
class DerivedClass : accessSpecifier1 BaseClass1, accessSpecifier2 BaseClass2, ... {
    // Class members and methods
};

Example-

#include <iostream>

// Base class 1
class Base1 {
public:
    void show() {
        std::cout << "Base1 class" << std::endl;
    }
};

// Base class 2
class Base2 {
public:
    void display() {
        std::cout << "Base2 class" << std::endl;
    }
};

// Derived class
class Derived : public Base1, public Base2 {
public:
    void print() {
        std::cout << "Derived class" << std::endl;
    }
};

int main() {
    Derived obj;
    obj.show();     // Function from Base1
    obj.display();  // Function from Base2
    obj.print();    // Function from Derived
    return 0;
}

## Multilevel inheritance
Multilevel inheritance in C++ involves a class being derived from another class, which in turn is derived from another class. This creates a chain of inheritance.

Syntax-
class BaseClass {
    // Base class members
};

class DerivedClass1 : accessSpecifier BaseClass {
    // Derived class 1 members
};

class DerivedClass2 : accessSpecifier DerivedClass1 {
    // Derived class 2 members
};

Example-

#include <iostream>

// Base class
class Animal {
public:
    void eat() {
        std::cout << "Eating..." << std::endl;
    }
};

// Derived class 1
class Mammal : public Animal {
public:
    void breathe() {
        std::cout << "Breathing..." << std::endl;
    }
};

// Derived class 2
class Human : public Mammal {
public:
    void speak() {
        std::cout << "Speaking..." << std::endl;
    }
};

int main() {
    Human person;
    person.eat();    // Inherited from Animal
    person.breathe();// Inherited from Mammal
    person.speak();  // Defined in Human
    return 0;
}

## Heirarchial Inheritance
Hierarchical inheritance in C++ involves multiple derived classes inheriting from a single base class. This type of inheritance is useful when you want to create different classes that share a common set of characteristics or behaviors defined in a single base class.

Synatx-
class BaseClass {
    // Base class members
};

class DerivedClass1 : accessSpecifier BaseClass {
    // Derived class 1 members
};

class DerivedClass2 : accessSpecifier BaseClass {
    // Derived class 2 members
};

Example-
#include <iostream>

// Base class
class Animal {
public:
    void eat() {
        std::cout << "Eating..." << std::endl;
    }
};

// Derived class 1
class Mammal : public Animal {
public:
    void breathe() {
        std::cout << "Breathing..." << std::endl;
    }
};

// Derived class 2
class Bird : public Animal {
public:
    void fly() {
        std::cout << "Flying..." << std::endl;
    }
};

// Derived class 3
class Fish : public Animal {
public:
    void swim() {
        std::cout << "Swimming..." << std::endl;
    }
};

int main() {
    Mammal dog;
    Bird eagle;
    Fish salmon;

    dog.eat();    // Inherited from Animal
    dog.breathe();// Defined in Mammal

    eagle.eat();  // Inherited from Animal
    eagle.fly();  // Defined in Bird

    salmon.eat(); // Inherited from Animal
    salmon.swim();// Defined in Fish

    return 0;
}

## Hybrid Inheritance
Hybrid inheritance in C++ is a combination of two or more types of inheritance. It can be a mix of single, multiple, multilevel, and hierarchical inheritance. This kind of inheritance allows for more complex relationships between classes.

Example-

#include <iostream>

// Base class
class Vehicle {
public:
    Vehicle() {
        std::cout << "Vehicle constructor called" << std::endl;
    }
    void start() {
        std::cout << "Vehicle started" << std::endl;
    }
};

// Derived class 1 from Vehicle
class Car : public Vehicle {
public:
    Car() {
        std::cout << "Car constructor called" << std::endl;
    }
    void drive() {
        std::cout << "Car driving" << std::endl;
    }
};

// Another Base class
class Engine {
public:
    Engine() {
        std::cout << "Engine constructor called" << std::endl;
    }
    void run() {
        std::cout << "Engine running" << std::endl;
    }
};

// Derived class 2 from both Vehicle and Engine
class HybridCar : public Car, public Engine {
public:
    HybridCar() {
        std::cout << "HybridCar constructor called" << std::endl;
    }
    void display() {
        std::cout << "HybridCar display" << std::endl;
    }
};

int main() {
    HybridCar myHybridCar;
    myHybridCar.start();  // From Vehicle class
    myHybridCar.drive();  // From Car class
    myHybridCar.run();    // From Engine class
    myHybridCar.display();// From HybridCar class

    return 0;
}

