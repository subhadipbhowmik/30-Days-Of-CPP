---
sidebar_position: 1
title: "Trie Data Structure in C++"
description: "In this tutorial, we will learn about Trie data structure."
sidebar_label: "Trie"
slug: Trie-in-CPP
---

## Trie Data Structure:

This repository presents a C++ implementation of the Trie data structure, a powerful tool for efficiently storing and retrieving strings, particularly when dealing with common prefixes.

**What is a Trie?**

A Trie, also known as a prefix tree or radix tree, is a specialized tree-like data structure specifically designed for storing and retrieving strings. It achieves this by representing each node as a character, where the path from the root to a node signifies a prefix of a string.

**Key Features:**

* **Efficient Prefix Search:**  Tries excel at searching for strings based on their prefixes. Imagine a search engine – you can quickly find websites containing specific keywords by only typing a few initial letters. Tries mirror this efficiency.
* **Space Optimization:**  When storing a vast collection of strings with shared prefixes, Tries are remarkably space-efficient. They only need to store the unique characters, rather than storing entire strings repeatedly.
* **Dynamic Operations:**  Adding or removing strings from a Trie is a relatively simple process, making them suitable for dynamic environments where string collections can change.

**Implementation:**

This repository offers a C++ implementation with the following key components:

* **TrieNode:**  Represents a single node in the Trie. It holds:
    * `char data`: The character associated with the node.
    * `std::map<char, TrieNode*> children`: A map containing references to child nodes, keyed by the characters leading to those children.
* **Trie:**  Manages the entire Trie data structure. It provides methods like:
    * `insert(std::string word)`: Adds a new string to the Trie.
    * `search(std::string word)`: Determines if a string already exists in the Trie.
    * `startsWith(std::string prefix)`: Checks if any strings in the Trie start with a given prefix.
    * `deleteString(std::string word)`: Removes a string from the Trie.

**Example Usage:**

```cpp
#include "Trie.h"

int main() {
  Trie trie;

  // Insert strings
  trie.insert("apple");
  trie.insert("banana");
  trie.insert("app");

  // Search for strings
  if (trie.search("apple")) {
    std::cout << "String 'apple' exists in the Trie." << std::endl;
  }

  // Check for a prefix
  if (trie.startsWith("ban")) {
    std::cout << "The Trie contains a string with prefix 'ban'." << std::endl;
  }

  // Delete a string
  trie.deleteString("banana");

  return 0;
}
```

**Beyond the Basics:**

The implementation provided here offers a solid foundation.  You can expand it to incorporate additional features like:

* **Counting Word Occurrences:** Modify the TrieNode to store how many times a word is inserted.
* **Longest Common Prefix (LCP):** Implement a method to find the longest common prefix shared by two strings.
* **Autocomplete Suggestions:** Leverage the Trie to suggest possible words as the user types.

**Applications:**

* **Autocomplete in Search Engines:** Efficiently suggest words as users type.
* **Spell Checkers:** Detect misspelled words by finding close matches.
* **Large Text Databases:** Rapidly locate words containing specific prefixes.
* **Domain Name Registries:** Check if domain names are already taken.
* **IP Routing Tables:** Store and search for IP address prefixes.



## Trie Data Structure: Explained with Code

Here's a more detailed breakdown of the Trie implementation, with code snippets and explanations:

**1. TrieNode Class:**

```cpp
#include <iostream>
#include <map>
#include <string>

class TrieNode {
public:
  char data; // Character stored at this node
  std::map<char, TrieNode*> children; // Map of child nodes

  TrieNode(char ch) : data(ch) {} 
};
```

* **`data`:**  Holds the character represented by this node.
* **`children`:** A `std::map` is used to store child nodes, with the character leading to that child as the key. This efficiently manages the branching structure of the Trie. 

**2. Trie Class:**

```cpp
class Trie {
public:
  TrieNode* root; // Root node of the Trie

  Trie() {
    root = new TrieNode('\0'); // Root node with null character
  }

  void insert(const std::string& word) {
    TrieNode* current = root;

    for (char ch : word) {
      if (current->children.find(ch) == current->children.end()) {
        current->children[ch] = new TrieNode(ch); // Create child node if not found
      }
      current = current->children[ch]; // Move to the child node
    }
  }

  // ... other methods (search, startsWith, deleteString) 
};
```

* **`root`:** Points to the root node of the Trie.
* **`insert(std::string word)`:**
    * Starts at the `root` node.
    * Iterates through each character (`ch`) in the word:
        * If a child node for `ch` doesn't exist, create one.
        * Move to the corresponding child node.
    * After processing all characters, mark the final node as the end of a word (optional, can be done with a flag or additional data in the node).

**Example Usage:**

```cpp
int main() {
  Trie trie;

  trie.insert("apple");
  trie.insert("banana");
  trie.insert("app");

  // Search for a word
  if (trie.search("apple")) {
    std::cout << "'apple' found in the Trie." << std::endl;
  } 

  return 0;
}
```

**Explanation:**

1. **Initialization:** The `Trie` object is created, initializing its `root` node with a null character.
2. **Insertion:** The `insert` method is called for each word.  The Trie structure is built as described above.
3. **Search:** The `search` method (not shown in the code snippet) would traverse the Trie based on the word's characters. If a path leading to the end of the word is found, it indicates the word exists in the Trie.

**Key Points:**

* **Time Complexity:**  Prefix searches in a Trie have a time complexity of O(k), where k is the length of the prefix.
* **Memory Efficiency:**  Tries excel at storing words with common prefixes, significantly reducing storage space compared to storing individual strings.

**Example (Visual):**

Let's say we insert "apple" and "app":

```
     (Root)
      | 
      a 
      |
     p
     |
     p 
     |
     l
     |
     e 
     | 
     (word end)
    /
   p 
   |
   (word end)
```

Notice that "app" only needs to store the unique portion of the string after "app" is shared with "apple". 
