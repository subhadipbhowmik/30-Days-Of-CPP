---
sidebar_position: 2
title: "Ternary Operator in C++"
description: "In this tutorial, we will learn about the ternary operator in C++ programming with the help of examples. The ternary operator is a conditional operator that returns a value based on the condition."
sidebar_label: "Ternary Operator"
slug: ternary-operator-in-cpp
---


## What is the Ternary Operator in C++?
In C++, the ternary operator, also known as **conditional operator**,  is a shorthand way of writing conditional (if-else) statements. It is known as ternary operator because it takes **three** operands. This operator can be used to replace simple multi-line if-else statements with a single line of code.



![Ternary in CPP](../../static/img/day-07/ternary-operator.png)

## Syntax of Ternary Operator in C++
The ternary/conditional operator `(? :)` takes 3 operands (`condition`, `expression_1` and `expression_2`). The basic syntax of ternary operator is:
```cpp
condition ? expression_1 : expression_2;
```
The above statement, if written using `if-else`, is the same as:
```cpp
if(condition){
    expression_1;
}
else{
    expression_2;
}
```

## How does the Ternary Operator work in C++?
The ternary operator works by first evaluating the condition. If the condition evaluates to `true`, then the code corresponding to `expression_1` is executed. If the condition evaluates to `false`, then code corresponding to `expression_2` is executed.

## C++ Ternary Operator Examples
### 1. Print the max of two integers 
The following program takes two integers as input and prints maximum of them.

```cpp
#include<iostream>
using namespace std;

int main(){
    int a, b;
    cout<<"Enter two numbers: ";
    cin>>a>>b;
    int maxi = (a > b) ? a : b;
    cout<<"Max number is "<<maxi<<endl;
    return(0);
}
```
If condition `a>b` evaluates to `true`, then `maxi` stores the larger value `a`. If condition `a>b` evaluates to `false`, then `maxi` stores the value of `b`.

### 2. Get absolute value of an integer 
The function `get_abs` takes an integer as input and returns the absolute value of integer. The function shows the use of `return` with ternary operator.

```cpp
#include <iostream>
using namespace std;

int get_abs(int n){
    return (n>=0 ? n : -n);
}

int main()
{
    int n;
    cout << "Enter a number: ";
    cin >> n;
    cout << "Absolute value is " << get_abs(n) << endl;
    return (0);
}
```

``
NOTE:
``
The following syntax for the function is **incorrect**:
```cpp
int get_abs(int n){
    n>=0 ? return(n) : return(-n);
}
// This is because return is a statement 
// whereas ternary operator requires operands 
// to be expression and not statement.
```

## C++ Ternary Operator with Nested Ternary Operator
The following program takes three integers as input and prints maximum of them.
```cpp
#include<iostream>
using namespace std;

int main(){
    int a, b, c;
    cout<<"Enter three numbers: ";
    cin>>a>>b>>c;
    int maxi = (a > b) ? ((a > c) ? a : c) : ((b>c) ? b : c);
    cout<<"Max number is "<<maxi<<endl;
    return(0);
}
```

If condition `a>b` evaluates to `true`, then we check the condition `a>c`. If `a>c` evaluates to `true`, then `maxi` stores the value of `a`, else `maxi` stores the value of `c`.

 If condition `a>b` evaluates to `false`, then we check the condition `b>c`. If `b>c` evaluates to `true`, then `maxi` stores the value of `b`, else `maxi` stores the value of `c`.