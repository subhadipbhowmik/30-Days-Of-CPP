# Encapsulation in C++

Encapsulation in C++ is defined as the wrapping up of data and information in a single unit. In Object Oriented Programming, Encapsulation is defined as binding together the data and the functions that manipulate them.

Consider a real-life example of encapsulation, in a company, there are different sections like the accounts section, finance section, sales section, etc. Now,
- The finance section handles all the financial transactions and keeps records of all the data related to finance.
- Similarly, the sales section handles all the sales-related activities and keeps records of all the sales.

Now there may arise a situation when for some reason an official from the finance section needs all the data about sales in a particular month.

In this case, he is not allowed to directly access the data of the sales section. He will first have to contact some other officer in the sales section and then request him to give the particular data.

This is what **Encapsulation** is. Here the data of the sales section and the employees that can manipulate them are wrapped under a single name “sales section”. 

### Two Important  property of Encapsulation

- **Data Protection:** Encapsulation protects the internal state of an object by keeping its data members private. Access to and modification of these data members is restricted to the class’s public methods, ensuring controlled and secure data manipulation.

- **Information Hiding:** Encapsulation hides the internal implementation details of a class from external code. Only the public interface of the class is accessible, providing abstraction and simplifying the usage of the class while allowing the internal implementation to be modified without impacting external code.

## Features of Encapsulation

Below are the features of encapsulation:
- We can not access any function from the class directly. We need an object to access that function that is using the member variables of that class. 
- The function which we are making inside the class must use only member variables, only then it is called encapsulation.
- If we don’t make a function inside the class which is using the member variable of the class then we don’t call it encapsulation.
- Encapsulation improves readability, maintainability, and security by grouping data and methods together.
- It helps to control the modification of our data members.

## Examples

For example if we give input , and output should be half of input

```cpp
#include <iostream>
using namespace std;
class temp{
     int a;
  int b;
  public:
  int solve(int input){
    a=input;
    b=a/2;
    return b;
  }
};
 
int main() {
  int n;
  cin>>n;
  temp half;
  int ans=half.solve(n);
  cout<<ans<<endl;
    
}
```

Let's take one more example.

```cpp
// C++ program to demonstrate
// Encapsulation
#include <iostream>
using namespace std;
 
class Encapsulation {
private:
    // Data hidden from outside world
    int x;
 
public:
    // Function to set value of
    // variable x
    void set(int a) { x = a; }
 
    // Function to return value of
    // variable x
    int get() { return x; }
};
 
// Driver code
int main()
{
    Encapsulation obj;
    obj.set(5);
    cout << obj.get();
    return 0;
}
```
**Output**
```
5
```

## Role of Access Specifiers in Encapsulation

Access specifiers facilitate Data Hiding in C++ programs by restricting access to the class member functions and data members. There are three types of access specifiers in C++:

- **Private:** Private access specifier means that the member function or data member can only be accessed by other member functions of the same class.

- **Public:** Public access specifier means that the member function or data member can be accessed by any code.
- **Protected:** A protected access specifier means that the member function or data member can be accessed by other member functions of the same class or by derived classes.

By default, all data members and member functions of a class are made **private** by the compiler.