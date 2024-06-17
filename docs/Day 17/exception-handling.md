---
sidebar_position: 1
title: "Exception Handling in C++"
description: "Exception Handling provides a mechanism to handle unexpected situations (exceptions) that occur during the execution of a program, ensuring that the program can continue to operate or fail gracefully."
sidebar_label: "Exception Handling"
slug: exception-handling-in-cpp
---

# Exception Handling in C++

Exception handling in C++ is a powerful feature that allows developers to manage and respond to runtime errors in a controlled way. It provides a mechanism to handle unexpected situations (exceptions) that occur during the execution of a program, ensuring that the program can continue to operate or fail gracefully.

It enables a program to deal with anomalies and unexpected conditions in a consistent and manageable way. It allows developers to separate error-handling code from regular code, improving readability and maintainability.

## Basics of Exception Handling
The basic concept of exception handling involves three keywords: `try`, `throw`, and `catch`.

1. **try:** The try block contains the code that may potentially throw an exception.
2. **throw:** The throw keyword is used to signal the occurrence of an anomaly or exceptional condition.
3. **catch:** The catch block handles the exception thrown by the throw statement.

```cpp
#include <iostream>
using namespace std;

int main() {
    try {
        // Code that may throw an exception
        throw 20;
    }
    catch (int e) {
        // Code that handles the exception
        cout << "An exception occurred. Exception Nr. " << e << endl;
    }
    return 0;
}
```

## Exception Handling Mechanism

The exception handling mechanism in C++ involves the following steps:
1. **Throwing an Exception:** When an error occurs, the program throws an exception using the throw keyword.
2. **Catching the Exception:** The thrown exception is caught by a catch block that matches the type of the exception.
3. **Handling the Exception:** The catch block contains code to handle the exception.

### Throwing Exceptions
An exception can be thrown using the throw keyword followed by an exception object. This object can be of any type, including built-in types or user-defined types.

```cpp
#include <iostream>
using namespace std;

void test(int x) {
    if (x == 0) {
        throw "Division by zero condition!";
    }
}

int main() {
    try {
        test(0);
    }
    catch (const char* msg) {
        cout << "Caught: " << msg << endl;
    }
    return 0;
}
```

### Catching Exceptions
The catch block is used to handle exceptions. It must follow a try block. The parameter of the catch block determines the type of exception it can handle.

```cpp
#include <iostream>
using namespace std;

int main() {
    try {
        throw 100;
    }
    catch (int e) {
        cout << "An exception occurred. Exception Nr. " << e << endl;
    }
    return 0;
}
```

### Multiple Catch Blocks
A single try block can have multiple catch blocks to handle different types of exceptions.

```cpp
#include <iostream>
using namespace std;

int main() {
    try {
        throw 100.5;
    }
    catch (int e) {
        cout << "Caught an integer exception. Exception Nr. " << e << endl;
    }
    catch (double e) {
        cout << "Caught a double exception. Exception Nr. " << e << endl;
    }
    return 0;
}
```

### Standard Exception Classes
C++ provides a set of standard exception classes defined in the `<stdexcept>` header file. Some of the commonly used standard exception classes are:

1. `std::exception`: Base class for all standard exceptions.
2. `std::bad_alloc`: Thrown by new on allocation failure.
3. `std::bad_cast`: Thrown by dynamic_cast when it fails with a reference type.
4. `std::bad_typeid`: Thrown by typeid.
5. `std::logic_error`: Represents logic errors.
6. `std::runtime_error`: Represents runtime errors.


### User-Defined Exceptions
You can define your own exception classes by inheriting from the std::exception class or any of its derived classes.

```cpp
#include <iostream>
#include <exception>
using namespace std;

class MyException : public exception {
    virtual const char* what() const throw() {
        return "My custom exception occurred";
    }
};

int main() {
    try {
        throw MyException();
    }
    catch (MyException& e) {
        cout << e.what() << endl;
    }
    return 0;
}
```

### Stack Unwinding
When an exception is thrown, the stack unwinding process occurs. It means the destructor of each object is called for all objects constructed since the entry to the try block.

```cpp
#include <iostream>
using namespace std;

class Test {
public:
    Test() { cout << "Constructor called" << endl; }
    ~Test() { cout << "Destructor called" << endl; }
};

int main() {
    try {
        Test t;
        throw 20;
    }
    catch (int e) {
        cout << "Caught " << e << endl;
    }
    return 0;
}
```

## Best Practices
1. **Use Exceptions for Exceptional Conditions:** Exceptions should represent unexpected conditions, not regular control flow.
2. **Catch Specific Exceptions:** Catch specific exceptions to handle different error conditions appropriately.
3. **Resource Management:** Use RAII (Resource Acquisition Is Initialization) to manage resources, ensuring they are released even when exceptions occur.
4. **Minimize Exception Usage in Destructors:** Destructors should not throw exceptions to avoid unexpected behavior during stack unwinding.
5. **Document Exception Specifications:** Clearly document the exceptions that functions might throw.

By understanding and effectively using exception handling in C++, you can write more robust and maintainable code, ensuring your programs can gracefully handle unexpected conditions and errors.