---
sidebar_position: 2
title: "Array in C++"
description: "In this tutorial, we will learn about Arrays in C++ programming with the help of examples. An array is a collection of elements of the same data type that are stored in contiguous memory locations. Arrays are used to store multiple values in a single variable."
sidebar_label: "Array"
slug: array-in-cpp
---

TASK:

1. What is an Array in C++?
2. Explain the Syntax of an Array in C++.
3. How to Declare and Define an Array in C++?
4. C++ Array Example
5. How to Access Elements of an Array in C++?
6. How to Update Elements of an Array in C++?
7. How to Calculate the Size of an Array in C++?
8. How to Traverse an Array in C++?
9. How to Pass an Array to a Function in C++?
10. How to Return an Array from a Function in C++?


### SOlution:
## What is an Array in C++?
In C++, an array is a data structure that can store a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.

## Explain the syntax of an Array in C++?
The syntax of an array in C++ involves the declaration, initialization, and accessing of array elements. Here are the key aspects of array syntax in C++:

1. Declaration:
To declare an array in C++, you specify the type of its elements, its name, and its size in square brackets. The general syntax is:

```cpp
type arrayName[arraySize];
```

- type: The data type of the elements in the array (e.g., int, float, double, char).
- arrayName: The name of the array.
- arraySize: The number of elements the array can hold. This must be a constant expression.

```cpp
int numbers[10];  // declares an array of 10 integers
```

2. Initialization:
You can initialize an array at the time of declaration. This can be done in two ways:

a. Initializing All Elements:
```cpp
type arrayName[arraySize] = {value1, value2, ..., valueN};
```
- value1, value2, ..., valueN: Initial values for the elements in the array. The number of values should not exceed arraySize.

Example:
```cpp
int numbers[5] = {1, 2, 3, 4, 5};  // declares and initializes an array of 5 integers
```

b. Implicit Size Determination:
If the size of the array is omitted, the compiler determines the size based on the number of initializers.
```cpp
type arrayName[] = {value1, value2, ..., valueN};
```

Example:
```cpp
int numbers[] = {1, 2, 3, 4, 5};  // size is automatically determined to be 5
```

3. Accessing Elements:
Array elements are accessed using the index operator []. The index of the first element is 0.
```cpp
arrayName[index]
```
- index: The position of the element in the array (starting from 0).

Example:
```cpp
int firstElement = numbers[0];  // accesses the first element (1)
numbers[2] = 10;  // sets the third element to 10
```

4. Multi-dimensional Arrays:
C++ supports multi-dimensional arrays. The syntax for a two-dimensional array is:

```cpp
type arrayName[size1][size2];
```

### How to Declare and Define an Array in C++?
To declare and define an array in C++, you specify the type of its elements, its name, and its size. You can also initialize the array at the time of declaration.

Declaration:
To declare an array, use the following syntax:
```cpp
type arrayName[arraySize];
```

- type: The data type of the array elements (e.g., int, float, double, char).
- arrayName: The name of the array.
- arraySize: The number of elements the array can hold.

Definition with Initialization:
You can define and initialize an array at the same time:

With Explicit Size:
```cpp
type arrayName[arraySize] = {value1, value2, ..., valueN};
```

With Implicit Size:
If you omit the size, the compiler determines it based on the number of initializers:
```cpp
type arrayName[] = {value1, value2, ..., valueN};
```

## C++ Array Example

- One-Dimensional Array Example
 This example demonstrates how to declare, initialize, and access elements of a one-dimensional array.
 ```cpp
 #include <iostream>
using namespace std;

int main() {
    // Declaration and initialization of a one-dimensional array
    int numbers[5] = {10, 20, 30, 40, 50};

    // Printing all elements of the array
    for (int i = 0; i < 5; i++) {
        cout << "Element at index " << i << ": " << numbers[i] << endl;
    }

    // Modifying an element
    numbers[2] = 35;  // Change the third element from 30 to 35

    // Printing the modified array
    cout << "Modified array:" << endl;
    for (int i = 0; i < 5; i++) {
        cout << "Element at index " << i << ": " << numbers[i] << endl;
    }

    return 0;
}
```

- Two-Dimensional Array Example
  This example demonstrates how to declare, initialize, and access elements of a two-dimensional array.

```cpp
  #include <iostream>
using namespace std;

int main() {
    // Declaration and initialization of a two-dimensional array
    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    // Printing all elements of the 2D array
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            cout << "Element at (" << i << ", " << j << "): " << matrix[i][j] << endl;
        }
    }

    // Modifying an element
    matrix[1][2] = 10;  // Change the element at row 1, column 2 from 6 to 10

    // Printing the modified 2D array
    cout << "Modified 2D array:" << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            cout << "Element at (" << i << ", " << j << "): " << matrix[i][j] << endl;
        }
    }

    return 0;
}
```

##  How to Access Elements of an Array in C++?

To access elements of an array in C++, you use the array name followed by the index of the element enclosed in square brackets ([]). The index is zero-based, meaning the first element has an index of 0, the second element has an index of 1, and so on.

Syntax for Accessing Elements
```cpp
arrayName[index]
```

Example: One-Dimensional Array
Here is an example demonstrating how to access and manipulate elements of a one-dimensional array:

```cpp
#include <iostream>
using namespace std;

int main() {
    // Declaration and initialization of a one-dimensional array
    int numbers[5] = {10, 20, 30, 40, 50};

    // Accessing and printing elements of the array
    cout << "First element: " << numbers[0] << endl;  // Accessing the first element
    cout << "Second element: " << numbers[1] << endl; // Accessing the second element

    // Modifying elements of the array
    numbers[2] = 35;  // Modifying the third element
    numbers[4] = 55;  // Modifying the fifth element

    // Printing all elements of the array after modification
    for (int i = 0; i < 5; i++) {
        cout << "Element at index " << i << ": " << numbers[i] << endl;
    }

    return 0;
}
```

Example: Two-Dimensional Array
Here is an example demonstrating how to access and manipulate elements of a two-dimensional array:
```cpp
#include <iostream>
using namespace std;

int main() {
    // Declaration and initialization of a two-dimensional array
    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    // Accessing and printing elements of the 2D array
    cout << "Element at (0, 0): " << matrix[0][0] << endl;  // Accessing the element at row 0, column 0
    cout << "Element at (1, 2): " << matrix[1][2] << endl;  // Accessing the element at row 1, column 2

    // Modifying elements of the 2D array
    matrix[0][1] = 20;  // Modifying the element at row 0, column 1
    matrix[1][2] = 60;  // Modifying the element at row 1, column 2

    // Printing all elements of the 2D array after modification
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            cout << "Element at (" << i << ", " << j << "): " << matrix[i][j] << endl;
        }
    }

    return 0;
}
```

## How to Update Elements of an Array in C++?
Updating elements of an array in C++ involves accessing the element using its index and then assigning a new value to it. This can be done using the assignment operator (=). Below are the steps and examples for updating elements in both one-dimensional and two-dimensional arrays.

Syntax for Updating Elements
```cpp
arrayName[index] = newValue;
```

Example: Updating a One-Dimensional Array
Here's an example that demonstrates how to update elements in a one-dimensional array:
```cpp
#include <iostream>
using namespace std;

int main() {
    // Declaration and initialization of a one-dimensional array
    int numbers[5] = {10, 20, 30, 40, 50};

    // Printing the original array
    cout << "Original array:" << endl;
    for (int i = 0; i < 5; i++) {
        cout << "Element at index " << i << ": " << numbers[i] << endl;
    }

    // Updating elements of the array
    numbers[0] = 15;  // Update the first element to 15
    numbers[3] = 45;  // Update the fourth element to 45

    // Printing the updated array
    cout << "Updated array:" << endl;
    for (int i = 0; i < 5; i++) {
        cout << "Element at index " << i << ": " << numbers[i] << endl;
    }

    return 0;
}
```

Example: Updating a Two-Dimensional Array
Here's an example that demonstrates how to update elements in a two-dimensional array:
```cpp
#include <iostream>
using namespace std;

int main() {
    // Declaration and initialization of a two-dimensional array
    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    // Printing the original 2D array
    cout << "Original 2D array:" << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            cout << "Element at (" << i << ", " << j << "): " << matrix[i][j] << endl;
        }
    }

    // Updating elements of the 2D array
    matrix[0][1] = 20;  // Update the element at row 0, column 1 to 20
    matrix[1][2] = 60;  // Update the element at row 1, column 2 to 60

    // Printing the updated 2D array
    cout << "Updated 2D array:" << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            cout << "Element at (" << i << ", " << j << "): " << matrix[i][j] << endl;
        }
    }

    return 0;
}
```

## How to Calculate the Size of an Array in C++?

In C++, you can calculate the size of an array using the sizeof operator or by dividing the total size of the array by the size of an individual element. Here are two common methods:

Using sizeof Operator
You can use the sizeof operator to determine the size of an array in bytes. Divide the total size of the array by the size of an individual element to get the number of elements in the array. Here's how you can do it:

```cpp
#include <iostream>
using namespace std;

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};

    // Calculate the size of the array
    int sizeOfArray = sizeof(numbers) / sizeof(numbers[0]);

    cout << "Size of the array: " << sizeOfArray << endl;

    return 0;
}
```
Output:
```cpp
Size of the array: 5
```

## How to Traverse an Array in C++?

Traversing an array in C++ involves accessing each element of the array one by one. This is commonly done using a loop, such as a for loop. Here's how you can traverse an array:

Example: Traversing a One-Dimensional Array
```cpp
#include <iostream>
using namespace std;

int main() {
    // Declaration and initialization of a one-dimensional array
    int numbers[5] = {10, 20, 30, 40, 50};

    // Traversing the array using a for loop
    cout << "Traversing the one-dimensional array:" << endl;
    for (int i = 0; i < 5; i++) {
        cout << "Element at index " << i << ": " << numbers[i] << endl;
    }

    return 0;
}
```

Output:
```cpp
Traversing the one-dimensional array:
Element at index 0: 10
Element at index 1: 20
Element at index 2: 30
Element at index 3: 40
Element at index 4: 50
```

Example: Traversing a Two-Dimensional Array
```cpp
#include <iostream>
using namespace std;

int main() {
    // Declaration and initialization of a two-dimensional array
    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    // Traversing the array using nested for loops
    cout << "Traversing the two-dimensional array:" << endl;
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            cout << "Element at (" << i << ", " << j << "): " << matrix[i][j] << endl;
        }
    }

    return 0;
}
```

Output:
```cpp
Traversing the two-dimensional array:
Element at (0, 0): 1
Element at (0, 1): 2
Element at (0, 2): 3
Element at (1, 0): 4
Element at (1, 1): 5
Element at (1, 2): 6
```

## How to Pass an Array to a Function in C++?

In C++, you can pass an array to a function in two main ways: by passing the array name or by passing a pointer to the array. Here are both methods explained:

Passing an Array to a Function Using Array Name
When you pass an array to a function using its name, you are actually passing a pointer to the first element of the array. Here's how you can do it:
```cpp
#include <iostream>
using namespace std;

// Function to print elements of an array
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    int numbers[] = {1, 2, 3, 4, 5};

    // Passing the array to the function
    printArray(numbers, 5);

    return 0;
}
```

Output:
```cpp
1 2 3 4 5
```

##  How to Return an Array from a Function in C++?
In C++, you cannot directly return an entire array from a function. However, you can return a pointer to the array or use other data structures like std::vector or std::array to achieve similar functionality. Below are two common methods:

Method 1: Returning a Pointer to the Array
```cpp
#include <iostream>
using namespace std;

// Function to create and return an array
int* createArray(int size) {
    int* arr = new int[size];
    for (int i = 0; i < size; ++i) {
        arr[i] = i * 10;
    }
    return arr;
}

int main() {
    int size = 5;
    int* myArray = createArray(size);

    // Printing the elements of the returned array
    for (int i = 0; i < size; ++i) {
        cout << myArray[i] << " ";
    }
    cout << endl;

    // Don't forget to delete the dynamically allocated array
    delete[] myArray;

    return 0;
}
```

Output:
```cpp
0 10 20 30 40 
```

Method 2: Using std::vector
```cpp
#include <iostream>
#include <vector>
using namespace std;

// Function to create and return a vector
vector<int> createArray(int size) {
    vector<int> arr(size);
    for (int i = 0; i < size; ++i) {
        arr[i] = i * 10;
    }
    return arr;
}

int main() {
    int size = 5;
    vector<int> myVector = createArray(size);

    // Printing the elements of the returned vector
    for (int i = 0; i < size; ++i) {
        cout << myVector[i] << " ";
    }
    cout << endl;

    return 0;
}
```

Output:
```cpp
0 10 20 30 40 
```


IMAGE FILE:
![Ternary in CPP](../../static/img/day-09/array-in-cpp.png)

