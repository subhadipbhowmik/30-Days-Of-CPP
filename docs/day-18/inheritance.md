---
sidebar_position: 1
title: "Inheritance in C++"
description: "In this tutorial, we will learn about Inheritance in C++ programming."
sidebar_label: "Inheritance"
slug: inheritance-in-cpp
---

## What is inheritance?
The capability of a class to derive properties and characteristics from another class is called Inheritance. Inheritance is one of the most important features of Object-Oriented Programming. 
Inheritance is a feature or a process in which, new classes are created from the existing classes. The new class created is called “derived class” or “child class” and the existing class is known as the “base class” or “parent class”. The derived class now is said to be inherited from the base class. When we say derived class inherits the base class, it means, the derived class inherits all the properties of the base class, without changing the properties of base class and may add new features to its own. 

IMAGE FILE:
![Inheritance in c++](C:\Users\Shruti\OneDrive\Desktop\30-Days-Of-CPP\static\img\day-18\inheritance1.png)

## What Are Child and Parent Classes?
To clearly understand the concept of Inheritance, you must learn about two terms on which the whole concept of inheritance is based - Child class and Parent class.

Child class: The class that inherits the characteristics of another class is known as the child class or derived class. The number of child classes that can be inherited from a single parent class is based upon the type of inheritance. A child class will access the data members of the parent class according to the visibility mode specified during the declaration of the child class.
Parent class: The class from which the child class inherits its properties is called the parent class or base class. A single parent class can derive multiple child classes (Hierarchical Inheritance) or multiple parent classes can inherit a single base class (Multiple Inheritance). This depends on the different types of inheritance in C++.

## Why and when to use inheritance?
Inheritance makes the programming more efficient and is used because of the benefits it provides. The most important usages of inheritance are discussed below: 

1) Code reusability: One of the main reasons to use inheritance is that you can reuse the code. For example, consider a group of animals as separate classes - Tiger, Lion, and Panther. For these classes, you can create member functions like the predator() as they all are predators, canine() as they all have canine teeth to hunt, and claws() as all the three animals have big and sharp claws.  Now, since all the three functions are the same for these classes, making separate functions for all of them will cause data redundancy and can increase the chances of error. So instead of this, you can use inheritance here. You can create a base class named carnivores and add these functions to it and inherit these functions to the tiger, lion, and panther classes.

2) Transitive nature: Inheritance is also used because of its transitive nature. For example, you have a derived class mammal that inherits its properties from the base class animal. Now, because of the transitive nature of the inheritance, all the child classes of ‘mammal’ will inherit the properties of the class ‘animal’ as well. This helps in debugging to a great extent. You can remove the bugs from your base class and all the inherited classes will automatically get debugged.

## Basic Syntax of Inheritance in C++
Defining a Base Class-
class BaseClass {
public:
    int baseAttribute;

    void baseMethod() {
        // Implementation of the base method
    }
};

Defining a Derived Class-
class DerivedClass : public BaseClass {
public:
    int derivedAttribute;

    void derivedMethod() {
        // Implementation of the derived method
    }
};

## Visibility modes
When defining a derived class, you can specify an access specifier (public, protected, or private) for the base class inheritance. This determines the accessibility of the base class members in the derived class.

1) Public Inheritance:

i) Public members of the base class remain public in the derived class.
ii) Protected members of the base class remain protected in the derived class.
iii) Private members of the base class are not accessible directly in the derived class.

2) Private Inheritance:
Public and protected members of the base class become private members in the derived class.

3) Protected Inheritance:
Public and protected members of the base class become protected members in the derived class.