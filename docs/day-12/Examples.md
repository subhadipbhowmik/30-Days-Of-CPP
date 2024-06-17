---
sidebar_position: 3
title: "Examples of Class and Object in C++"
description: "In this tutorial, we will learn to work with class and objects."
sidebar_label: "Examples"
slug: Examples-in-cpp
---

## Example 1
```cpp
#include <iostream>
using namespace std;

class Person {
public:
    // Data members
    string name;
    int age;

    // Member function to display person's information
    void displayInfo() {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};
int main() {
    // Create an object of class Person
    Person person1;
    person1.name = "Alice";
    person1.age = 30;

    // Call the member function to display person's information
    person1.displayInfo();

    return 0;
}
```
In this example:

Person is a class with two data members (name and age) and one member function (displayInfo).
person1 is an object of the Person class, and we assign values to its data members and call its member function.

## Example 2
```cpp
#include <iostream>
using namespace std;

class Dog {
public:
    // Data members
    string breed;
    int age;

    // Member function to display dog's information
    void displayInfo() {
        cout << "Breed: " << breed << ", Age: " << age << " years" << endl;
    }
};
int main() {
    // Create an object of class Dog
    Dog dog1;
    dog1.breed = "Golden Retriever";
    dog1.age = 3;

    // Call the member function to display dog's information
    dog1.displayInfo();

    return 0;
}
```
In this example:

Dog is a class with two data members (breed and age) and one member function (displayInfo).
dog1 is an object of the Dog class, and we assign values to its data members and call its member function.

IMAGE FILE:
![Class and Object in CPP](C:\Users\Shruti\OneDrive\Desktop\30-Days-Of-CPP\static\img\day-12\oop3.png)