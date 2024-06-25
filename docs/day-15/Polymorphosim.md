# Polymorphism in C++

Polymorphism is an important concept of object-oriented programming. It simply means more than one form. That is, the same entity (function or operator) behaves differently in different scenarios. For example,

The + operator in C++ is used to perform two specific functions. When it is used with numbers (integers and floating-point numbers), it performs addition.

```cpp
int a = 5;
int b = 6;
int sum = a + b;    // sum = 11
```
And when we use the + operator with strings, it performs string concatenation. For example,
```cpp
string firstName = "abc ";
string lastName = "xyz";

// name = "abc xyz"
string name = firstName + lastName;
```

## Why Polymorphism?

Polymorphism allows us to create consistent code. For example,

Suppose we need to calculate the area of a circle and a square. To do so, we can create a Shape class and derive two classes Circle and Square from it.

In this case, it makes sense to create a function having the same name calculateArea() in both the derived classes rather than creating functions with different names, thus making our code more consistent.

## Types of Polymorphism

- **Compile-time Polymorphism:** Function overloading, operator overloading
- **Runtime Polymorphism:** Function overriding, Virtual Functions

## C++ Function Overloading

In C++, we can use two functions having the same name if they have different parameters (either types or number of arguments).

And, depending upon the number/type of arguments, different functions are called. For example,

```cpp
// C++ program to overload sum() function

#include <iostream>
using namespace std;

// Function with 2 int parameters
int sum(int num1, int num2) {
    return num1 + num2;
}

// Function with 2 double parameters
double sum(double num1, double num2) {
    return num1 + num2;
}

// Function with 3 int parameters
int sum(int num1, int num2, int num3) {
    return num1 + num2 + num3;
}

int main() {
    // Call function with 2 int parameters
    cout << "Sum 1 = " << sum(5, 6) << endl;

    // Call function with 2 double parameters
    cout << "Sum 2 = " << sum(5.5, 6.6) << endl;

    // Call function with 3 int parameters
    cout << "Sum 3 = " << sum(5, 6, 7) << endl;

    return 0;
}
```

**Output**
```
Sum 1 = 11
Sum 2 = 12.1
Sum 3 = 18
```

Here, we have created 3 different sum() functions with different parameters (number/type of parameters). And, based on the arguments passed during a function call, a particular sum() is called.

It's a compile-time polymorphism because the compiler knows which function to execute before the program is compiled.

## C++ Operator Overloading

In C++, we can overload an operator as long as we are operating on user-defined types like objects or structures.

We cannot use operator overloading for basic types such as int, double, etc.

Operator overloading is basically function overloading, where different operator functions have the same symbol but different operands.

And, depending on the operands, different operator functions are executed. For example,

```cpp
// C++ program to overload ++ when used as prefix

#include <iostream>
using namespace std;

class Count {
   private:
    int value;

   public:

    // Constructor to initialize count to 5
    Count() : value(5) {}

    // Overload ++ when used as prefix
    void operator ++() {
        value = value + 1;
    }

    void display() {
        cout << "Count: " << value << endl;
    }
};

int main() {
    Count count1;

    // Call the "void operator ++()" function
    ++count1;

    count1.display();
    return 0;
}
```

**Output**
```
Count: 6
```

Here, we have overloaded the ++ operator, which operates on objects of Count class (object count1 in this case).

We have used this overloaded operator to directly increment the value variable of count1 object by 1.

This is also a compile-time polymorphism.

## C++ Function Overriding

In C++ inheritance, we can have the same function in the base class as well as its derived classes.

When we call the function using an object of the derived class, the function of the derived class is executed instead of the one in the base class.

So, different functions are executed depending on the object calling the function.

This is known as function overriding in C++. For example,

```cpp
// C++ program to demonstrate function overriding

#include <iostream>
using namespace std;

class Base {
   public:
    virtual void print() {
        cout << "Base Function" << endl;
    }
};

class Derived : public Base {
   public:
    void print() {
        cout << "Derived Function" << endl;
    }
};

int main() {
    Derived derived1;

    // Call print() function of Derived class
    derived1.print();

    return 0;
}
```

**Output**

```
Derived Function
```

Here, we have used a print() function in the Base class and the same function in the Derived class

When we call print() using the Derived object derived1, it overrides the print() function of Base by executing the print() function of the Derived class.

It's a runtime polymorphism because the function call is not resolved by the compiler, but it is resolved in the runtime instead.

## C++ Virtual Functions

In C++, we may not be able to override functions if we use a pointer of the base class to point to an object of the derived class.

Using virtual functions in the base class ensures that the function can be overridden in these cases.

Thus, virtual functions actually fall under function overriding. For example,

```cpp
// C++ program to demonstrate the use of virtual functions

#include <iostream>
using namespace std;

class Base {
   public:
    virtual void print() {
        cout << "Base Function" << endl;
    }
};

class Derived : public Base {
   public:
    void print() {
        cout << "Derived Function" << endl;
    }
};

int main() {
    Derived derived1;

    // pointer of Base type that points to derived1
    Base* base1 = &derived1;

    // calls member function of Derived class
    base1->print();

    return 0;
}
```

**Output**
```
Derived Function
```

Here, we have used a virtual function print() in the Base class to ensure that it is overridden by the function in the Derived class.

Virtual functions are runtime polymorphism.