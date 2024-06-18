---
sidebar_position: 1
title: "Queue in C++"
description: "In this tutorial, we will learn about Queue in C++ with the help of examples. Queue is a data structure which work on the principle of FIFO i.e First-In-First-Out "
sidebar_label: "Queue"
slug: queue-in-cpp
---

# Introduction to Queue in C++

A Queue is a data structure in C++ that operates on the principle of FIFO(First-In-First-Out).
This means that the first element added to the queue is the first one to be removed.
For instance just think of a line at a supermarket where the first person to join is the first one to be served.

C++ has STL Library that provides built-in implementation of queue.
The queue template class in C++ STL provides an easy-to-use queue implementation.

## Syntax of using Queue in C++
```cpp
queue <type> q;
```

## Header file for including Queue

```cpp
#include <queue>
```

## Operations on a Queue :

<b>1. Enqueue :</b> Adds an element to the back of the queue.

<b>2. Dequeue :</b> Removes the element from the front of the queue.

<b>3. Front :</b> Retrieves the front element without removing it.

<b>4. Empty :</b> Checks if the queue is empty.

<b>5. Size : </b>Returns the number of element in the queue.

## Example

```cpp
#include<iostream>
#include<queue>
using namespace std;
int main(){
    queue<int> q;
    q.push(4);
    cout<<"size of queue:"<<q.size()<<endl;
    if(q.empty()){
        cout<<"queue is empty"<<endl;
    }
    else{
        cout<<"queue is not empty"<<endl;
    }
    q.pop();
    cout<<"size of queue:"<<q.size()<<endl;
    q.push(18);
    q.push(20);
    cout<<"front element:"<<q.front()<<endl;
    cout<<"rear element:"<<q.back()<<endl;
    return 0;
}
```
## Output

```cpp
size of queue: 1
queue is not empty
size of queue: 0
front element: 18
rear element: 20
```

## Applications of Queue

- <b>Job Scheduling </b>: Operating System often uses queues to manage processes waiting to be executed by the CPU.
- <b>Graph Traversal</b> : BFS uses a queue to explore all neighbors of a node before moving on to next level of nodes.
- <b>Task Processing</b> : Queues are used to manage tasks in system where tasks arrive asynchronously and need to be processed in the order they were received.

## Implementation of Queue using Array

Here's basic implementation program for Queue using array :

```cpp
#include<iostream>
using namespace std;
class Queue{
    public:
    int *arr;
    int size;
    int front;
    int rear;
    Queue(int size){
        this->size=size;
        arr=new int[size];
        front=-1;
        rear=-1;
    }
    void push(int data){
        if(rear==size-1){
            cout<<"overflow:"<<endl;
        }
        else if(front==-1&&rear==-1){
            front++;
            rear++;
            arr[rear]==data;
        }
        else{
            rear++;
            arr[rear]=data;
        }

    }
    void pop(){
        if(front==-1 && rear==-1){
            cout<<"underflow:";
            return;
        }
        else if(front==rear){
            arr[front]=-1;
            front=-1;
            rear=-1;

        }
        else{
            arr[front]=-1;
            front++;
        }
    }
    bool isempty(){
        if(front==-1 && rear==-1){
            return true;
        }
        else{
            return false;
        }
    }
    int getsize(){
        if(front==-1&&rear==-1){
            return 0;
        }
        else{
            return rear-front+1;
        } 
    }
    int getfront(){
        if(front==-1){
            cout<<"no element"<<endl;
            return -1;
        }
        else{
            return arr[front];
        }
    }
    void print(){
        cout<<"printing queue:";
        for(int i=0;i<size;i++){
            cout<<arr[i]<<" ";
        }
        cout<<endl;
    }

    };
    int main(){
        Queue q(5);
        push(1);
        push(2);
        push(3);
        push(4);
        push(5);

        q.print();
        return 0;
    }

```

### Output
```cpp
printing queue: 1 2 3 4 5
```
