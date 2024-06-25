---
slug: trees-basics
title: Basics of Trees in C++
authors: [chaitanya]
tags: ["30daysofcpp", "trees", "data-structures", "cpp", "tutorial"]
---

## Basics of Trees in C++

### Introduction to Trees

A tree is a hierarchical data structure consisting of nodes, with a single node designated as the root. Each node contains a value and a list of references to other nodes, known as its children. Trees are used to represent various hierarchical structures such as file systems, organizational structures, and expression trees.

### Key Terminology

- **Root**: The topmost node of the tree.
- **Node**: An element of the tree containing a value.
- **Edge**: The connection between two nodes.
- **Parent**: The node directly connected above a given node.
- **Child**: The node directly connected below a given node.
- **Leaf**: A node with no children.
- **Subtree**: A tree consisting of a node and its descendants.
- **Depth**: The length of the path from the root to the node.
- **Height**: The length of the longest path from a node to a leaf.

### Sample Tree Diagram

Below is an illustration of a simple tree structure, showing the root, nodes, and leaves:

![Tree Diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/800px-Binary_tree.svg.png)

### Explanation of the Diagram

- **Root**: The root node is the topmost node in the tree. In the diagram, the root node is labeled "A".
- **Node**: Each element in the tree is called a node. Nodes "B", "C", "D", "E", and "F" are examples of nodes in this tree.
- **Edge**: The line connecting two nodes is called an edge. Each edge connects a parent node to a child node.
- **Parent**: A node that has one or more children. For example, "A" is the parent of "B" and "C".
- **Child**: A node that has a parent. For example, "B" and "C" are children of "A".
- **Leaf**: A node with no children. In the diagram, "D", "E", and "F" are leaf nodes.

### Conclusion

Understanding the basic structure and terminology of trees is fundamental for various applications in computer science. Trees provide an efficient way to manage hierarchical data and perform quick searches, insertions, and deletions.

---
