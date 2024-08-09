---
sidebar_position: 1
title: "Linear Search in C++"
description: "In this tutorial we will learn about Linear Search in C++."
sidebar_label: "Linear Search in C++"
slug: Linear-Search-in-cpp
---

import BackToTop from '@site/src/components/BackToTop/BackToTop';

# Linear Search in C++
Linear search is a sequential searching algorithm where we start from one end and check every element of the list until the desired element is found. It is the simplest searching algorithm.


### Implementing Linear Search in C++:
```cpp
// Linear Search in C++

#include <iostream>
using namespace std;

int search(int array[], int n, int x) {

  // Going through array sequencially
  for (int i = 0; i < n; i++)
    if (array[i] == x)
      return i;
  return -1;
}

int main() {
  int array[] = {2, 4, 0, 1, 9};
  int x = 1;
  int n = sizeof(array) / sizeof(array[0]);

  int result = search(array, n, x);

  (result == -1) ? cout << "Element not found" : cout << "Element found at index: " << result;
} 
```

## Time Complexity of Linear Search:
The time complexity of the linear search algorithm is O(n), where "n" represents the number of elements in the dataset being searched. In linear search, the algorithm scans through the data sequentially, comparing each element with the target value until it either finds a match or reaches the end of the dataset. In the worst-case scenario, the target element may be the last element in the dataset, which requires checking every element. Therefore, the time complexity is linear, and the running time increases linearly with the size of the input data.

## Space Complexity of Linear Search:
The space complexity of the linear search algorithm is O(1).

<BackToTop />