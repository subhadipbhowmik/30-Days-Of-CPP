---
slug: types-of-trees
title: Types of Trees in C++
authors: [chaitanya]
tags: ["30daysofcpp", "trees", "data-structures", "cpp", "tutorial"]
---

## Types of Trees in C++

### Introduction

Trees are versatile data structures that can be used to represent various hierarchical relationships. There are several types of trees, each with its own properties and use cases. Understanding the different types of trees is essential for choosing the right structure for a specific problem.

### Types of Trees

1. **Binary Tree**
2. **Binary Search Tree (BST)**
3. **AVL Tree**
4. **Red-Black Tree**
5. **B-Tree**
6. **Trie**
7. **Segment Tree**
8. **Suffix Tree**

### Binary Tree

A binary tree is a tree data structure where each node has at most two children, referred to as the left child and the right child.

<img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Binary_tree.svg" alt="Binary Tree" width="300" height="300">

#### Properties:
- Each node has at most two children.
- The left and right children are distinct.

### Binary Search Tree (BST)

A binary search tree is a binary tree with the additional property that the left child of a node contains a value less than the node's value, and the right child contains a value greater than the node's value.

<img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg" alt="Binary Search Tree" width="300" height="300">

#### Properties:
- The left subtree of a node contains only nodes with values less than the node's value.
- The right subtree of a node contains only nodes with values greater than the node's value.
- Both the left and right subtrees must also be binary search trees.

### AVL Tree

An AVL tree is a self-balancing binary search tree. In an AVL tree, the heights of the two child subtrees of any node differ by at most one.

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20221229121830/avl.png" alt="AVL Tree" width="300" height="300">

#### Properties:
- It is a binary search tree.
- The height difference between the left and right subtrees of any node is at most one.

### Red-Black Tree

A red-black tree is a kind of self-balancing binary search tree where each node has an extra bit for denoting the color of the node, either red or black. This helps ensure the tree remains balanced during insertions and deletions.

<img src="https://upload.wikimedia.org/wikipedia/commons/6/66/Red-black_tree_example.svg" alt="Red-Black Tree" width="300" height="300">

#### Properties:
- Each node is either red or black.
- The root is always black.
- All leaves (NIL nodes) are black.
- If a red node has children, then the children are always black.
- Every path from a node to its descendant NIL nodes has the same number of black nodes.

### B-Tree

A B-tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. B-trees are generalizations of binary search trees in that a node can have more than two children.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/B-tree.svg/1920px-B-tree.svg.png" alt="B-Tree" width="300" height="300">

#### Properties:
- All leaves are at the same level.
- A B-tree of order m can have a maximum of m-1 keys and m children.
- Internal nodes can have a variable number of child nodes within some pre-defined range.

### Trie

A trie, also called a prefix tree, is a kind of search tree used to store a dynamic set or associative array where the keys are usually strings.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Trie_example.svg/1920px-Trie_example.svg.png" alt="Trie" width="300" height="300">

#### Properties:
- Used to store strings.
- Each node represents a common prefix of some strings.

### Segment Tree

A segment tree is a tree data structure used for storing intervals or segments. It allows querying which of the stored segments contain a given point.

<img src="https://he-s3.s3.amazonaws.com/media/uploads/a0c7f90.jpg" alt="Segment Tree" width="300" height="300">

#### Properties:
- Used for storing intervals or segments.
- Each node represents an interval.

### Suffix Tree

A suffix tree is a compressed trie containing all the suffixes of the given text as their keys and positions in the text as their values.

<img src="https://media.geeksforgeeks.org/wp-content/uploads/patternsearching1.png" alt="Suffix Tree" width="300" height="300">

#### Properties:
- Used to store all suffixes of a given string.
- Efficient for pattern matching.

### Conclusion

Understanding the different types of trees and their properties is crucial for selecting the right tree structure for your specific needs. Each type of tree has its own advantages and is suited for different kinds of applications.

---
