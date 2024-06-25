---
sidebar_position: 2
title: "Types of Polymorphism in C++"
description: "In this tutorial, we will learn about Types of Polymorphism in C++ programming with the help of examples."
sidebar_label: "Types of Polymorphism"
slug: Types-of-Polymorphism
---
## Types of Polymorphism
There are two types of polymorphism namely- Compile time Polymorphism and Run Time Polymorphism

Image
[Types of Polymorphism](C:\Users\Shruti\OneDrive\Desktop\30-Days-Of-CPP\static\img\day-19\poly2.png)

## Compile Time Polymorphism
Compile-time polymorphism, also known as static polymorphism, occurs when the method or function to be invoked is determined at compile time. This is primarily achieved through method overloading and operator overloading.

Method Overloading-
Method overloading allows a class to have more than one method with the same name, as long as their parameter lists are different. The difference can be in the number of parameters, the type of parameters, or both.

Example-
class Calculator {
    // Method with 2 integer parameters
    public int add(int a, int b) {
        return a + b;
    }
    
    // Method with 3 integer parameters
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // Method with 2 double parameters
    public double add(double a, double b) {
        return a + b;
    }
    
    // Method with 3 double parameters
    public double add(double a, double b, double c) {
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(5, 10));        // Output: 15
        System.out.println(calc.add(5, 10, 15));    // Output: 30
        System.out.println(calc.add(5.5, 10.5));    // Output: 16.0
        System.out.println(calc.add(5.5, 10.5, 15.5)); // Output: 31.5
    }
}

Operator Overloading-
Operator overloading allows developers to redefine the behavior of operators for user-defined types. While not commonly supported in many mainstream OOP languages (e.g., Java), languages like C++ allow it.

Example-
#include <iostream>
using namespace std;

class Complex {
private:
    float real;
    float imag;
public:
    Complex() : real(0), imag(0) {}
    Complex(float r, float i) : real(r), imag(i) {}

    // Overloading the + operator
    Complex operator + (const Complex &c) {
        Complex result;
        result.real = real + c.real;
        result.imag = imag + c.imag;
        return result;
    }

    void display() {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    Complex c1(3.0, 4.0);
    Complex c2(1.0, 2.0);
    Complex c3;

    c3 = c1 + c2; // Using the overloaded + operator

    c3.display(); // Output: 4.0 + 6.0i

    return 0;
}

## Runtime Polymorphism
Runtime polymorphism, also known as dynamic polymorphism, occurs when a call to an overridden method is resolved at runtime rather than compile time. This is primarily achieved through method overriding, where a subclass provides a specific implementation of a method that is already defined in its superclass. Runtime polymorphism allows a method to behave differently based on the object that invokes it, providing flexibility and enabling more dynamic and extensible code.

Method Overriding-
Method overriding is when a subclass provides a specific implementation for a method that is already defined in its superclass. The overridden method in the subclass should have the same name, return type, and parameter list as the method in the superclass.

Example-
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    // Overriding the sound method
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    // Overriding the sound method
    @Override
    void sound() {
        System.out.println("Cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myAnimal;

        myAnimal = new Dog();
        myAnimal.sound();  // Output: Dog barks

        myAnimal = new Cat();
        myAnimal.sound();  // Output: Cat meows
    }
}

Dynamic Method Dispatch-
Dynamic method dispatch is the mechanism by which a call to an overridden method is resolved at runtime. This process allows a superclass reference variable to refer to a subclass object and call the overridden method of the subclass.

Example
class Vehicle {
    void run() {
        System.out.println("Vehicle is running");
    }
}

class Car extends Vehicle {
    @Override
    void run() {
        System.out.println("Car is running");
    }
}

class Bike extends Vehicle {
    @Override
    void run() {
        System.out.println("Bike is running");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle myVehicle;

        myVehicle = new Car();
        myVehicle.run();  // Output: Car is running

        myVehicle = new Bike();
        myVehicle.run();  // Output: Bike is running
    }
}

## Advantages of Runtime Polymorphism

1) Flexibility and Extensibility: Allows new classes to be added with minimal changes to existing code.
2) Code Reusability: Enables code to be written more generically, which can handle new objects as they are added.
3) Dynamic Behavior: Provides the ability to write code that can behave differently based on the object that invokes it, allowing for more dynamic and flexible applications.