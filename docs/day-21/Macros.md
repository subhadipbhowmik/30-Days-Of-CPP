```markdown
sidebar_position: 1
title: "Macros in C++"
description: "Learn about macros in C++, their usage, and best practices with practical examples. Macros are powerful preprocessor directives that enable code substitution before compilation."
sidebar_label: "Macros in C++"
slug: macros-in-cpp

## Introduction:

Macros in C++ are preprocessor directives that allow for code substitution before compilation. They are used to define constants, create inline functions, and conditionally include code segments.

![macros-in-cpp-introduction](../../static/img/day-20/macros-in-cpp)

#### 1. Defining Constants with `#define`:

Macros are commonly used to define constants that are substituted directly into the code.

```cpp
#define PI 3.14159

#include <iostream>

int main() {
    std::cout << "Value of PI: " << PI << std::endl;
    return 0;
}
```

#### 2. Function-like Macros:

You can create macros that act like functions, allowing for parameterized code substitution.

```cpp
#define SQUARE(x) ((x) * (x))

#include <iostream>

int main() {
    int num = 5;
    std::cout << "Square of " << num << " is: " << SQUARE(num) << std::endl;
    return 0;
}
```

#### 3. Conditional Compilation:

Macros enable conditional compilation, where certain code segments are included or excluded based on defined conditions.

```cpp
#define DEBUG_MODE

#include <iostream>

int main() {
#ifdef DEBUG_MODE
    std::cout << "Debug mode is on" << std::endl;
#endif
    std::cout << "Program running" << std::endl;
    return 0;
}
```

#### 4. Include Guards:

Include guards prevent multiple inclusions of the same header file, ensuring the contents are only included once per translation unit.

```cpp
#ifndef MY_HEADER_H
#define MY_HEADER_H

// Header file content

#endif // MY_HEADER_H
```

#### 5. Best Practices and Considerations:

- **Use sparingly**: Overuse of macros can lead to code maintenance issues.
- **Prefer `const` or `constexpr`**: Use `const` variables or `constexpr` for constants instead of macros where possible.
- **Parenthesize**: Always parenthesize macro arguments and the entire expression to avoid unintended side effects.

#### 6. Practical Examples and Exercises:

**Example 1: Sorting with a Macro**

```cpp
#include <algorithm>
#include <vector>
#include <iostream>

#define SORT_DESCENDING(vec) std::sort(vec.begin(), vec.end(), [](int a, int b) { return a > b; })

int main() {
    std::vector<int> numbers = {5, 2, 9, 1, 5, 6};

    SORT_DESCENDING(numbers);

    for (int n : numbers) {
        std::cout << n << " ";
    }
    // Output: 9 6 5 5 2 1
    return 0;
}
```

**Example 2: Conditional Compilation**

```cpp
#include <iostream>

#define DEBUG_MODE

int main() {
#ifdef DEBUG_MODE
    std::cout << "Debug mode is on" << std::endl;
#else
    std::cout << "Debug mode is off" << std::endl;
#endif

    std::cout << "Program running" << std::endl;
    return 0;
}
```

**Exercises:**

1. Define a macro to calculate the factorial of a number.
2. Implement a macro for checking if a number is even.
3. Create a macro that swaps two variables.


