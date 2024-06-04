## C++ OOPS Basics

## What is OOP

- OOP stands for Object-Oriented Programming. An object-oriented programming language uses objects in its programming. Programming with object-oriented concepts aims to emulate real-world concepts such as inheritance, polymorphism, abstraction, etc, in a program.
- C++ language was designed with the main intention of adding object-oriented programming to C language. As the size of the program increases, the readability, maintainability, and bug-free nature of the program decrease. The main aim of OOP is to bind together the data and the functions that operate on them so that no other part of the code can access this data except that function.
- This was the major problem with languages like C which relied upon functions or procedures (hence the name procedural programming language). As a result, the possibility of not addressing the problem adequately was high. Also, data was almost neglected, and data security was easily compromised. Using classes solves this problem by modeling the program as a real-world scenario.

## Basic Elements of OOPS

- **Classes** - Basic template for creating objects. This is the building block of object-oriented programming.
- **Objects** – Basic run-time entities and instances of a class.
- **Data Abstraction & Encapsulation** – Wrapping data and functions into a single unit.
- **Inheritance** – Properties of one class can be inherited into others.
- **Polymorphism** – Ability to take more than one form.
- **Dynamic Binding** – Code which will execute is not known until the program runs.
- **Message Passing** – message (Information) call format.

## Benefits of OOPS

- Programs involving OOP is faster and easier to execute.
- By using objects and inheritance, it provides a clear structure for programs and improves code reusability.
- It makes the code easier to maintain, modify and debug.
- Principle of data hiding helps build secure systems
- Multiple Objects can co-exist without any interference
- Software complexity can be easily managed so that even the creation of fully reusable software with less code and shorter development time is possible.

## C++ Classes and Objects

**Classes**

Classes and structures are somewhat the same but still, they have some differences. For example, we cannot hide data in structures which means that everything is public and can be accessed easily which is a major drawback of the structure because structures cannot be used where data security is a major concern. Another drawback of structures is that we cannot add functions to them.

Classes are user-defined data types and are a template or blueprint for creating objects. Classes consist of variables and functions which are also called class members.

The syntax of a class in C++ is

```cpp
class class_name
{
    //body of the class
};
```

**Objects**

Objects are instances of a class. To create an object, we just have to specify the class name and then the object’s name. Objects can access class attributes and methods which are bound to the class definition. It is recommended to put these attributes and methods in access modifiers so that their permissions can be better specified to allow them to be used by objects.

The syntax for defining an object in C++ is

```cpp
class class_name
{
    //body of the class
};

int main()
{
    class_name object_name; //object
}
```

## Class Attributes and Methods

Class attributes and methods are variables and functions that are defined inside the class. They are also known as class members altogether.

Consider an example below to understand what class attributes are

```cpp
#include <iostream>
using namespace std;

class Employee
{
    string eID;
    string eName;
    int ePhone;
    public:
};


int main()
{
    Employee E;
}
```

A class named Employee is built and three members, eId, eName and ePhone are defined inside the class. These three members are variables and are known as class attributes. Now, an object named E is defined in the main. E can access these attributes using the dot operator. But they are not accessible to E unless they are made public.

```cpp
#include <iostream>
using namespace std;

class Employee
{
public:
    string eID;
    string eName;
    long long int ePhone;
};

int main()
{
    Employee Aman;
    E.eID = "123456";
    E.eName = "Aryavir Singh";
    E.ePhone = 24402298893;
    cout << "Employee having ID " << E.eID << " is " << E.eName << endl;
    cout << "Employee contact number : " << E.ePhone;
}
```
Class methods are nothing but functions that are defined in a class or belong to a class. Methods belonging to a class are accessed by their objects in the same way that they access attributes. Functions can be defined in two ways so that they belong to a class.

**Define inside the class**

An example that demonstrates defining functions inside classes is

```cpp
class Employee
{
public:
    int eID;
    string eName;

    void printName()
    {
        cout << eName << endl;
    }
};
```

**Define outside the class**

Although, a function can be defined outside the class, it needs to be declared inside. Later, we can use the scope resolution operator (::) to define the function outside.

An example that demonstrates defining functions outside classes is

```cpp
class Employee
{
public:
    int eID;
    string eName;

    void printName();
};

void Employee::printName()
{
    cout << eName << endl;
}
```

## Friend Function

Friend functions are those functions that have the right to access the private data of members of the class even though they are not defined inside the class. It is necessary to write the prototype of the friend function.
Declaring a friend function inside a class does not make that function a member of the class.

**Properties of a Friend Function**

- Not in the scope of the class, means it is not a member of the class.
- Since it is not in the scope of the class, it cannot be called from the object of that class.
- Can be declared anywhere inside the class, be it under the public or private access modifier, it will not make any difference.
- It cannot access the members directly by their names, it needs (object_name.member_name) to access any member.

The syntax for declaring a friend function inside a class is

```cpp
class class_name
{
    friend return_type function_name(arguments);
};
 
return_type class_name::function_name(arguments)
{
    //body of the function
}
```
## Encapsulation

Encapsulation is the first pillar of Object Oriented Programming. It means wrapping up data attributes and methods together. The goal is to keep sensitive data hidden from users.
Encapsulation is considered a good practice where one should always make attributes private for them to become non-modifiable until needed. The data is ultimately more secure as a result of this. Once members are made private, methods to access them or change them should be declared.

An example of how encapsulation is achieved is

```cpp
#include <iostream>
using namespace std;
 
class class_name
{
private:
    int a;
 
public:
    void setA(int num)
    {
        a = num;
    }
 
    int getA()
    {
        return a;
    }
};
 
int main()
{
    class_name obj;
    obj.setA(5);
    cout << obj.getA() << endl;
}
```
## Inheritance

**What is inheritance**

The concept of reusability in C++ is supported using inheritance. We can reuse the properties of an existing class by inheriting it and deriving its properties. The existing class is called the base class and the new class which is inherited from the base class is called the derived class.

The syntax for inheriting a class is

```cpp
// Derived Class syntax
class derived_class_name : access_modifier base_class_name
{
    // body of the derived class
}
```
**Types of Inheritance**

- **Single Inheritance**

Single inheritance is a type of inheritance in which a derived class is inherited with only one base class.

For example, we have two classes ClassA and ClassB. If ClassB is inherited from ClassA, it means that ClassB can now implement the functionalities of ClassA. This is single inheritance

```cpp
class ClassA
{
    //body of ClassA
};
 
//derived from ClassA
class ClassB : public ClassA
{
    //body of ClassB
};
```

- **MUltiple Inheritance**

Multiple inheritances is a type of inheritance in which one derived class is inherited from more than one base class.

For example, we have three classes ClassA, ClassB, and ClassC. If ClassC is inherited from both ClassA & ClassB, it means that ClassC can now implement the functionalities of both ClassA & ClassB. This is multiple inheritances.

```cpp
class ClassA
{
    //body of ClassA
};
 
class ClassB
{
    //body of ClassB
};
 
//derived from ClassB and Class C
class ClassC : public ClassA, public ClassB
{
    //body of ClassC
};
```

- **Hierarchial Inheritance**

A hierarchical inheritance is a type of inheritance in which several derived classes are inherited from a single base class.

For example, we have three classes ClassA, ClassB, and ClassC. If ClassB and Class C are inherited from ClassA, it means that ClassB and ClassC can now implement the functionalities of ClassA. This is hierarchical inheritance.

```cpp
class ClassA
{
    //body of ClassA
};
 
//derived from ClassA
class ClassB : public ClassA
{
    //body of ClassB
};
 
//derived from ClassA
class ClassC : public ClassA
{
    //body of ClassC
};
```

- **Multilevel Inheritance**

Multilevel inheritance is a type of inheritance in which one derived class is inherited from another derived class.

For example, we have three classes ClassA, ClassB, and ClassC. If ClassB is inherited from ClassA and ClassC is inherited from ClassB, it means that ClassB can now implement the functionalities of ClassA and ClassC can now implement the functionalities of ClassB. This is multilevel inheritance.

```cpp
class ClassA
{
    //body of ClassA
};
 
//derived from ClassA
class ClassB : public ClassA
{
    //body of ClassB
};
 
//derived from ClassB
class ClassC : public ClassB
{
    //body of ClassC
};
```

- **Hybrid Inheritance**

Hybrid inheritance is a combination of different types of inheritances.

For example, we have four classes ClassA, ClassB, ClassC, and ClassD. If ClassC is inherited from both ClassA and ClassB and ClassD is inherited from ClassC, it means that ClassC can now implement the functionalities of both ClassA and ClassB and ClassD can now implement the functionalities of ClassC. This is multilevel inheritance where both multilevel and multiple inheritances are present.
 
```cpp
class ClassA
{
    //body of ClassA
};
 
class ClassB
{
    //body of ClassB
};
 
//derived from ClassA and ClassA
class ClassC : public ClassA, public ClassB
{
    //body of ClassC
};
 
//derived from ClassC
class ClassD : public ClassC
{
    //body of ClassD
};
```
## Polymorphism

Poly means several and morphism means form. Polymorphism is something that has several forms or we can say it as one name and multiple forms.
There are two types of polymorphism:

- Compile-time polymorphism
- Run time polymorphism

**Compile Time Polymorphism**

In compile-time polymorphism, it is already known which function will run. Compile-time polymorphism is also called early binding, which means that you are already bound to the function call and you know that this function is going to run.

There are two types of compile-time polymorphism:

- **Function Overloading**
This is a feature that lets us create more than one function and the functions have the same names but their parameters need to be different. When function overloading is implemented in a program and function calls are made, the compiler knows which functions to execute.

- **Operator Overloading**
This is a feature that lets us define operators working for some specific tasks. Using the operator +, we can add two strings by concatenating and add two numerical values arithmetically at the same time. This is operator overloading.

**Run Time Polymorphism**

With run-time polymorphism, the compiler has no idea what will happen when the code is executed. Run time polymorphism is also called late binding. The run-time polymorphism is considered slow because function calls are decided at run time. Run time polymorphism can be achieved from virtual functions.

**Virtual Functions in C++**

A member function in the base class that is declared using a virtual keyword is called a virtual function. They can be redefined in the derived class. A function that is in the parent class but redefined in the child class is called a virtual function.
