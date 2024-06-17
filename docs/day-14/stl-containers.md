### 2. stl-containers.md
```markdown
---
sidebar_position: 2
title: "STL Containers"
description: "In this tutorial, we will learn about various containers provided by the Standard Template Library (STL) in C++ with the help of examples. Containers are data structures that store objects and data."
sidebar_label: "STL Containers"
slug: stl-containers-in-cpp
---

## STL Containers

### What are Containers in STL?
Containers are objects that store collections of other objects. The STL provides several different types of containers, each optimized for specific kinds of data manipulation.

### Sequence Containers
1. **Vector**: A dynamic array that can grow in size.
   ```cpp
   #include <vector>
   #include <iostream>

   int main() {
       std::vector<int> vec = {1, 2, 3, 4, 5};
       vec.push_back(6); // Add element at the end

       for (int i : vec) {
           std::cout << i << " ";
       }
       return 0;
   }
2. **List**: A doubly-linked list.
   ```cpp
   #include <list>
   #include <iostream>

   int main() {
    std::list<int> lst = {1, 2, 3, 4, 5};
    lst.push_back(6); // Add element at the end

    for (int i : lst) {
        std::cout << i << " ";
    }
    return 0;
    }
3. **Deque**: A double-ended queue that allows fast insertion and deletion at both ends.
   ```cpp
   #include <deque>
   #include <iostream>

   int main() {
    std::deque<int> deq = {1, 2, 3, 4, 5};
    deq.push_front(0); // Add element at the front

    for (int i : deq) {
        std::cout << i << " ";
    }
    return 0;
   }
### Associative Containers

1. **Set**: A collection of unique elements.
   ```cpp
   #include <set>
   #include <iostream>

   int main() {
    std::set<int> mySet = {1, 2, 3, 4, 5};
    mySet.insert(6); // Insert element

    for (int i : mySet) {
        std::cout << i << " ";
    }
    return 0;
}
2. **Map**: A collection of key-value pairs.
   ```cpp
   #include <map>
   #include <iostream>

   int main() {
    std::map<int, std::string> myMap = {{1, "one"}, {2, "two"}, {3, "three"}};
    myMap[4] = "four"; // Insert element

    for (const auto& pair : myMap) {
        std::cout << pair.first << ": " << pair.second << "\n";
    }
    return 0;
    }
### Container Containers

1. **Stack**: A container adaptor that gives the functionality of a stack (LIFO).
   ```cpp
   #include <stack>
   #include <iostream>

   int main() {
    std::stack<int> myStack;
    myStack.push(1);
    myStack.push(2);

    while (!myStack.empty()) {
        std::cout << myStack.top() << " ";
        myStack.pop();
    }
    return 0;
    }
2. **Queue**: A container adaptor that gives the functionality of a queue (FIFO).
   ```cpp
   #include <queue>
   #include <iostream>

   int main() {
    std::queue<int> myQueue;
    myQueue.push(1);
    myQueue.push(2);

    while (!myQueue.empty()) {
        std::cout << myQueue.front() << " ";
        myQueue.pop();
    }
    return 0;
    }
