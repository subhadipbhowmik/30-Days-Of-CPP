1. Write a program to find the factorial of a number.

```cpp
#include <iostream>

int factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

int main() {
    int num;
    std::cout << "Enter a number: ";
    std::cin >> num;
    int result = factorial(num);
    std::cout << "The factorial of " << num << " is " << result << std::endl;
    return 0;
}
```

2. Implement a binary search algorithm.

```cpp
#include <iostream>
#include <vector>

int binarySearch(const std::vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

int main() {
    std::vector<int> arr = {1, 3, 5, 7, 9};
    int target = 7;
    int index = binarySearch(arr, target);
    if (index != -1) {
        std::cout << "Element " << target << " found at index " << index << std::endl;
    } else {
        std::cout << "Element not found" << std::endl;
    }
    return 0;
}
```

3. Create a class to represent a bank account with deposit and withdrawal methods.

```cpp
#include <iostream>

class BankAccount {
private:
    double balance;

public:
    BankAccount(double initialBalance) {
        balance = initialBalance;
    }

    void deposit(double amount) {
        balance += amount;
    }

    void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
        } else {
            std::cout << "Insufficient balance" << std::endl;
        }
    }

    double getBalance() {
        return balance;
    }
};

int main() {
    BankAccount account(100);
    account.deposit(50);
    std::cout << "Account balance after deposit: $" << account.getBalance() << std::endl;
    account.withdraw(30);
    std::cout << "Account balance after withdrawal: $" << account.getBalance() << std::endl;
    return 0;
}
```

4. Write a program to reverse a string.

```cpp
#include <iostream>
#include <string>

std::string reverseString(const std::string& str) {
    std::string reversedStr;
    for (int i = str.length() - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

int main() {
    std::string str = "Hello, World!";
    std::string reversedStr = reverseString(str);
    std::cout << "Reversed string: " << reversedStr << std::endl;
    return 0;
}
```

5. Implement a stack using a linked list.

```cpp
#include <iostream>

class Node {
public:
    int data;
    Node* next;

    Node(int value) {
        data = value;
        next = nullptr;
    }
};

class Stack {
private:
    Node* top;

public:
    Stack() {
        top = nullptr;
    }

    void push(int value) {
        Node* newNode = new Node(value);
        if (top == nullptr) {
            top = newNode;
        } else {
            newNode->next = top;
            top = newNode;
        }
    }

    void pop() {
        if (top == nullptr) {
            std::cout << "Stack is empty" << std::endl;
        } else {
            Node* temp = top;
            top = top->next;
            delete temp;
        }
    }

    int peek() {
        if (top == nullptr) {
            std::cout << "Stack is empty" << std::endl;
            return -1;
        } else {
            return top->data;
        }
    }

    bool isEmpty() {
        return top == nullptr;
    }
};

int main() {
    Stack stack;
    stack.push(10);
    stack.push(20);
    stack.push(30);
    std::cout << "Stack: ";
    while (!stack.isEmpty()) {
        std::cout << stack.peek() << " -> ";
        stack.pop();
    }
    std::cout << "NULL" << std::endl;
    return 0;
}
```

6. Create a class to represent a rectangle with methods to calculate area and perimeter.

```cpp
#include <iostream>

class Rectangle {
private:
    double length;
    double width;

public:
    Rectangle(double l, double w) {
        length = l;
        width = w;
    }

    double calculateArea() {
        return length * width;
    }

    double calculatePerimeter() {
        return 2 * (length + width);
    }
};

int main() {
    double length = 5;
    double width = 3;
    Rectangle rectangle(length, width);
    double area = rectangle.calculateArea();
    double perimeter = rectangle.calculatePerimeter();
    std::cout << "Area: " << area << ", Perimeter: " << perimeter << std::endl;
    return 0;
}
```

7. Write a program to check if a number is prime.

```cpp
#include <iostream>

bool isPrime(int num) {
    if (num <= 1) {
        return false;
    }
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

int main() {
    int num;
    std::cout << "Enter a number: ";
    std::cin >> num;
    if (isPrime(num)) {
        std::cout << num << " is a prime number." << std::endl;
    } else {
        std::cout << num << " is not a prime number." << std::endl;
    }
    return 0;
}
```

8. Implement a queue using an array.

```cpp
#include <iostream>

class Queue {
private:
    int* arr;
    int front;
    int rear;
    int capacity;
    int size;

public:
    Queue(int cap) {
        capacity = cap;
        arr = new int[capacity];
        front = 0;
        rear = -1;
        size = 0;
    }

    void enqueue(int value) {
        if (size == capacity) {
            std::cout << "Queue is full" << std::endl;
        } else {
            rear = (rear + 1) % capacity;
            arr[rear] = value;
            size++;
        }
    }

    void dequeue() {
        if (size == 0) {
            std::cout << "Queue is empty" << std::endl;
        } else {
            front = (front + 1) % capacity;
            size--;
        }
    }

    int peek() {
        if (size == 0) {
            std::cout << "Queue is empty" << std::endl;
            return -1;
        } else {
            return arr[front];
        }
    }

    bool isEmpty() {
        return size == 0;
    }
};

int main() {
    Queue queue(3);
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    std::cout << "Queue: ";
    while (!queue.isEmpty()) {
        std::cout << queue.peek() << " -> ";
        queue.dequeue();
    }
    std::cout << "NULL" << std::endl;
    return 0;
}
```

9. Create a class to represent a student with methods to calculate average marks.

```cpp
#include <iostream>
#include <vector>

class Student {
private:
    std::vector<int> marks;

public:
    void addMark(int mark) {
        marks.push_back(mark);
    }

    double calculateAverage() {
        if (marks.empty()) {
            return 0;
        }
        int sum = 0;
        for (int mark : marks) {
            sum += mark;
        }
        return static_cast<double>(sum) / marks.size();
    }
};

int main() {
    Student student;
    student.addMark(80);
    student.addMark(90);
    student.addMark(70);
    student.addMark(85);
    double average = student.calculateAverage();
    std::cout << "Average marks: " << average << std::endl;
    return 0;
}
```

10. Write a program to find the largest element in an array.

```cpp
#include <iostream>
#include <vector>

int findLargestElement(const std::vector<int>& arr) {
    int largest = arr[0];
    for (int i = 1; i < arr.size(); i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

int main() {
    std::vector<int> arr = {5, 10, 3, 8, 2};
    int largest = findLargestElement(arr);
    std::cout << "The largest element is " << largest << std::endl;
    return 0;
}
```

11. Implement a binary tree data structure.

```cpp
#include <iostream>

class Node {
public:
    int data;
    Node* left;
    Node* right;

    Node(int value) {
        data = value;
        left = nullptr;
        right = nullptr;
    }
};

class BinaryTree {
private:
    Node* root;

public:
    BinaryTree() {
        root = nullptr;
    }

    void insert(int value) {
        Node* newNode = new Node(value);
        if (root == nullptr) {
            root = newNode;
        } else {
            Node* current = root;
            while (true) {
                if (value < current->data) {
                    if (current->left == nullptr) {
                        current->left = newNode;
                        break;
                    } else {
                        current = current->left;
                    }
                } else {
                    if (current->right == nullptr) {
                        current->right = newNode;
                        break;
                    } else {
                        current = current->right;
                    }
                }
            }
        }
    }

    void printTree(Node* node) {
        if (node != nullptr) {
            printTree(node->left);
            std::cout << node->data << " ";
            printTree(node->right);
        }
    }

    void printTreeInOrder() {
        printTree(root);
    }
};

int main() {
    BinaryTree tree;
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(3);
    tree.insert(7);
    tree.insert(12);
    tree.insert(20);
    std::cout << "Tree: ";
    tree.printTreeInOrder();
    std::cout << std::endl;
    return 0;
}
```

12. Create a class to represent a car with methods to start and stop the engine.

```cpp
#include <iostream>

class Car {
public:
    void startEngine() {
        std::cout << "Car engine started." << std::endl;
    }

    void stopEngine() {
        std::cout << "Car engine stopped." << std::endl;
    }
};

int main() {
    Car car;
    car.startEngine();
    car.stopEngine();
    return 0;
}
```

13. Write a program to check if a string is a palindrome.

```cpp
#include <iostream>
#include <string>

bool isPalindrome(const std::string& str) {
    int left = 0;
    int right = str.length() - 1;
    while (left < right) {
        if (str[left] != str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

int main() {
    std::string str = "racecar";
    if (isPalindrome(str)) {
        std::cout << "\"" << str << "\" is a palindrome." << std::endl;
    } else {
        std::cout << "\"" << str << "\" is not a palindrome." << std::endl;
    }
    return 0;
}
```

14. Implement a hash table data structure.

```cpp
#include <iostream>
#include <vector>
#include <list>
#include <utility>

class HashTable {
private:
    std::vector<std::list<std::pair<std::string, int>>> table;
    int capacity;

public:
    HashTable(int cap) {
        capacity = cap;
        table.resize(capacity);
    }

    int hashFunction(const std::string& key) {
        int sum = 0;
        for (char c : key) {
            sum += c;
        }
        return sum % capacity;
    }

    void insert(const std::string& key, int value) {
        int index = hashFunction(key);
        table[index].push_back(std::make_pair(key, value));
    }

    void printTable() {
        for (int i = 0; i < capacity; i++) {
            std::cout << "Index " << i << ": ";
            for (const auto& pair : table[i]) {
                std::cout << "(" << pair.first << ", " << pair.second << ") ";
            }
            std::cout << std::endl;
        }
    }
};

int main() {
    HashTable hashTable(3);
    hashTable.insert("John", 25);
    hashTable.insert("Alice", 30);
    hashTable.insert("Bob", 35);
    std::cout << "Hash table:" << std::endl;
    hashTable.printTable();
    return 0;
}
```

15. Create a class to represent a circle with methods to calculate area and circumference.

```cpp
#include <iostream>
#include <cmath>

class Circle {
private:
    double radius;

public:
    Circle(double r) {
        radius = r;
    }

    double calculateArea() {
        return M_PI * radius * radius;
    }

    double calculateCircumference() {
        return 2 * M_PI * radius;
    }
};

int main() {
    double radius = 5;
    Circle circle(radius);
    double area = circle.calculateArea();
    double circumference = circle.calculateCircumference();
    std::cout << "Area: " << area << ", Circumference: " << circumference << std::endl;
    return 0;
}
```

16. Write a program to sort an array using bubble sort.

```cpp
#include <iostream>
#include <vector>

void bubbleSort(std::vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
            }
        }
    }
}

int main() {
    std::vector<int> arr = {5, 2, 8, 1, 9};
    bubbleSort(arr);
    std::cout << "Sorted array: ";
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    return 0;
}
```

17. Implement a linked list data structure.

```cpp
#include <iostream>

class Node {
public:
    int data;
    Node* next;

    Node(int value) {
        data = value;
        next = nullptr;
    }
};

class LinkedList {
private:
    Node* head;

public:
    LinkedList() {
        head = nullptr;
    }

    void insert(int value) {
        Node* newNode = new Node(value);
        if (head == nullptr) {
            head = newNode;
        } else {
            Node* current = head;
            while (current->next != nullptr) {
                current = current->next;
            }
            current->next = newNode;
        }
    }

    void printList() {
        Node* current = head;
        while (current != nullptr) {
            std::cout << current->data << " -> ";
            current = current->next;
        }
        std::cout << "NULL" << std::endl;
    }
};

int main() {
    LinkedList linkedList;
    linkedList.insert(10);
    linkedList.insert(20);
    linkedList.insert(30);
    std::cout << "Linked list: ";
    linkedList.printList();
    return 0;
}
```

18. Create a class to represent a book with methods to get and set the author and title.

```cpp
#include <iostream>
#include <string>

class Book {
private:
    std::string author;
    std::string title;

public:
    void setAuthor(const std::string& a) {
        author = a;
    }

    void setTitle(const std::string& t) {
        title = t;
    }

    std::string getAuthor() {
        return author;
    }

    std::string getTitle() {
        return title;
    }
};

int main() {
    Book book;
    book.setAuthor("John Doe");
    book.setTitle("The Book");
    std::cout << "Book details: Author: \"" << book.getAuthor() << "\", Title: \"" << book.getTitle() << "\"" << std::endl;
    return 0;
}
```

19. Write a program to find the sum of all elements in an array.

```cpp
#include <iostream>
#include <vector>

int findSum(const std::vector<int>& arr) {
    int sum = 0;
    for (int num : arr) {
        sum += num;
    }
    return sum;
}

int main() {
    std::vector<int> arr = {1, 2, 3, 4, 5};
    int sum = findSum(arr);
    std::cout << "The sum of all elements is " << sum << std::endl;
    return 0;
}
```

20. Implement a merge sort algorithm.

```cpp
#include <iostream>
#include <vector>

void merge(std::vector<int>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    std::vector<int> leftArr(n1);
    std::vector<int> rightArr(n2);
    for (int i = 0; i < n1; i++) {
        leftArr[i] = arr[left + i];
    }
    for (int j = 0; j < n2; j++) {
        rightArr[j] = arr[mid + 1 + j];
    }
    int i = 0;
    int j = 0;
    int k = left;
    while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
