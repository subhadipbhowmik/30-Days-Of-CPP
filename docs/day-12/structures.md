---
sidebar_position: 1
title: "Structures in C++"
description: "In this tutorial, we will learn about Structures in C++ programming with the help of examples. A structure is a collection of variables of different data types and member functions under a single name. It is similar to a class as both hold a collection of data of different data types."
sidebar_label: "Structures"
slug: structures-in-cpp
---

TASK:

1. Define a structure in C++?
2. State the syntax of a structure in C++.
3. How is a Structure similar to class in C++?
4. How much memory is allocated to a Structure in C++ when it is declared?
5. Write a C++ program defining a structure of an employee with members: ID, Name, Position, Designation?
6. How to access the members of a structure in C++?

## Define a structure in C++?
In C++, a structure (struct) is a user-defined data type that allows you to group together variables of different data types under a single name. It is similar to a class in C++, but with some key differences:

1. **Member Accessibility**: By default, members of a struct are public, whereas in a class, they are private by default (though this can be changed using access specifiers).

2. **Usage**: Structs are typically used for lightweight data structures where data members are predominantly public and not encapsulated with complex behaviors or methods.

Here's how you define a structure in C++:

```cpp
// Define a struct
struct Person {
    // Data members
    string name;
    int age;
    double height;
};

int main() {
    // Declare a struct variable
    Person person1;

    // Accessing and assigning values to members
    person1.name = "John";
    person1.age = 30;
    person1.height = 1.75;

    // Accessing struct members
    cout << "Name: " << person1.name << endl;
    cout << "Age: " << person1.age << endl;
    cout << "Height: " << person1.height << " meters" << endl;

    return 0;
}
```

In this example:
- `Person` is the name of the struct.
- `name`, `age`, and `height` are its data members.
- `person1` is an instance (or object) of the `Person` struct, and you can access its members using the dot (`.`) operator.

Structs are versatile and can be used to group related data together, providing a convenient way to organize and access multiple variables under one structure.

## State the syntax of a structure in C++.
Certainly! Here's the syntax of a structure in C++ in a concise format:

```cpp
struct StructName {
    DataType member1;
    DataType member2;
    // More members if needed

    ReturnType methodName(ParameterList) {
        // Method body
    }
};
```

- `struct`: Keyword used to define a structure.
- `StructName`: Name of the structure.
- `DataType`: Data types of member variables (`member1`, `member2`, etc.).
- `methodName`: Optional member function (method) inside the struct.
- `ReturnType`, `ParameterList`: Define method signature for member functions.

Structures in C++ allow grouping variables and functions together, similar to classes but with default public accessibility for members.

## How is a Structure similar to class in C++?
Structures (`structs`) in C++ share several similarities with classes, but they also have key differences. Here are the ways in which structures are similar to classes in C++:

1. **Data Organization**: Both structures and classes allow you to organize data by grouping variables of different data types under a single name.

2. **Member Access**: By default, members (variables and functions) of a structure are `public`, just like in classes. This means they can be accessed and modified directly from outside the structure.

3. **Member Functions**: Both structures and classes can have member functions (methods) defined within them. These functions can operate on the data members of the structure/class.

4. **Data Encapsulation**: While structures traditionally do not support encapsulation as strongly as classes (since their members are public by default), you can define access specifiers (`public`, `private`, `protected`) in C++ structs as well, similar to classes.

5. **User-defined Types**: Both structures and classes allow you to define your own custom data types, which can be used to create variables just like built-in types (`int`, `double`, etc.).

### Example of Structure and Class Similarities:

```cpp
// Structure example
struct Person {
    string name;
    int age;

    void display() {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};

// Class example (similar functionality)
class PersonClass {
public:
    string name;
    int age;

    void display() {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};

int main() {
    // Using structure
    Person person1;
    person1.name = "John";
    person1.age = 30;
    person1.display();

    // Using class (similar functionality)
    PersonClass person2;
    person2.name = "Alice";
    person2.age = 25;
    person2.display();

    return 0;
}
```

### Key Differences:
- **Default Access Specifier**: Struct members are `public` by default, whereas class members are `private` by default.
- **Inheritance**: Classes support inheritance, allowing one class to inherit characteristics from another. Structs traditionally do not support inheritance in C++, although this can vary based on C++ standard and compiler extensions.

In summary, while structures in C++ share many features with classes (such as data grouping and member functions), classes offer more advanced features like private member access by default and support for inheritance, making them more suitable for complex object-oriented programming scenarios.

## How much memory is allocated to a Structure in C++ when it is declared?
When a structure (struct) is declared in C++, the memory allocated to it is determined by the sum of the sizes of its data members, including any necessary padding for alignment. The size of the structure can be obtained using the `sizeof` operator, which returns the size in bytes.

Here's a concise breakdown:

- **Memory Allocation**: The size of a structure in memory is the total of the sizes of all its data members.
- **Padding**: Additional memory might be added between data members for alignment purposes.
- **Size Calculation**: Use `sizeof(StructName)` to get the size of a structure in bytes.

Example:
```cpp
struct Example {
    int x;      // Typically 4 bytes
    double y;   // Typically 8 bytes
    char z;     // Typically 1 byte
};

int main() {
    cout << "Size of Example struct: " << sizeof(Example) << " bytes" << endl;
    return 0;
}
```

In this example:
- Assuming typical sizes for `int`, `double`, and `char`, the `sizeof(Example)` would be calculated based on their sum, accounting for any padding.

This approach ensures structures in C++ are efficiently stored in memory, optimized for both size and access performance.

## Write a C++ program defining a structure of an employee with members: ID, Name, Position, Designation?
Here's a concise C++ program defining a structure for an employee with members `ID`, `Name`, `Position`, and `Designation`:

```cpp
#include <iostream>
#include <string>
using namespace std;

// Define a structure for Employee
struct Employee {
    int ID;
    string Name;
    string Position;
    string Designation;
};

int main() {
    // Declare an Employee struct variable
    Employee emp1;

    // Assign values to struct members
    emp1.ID = 1001;
    emp1.Name = "John Doe";
    emp1.Position = "Software Engineer";
    emp1.Designation = "Senior";

    // Print employee information
    cout << "Employee ID: " << emp1.ID << endl;
    cout << "Name: " << emp1.Name << endl;
    cout << "Position: " << emp1.Position << endl;
    cout << "Designation: " << emp1.Designation << endl;

    return 0;
}
```

### Explanation:
- **`struct Employee { ... };`**: Defines a structure named `Employee` with four members (`ID`, `Name`, `Position`, `Designation`), each of which is of type `int` (for `ID`) and `string` (for `Name`, `Position`, `Designation`).

- **`Employee emp1;`**: Declares a variable `emp1` of type `Employee`, which represents an instance of the `Employee` structure.

- **Assigning Values**: Values are assigned to the members of `emp1` using the dot (`.`) operator.

- **Printing Information**: Prints out the details of `emp1` to demonstrate access to structure members and their values.

This program demonstrates a basic usage of a structure in C++ to represent employee data, showing how to define, declare, assign values, and access members of a structure.

## How to access the members of a structure in C++?
In C++, to access members of a structure (struct):

- Use the dot (`.`) operator followed by the member name.
- Example: If `emp` is a struct variable and `ID` is a member, access it as `emp.ID`.

Structures allow you to group related data under a single name, making it easier to manage and access multiple variables together.

IMAGE FILE:
![Multidimentional-array](../../static/img/day-11/pointers.png)