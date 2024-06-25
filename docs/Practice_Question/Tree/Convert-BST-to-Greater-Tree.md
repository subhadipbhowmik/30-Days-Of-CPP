---
id: convert-bst-to-greater-tree
title: Convert BST to Greater Tree
sidebar_label: 0538-Convert-BST-to-Greater-Tree
tags:
- Tree
- Depth-First Search
- Binary Search Tree
- Binary Tree
description: "Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST."
---

## Problem

Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

### Examples

**Example 1:**

**Input:** `root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]`  
**Output:** `[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]`

**Example 2:**

**Input:** `root = [0,null,1]`  
**Output:** `[1,null,1]`

### Constraints

- The number of nodes in the tree is in the range `[0, 10^4]`.
- `-10^4 <= Node.val <= 10^4`
- All the values in the tree are unique.
- `root` is guaranteed to be a valid binary search tree.

---

## Approach

To convert a BST to a Greater Tree, we need to accumulate the sum of all nodes that are greater than the current node. This can be efficiently done using a reverse in-order traversal (right-root-left), which processes nodes from the largest to the smallest.

### Steps:

1. Initialize a variable to keep track of the running sum.
2. Perform a reverse in-order traversal of the tree.
3. During the traversal, update the value of each node to include the running sum.
4. Update the running sum with the value of the current node.

### C++ Solution

```cpp
#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
private:
    int sum = 0;
public:
    TreeNode* convertBST(TreeNode* root) {
        if (root != nullptr) {
            convertBST(root->right);
            sum += root->val;
            root->val = sum;
            convertBST(root->left);
        }
        return root;
    }
};
```
### Complexity Analysis
**Time Complexity:** O(n)
>Reason: Each node is visited once during the traversal.

**Space Complexity:** O(h)
>Reason: The space complexity is determined by the recursion stack, which in the worst case (unbalanced tree) is O(n), but on average (balanced tree) is O(log n).

### References
**LeetCode Problem:** Convert BST to Greater Tree

**Solution Link:** LeetCode Solution

**Wikipedia:** Binary Search Tree