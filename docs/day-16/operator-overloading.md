---
sidebar_position: 2
title: "Operator Overloading in C++"
description: "Operator overloading is a compile-time polymorphism. It is an idea of giving special meaning to an existing operator in C++ without changing its original meaning."
sidebar_label: "Operator Overloading"
slug: operator-overloading-in-cpp
---

# Operator Overloading in C++

Operator overloading is a feature of C++ that allows you to redefine the meaning of operators when they are used with user-defined types (classes or structures). It is a form of compile-time polymorphism, where the same operator can be used to perform different operations depending on the context in which it is used.

## Why Use Operator Overloading?
1. **Natural Syntax:** Operator overloading allows you to use operators with user-defined types in a way that is natural and intuitive, similar to built-in types.

2. **Code Readability:** It can make your code more readable and expressive by allowing you to use operators to perform operations that are meaningful for your custom types.

3. **Consistency:** Operator overloading can help maintain consistency in your code by allowing you to use operators in a uniform way across different types.

# How Operator Overloading Works?

Operator overloading works by defining a function that is called when an operator is used with an object of a class or structure. The syntax for overloading an operator is to define a function with the keyword operator followed by the operator you want to overload. 

For example, to overload the + operator for adding two objects of a class:
        ```cpp
        class Vector {
        private:
            int x, y;
        public:
            Vector(int x, int y) : x(x), y(y) {}
            Vector operator+(const Vector& other) {
                return Vector(x + other.x, y + other.y);
            }
        };

        int main() {
            Vector v1(1, 2);
            Vector v2(3, 4);
            Vector v3 = v1 + v2; // Calls the overloaded + operator
            return 0;
        }
        ```

## Rules for Operator Overloading

1. **Precedence and Associativity:** You cannot change the precedence or associativity of operators through overloading.

2. **Number of Operands:** You cannot change the number of operands an operator takes. For example, you cannot overload the + operator to take three operands.

3. **Syntax:** The syntax for overloading operators is fixed and cannot be changed. For example, you cannot change the syntax for the + operator to use a different symbol.

4. **Semantics:** While you can change the meaning of an operator, it is important to maintain consistency with the standard meaning of the operator to avoid confusion.

## Commonly Overloaded Operators
1. Arithmetic operators: 
   `+`, `-`, `*`, `/`, `%`
2. Relational operators: 
    `<`, `<=`, `>`, `>=`, `==`, `!=`
3. Increment and decrement operators: 
    `++`, `--`
4. Stream insertion and extraction operators: 
    `<<`, `>>`
5. Assignment operators: 
   `=`, `+=`, `-=`, `*=`, `/=`, `%=`

## Conclusion
Operator overloading is a powerful feature in C++ that allows you to redefine the behavior of operators for user-defined types. By carefully designing overloaded operators, you can make your code more expressive and easier to understand, leading to more maintainable and robust software.