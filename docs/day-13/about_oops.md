---
sidebar_position: 1
title: "Concepts of OOP - Introduction to Object-Oriented Programming"
description: "In this tutorial, we will learn about the fundamentals of Object-Oriented Programming (OOP), including its core principles and benefits."
sidebar_label: "Introduction to OOP"
slug: concepts-of-oop-introduction
---

## Introduction to Object-Oriented Programming

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code to manipulate that data. OOP is designed to increase the flexibility and maintainability of programs.

- ### **Core Principles of OOP:**
  1. **Encapsulation:**
     - Encapsulation is the mechanism of hiding the internal details of an object and only exposing a controlled interface.
     - Example:
       ```cpp
       class Person {
       private:
           string name;
           int age;
       public:
           void setName(string n) { name = n; }
           string getName() { return name; }
       };
       ```

  2. **Abstraction:**
     - Abstraction means representing essential features without including background details.
     - It allows focusing on what an object does instead of how it does it.
     - Example:
       ```cpp
       class Animal {
       public:
           virtual void makeSound() = 0; // Pure virtual function
       };
       class Dog : public Animal {
       public:
           void makeSound() override {
               cout << "Bark" << endl;
           }
       };
       ```

  3. **Inheritance:**
     - Inheritance allows a class to inherit properties and behavior from another class.
     - It promotes code reusability.
     - Example:
       ```cpp
       class Vehicle {
       public:
           string brand = "Ford";
       };
       class Car : public Vehicle {
       public:
           string model = "Mustang";
       };
       ```

  4. **Polymorphism:**
     - Polymorphism means "many forms" and allows methods to do different things based on the object it is acting upon.
     - Example:
       ```cpp
       class Shape {
       public:
           virtual void draw() {
               cout << "Drawing Shape" << endl;
           }
       };
       class Circle : public Shape {
       public:
           void draw() override {
               cout << "Drawing Circle" << endl;
           }
       };
       ```

- **Benefits of OOP:**
  - **Modularity:** Code is divided into classes and objects, making it easier to manage and understand.
  - **Reusability:** Classes can be reused in other programs.
  - **Scalability:** Easy to add new features or objects.
  - **Maintainability:** Easier to update and maintain code.