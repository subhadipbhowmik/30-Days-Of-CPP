---
sidebar_position: 3
title: "Advanced Concepts in Inheritance"
description: "In this tutorial, we will learn about advanced concepts of inheritance in C++ programming with the help of examples."
sidebar_label: "Adanced Concepts in Inheritance"
slug: Tadvanced-concepts-in-inheritance
---

IMAGE FILE:
![Types of Inheritance in c++](C:\Users\Shruti\OneDrive\Desktop\30-Days-Of-CPP\static\img\day-18\inheritance3.png)


## Virtual Inheritance
Virtual inheritance is a technique used in C++ to solve the diamond problem in multiple inheritance. The diamond problem occurs when a class is derived from two classes that both inherit from a common base class. This results in an ambiguity as the derived class has two copies of the common base class. Virtual inheritance ensures that only one instance of the common base class is shared among the derived classes, thus resolving this ambiguity.

Example-

#include <iostream>

class A {
public:
    void display() {
        std::cout << "Class A" << std::endl;
    }
};

class B : virtual public A { };

class C : virtual public A { };

class D : public B, public C { };

int main() {
    D obj;
    obj.display(); // No ambiguity, calls A's display function
    return 0;
}

## Function Overriding
In C++, function overriding allows a derived class to provide a specific implementation of a method that is already defined in its base class. When a method in a derived class has the same name, return type, and parameters as a method in the base class, the method in the derived class overrides the one in the base class.
To enable function overriding, the method in the base class should be declared with the virtual keyword. This tells the compiler that the method is meant to be overridden in any derived class. When a derived class overrides a virtual method, it provides its own version of the method.

Example-

#include <iostream>

class Base {
public:
    virtual void display() {
        std::cout << "Display from Base class" << std::endl;
    }
};

class Derived : public Base {
public:
    void display() override {
        std::cout << "Display from Derived class" << std::endl;
    }
};

int main() {
    Base* basePtr;
    Derived derivedObj;

    basePtr = &derivedObj;

    // Calls the overridden method in Derived class
    basePtr->display();

    return 0;
}

## Abstract Classes and Pure Virtual Functions
An abstract class in C++ is a class that cannot be instantiated on its own and is meant to be inherited by other classes. It often serves as a base class with a common interface for derived classes. An abstract class is defined by including at least one pure virtual function.
A pure virtual function is a function that has no implementation in the base class and must be overridden in any derived class. It is declared by assigning '0' in its declaration.

Example-

#include <iostream>

// Abstract class
class Shape {
public:
    // Pure virtual function
    virtual void draw() = 0;

    void info() {
        std::cout << "This is a shape." << std::endl;
    }
};

// Derived class
class Circle : public Shape {
public:
    void draw() override {
        std::cout << "Drawing a circle." << std::endl;
    }
};

class Square : public Shape {
public:
    void draw() override {
        std::cout << "Drawing a square." << std::endl;
    }
};

int main() {
    Shape* shape1 = new Circle();
    Shape* shape2 = new Square();

    shape1->draw(); // Calls Circle's draw method
    shape2->draw(); // Calls Square's draw method

    shape1->info(); // Calls Shape's info method
    shape2->info(); // Calls Shape's info method

    delete shape1;
    delete shape2;

    return 0;
}
