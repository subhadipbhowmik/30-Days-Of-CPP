---
sidebar_position: 1
title: "Segment Tree in C++"
description: "In this tutorial, we will learn about Tree in C++ programming with the help of examples."
sidebar_label: "Tree"
slug: tree-in-cpp
---

## Segment Tree in C++

This file provides a comprehensive explanation of segment trees and their implementation in C++.

### What is a Segment Tree?

A segment tree is a data structure that efficiently stores information about intervals or segments. It is particularly useful for answering range queries, such as finding the sum, minimum, maximum, or any other aggregate function within a given range.

**Key Properties:**

- **Tree Structure:** A segment tree is a binary tree where each node represents a segment of the original array.
- **Complete Binary Tree:** The tree is a complete binary tree, meaning all levels are filled except possibly the last, which is filled from left to right.
- **Segment Representation:** Each node represents a contiguous segment of the original array. The root node covers the entire array, and the children of a node represent the left and right halves of the parent's segment.
- **Efficient Querying:** Segment trees allow efficient retrieval of information about any sub-segment of the array using a recursive approach, typically with a time complexity of O(log n), where n is the size of the array.

### Implementation in C++

```cpp
#include <iostream>
#include <vector>

using namespace std;

// Structure to represent a node in the segment tree
struct Node {
    int start, end; // Indices representing the segment
    int value; // Aggregate value of the segment
};

// Function to build the segment tree
vector<Node> buildTree(vector<int>& arr, int start, int end) {
    vector<Node> tree;
    if (start == end) {
        Node node = {start, end, arr[start]};
        tree.push_back(node);
        return tree;
    }
    int mid = (start + end) / 2;
    vector<Node> leftTree = buildTree(arr, start, mid);
    vector<Node> rightTree = buildTree(arr, mid + 1, end);
    Node node = {start, end, leftTree[0].value + rightTree[0].value};
    tree.push_back(node);
    tree.insert(tree.end(), leftTree.begin(), leftTree.end());
    tree.insert(tree.end(), rightTree.begin(), rightTree.end());
    return tree;
}

// Function to perform a range query
int query(vector<Node>& tree, int start, int end, int qStart, int qEnd) {
    if (start >= qStart && end <= qEnd) {
        return tree[0].value;
    }
    if (end < qStart || start > qEnd) {
        return 0;
    }
    int mid = (start + end) / 2;
    return query(tree, start, mid, qStart, qEnd) + query(tree, mid + 1, end, qStart, qEnd);
}

int main() {
    vector<int> arr = {1, 3, 5, 7, 9, 11};
    int n = arr.size();
    vector<Node> tree = buildTree(arr, 0, n - 1);

    // Query for the sum of elements from index 2 to 4
    int qStart = 2, qEnd = 4;
    int sum = query(tree, 0, n - 1, qStart, qEnd);
    cout << "Sum of elements from index " << qStart << " to " << qEnd << ": " << sum << endl; // Output: 15

    return 0;
}
```

**Explanation:**

1. **Structure Definition:** The `Node` structure defines a node in the segment tree, containing the start and end indices of the segment and its aggregate value.
2. **`buildTree()` Function:** This function recursively constructs the segment tree from the given array.
    - **Base Case:** If the start and end indices are the same, a single node is created with the value from the array.
    - **Recursive Step:** The function divides the segment in half, recursively builds the left and right subtrees, and creates a parent node with the combined value.
3. **`query()` Function:** This function performs a range query, finding the aggregate value of a segment defined by `qStart` and `qEnd`.
    - **Complete Overlap:** If the query range completely overlaps the current node's segment, return its value.
    - **No Overlap:** If the query range does not overlap, return 0.
    - **Partial Overlap:** Recursively query the left and right subtrees to find the overlapping parts.
4. **Main Function:**
    - The `main()` function demonstrates the usage of the segment tree.
    - It builds the tree using `buildTree()`.
    - It then performs a range query using `query()`.

### Advantages of Segment Tree

- **Efficient Range Queries:** It allows for O(log n) time complexity for queries, which is significantly faster than O(n) for linear traversal.
- **Dynamic Updates:** Segment trees can be easily modified to handle updates to the original array, enabling efficient maintenance of the aggregated data.
- **Versatility:** It can be used for various operations like finding the minimum, maximum, sum, product, etc., by modifying the aggregate function used.

### Limitations

- **Space Complexity:** It requires O(n) space for storing the tree, which can be a concern for large arrays.
- **Complexity for Updates:** While updates are possible, they can sometimes have a slightly higher time complexity than queries.

### Applications

- Range minimum/maximum queries
- Finding the sum of elements in a range
- Range updates
- Finding the number of elements within a range satisfying certain criteria
- Data mining and statistical analysis

### Conclusion

Segment trees are a powerful data structure for efficiently handling range queries and updates on arrays. They provide a logarithmic time complexity for many operations, making them suitable for a wide range of applications. The provided C++ code demonstrates a basic implementation, which can be extended and adapted to suit specific needs.
