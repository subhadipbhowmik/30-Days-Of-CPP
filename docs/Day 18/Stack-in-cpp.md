---
sidebar_position: 1
title: "Stack in C++"
description: "In this tutorial, we will learn about Stack in C++ with the help of examples. Stack is a data structure which work on the principle of LIFO i.e Last-In-First-Out "
sidebar_label: "Stack"
slug: stack-in-cpp
---

# Stack in C++
A Stack is a fundamental data structure in that follows the principle of Last-In-First-Out(LIFO). This means that the most recently added item is the first one to be removed.

C++ has STL Library that provides built-in implementation of stack.
The stack template class in C++ STL provides an easy-to-use stack implementation.

## Syntax of using Stack in C++
```cpp
stack <type> St;
```

- Stack: it is name of stack template keyword we use to construct a stack object.
- type: it defines the data type of the element to be stored.
- St: it is the name of the stack object.

## Header file for including Stack

```cpp
#include <stack>
```

## Operations associated with a stack

<b>1. Push </b>: Adds an element to the top of the stack.

<b>2. Pop</b> : Removes the element at the top of the stack.

<b>3. Peek(or Top)</b> : Returns the element at the top of stack without removing it.

<b>4. IsEmpty</b> : Returns 1 if stack is empty else returns 0 if stack is not empty.

<b>5. Size</b> : Returns the number of element in the stack.

## Characteristics of a Stack

- <b>LIFO Principle</b> : The last element added to the stack is the first element to be removed.
- <b>Order</b> : Elements are accessed in a sequential order determined by the operations(Push or Pop).
- <b>Implementation</b> : Can be implemented using arrays, linkedlist , or other data structures.

## Example
```cpp
#include<iostream>
#include<stack>
using namespace std;
int main(){
    // creation
    stack<int>st;
    
    // insertion
    st.push(10);
    st.push(20);
    st.push(30);
    // size check
    cout<<"size of stack "<<st.size()<<endl;

    // remove/delete
    st.pop();

//    check empty
if(st.empty()){
    cout<<"empty stack"<<endl;
}
else{
    cout<<"not empty"<<endl;
}

// top element
cout<<"top element: "<<st.top()<<endl;
    }

```
### output
```cpp
Size of stack 3
not empty
Top element 30
```

## Applications of Stack

- <b>Function Calls </b>: Used in the programming languages to store function call information.
- <b>Expression Evaluation</b> : Used in evaluating expressions , especially arithmetic expressions involving parentheses.
- <b>Backtracking</b> : Used in algorithm like Depth-First-Search(DFS) to store states for backtracking.

## Implementation of Stack using Array

Here's basic implementation program for stack using array

```cpp
#include<iostream>
using namespace std;
class Stack{
    public:
    int* arr;
    int size;
    int top;
    Stack(int size){
        arr = new int(size);
        this->size=size;
        this->top=-1;
    }
    void push(int data){
            if(top==size-1){
              cout<<"overflow"<<endl;
            }
            else{
              top++;
              arr[top]=data;
            }
            }
    void pop(){
        if(top==-1){
            cout<<"underflow"<<endl;
        }else{
        top--;
        }
    }
    bool is_empty(){
        if(top==-1){
         return true;
        }
        else{
            return false;
        }
    }
    int PeekElement(){
        if(top==-1){
            cout<<"stack is empty"<<endl;
            return -1;
        }else{
        return arr[top];}
    }
    int getsize(){
        return top+1;
    }
    void print(){
        cout<<"Stack: ";
        for(int i=0;i<getsize();i++)
        {
             cout<<arr[i]<<" ";
        }
    }
};
int main(){
    //  creation
    Stack st(8);
    // pushing
    st.push(50);
    st.push(40);
    st.push(30);
    st.push(20);
    st.push(10);
    st.print();
    // removing
    st.pop();
    // displaying
    st.print();
    cout<<endl<<st.getsize();

    return 0;
}
```

### Output
```cpp
Stack : 50 40 30 20 10
Stack : 50 40 30 20
Size : 4