---
sidebar_position: 3
---
# Access Specifiers in C++

Access specifiers in C++ are keywords that control the visibility and accessibility of class members.

## Types of Access Specifiers

### 1. Public
- **Description**: Public members are accessible from outside the class.
- **Usage**:
```cpp
class MyClass {
public:
    int myPublicMember;
    void myPublicFunction() {
        // Function body
    }
};
```
### 2. Private
- **Description**: Private members are accessible only within the class.
- **Usage**:
```cpp
class MyClass {
private:
    int myPrivateMember;
    void myPrivateFunction() {
        // Function body
    }
};

```
### 3. Protected
- **Description**: Protected members are accessible within the class and its subclasses (derived classes).
- **Usage**:
```cpp
class MyBaseClass {
protected:
    int myProtectedMember;
};
class MyDerivedClass : public MyBaseClass {
public:
    void myFunction() {
        myProtectedMember = 10; // Accessing protected member of the base class
    }
};
```

Access specifiers provide control over data hiding and encapsulation, enabling better design and implementation of classes in C++.