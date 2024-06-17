---
sidebar_position: 2
title: "Operations on Linked List"
description: "In this tutorial we will learn about operations performed on Linked List in C++."
sidebar_label: "Operations on Linked List"
slug: Operations-on-linked-list
---
# Linked List Operations in C++
Some basic operations that can be performed on Linked List are as follows:
- **Traversing :**  Accessing each node of the list sequentially.
- **Seraching :**  Finding a node with a given value.
- **Insertion :** Adding a new node to the list (at the beginning, end, or after/before a specific node).
- **Deletion :** Removing a node from the list (at the beginning, end, or after/before a specific node).

## Traversal in Linked List
Traversal in a linked list refers to the process of going through each node, starting from the head, and accessing the data it contains. In C++, this is typically done using a loop that follows the next pointers of the nodes until it reaches the end of the list (null pointer). \
### Code
```
node* temp = head;

cout<<"Elements are "<<endl;

while(temp != NULL) {

  cout<<temp->data<<endl;
  temp = temp->next;

}

```
By the above code we can display all the elements present in linked list.
### Output
```
Elements are 
1
2
3
```

## Searching in Linked List
Seraching can pe done with tarversal. You can loop until temp reaches the last node and if the values is found jump out of loop and print it.
### Code
```
Node* temp = head;

  while (temp != NULL) {

    if (temp>data == key)
    return true;

    temp = temp->next;

  }

  return false;
  ```

## Insertion in a Linked List

Insertion is performed at three different places.
- ### **At the beginning**
When you have to insert a value at the beginning of the linked list.
    - Create a new node with the given data.
    - Make the new node’s next pointer point to the current head of the list.
    - Update the head of the list to be the new node.

### Code
```
oid insertAtStart(Node** head, int newData) {
    // Step 1: Allocate new node
    Node* newNode = new Node();
    newNode->data = newData;

    // Step 2: Make next of new node as head
    newNode->next = *head;

    // Step 3: Move the head to point to the new node
    *head = newNode;
}

```

- ### **At a particluar position.**
    - Find the previous node of the desired position.
    - Create a new node with the given data.
    - Set the new node’s next pointer to the next pointer of the previous node.
    - Update the previous node’s next pointer to point to the new node

### Code
```
oid insertAtPosition(Node** head, int position, int newData) {
    // Step 1: Allocate new node
    Node* newNode = new Node();
    newNode->data = newData;

    // Start from the head
    Node* temp = *head;

    // Find previous node of the desired position
    for(int i = 1; temp != nullptr && i < position - 1; i++) {
        temp = temp->next;
    }

    // If position is more than number of nodes
    if (temp == nullptr || temp->next == nullptr) {
        return;
    }
}
```

- ### **At the end.**
    - Create a new Node
    - Check if the linked list is empty. If yes then add new node as head.
    - Else traverse till the last node of the linked list.
    - Update the next pointer of the last node from NULL to new node.

### Code
```
void insertAtEnd(Node** head, int newData) {
    // Step 1: Allocate new node
    Node* newNode = new Node();
    newNode->data = newData;
    newNode->next = nullptr;

    // If the Linked List is empty, then make the new node as head
    if (*head == nullptr) {
        *head = newNode;
        return;
    }

    // Else traverse till the last node
    Node* last = *head;
    while (last->next != nullptr) {
        last = last->next;
    }

    // Step 2 & 3: Change the next of last node
    last->next = newNode;
}
```
## Deletion in Linked List
Deletion can also be performed in different ways:
- ### **At the beginning**
    - Check if the list is not empty.
    - Store the head node in a temporary variable.
    - Update the head to point to the next node.
    - Delete the temporary node.
### Code
```
void deleteAtStart(Node** head) {
    // If linked list is empty
    if (*head == nullptr) return;

    // Store head node
    Node* temp = *head;

    // Move the head pointer to the next node
    *head = temp->next;

    // Delete the old head node
    delete temp;
}
```

- ### **At a particular position**
    - Find the previous node of the node to be deleted.
    - Change the next pointer of the previous node.
    - Delete the node
### Code
```
void deleteAtPosition(Node** head, int position) {
    if (*head == nullptr) return;

    Node* temp = *head;

    for (int i = 1; temp != nullptr && i < position - 1; i++)
        temp = temp->next;

    if (temp == nullptr || temp->next == nullptr)
        return;
    Node *next = temp->next->next;
    delete temp->next; 
    temp->next = next;
}
```

- ### **At the end**
    - Check if the list is not empty.
    - If there’s only one node, delete it and update the head to null.
    - Otherwise, find the second-to-last node.
    - Delete the last node and update the second-to-last node’s next pointer to null.
### Code
```
void deleteAtEnd(Node** head) {
    if (*head == nullptr || (*head)->next == nullptr) {
        delete *head;
        *head = nullptr;
        return;
    }
    Node* temp = *head;
    while (temp->next->next != nullptr)
        temp = temp->next;
    delete temp->next;

    temp->next = nullptr;
}
```



