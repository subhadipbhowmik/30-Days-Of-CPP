---
sidebar_position: 1
---

# Object-Oriented Programming (OOP) in C++

## Introduction
Object-Oriented Programming (OOP) is a programming paradigm that revolves around the concept of "objects," which can contain data and code to manipulate that data. C++ is a powerful language that supports OOP principles. This document provides an overview of key OOP concepts in C++ along with examples.

## Key Concepts

### 1. Classes and Objects
- **Definition**: A class is a blueprint for creating objects. It defines attributes (data members) and methods (functions) that operate on those attributes.
- **Example**:
```cpp
class Rectangle {
private:
    int length;
    int width;
public:
    void setDimensions(int len, int wid) {
        length = len;
        width = wid;
    }
    int area() {
        return length * width;
    }
};
```
- **Usage**:
```cpp
Rectangle rect1, rect2;
rect1.setDimensions(5, 3);
cout << "Area of rect1: " << rect1.area() << endl;

```

### 2. Encapsulation
- **Definition**:  Encapsulation is the bundling of data and methods within a single unit (class). Access specifiers control the access to class members.
- **Example**:
```cpp
class Circle {
private:
    double radius;
public:
    void setRadius(double r) {
        if (r > 0)
            radius = r;
    }
    double getArea() {
        return 3.14 * radius * radius;
    }
};

```
- **Usage**:
```cpp
Circle circle;
circle.setRadius(5.0);
cout << "Area of circle: " << circle.getArea() << endl;
```

### 3. Inheritance
- **Definition**: Inheritance allows a class (subclass/derived class) to inherit properties and behavior from another class (superclass/base class).
- **Example**:
```cpp
class Animal {
public:
    void eat() {
        cout << "Animal is eating" << endl;
    }
};
class Dog : public Animal {
public:
    void bark() {
        cout << "Dog is barking" << endl;
    }
};

```
- **Usage**:
```cpp
Dog dog;
dog.eat();  // inherited from Animal
dog.bark();
```

### 4. Polymorphism
- **Definition**: Polymorphism allows objects of different classes to be treated as objects of a common superclass. It can be achieved through function overloading and function overriding.
- **Example**:
```cpp
// Function overloading
int add(int a, int b) {
    return a + b;
}
double add(double a, double b) {
    return a + b;
}

// Function overriding
class Shape {
public:
    virtual double area() {
        return 0;
    }
};
class Circle : public Shape {
public:
    double area() override {
        return 3.14 * radius * radius;
    }
};

```
- **Usage**:
```cpp
cout << "Sum of 2 and 3: " << add(2, 3) << endl;
Circle circle;
cout << "Area of circle: " << circle.area() << endl;
```

### 5. Abstraction
- **Definition**: Abstraction involves hiding the complex implementation details and showing only the essential features of the object.
- **Example**:
```cpp
class Car {
private:
    Engine engine;
    // Other private members...
public:
    void start() {
        engine.start();
    }
    // Other public methods...
};


```
- **Usage**:
```cpp
Car car;
car.start();
```