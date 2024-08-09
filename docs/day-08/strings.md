1. Introduction to Strings in C++

A string is a sequence of characters. In C++, there are two main ways to work with strings:

    1. C-style strings (character arrays)
    2. The C++ string class


2. C-style Strings

C-style strings are inherited from the C language. They are essentially arrays of characters ending with a null character '\0'.
Example:

cppCopychar str[] = "Hello";  // Equivalent to {'H','e','l','l','o','\0'}
Pros:

Low-level control
Compatibility with C code

Cons:

Prone to buffer overflow errors
Limited built-in functionality


3. C++ String Class

The C++ string class is part of the Standard Template Library (STL). It's much more powerful and safer to use than C-style strings.
To use the string class, include the <string> header:
cppCopy#include <string>
using namespace std;

string str = "Hello, World!";

4. String Declaration and Initialization

You can declare and initialize strings in several ways:
cppCopystring s1;               // Empty string
string s2 = "Hello";     // Initialize with a string literal
string s3("World");      // Initialize using constructor
string s4(5, 'A');       // Initialize with 5 'A' characters: "AAAAA"
string s5 = s2;          // Copy initialization

5. String Operations

a. Concatenation:
cppCopystring a = "Hello";
string b = "World";
string c = a + " " + b;  // c is "Hello World"

b. Appending:
cppCopystring str = "Hello";
str += " World";         // str is now "Hello World"

c. Accessing characters:
cppCopystring str = "Hello";
char ch = str[0];        // ch is 'H'

d. Length:
cppCopystring str = "Hello";
int len = str.length();  // or str.size(); both return 5

e. Substring:
cppCopystring str = "Hello, World!";
string sub = str.substr(7, 5);  // sub is "World"

f. Finding:
cppCopystring str = "Hello, World!";
size_t pos = str.find("World");  // pos is 7

g. Replacing:
cppCopystring str = "Hello, World!";
str.replace(7, 5, "C++");  // str is now "Hello, C++!"

6. String Input/Output

a. Output:
cppCopystring str = "Hello";
cout << str << endl;

b. Input:
cppCopystring name;
cout << "Enter your name: ";
cin >> name;  // Reads until whitespace

c. Reading a line:
cppCopystring line;
getline(cin, line);  // Reads entire line, including spaces

7. String Comparison

You can compare strings using relational operators:
cppCopystring s1 = "apple";
string s2 = "banana";
if (s1 < s2) {
    cout << "apple comes before banana" << endl;
}

8. String Conversion

a. To C-style string:
cppCopystring str = "Hello";
const char* cstr = str.c_str(); 

b. Number to string:
cppCopyint num = 123;
string str = to_string(num);

c. String to number:
cppCopystring str = "123";
int num = stoi(str);  // string to int
double d = stod(str); // string to double

9. String Iteration

You can iterate through a string using range-based for loop or traditional for loop:
cppCopystring str = "Hello";
for (char c : str) {
    cout << c << " ";
}

10. String Modifiers

a. Insert:
cppCopystring str = "Hello";
str.insert(5, " World");  // str is now "Hello World"

b. Erase:
cppCopystring str = "Hello World";
str.erase(5, 6);  // str is now "Hello"

c. Clear:
cppCopystring str = "Hello";
str.clear();  // str is now an empty string

11. String Capacity

a. Resize:
cppCopystring str = "Hello";
str.resize(10, '!');  // str is now "Hello!!!!!"

b. Capacity:
cppCopystring str = "Hello";
cout << str.capacity();  // Prints the current capacity

12. Advanced String Operations

a. Regular expressions (C++11 and later):
cppCopy#include <regex>
string str = "Hello, 123";
regex pattern("\\d+");
if (regex_search(str, pattern)) {
    cout << "String contains digits" << endl;
}

b. String view (C++17):
cppCopy#include <string_view>
string_view sv = "Hello, World!";
cout << sv.substr(0, 5);  // Efficient substring operation
