---
sidebar_position: 1
title: "Object-Oriented Programming concepts in C++"
description: "Object-oriented programming – As the name suggests uses objects in programming.The main aim of OOP is to bind together the data and the functions that operate on them so that no other part of the code can access this data except that function."
sidebar_label: "OOPs in C++"
slug: OOPs-concepts-in-cpp
---
# Some Basic Concepts of OOPs
There are some basic concepts that act as the building blocks of OOPs
1. **Class**
2. **Objects**
3. **Encapsulation**
4. **Abstraction**
5. **Polymorphism**
6. **Inheritance**
7. **Dynamic Building**
8. **Message Passing**

# Characteristics of an Object-Oriented Programming Language
# Class 
The building block of C++ that leads to Object-Oriented programming is a Class. It is a user-defined data type, which holds its own data members and member functions, which can be accessed and used by creating an instance of that class. A class is like a blueprint for an object. For Example: Consider the Class of Cars. There may be many cars with different names and brands but all of them will share some common properties like all of them will have 4 wheels, Speed Limit, Mileage range, etc. So here, the Car is the class, and wheels, speed limits, and mileage are their properties.
1. A Class is a user-defined data type that has data members and member functions.
2. Data members are the data variables and member functions are the functions used to manipulate these variables together these data members and member functions define the properties and behavior of the objects in a Class.
3. In the above example of class Car, the data member will be speed limit, mileage, etc and member functions can apply brakes, increase speed, etc.

 We can say that a Class in C++ is a blueprint representing a group of objects which shares some common properties and behaviors.

# Object
An Object is an identifiable entity with some characteristics and behavior. An Object is an instance of a Class. When a class is defined, no memory is allocated but when it is instantiated (i.e. an object is created) memory is allocated.
```
// C++ Program to show the syntax/working of Objects as a
// part of Object Oriented PProgramming
#include <iostream>
using namespace std;

class person {
    char name[20];
    int id;

public:
    void getdetails() {}
};

int main()
{

    person p1; // p1 is a object
    return 0;
}
```
Objects take up space in memory and have an associated address like a record in pascal or structure or union. When a program is executed the objects interact by sending messages to one another. Each object contains data and code to manipulate the data. Objects can interact without having to know details of each other’s data or code, it is sufficient to know the type of message accepted and the type of response returned by the objects.

# Encapsulation
In normal terms, Encapsulation is defined as wrapping up data and information under a single unit. In Object-Oriented Programming, Encapsulation is defined as binding together the data and the functions that manipulate them. Consider a real-life example of encapsulation, in a company, there are different sections like the accounts section, finance section, sales section, etc. The finance section handles all the financial transactions and keeps records of all the data related to finance. Similarly, the sales section handles all the sales-related activities and keeps records of all the sales. Now there may arise a situation when for some reason an official from the finance section needs all the data about sales in a particular month. In this case, he is not allowed to directly access the data of the sales section. He will first have to contact some other officer in the sales section and then request him to give the particular data. This is what encapsulation is. Here the data of the sales section and the employees that can manipulate them are wrapped under a single name “sales section”.

Encapsulation also leads to data abstraction or data hiding. Using encapsulation also hides the data. In the above example, the data of any of the sections like sales, finance, or accounts are hidden from any other section.

# Abstraction
Data abstraction is one of the most essential and important features of object-oriented programming in C++. Abstraction means displaying only essential information and hiding the details. Data abstraction refers to providing only essential information about the data to the outside world, hiding the background details or implementation. Consider a real-life example of a man driving a car. The man only knows that pressing the accelerator will increase the speed of the car or applying brakes will stop the car but he does not know how on pressing the accelerator the speed is actually increasing, he does not know about the inner mechanism of the car or the implementation of an accelerator, brakes, etc. in the car. This is what abstraction is:
1. Abstraction using Classes: We can implement Abstraction in C++ using classes. The class helps us to group data members and member functions using available access specifiers. A Class can decide which data member will be visible to the outside world and which is not.
2. Abstraction in Header files: One more type of abstraction in C++ can be header files. For example, consider the pow() method present in math.h header file. Whenever we need to calculate the power of a number, we simply call the function pow() present in the math.h header file and pass the numbers as arguments without knowing the underlying algorithm according to which the function is actually calculating the power of numbers.

# Polymorphism
The word polymorphism means having many forms. In simple words, we can define polymorphism as the ability of a message to be displayed in more than one form. A person at the same time can have different characteristics. A man at the same time is a father, a husband, and an employee. So the same person possesses different behavior in different situations. This is called polymorphism. An operation may exhibit different behaviors in different instances. The behavior depends upon the types of data used in the operation. C++ supports operator overloading and function overloading.
1. Operator Overloading: The process of making an operator exhibit different behaviors in different instances is known as operator overloading.
2. Function Overloading: Function overloading is using a single function name to perform different types of tasks. Polymorphism is extensively used in implementing inheritance.

Example: Suppose we have to write a function to add some integers, sometimes there are 2 integers, and sometimes there are 3 integers. We can write the Addition Method with the same name having different parameters, the concerned method will be called according to parameters. 

# Inheritance
The capability of a class to derive properties and characteristics from another class is called Inheritance. Inheritance is one of the most important features of Object-Oriented Programming.

1. Sub Class: The class that inherits properties from another class is called Sub class or Derived Class.
2. Super Class: The class whose properties are inherited by a sub-class is called Base Class or Superclass.
3. Reusability: Inheritance supports the concept of “reusability”, i.e. when we want to create a new class and there is already a class that includes some of the code that we want, we can derive our new class from the existing class. By doing this, we are reusing the fields and methods of the existing class.

Example: Dog, Cat, Cow can be Derived Class of Animal Base Class. 

# Dynamic Binding
In dynamic binding, the code to be executed in response to the function call is decided at runtime. C++ has virtual functions to support this. Because dynamic binding is flexible, it avoids the drawbacks of static binding, which connected the function call and definition at build time.
```
// C++ Program to Demonstrate the Concept of Dynamic binding
// with the help of virtual function
#include <iostream>
using namespace std;

class OOPS {
public:
    void call_Function() // function that call print
    {
        print();
    }
    void print() // the display function
    {
        cout << "Printing the Base class Content" << endl;
    }
};
class OOPS2 : public OOP // OOP2 inherit a publicly
{
public:
    void print() // OOP2's display
    {
        cout << "Printing the Derived class Content"
             << endl;
    }
};
int main()
{
    OOP ObjectOrientedProgramming; // Creating OOP's object
    ObjectOrientedProgramming.call_Function(); // Calling call_Function
    OOP2 ObjectOrientedProgramming2; // creating OOP2 object
    ObjectOrientedProgramming2.call_Function(); // calling call_Function
                                    // for OOP2 object
    return 0;
}
```
Above Example with virtual Function:
```
#include<bits/stdc++.h>
using namespace std;

class OOP {
public:
    void call_Function() // function that call print
    {
        print();
    }
    virtual void print() // using "virtual" for the display function 
    {
        cout << "Printing the Base class Content" << endl;
    }
};
class OOP2 : public OOP // OOP2 inherit a publicly
{
public:
    void print() // OOP2's display
    {
        cout << "Printing the Derived class Content"
            << endl;
    }
};
int main()
{
    OOP ObjectOrientedProgramming; // Creating OOP's object
    ObjectOrientedProgramming.call_Function(); // Calling call_Function
    OOP2 ObjectOrientedProgramming2; // creating OOP2 object
    ObjectOrientedProgramming2.call_Function(); // calling call_Function
                                    // for OOP2 object
    return 0;
}
```
# Message Passing
Objects communicate with one another by sending and receiving information. A message for an object is a request for the execution of a procedure and therefore will invoke a function in the receiving object that generates the desired results. Message passing involves specifying the name of the object, the name of the function, and the information to be sent.
Example:
```
#include <iostream>
using namespace std;

// Define a Car class with a method to display its speed
class Car {
public:
    void displaySpeed(int speed) {
        cout << "The car is moving at " << speed << " km/h." << endl;
    }
};

int main() {
    // Create a Car object named myCar
    Car myCar;

    // Send a message to myCar to execute the displaySpeed method
    int currentSpeed = 100;
    myCar.displaySpeed(currentSpeed);

    return 0;
}
```
