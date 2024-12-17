---
sidebar_position: 1
title: "Fenwick tree in C++"
description: "In this tutorial, we will learn about Fenwick tree in C++ programming with the help of examples."
sidebar_label: "Fenwick tree"
slug: Fenwick tree
---

## Fenwick Tree (Binary Indexed Tree) in C++

This file provides an explanation of Fenwick trees (also known as Binary Indexed Trees) and their implementation in C++.

### What is a Fenwick Tree?

A Fenwick tree is a data structure that efficiently supports two operations:

- *Prefix Sum:* Calculate the sum of elements from index 1 to a given index.
- *Update:* Modify the value of an element and update the prefix sums accordingly.

*Key Properties:*

- *Array Representation:* A Fenwick tree is represented as an array, where each element stores the sum of elements in a specific range of the original array.
- *Binary Indexed Tree:* The index of each element in the Fenwick tree is determined by its binary representation, with only the least significant set bit being considered.
- *Efficient Operations:* Both prefix sum and update operations can be performed in O(log n) time, where n is the size of the array.

### Implementation in C++

cpp
#include <iostream>
#include <vector>

using namespace std;

// Function to get the least significant set bit
int getLSB(int x) {
    return x & -x;
}

// Function to build the Fenwick tree
vector<int> buildFenwickTree(vector<int>& arr) {
    int n = arr.size();
    vector<int> tree(n + 1, 0); // Extra element for convenience
    for (int i = 1; i <= n; i++) {
        tree[i] += arr[i - 1];
        int parent = i + getLSB(i);
        if (parent <= n) {
            tree[parent] += tree[i];
        }
    }
    return tree;
}

// Function to calculate prefix sum up to index i
int prefixSum(vector<int>& tree, int i) {
    int sum = 0;
    while (i > 0) {
        sum += tree[i];
        i -= getLSB(i);
    }
    return sum;
}

// Function to update the value at index i
void update(vector<int>& tree, int i, int delta) {
    while (i < tree.size()) {
        tree[i] += delta;
        i += getLSB(i);
    }
}

int main() {
    vector<int> arr = {1, 3, 5, 7, 9, 11};
    int n = arr.size();
    vector<int> tree = buildFenwickTree(arr);

    // Calculate prefix sum up to index 3
    int sum = prefixSum(tree, 3);
    cout << "Prefix sum up to index 3: " << sum << endl; // Output: 16

    // Update the value at index 2 by 5
    update(tree, 2, 5);

    // Calculate prefix sum up to index 3 after update
    sum = prefixSum(tree, 3);
    cout << "Prefix sum up to index 3 after update: " << sum << endl; // Output: 21

    return 0;
}


*Explanation:*

1. **getLSB() Function:** This function calculates the least significant set bit in a given number using bitwise operations.
2. **buildFenwickTree() Function:** This function constructs the Fenwick tree from the given array.
    - It iterates through the array elements and updates the corresponding nodes in the Fenwick tree.
    - For each element, it adds its value to the node at its index and propagates the sum up to the parent node.
3. **prefixSum() Function:** This function calculates the prefix sum up to a given index i.
    - It iterates through the ancestors of i in the Fenwick tree, adding their values to the sum.
    - Each iteration jumps to the parent node by subtracting the least significant set bit.
4. **update() Function:** This function updates the value of the element at index i by delta.
    - It iterates through the ancestors of i, adding delta to their values.
    - Each iteration jumps to the parent node by adding the least significant set bit.
5. *Main Function:*
    - The main() function demonstrates the usage of the Fenwick tree.
    - It builds the tree using buildFenwickTree().
    - It then performs a prefix sum query and an update operation.

### Advantages of Fenwick Tree

- *Efficient Operations:* Both prefix sum and update operations have O(log n) time complexity, making it suitable for online queries and updates.
- *Space Complexity:* It uses O(n) space, which is similar to the original array.
- *Simplicity:* The implementation is relatively straightforward and easy to understand.

### Limitations

- *Limited Functionality:* It is primarily designed for prefix sum queries and updates, making it less versatile than segment trees.
- *Fixed Range:* Fenwick trees typically operate on a fixed range of indices, making it less suitable for dynamic resizing.

### Applications

- Range queries (prefix sums)
- Updating elements in an array
- Calculating the number of elements within a range satisfying certain criteria
- Online algorithms where both queries and updates are required
- Data analysis and statistical computations

### Conclusion

Fenwick trees are an efficient data structure for handling prefix sum queries and updates on arrays. They offer logarithmic time complexity for both operations, making them suitable for a variety of applications. The provided C++ code demonstrates a basic implementation, which can be extended and modified to suit specific needs.