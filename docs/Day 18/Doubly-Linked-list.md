---
id: doubly-linked-list-cpp
title: Doubly Linked List in C++
sidebar_label: Doubly Linked List in C++
tags:
- Data Structures
- Linked List
- C++
description: "A comprehensive guide to implementing and understanding doubly linked lists in C++."
---

## Doubly Linked List in C++

A doubly linked list is a type of linked list in which each node contains a data part and two pointers that reference the next and previous nodes in the sequence. This allows for traversal of the list in both directions.

### Node Structure

Each node in a doubly linked list contains three components:
1. **Data**: The value stored in the node.
2. **Next**: A pointer to the next node in the list.
3. **Prev**: A pointer to the previous node in the list.

### Diagram

Here is a visual representation of a doubly linked list:
```
+------+     +------+     +------+     +------+
| Prev |<--->| Prev |<--->| Prev |<--->| Prev |
| Data |     | Data |     | Data |     | Data |
| Next |---> | Next |---> | Next |---> | Next |
+------+     +------+     +------+     +------+
```

### Implementation

Let's implement a doubly linked list in C++.

#### Node Definition

First, we define the structure of a node.

```cpp
#include <iostream>

struct Node {
    int data;
    Node* next;
    Node* prev;

    Node(int val) : data(val), next(nullptr), prev(nullptr) {}
};
```
#### Doubly Linked List Class
Next, we define the class for the doubly linked list which includes methods for various operations like insertion, deletion, and traversal.

```cpp
class DoublyLinkedList {
private:
    Node* head;

public:
    DoublyLinkedList() : head(nullptr) {}

    // Insert at the beginning
    void insertAtBeginning(int val) {
        Node* newNode = new Node(val);
        if (head != nullptr) {
            head->prev = newNode;
        }
        newNode->next = head;
        head = newNode;
    }

    // Insert at the end
    void insertAtEnd(int val) {
        Node* newNode = new Node(val);
        if (head == nullptr) {
            head = newNode;
            return;
        }
        Node* temp = head;
        while (temp->next != nullptr) {
            temp = temp->next;
        }
        temp->next = newNode;
        newNode->prev = temp;
    }

    // Delete a node
    void deleteNode(int val) {
        Node* temp = head;
        while (temp != nullptr && temp->data != val) {
            temp = temp->next;
        }
        if (temp == nullptr) return; // Node not found

        if (temp->prev != nullptr) {
            temp->prev->next = temp->next;
        } else {
            head = temp->next;
        }
        if (temp->next != nullptr) {
            temp->next->prev = temp->prev;
        }
        delete temp;
    }

    // Display the list
    void display() {
        Node* temp = head;
        while (temp != nullptr) {
            std::cout << temp->data << " ";
            temp = temp->next;
        }
        std::cout << std::endl;
    }
};
```
### Operations

#### Insertion at the Beginning
To insert a new node at the beginning of the list:

1) Create a new node.
2) Set the new node's next pointer to the current head.
3) Set the current head's previous pointer to the new node.
4) Update the head to the new node.

```cpp
void insertAtBeginning(int val) {
    Node* newNode = new Node(val);
    if (head != nullptr) {
        head->prev = newNode;
    }
    newNode->next = head;
    head = newNode;
}
```
#### Insertion at the End
To insert a new node at the end of the list:

1) Create a new node.
2) Traverse to the end of the list.
3) Set the last node's next pointer to the new node.
4) Set the new node's previous pointer to the last node.

```cpp
void insertAtEnd(int val) {
    Node* newNode = new Node(val);
    if (head == nullptr) {
        head = newNode;
        return;
    }
    Node* temp = head;
    while (temp->next != nullptr) {
        temp = temp->next;
    }
    temp->next = newNode;
    newNode->prev = temp;
}
```
#### Deletion of a Node
To delete a node from the list:

1) Traverse the list to find the node.
2) Update the previous node's next pointer to the node's next pointer.
3) Update the next node's previous pointer to the node's previous pointer.
4) Delete the node.

```cpp
void deleteNode(int val) {
    Node* temp = head;
    while (temp != nullptr && temp->data != val) {
        temp = temp->next;
    }
    if (temp == nullptr) return; // Node not found

    if (temp->prev != nullptr) {
        temp->prev->next = temp->next;
    } else {
        head = temp->next;
    }
    if (temp->next != nullptr) {
        temp->next->prev = temp->prev;
    }
    delete temp;
}
```
#### Display the List
To display the list:

1) Traverse from the head to the end of the list.
2) Print each node's data.

```cpp
void display() {
    Node* temp = head;
    while (temp != nullptr) {
        std::cout << temp->data << " ";
        temp = temp->next;
    }
    std::cout << std::endl;
}
```
### Example Usage

```cpp
int main() {
    DoublyLinkedList dll;
    dll.insertAtBeginning(10);
    dll.insertAtEnd(20);
    dll.insertAtEnd(30);
    dll.display(); // Output: 10 20 30
    dll.deleteNode(20);
    dll.display(); // Output: 10 30
    return 0;
}
```
### Conclusion
A doubly linked list is a versatile data structure that allows for efficient insertion and deletion of nodes from both ends. Understanding the implementation of a doubly linked list in C++ provides a solid foundation for working with more complex data structures.

### References
- GeeksforGeeks: Doubly Linked List
- Wikipedia: Doubly Linked List