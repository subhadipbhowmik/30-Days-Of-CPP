---
sidebar_position: 1
title: "Object Oriented Programming in C++"
description: "Object-oriented programming – As the name suggests uses objects in programming. Object-oriented programming aims to implement real-world entities like inheritance, hiding, polymorphism, etc. in programming. "
sidebar_label: "Object Oriented Programming"
slug: oops
---

## What is Object Oriented Programming in C++?
Object means a real word entity such as pen, chair, table etc. Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects. It simplifies the software development and maintenance by providing some concepts:
1) Object
2) Class
3) Inheritance
4) Polymorphism
5) Abstraction
6) Encapsulation
7) Dynamic Binding
8) Message Passing

IMAGE FILE:
![OOP in CPP](C:\Users\Shruti\OneDrive\Desktop\30-Days-Of-CPP\static\img\day-12\oop1.png)

## Basic characteristics of Object Oriented Programming
1) Object- An Object is an identifiable entity with some characteristics and behavior. An Object is an instance of a Class. When a class is defined, no memory is allocated but when it is instantiated (i.e. an object is created) memory is allocated. For example: chair, pen, table, keyboard, bike etc. It can be physical and logical.

2)Class- Collection of objects is called class. It is a logical entity. A Class in C++ is the foundational element that leads to Object-Oriented programming. A class instance must be created in order to access and use the user-defined data type's data members and member functions. An object's class acts as its blueprint.

3)Inheritance- When one object acquires all the properties and behaviours of parent object i.e. known as inheritance. It provides code reusability. It is used to achieve runtime polymorphism.

4)Polymorphism- The word polymorphism means having many forms. In simple words, we can define polymorphism as the ability of a message to be displayed in more than one form. A person at the same time can have different characteristics. A man at the same time is a father, a husband, and an employee. So the same person possesses different behavior in different situations. This is called polymorphism.C++ supports operator overloading and function overloading-

I)Operator Overloading: The process of making an operator exhibit different behaviors in different instances is known as operator overloading.
II)Function Overloading: Function overloading is using a single function name to perform different types of tasks. Polymorphism is extensively used in implementing inheritance.

5)Abstraction-Data abstraction is one of the most essential and important features of object-oriented programming in C++. Abstraction means displaying only essential information and hiding the details. Data abstraction refers to providing only essential information about the data to the outside world, hiding the background details or implementation.

6)Encapsulation-In normal terms, Encapsulation is defined as wrapping up data and information under a single unit. In Object-Oriented Programming, Encapsulation is defined as binding together the data and the functions that manipulate them. 

7)Dynamic Binding- In dynamic binding, the code to be executed in response to the function call is decided at runtime. C++ has virtual functions to support this. Because dynamic binding is flexible, it avoids the drawbacks of static binding, which connected the function call and definition at build time.

8)Message Passing- Objects communicate with one another by sending and receiving information. A message for an object is a request for the execution of a procedure and therefore will invoke a function in the receiving object that generates the desired results. Message passing involves specifying the name of the object, the name of the function, and the information to be sent. 