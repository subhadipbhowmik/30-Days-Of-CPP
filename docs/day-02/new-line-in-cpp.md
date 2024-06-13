---
sidebar_position: 4
title: "Adding New Line in C++"
description: "Explore various methods to add new line in C++ with illustrative examples."
sidebar_label: "New Line in C++"
slug: adding-new-line-in-cpp
--- 


# Adding New Line in C++
There are two common ways to add a new line in C++: using `"\n"` and `"std::endl"`.

## Using `"\n"`:
The `"\n"` escape sequence is a simple way to add a new line in C++. It instructs the program to start printing from the next line.

#### Example:
```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello\n"; // Using newline character (\n)
    cout << "World\n";
    return 0;
}
```

**Output**:
```cpp
Hello
World
```


## Using `"std::endl"`:
`std::endl` is a manipulator in the C++ standard library that not only adds a new - line but also flushes the output buffer, ensuring immediate display.

#### Example:
```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello" << endl; // Using std::endl
    cout << "World" << endl;
    return 0;
}

```
**Output**:
```cpp
Hello
World
```


## Comparison of `\n` and `endl`:
Both `"\n"` and `std::endl` produce the same output, but there are differences in their usage and performance.

#### Performance : 
In terms of performance, `\n` is generally faster than `std::endl`.
`std::endl` flushes the output buffer, which may impact performance, especially for large outputs. On the other hand, `\n` does not flush the buffer immediately, making it more efficient.

#### Usage:

- Use `std::endl` when you need immediate display of the output or when you want to ensure that certain messages are visible right away, such as in interactive programs or debugging scenarios.
- Use `\n` in most cases where immediate flushing isn't necessary for better performance.

Understanding the differences between `std::endl` and `\n` helps in choosing the appropriate method based on the requirements of your program.

Feel free to use either method based on your specific needs!