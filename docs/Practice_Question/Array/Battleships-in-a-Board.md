---
id: battleships-in-a-board
title: Battleships in a Board
sidebar_label: 0419-Battleships-in-a-Board
tags:
- Array
- Depth-First Search
- Matrix
description: "Given an `m x n` board where each cell is a battleship 'X' or empty '.', count the number of battleships on the board."
---

## Problem

Given an `m x n` board where each cell is a battleship `'X'` or empty `'.'`, return the number of battleships on the board.

Battleships can only be placed horizontally or vertically on the board. In other words, they can only occupy a contiguous line of cells horizontally or vertically. Each battleship must be separated by at least one empty cell (either horizontally or vertically) from any other battleship.

### Examples

**Example 1:**

**Input:** `board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]`  
**Output:** `2`

**Example 2:**

**Input:** `board = [["."]]`  
**Output:** `0`

### Constraints

- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 200`
- `board[i][j]` is either `'X'` or `'.'`.

### Follow-up

Could you do it in one-pass, using only `O(1)` extra memory and without modifying the value of the board?

---

## Approach

To count the number of battleships in one pass and without extra memory, we can traverse the board and count only the top-left cell of each battleship. A cell qualifies as the top-left cell if there are no battleship cells above it or to the left of it.

### Steps:

1. Initialize a counter to keep track of the number of battleships.
2. Traverse each cell in the board.
3. For each cell, check if it is a battleship (`'X'`):
   - If it is, check if there is no battleship cell above it and no battleship cell to the left of it.
   - If both conditions are met, increment the battleship counter.
4. Return the counter after the traversal.

### C++ Solution

```cpp
class Solution {
public:
    int countBattleships(vector<vector<char>>& board) {
        int count = 0;
        for (int i = 0; i < board.size(); i++) {
            for (int j = 0; j < board[0].size(); j++) {
                if (board[i][j] == 'X') {
                    if (i > 0 && board[i - 1][j] == 'X') continue;
                    if (j > 0 && board[i][j - 1] == 'X') continue;
                    count++;
                }
            }
        }
        return count;
    }
};
```
### Complexity Analysis
**Time Complexity:** O(m * n)
>Reason: We traverse each cell of the board once.

**Space Complexity:** O(1)
>Reason: We do not use any extra space that scales with the input size.

### References
**LeetCode Problem:** Battleships in a Board

**Solution Link:** Battleships in a Board Solution on LeetCode