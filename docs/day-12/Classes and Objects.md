---
sidebar_position: 2
---

# Classes and Objects in C++

## Classes

In C++, a class is a user-defined data type that represents a blueprint for creating objects. It encapsulates data for the object and functions that operate on that data.

### Class Definition
```cpp
class MyClass {
private:
    int myNumber;
    string myString;
public:
    void setValues(int num, string str) {
        myNumber = num;
        myString = str;
    }
    void display() {
        cout << "Number: " << myNumber << endl;
        cout << "String: " << myString << endl;
    }
};
```
- **Access Specifiers**: `private`, `public`, and `protected` control the access level of class members.
- **Private members**: Can only be accessed within the class.
- **Public members**: Can be accessed from outside the class.

## Objects

An object is an instance of a class. It represents a real-world entity and can store data and perform actions using member functions.

### Object Creation
```cpp
MyClass obj1; // Creating an object of MyClass
MyClass obj2; // Another object of MyClass
```

### Usage

```cpp
obj1.setValues(10, "Hello");
obj2.setValues(20, "World");

obj1.display(); // Output: Number: 10 String: Hello
obj2.display(); // Output: Number: 20 String: World
```

In this example, `obj1` and `obj2` are instances of the `MyClass` class. The `setValues` function sets the values of `myNumber` and `myString` for each object, and the `display` function prints these values.