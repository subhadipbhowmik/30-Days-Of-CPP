---
id: longest-uncommon-subsequence-ii
title: Longest Uncommon Subsequence II
sidebar_label: 0522-Longest-Uncommon-Subsequence-II
tags:
- String
- Sorting
description: "Given an array of strings strs, return the length of the longest uncommon subsequence between them. If the longest uncommon subsequence does not exist, return -1."
---

## Problem

Given an array of strings `strs`, return the length of the longest uncommon subsequence between them. An uncommon subsequence is a subsequence that is not common to any other string in the array.

A **subsequence** of a string `s` is a string that can be obtained after deleting any number of characters from `s`.

### Examples

**Example 1:**

**Input:** `strs = ["aba","cdc","eae"]`  
**Output:** `3`

**Example 2:**

**Input:** `strs = ["aaa","aaa","aa"]`  
**Output:** `-1`

### Constraints

- `2 <= strs.length <= 50`
- `1 <= strs[i].length <= 10`
- `strs[i]` consists of lowercase English letters.

---

## Approach

To find the longest uncommon subsequence, we need to consider the following:

1. If a string is unique in the list (i.e., it does not appear more than once), we need to check if it is not a subsequence of any other string. 
2. If a string is not unique (i.e., it appears more than once), it cannot be an uncommon subsequence.
3. We can start by checking the strings in descending order of their lengths. This way, we can return the first string that meets the criteria as soon as we find it.

### Steps:

1. Sort the strings by length in descending order.
2. Check each string:
   - If the string appears only once in the list.
   - If it is not a subsequence of any other string longer than it.
3. If such a string is found, return its length.
4. If no such string is found, return `-1`.

### Helper Function

A helper function `is_subsequence` can be used to determine if one string is a subsequence of another.

### C++ Solution
```cpp
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    int findLUSlength(vector<string>& strs) {
        sort(strs.begin(), strs.end(), [](const string &a, const string &b) {
            return b.size() < a.size();
        });

        for (int i = 0; i < strs.size(); i++) {
            bool isSubsequence = false;
            for (int j = 0; j < strs.size(); j++) {
                if (i != j && isSubsequence(strs[i], strs[j])) {
                    isSubsequence = true;
                    break;
                }
            }
            if (!isSubsequence) {
                return strs[i].size();
            }
        }
        return -1;
    }

private:
    bool isSubsequence(const string &a, const string &b) {
        int i = 0, j = 0;
        while (i < a.size() && j < b.size()) {
            if (a[i] == b[j]) {
                i++;
            }
            j++;
        }
        return i == a.size();
    }
};
```
### Complexity Analysis
**Time Complexity:** O(n^2 * l)
>Reason: Sorting the list takes O(n log n). Checking if a string is a subsequence of another string takes O(l) time, and this is done for each pair of strings, leading to O(n^2 * l) in total.

**Space Complexity:** O(1)
>Reason: The space complexity is constant as we are not using any extra space proportional to the input size, other than the space required for sorting.

### References
**LeetCode Problem:** Longest Uncommon Subsequence II

**Solution Link:** LeetCode Solution

**Wikipedia:** Subsequence