---
sidebar_position: 5
title: "Ternary operator in C++"
description: "In this tutorial, we will learn about the ternary operator in C++ programming with the help of examples."
sidebar_label: "Ternary operator in C++"
slug: ternary-operator
---

# Ternary operator in C++

- The ternary operator is a conditional operator that takes three operands.

- It is used to evaluate a condition and return a value based on the result of the condition.

- The syntax of the ternary operator is as follows:

```cpp
condition ? value_if_true : value_if_false;
```
## Example 1 : Check if a number is even or odd

```cpp
#include <iostream>
using namespace std;

int main() {
    int num = 10;
    string result;

    result = (num % 2 == 0) ? "Even" : "Odd";

    cout << "The number is " << result << endl;

    return 0;
}
```

In the above example, we have used the ternary operator to check if the number is even or odd. If the number is even, the value of `result` will be "Even", otherwise it will be "Odd".

Output:

```cpp
The number is Even
```

## Example 2 : Find the maximum of two numbers

```cpp
#include <iostream>
using namespace std;

int main() {
    int num1 = 10, num2 = 20;
    int max_num;

    max_num = (num1 > num2) ? num1 : num2;

    cout << "The maximum number is " << max_num << endl;

    return 0;
}
```

In the above example, we have used the ternary operator to find the maximum of two numbers. If `num1` is greater than `num2`, the value of `max_num` will be `num1`, otherwise it will be `num2`.

Output:

```cpp
The maximum number is 20
```

## Example 3 : Find the maximum of three numbers

```cpp
#include <iostream>
using namespace std;

int main() {
    int num1 = 10, num2 = 20, num3 = 30;
    int max_num;
    max_num = (num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3);

    cout << "The maximum number is " << max_num << endl;

    return 0;
}
```

In the above example, we have used the ternary operator to find the maximum of three numbers. We have used nested ternary operators to compare the numbers.

If `num1` is greater than `num2`, then we compare `num1` with `num3`, otherwise we compare `num2` with `num3`. Here, the outer ternary operator is used to compare `num1` and `num2`, and the inner ternary operator is used to compare the result of the outer ternary operator with `num3`.
Since `num2` is greater than `num1`, the inner ternary operator compares `num2` with `num3` and returns the maximum number.

Output:

```cpp
The maximum number is 30
```

## Advantages of Ternary Operator

- The ternary operator is concise and can be used to write compact code.

- It can be used to replace simple if-else statements.

- It can be used to assign values based on a condition.





