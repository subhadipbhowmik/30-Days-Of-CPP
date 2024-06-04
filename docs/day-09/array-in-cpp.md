---
sidebar_position: 2
title: "Array in C++"
description: "In this tutorial, we will learn about Arrays in C++ programming with the help of examples. An array is a collection of elements of the same data type that are stored in contiguous memory locations. Arrays are used to store multiple values in a single variable."
sidebar_label: "Array"
slug: array-in-cpp
---



## What is Array in C++?
In C++, an array is a data structure designed to hold multiple values of the **same data type** in a continuous block of memory.

For **instance**, storing the marks of 4 or 5 students can be managed by creating individual variables for each student's marks. However, this approach quickly becomes impractical when you need to store the marks of 100 or even 500 students. Managing such a large number of variables would be cumbersome and error-prone. This is where arrays become extremely useful, as they allow you to create a single array with the required number of elements to store the marks efficiently.



![Array in CPP](../../static/img/day-09/array-in-cpp.png)

## Syntax of Array in C++
The basic array declaration in C++ is given as:
```cpp
data_type array_name[Size_of_array];
```
Example
```cpp
int arr[10];
```
Here,

- **int**: It is the type of data to be stored in the array. We can also use other data types such as char, float, and double.
- **arr**: It is the name of the array.
- **10**: It is the size of the array which means only 10 elements can be stored in the array.

## Initialisation of Array in C++?
In C++, array can be initialised in many ways. Here, we are going to discuss most common ways. We can initialize an array at the time of declaration or after declaration.

### 1. Initialize Array with Values in C++
We have initialized the array with values.

```cpp
int arr[5] = {1, 2, 3, 4, 5};
```

### 2. Initialize Array with Values and without Size in C++
We initialized the array with values without specifying its length, so the array's length automatically matches the number of elements within the curly braces.
```cpp
int arr[] = {1, 2, 3, 4, 5};
```
### 3. Initialize Array after Declaration (Using Loops)
We have initialized the array using a loop after declaring the array.
```cpp
for (int i = 0; i < N; i++) {
    arr[i] = value;
}
```
### 4. Initialize an array partially in C++
Here, we have declared an array ‘partialArray’ with size ‘5’ and with values ‘1’ and ‘2’ only. So, these values are stored at the first two indices, and at the rest of the indices ‘0’ is stored.
```cpp
int partialArray[5] = {1, 2};

```
### 5. Initialize the array with zero in C++
We can initialize the array with all elements as ‘0’ by specifying ‘0’ inside the curly braces.
```cpp
int zero_array[5] = {0};
```

## Accessing an Element of an Array in C++
Elements of an array can be accessed by specifying the name of the array, then the index of the element enclosed in the array subscript operator []. For example, arr[i].

### C++ Program to Illustrate How to Access Array Elements

```cpp
// C++ Program to Illustrate How to Access Array Elements 
#include <iostream> 
using namespace std; 

int main() 
{ 

	int arr[3]; 

	// Inserting elements in an array 
	arr[0] = 10; 
	arr[1] = 20; 
	arr[2] = 30; 

	// Accessing and printing elements of the array 
	cout << "arr[0]: " << arr[0] << endl; 
	cout << "arr[1]: " << arr[1] << endl; 
	cout << "arr[2]: " << arr[2] << endl; 

	return 0; 
}
```

 **Explanation**

1. **Including the iostream library**``
    - This line includes the input-output stream library, which allows the program to use `std::cout` for printing to the console.

2. **Using the standard namespace**
    - This line allows us to use names from the `std` namespace without qualifying them with `std::`. For example, we can write `cout` instead of `std::cout`.

3. **Defining the main function**
    - The `main` function is the entry point of a C++ program. Execution starts from here.

4. **Declaring an array**
    - This line declares an integer array named `arr` with 3 elements. Initially, the elements contain garbage values until we assign them explicitly.

5. **Returning 0 from the main function**
    - `return 0;` indicates that the program has ended successfully. In C++, returning `0` from the `main` function signifies successful execution.

**Output**
```cpp
arr[0]: 10
arr[1]: 20
arr[2]: 30
```

This output confirms that the values have been correctly assigned to the array elements and accessed properly for printing.

## Update an Array in C++
To update an array element, use the index within the array subscript operator and assign a new value:

```cpp
arr[i] = new_value;
```
## Traverse an Array in C++
To traverse an array in C++, use a loop with indexing. For example, to print elements of an array `table_of_two` containing multiples of 2, use a for loop from 0 to 9 (since indexing starts at zero):

### C++ Program to Illustrate How to Traverse an Array

```cpp
#include <iostream> 
using namespace std; 

int main() 
{ 

	// Initialize the array 
	int table_of_two[10] 
		= { 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 }; 

	// Traverse the array using for loop 
	for (int i = 0; i < 10; i++) { 
		// Print the array elements using indexing 
		cout << table_of_two[i] << " "; 
	} 

	return 0; 
}
```

 **Explanation**

1. **Including the iostream library**``
    - This line includes the input-output stream library, which allows the program to use `std::cout` for printing to the console.

2. **Using the standard namespace**
    - This line allows us to use names from the `std` namespace without qualifying them with `std::`. For example, we can write `cout` instead of `std::cout`.

3. **Defining the main function**
    - The `main` function is the entry point of a C++ program. Execution starts from here.

4. **Initializing the array**
    ```cpp
    int table_of_two[10] 
        = { 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 };
    ```
    - This line declares an integer array named `table_of_two` with 10 elements.
    - The array is initialized with the first 10 multiples of 2.

5. **Traversing the array using a for loop**
    - A `for` loop is used to traverse the array from the first element (`i = 0`) to the last element (`i = 9`).
    - In each iteration of the loop, the value of `table_of_two[i]` is printed followed by a space (`" "`).
    - `cout << table_of_two[i] << " ";` prints the `i-th` element of the array.

6. **Returning 0 from the main function**
    - `return 0;` indicates that the program has ended successfully. In C++, returning `0` from the `main` function signifies successful execution.



 **Output**
```cpp
2 4 6 8 10 12 14 16 18 20 
```

This output confirms that the array has been correctly initialized and traversed, and its elements have been printed in the correct order. Each element in the array is printed followed by a space, producing the sequence of the first 10 multiples of 2.

## Sizeof an Array in C++
In C++, you can calculate the size of an array using the `sizeof` operator. First, find the total size of the array in memory, then divide by the size of one element. This gives the number of elements in the array.

```cpp
data_type size = sizeof(Array_name) / sizeof(Array_name[0]);
```

**Example:**

```cpp
#include <iostream>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int size = sizeof(arr) / sizeof(arr[0]);
    std::cout << "Size of arr[0]: " << arr[0] << std::endl;
    std::cout << "Array size: " << sizeof(arr) << std::endl;
    std::cout << "Array length: " << size << std::endl;
    return 0;
}
```

**Explanation**

1. **Including the iostream library**
    - This line includes the input-output stream library, which allows the program to use `std::cout` for printing to the console.

2. **Defining the main function**
    - The `main` function is the entry point of a C++ program. Execution starts from here.

3. **Declaring and initializing the array**
    ```cpp
    int arr[] = {1, 2, 3, 4, 5};
    ```
    - This line declares an integer array named `arr` with 5 elements, initialized with the values `{1, 2, 3, 4, 5}`.

4. **Calculating the length of the array**
    ```cpp
    int size = sizeof(arr) / sizeof(arr[0]);
    ```
    - `sizeof(arr)` calculates the total size in bytes of the array `arr`.
    - `sizeof(arr[0])` calculates the size in bytes of the first element of the array (which is an `int`).
    - Dividing the total size of the array by the size of the first element gives the number of elements in the array (`size`).

5. **Printing the value of the first element (with a misleading label)**
    ```cpp
    std::cout << "Size of arr[0]: " << arr[0] << std::endl;
    ```
    - This line prints the value of the first element of the array (`arr[0]`), which is `1`.
    - The label "Size of arr[0]" is misleading because it suggests the size in bytes, but it actually prints the value of `arr[0]`.

6. **Printing the total size of the array in bytes**
    ```cpp
    std::cout << "Array size: " << sizeof(arr) << std::endl;
    ```
    - This line prints the total size in bytes of the array.
    - Since `arr` is an array of 5 integers and the size of an `int` is 4 bytes, `sizeof(arr)` equals `5 * 4 = 20` bytes.

7. **Printing the number of elements in the array**
    ```cpp
    std::cout << "Array length: " << size << std::endl;
    ```
    - This line prints the number of elements in the array, which is stored in the variable `size`.
    - The value of `size` is `5`, as calculated earlier.

8. **Returning 0 from the main function**
    - `return 0;` indicates that the program has ended successfully. In C++, returning `0` from the `main` function signifies successful execution.

**Output Explanation**
```cpp
Size of arr[0]: 1
Array size: 20
Array length: 5
```