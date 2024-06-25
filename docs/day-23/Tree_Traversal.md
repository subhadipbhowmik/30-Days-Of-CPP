---
slug: tree-traversal
title: Tree Traversal in C++
authors: [chaitanya]
tags: ["30daysofcpp", "trees", "data-structures", "cpp", "tutorial"]
---

## Tree Traversal in C++

### Introduction

Tree traversal is a process of visiting all the nodes of a tree data structure in a specific order. Traversals are essential for performing operations on trees, such as searching, inserting, and deleting nodes. There are several ways to traverse a tree, including in-order, pre-order, post-order, and level-order traversals.

### Types of Tree Traversals

1. **In-order Traversal**
2. **Pre-order Traversal**
3. **Post-order Traversal**
4. **Level-order Traversal**

### Sample Tree Diagram

Below is an illustration of a simple tree structure that we will use to explain the different traversal methods:

![Tree Diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/800px-Binary_tree.svg.png)

### In-order Traversal

In in-order traversal, the nodes are recursively visited in this order: Left, Root, Right. This means that you visit the left subtree, then the root node, and finally the right subtree.

#### Algorithm
1. Traverse the left subtree.
2. Visit the root node.
3. Traverse the right subtree.

#### Code Example

```cpp
void inOrderTraversal(TreeNode* root) {
    if (root != nullptr) {
        inOrderTraversal(root->left);
        std::cout << root->value << " ";
        inOrderTraversal(root->right);
    }
}
```
### Pre-order Traversal
In pre-order traversal, the nodes are recursively visited in this order: Root, Left, Right. This means that you visit the root node first, then the left subtree, and finally the right subtree.

#### Algorithm
1. Visit the root node.
2. Traverse the left subtree.
3. Traverse the right subtree.

#### Code Example 
```cpp
void preOrderTraversal(TreeNode* root) {
    if (root != nullptr) {
        std::cout << root->value << " ";
        preOrderTraversal(root->left);
        preOrderTraversal(root->right);
    }
}
```
### Post-order Traversal
In post-order traversal, the nodes are recursively visited in this order: Left, Right, Root. This means that you visit the left subtree first, then the right subtree, and finally the root node.

#### Algorithm
1. Traverse the left subtree.
2. Traverse the right subtree.
3. Visit the root node.

#### Code Example
```cpp
void postOrderTraversal(TreeNode* root) {
    if (root != nullptr) {
        postOrderTraversal(root->left);
        postOrderTraversal(root->right);
        std::cout << root->value << " ";
    }
}
```
### Level-order Traversal
In level-order traversal, the nodes are visited level by level from top to bottom. This traversal is also known as breadth-first traversal.

#### Algorithm
1. Create an empty queue.
2. Enqueue the root node.
3. While the queue is not empty:

    - Dequeue a node from the front of the queue.
    - Visit the dequeued node.
    - Enqueue all the children of the dequeued node.

#### Code Example
```cpp
#include <queue>

void levelOrderTraversal(TreeNode* root) {
    if (root == nullptr) return;
    
    std::queue<TreeNode*> q;
    q.push(root);
    
    while (!q.empty()) {
        TreeNode* node = q.front();
        q.pop();
        
        std::cout << node->value << " ";
        
        if (node->left != nullptr) q.push(node->left);
        if (node->right != nullptr) q.push(node->right);
    }
}
```
### Conclusion
Understanding tree traversal methods is fundamental for working with tree data structures. Each traversal method serves different purposes and is used in various applications, such as expression evaluation, syntax tree construction, and hierarchical data management.
