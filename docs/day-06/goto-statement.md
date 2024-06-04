---
sidebar_position: 3
title: "Go To Statement in C++"
description: "In this tutorial, we will learn about the goto statement in C++ programming with the help of examples. The goto statement is used to transfer control to the other part of the program."
sidebar_label: "Go To Statement"
slug: goto-statement-in-cpp
---

<!-- TASK:

1. What is the Go To Statement in C++?
2. Explain the Syntax of Go To Statement in C++.
3. C++ Go To Statement Example
4. Why is the Go To Statement Considered Harmful?
5. When to Use Go To Statement in C++? -->

## What is the Go To Statement in C++?
In C++, the `goto` statement is a jump statement used for unconditional jumps within the code. It transfers control to a location labeled by a specific label within the **same** function.


![GOTO Statement](../../static/img/day-06/goto-statement.png)

## Syntax of Go To Statement in C++
The syntax consists of two parts: `goto` statement and the associated identifier `label`.

```cpp
goto label;  
...
...
...
label: 
// statements
```
Whenever `goto label` is encountered, the program control is transferred to the place where `label` is present and the code below it is executed.

`NOTE: The goto statement must be within the same function as the label it refers to, and it can appear either before or after the label.`

## C++ Go To Statement Example
```cpp
#include<iostream>
using namespace std;


int main(){
    int n;

    cin>>n;
    if(n<0){
        goto negative;
    }
    else{
        goto positive;
    }

    positive:
        cout<<"Input is non-negative"<<endl;
        return 0;
        
    negative:
        cout<<"Input is negative"<<endl;
        
    return 0;
}
```

`NOTE:` The `return` statement is necessary in the code corresponding to `positive` label, as, otherwise the code corresponding to  `negative` label will also get executed.


## Why is the Go To Statement Considered Harmful?

The use of `goto` statement is considered to be a bad programming practice and use of it is highly discouraged. This is beacause it makes the program logic complex and also makes it difficult for us to trace the control flow of program. `goto` statements can be avoided as any program with `goto` can be rewritten using `break` and `continue` statements.



## When to Use Go To Statement in C++?
Although the use of the `goto` statement is generally discouraged, there are specific cases where it can be useful. For instance, in a program with multiple nested loops, you might want to break out of all the loops simultaneously. Normally, this would require multiple `break` statements for each loop level. However, a single `goto` statement can achieve the same result more efficiently.