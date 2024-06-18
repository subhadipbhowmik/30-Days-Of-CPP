---
sidebar_position: 5
title: "Recursion in C++"
description: "In this tutorial, we will learn about recursion in C++ with the help of examples. Recursion is a programming technique where a function calls itself to solve smaller instances of a problem."
sidebar_label: "Recursion"
slug: recursion-in-cpp
---


## Recursion in C++?
Recursion in C++ is a technique in which a function calls itself repeatedly until a given condition is satisfied. It can be a powerful tool in programming, particularly for tasks that can be divided into smaller, similar sub-tasks.

![Switch in CPP](../../static/img/day-09/recursion.png)


## Syntax 
```cpp
return_type recursive_func {
    ....
       // Base Condition
       // Recursive Case
       ....
}
```
A recursive function has a base condition that stops further calls by returning a result, and a recursive case that calls the function with smaller sub-problems until the base condition is met.

## Recusive Function
A function that calls itself is called a recursive function. When a recursive function is called, it executes a set of instructions and then calls itself to execute the same set of instructions with a smaller input. 

## Why Use Recursion?

Recursion is particularly useful for:
- Problems that can naturally be divided into similar sub-problems (e.g., factorial calculation, Fibonacci series).
- Implementing algorithms in a more readable and concise way (e.g., tree traversals, searching algorithms).

## How Recursion Works

A recursive function typically has two main components:
- **Base case**: A condition under which the function stops calling itself, preventing infinite recursion.
- **Recursive case**: The part of the function where the function calls itself with modified arguments.

**Example Structure:

```cpp
void recursiveFunction() {
    if (baseCondition) {
        // Base case
        return;
    } else {
        // Recursive case
        recursiveFunction();
    }
}
```
  
## How to Declare and Define a Recursive Function in C++?

To declare and define a recursive function in C++, follow these steps:

## Declaration : You need to declare the function prototype at the beginning of your code or before its first use if it’s being called in multiple functions.

## Definition : You then define the function, specifying its behavior, including the base condition and the recursive case.

## Example : 
```cpp
#include <iostream>

// Declaration
int factorial(int n);

// Definition
int factorial(int n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1); // recursive call
    }
}

int main() {
    int number = 5;
    std::cout << "Factorial of " << number << " is " << factorial(number) << std::endl;
    return 0;
}
```
## Output
```cpp
  Factorial of 5 is 125.
```
Here in this example we have performed the task to calculate a factorial of numbers.

## Advantages of C++ Recursion
- It makes our code shorter and cleaner.
- Recursion is required in problems concerning data structures and advanced algorithms, such as Graph and Tree Traversal.

## Disadvantages of C++ Recursion
- It takes a lot of stack space compared to an iterative program.
- It uses more processor time.
- It can be more difficult to debug compared to an equivalent iterative program.

## Types of Recursion in C++
There are two different types of recursion which are as follows:

1. Direct Recursion
2. Indirect Recursion

## 1. Direct Recursion
Direct recursion involves a function calling itself directly within its body. It can be further categorized into three types:

a) Head Recursion: In head recursion, the recursive call is present at the start of the function. It is a kind of linear recursion where only a single recursive call is used.

b) Tail Recursion: Tail recursion is a linear recursion where it’s one and only recursive call is present at the end of the function. 

c) Tree Recursion: In Tree Recursion, there are multiple recursive calls present in the body of the function. 

## 2. Indirect Recursion
In indirect recursion, the function does not call itself directly but instead, it calls another function which then eventually calls the first function creating a cycle of function calls.

## Example : 
```cpp
 #include <iostream>
using namespace std;

// Function for fibonacci
int fib(int n)
{
    // Stop condition
    if (n == 0)
        return 0;
    // Stop condition
    if (n == 1 || n == 2)
        return 1;
    // Recursion function
    else
        return (fib(n - 1) + fib(n - 2));
}

int main()
{
    // Initialize variable n.
    int n = 5;
    cout << "Fibonacci series of 5 numbers is: ";
    // for loop to print the fibonacci series.
    for (int i = 0; i < n; i++) {
        cout << fib(i) << " ";
    }
    return 0;
}
```
## Output 
```cpp
  Fibonacci series of 5 numbers is: 0 1 1 2 3 
```

## Applications of Recursion
Recursion has many applications in computer science and programming. Here are some of the most common applications of recursion:

- Solving: Fibonacci sequences, Factorial Function, Reversing an array, Tower of Hanoi.
- Backtracking: It is a technique for solving problems by trying out different solutions and undoing them if they do not work. Recursive algorithms are often used in backtracking.
- Searching and Sorting Algorithms: Many searching and sorting algorithms, such as binary search and quicksort, use recursion to divide the problem into smaller - sub-problems.
- Tree and Graph Traversal: Recursive algorithms are often used to traverse trees and graphs, such as depth-first search and breadth-first search.
- Mathematical Computations: Recursion is also used in many mathematical computations, such as the factorial function and the Fibonacci sequence.
- Dynamic Programming: It is a technique for solving optimization problems by breaking them down into smaller sub-problems. Recursive algorithms are often used in dynamic programming.

## Recursion Examples :

Some more examples :

## Example 1 : Reverse a String
```cpp
#include <iostream>

void reverseString(std::string& str, int start, int end) {
    if (start >= end)
        return;
    std::swap(str[start], str[end]);
    reverseString(str, start + 1, end - 1);
}

int main() {
    std::string str = "Hello";
    reverseString(str, 0, str.length() - 1);
    std::cout << "Reversed string is: " << str << std::endl;
    return 0;
}

```
## Output 
```cpp
  Reversed string is: olleH
```

## Example 2 : Sum of Digits
```cpp
#include <iostream>
using namespace std;

int sumOfDigits(int n) {
    if (n == 0) // Base case
        return 0;
    return (n % 10) + sumOfDigits(n / 10); // Recursive case
}

int main() {
    int num = 12345;
    cout << "Sum of digits of " << num << " is " << sumOfDigits(num) << endl;
    return 0;
}

```
## Output 
```cpp
 Sum of digits of 12345 is 15.
```

## Example 3 :Reverse Array

Code
```cpp
#include<bits/stdc++.h>
using namespace std;
void reverseArray(int n, int arr[],int i){
    if(i>=(n/2)){
        return ;
    }
    swap(arr[i],arr[n-i-1]);
    reverseArray(n,arr,i++);
}
int main(){
    int n=5;
    int arr[5]= {1,2,3,4,5};
    cout<<"Before reversal :"<<endl;
    for(int k=0;k<n;k++){
        cout<<arr[k]<<" ";
    }
    reverseArray(n,arr,0);
    cout<<endl<<"After reversal :"<<endl;
    for(int k=0;k<n;k++){
        cout<<arr[k]<<" ";
    }
    return 0;
}
```
## Output
```
Before reversal : 
1 2 3 4 5
After reversal :
5 4 3 2 1
```
## Conclusion :

Recursion is a fundamental concept in C++ that provides a straightforward way to solve problems by breaking them down into smaller sub-problems. Understanding how to use recursion effectively can greatly enhance your problem-solving skills and enable you to write cleaner, more efficient code.


