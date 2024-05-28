# Data Types in C++

In C++, data types specify how we store and manipulate data. C++ provides several built-in data types to handle different kinds of data efficiently.

## 1. Integer Types

Integer types represent whole numbers. They can be signed (positive, negative, or zero) or unsigned (only positive or zero).

### Examples:

```cpp
#include <iostream>

int main() {
    // Signed integers
    int a = 10;       // 4 bytes, range: -2,147,483,648 to 2,147,483,647
    short b = 20;     // 2 bytes, range: -32,768 to 32,767
    long c = 30;      // 4 bytes, platform-dependent
    long long d = 40; // 8 bytes, range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
    
    // Unsigned integers
    unsigned int e = 50;       // 4 bytes, range: 0 to 4,294,967,295
    unsigned short f = 60;     // 2 bytes, range: 0 to 65,535
    unsigned long g = 70;      // 4 bytes, platform-dependent
    unsigned long long h = 80; // 8 bytes, range: 0 to 18,446,744,073,709,551,615
    
    std::cout << "Signed Integers: " << a << ", " << b << ", " << c << ", " << d << std::endl;
    std::cout << "Unsigned Integers: " << e << ", " << f << ", " << g << ", " << h << std::endl;

    return 0;
}
```
## 2. Floating-Point Types

Floating-point types represent real numbers. They can represent a wide range of values, but they have limited precision.

### Example:
```cpp
#include <iostream>

int main() {
    float a = 3.14f;       // 4 bytes, 6 decimal places precision
    double b = 3.14159;    // 8 bytes, 15 decimal places precision
    long double c = 3.1415926535L; // 10 or more bytes, platform-dependent precision

    std::cout << "Float: " << a << std::endl;
    std::cout << "Double: " << b << std::endl;
    std::cout << "Long Double: " << c << std::endl;

    return 0;
}
```

## 3. Character Types

Character types represent single characters. They can be used to store individual characters and small integers.

### Example:

```cpp
#include <iostream>

int main() {
    char a = 'A';       // 1 byte, range: -128 to 127 or 0 to 255
    wchar_t b = L'B';   // platform-dependent, at least 2 bytes
    char16_t c = u'C';  // 2 bytes, Unicode character
    char32_t d = U'D';  // 4 bytes, Unicode character

    std::cout << "Char: " << a << std::endl;
    std::wcout << "Wide Char: " << b << std::endl;
    std::cout << "Char16_t: " << c << std::endl;
    std::cout << "Char32_t: " << d << std::endl;

    return 0;
}
```

## 4. Boolean Type

Boolean type represents truth values. It can have two possible values: `true` or `false`.

### Example:

```cpp
#include <iostream>

int main() {
    bool isTrue = true;
    bool isFalse = false;

    std::cout << "isTrue: " << isTrue << std::endl;
    std::cout << "isFalse: " << isFalse << std::endl;

    return 0;
}
```
