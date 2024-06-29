---
sidebar_position: 2
title: "Classes and Objects in C++"
description: "In this tutorial, we will learn about Classes and Objects in C++ programming with the help of examples.Class in C++ is the building block that leads to Object-Oriented programming.An Object is an instance of a Class."
sidebar_label: "Classes and Objects in C++"
slug: classes-objects-in-cpp
---
## Class in C++
A C++ class is like a blueprint for an object. For Example: Consider the Class of Cars. There may be many cars with different names and brands but all of them will share some common properties like all of them will have 4 wheels, Speed Limit, Mileage range, etc. So here, Car is the class, and wheels, speed limits, and mileage are their properties.

1. A Class is a user-defined data type that has data members and member functions.

2. Data members are the data variables and member functions are the functions used to manipulate these variables together, these data members and member functions define the properties and behavior of the objects in a Class.

3. In the above example of class Car, the data member will be speed limit, mileage, etc, and member functions can be applying brakes, increasing speed, etc.

## Defining Class 
   A class is defined in C++ using the keyword class followed by the name of the class. The body of the class is defined inside the curly brackets and terminated by a semicolon at the end.
  
   ![image](https://github.com/CoderGirl2844/30-Days-Of-CPP/assets/155231566/a1f19ad7-84c1-4e40-b350-0e35fb70a270)

## Declaring Objects
When a class is defined, only the specification for the object is defined; no memory or storage is allocated. To use the data and access functions defined in the class, you need to create objects.

SYNTAX:
```
ClassName ObjectName;
```

## How to access Data members and memeber functions?
The data members and member functions of the class can be accessed using the dot(‘.’) operator with the object. For example, if the name of the object is obj and you want to access the member function with the name printName() then you will have to write obj.printName().
## Accessing Data Members
The public data members are also accessed in the same way given however the private data members are not allowed to be accessed directly by the object. Accessing a data member depends solely on the access control of that data member. This access control is given by Access modifiers in C++. There are three access modifiers: public, private, and protected.
```
// C++ program to demonstrate accessing of data members 
#include <bits/stdc++.h> 
using namespace std; 
class modifiers{ 
	// Access specifier 
public: 
	// Data Members 
	string modifyname; 
	// Member Functions() 
	void printname() { cout << "modifyname is:" << modifyname; } 
}; 
int main() 
{ 
	// Declare an object of class  
	modify obj1; 
	// accessing data member 
	obj1.modifyname = "Abhi"; 
	// accessing member function 
	obj1.printname(); 
	return 0; 
}
```
OUTPUT:
```
modifyname is: Abhi
```
## Member functions in Classes
There are 2 ways to define a member function:

1. Inside class definition
2. Outside class definition

To define a member function outside the class definition we have to use the scope resolution:: operator along with the class name and function name. 
```
// C++ program to demonstrate function 
// declaration outside class 

#include <bits/stdc++.h> 
using namespace std; 
class Geeks 
{ 
	public: 
	string geekname; 
	int id; 
	
	// printname is not defined inside class definition 
	void printname(); 
	
	// printid is defined inside class definition 
	void printid() 
	{ 
		cout <<"Geek id is: "<<id; 
	} 
}; 

// Definition of printname using scope resolution operator :: 
void Geeks::printname() 
{ 
	cout <<"Geekname is: "<<geekname; 
} 
int main() { 
	
	Geeks obj1; 
	obj1.geekname = "xyz"; 
	obj1.id=15; 
	
	// call printname() 
	obj1.printname(); 
	cout << endl; 
	
	// call printid() 
	obj1.printid(); 
	return 0; 
} 
```
OUPUT:
```
Geekname is: xyz
Geek id is: 15
```
Note that all the member functions defined inside the class definition are by default inline, but you can also make any non-class function inline by using the keyword inline with them. Inline functions are actual functions, which are copied everywhere during compilation, like pre-processor macro, so the overhead of function calls is reduced. 
 ## Constructors
  
Constructors are special class members which are called by the compiler every time an object of that class is instantiated. Constructors have the same name as the class and may be defined inside or outside the class definition. 
There are 3 types of constructors:
1. Default Constructors
2. Parameterized Constructors
3. Copy Constructors

```
// C++ program to demonstrate constructors 
#include <bits/stdc++.h> 
using namespace std; 
class s 
{ 
	public: 
	int id; 
	
	//Default Constructor 
	s() 
	{ 
		cout << "Default Constructor called" << endl; 
		id=-1; 
	} 
	
	//Parameterized Constructor 
	s(int x) 
	{ 
		cout <<"Parameterized Constructor called "<< endl; 
		id=x; 
	} 
}; 
int main() { 
	
	// obj1 will call Default Constructor 
	s obj1; 
	cout <<"s id is: "<<obj1.id << endl; 
	
	// obj2 will call Parameterized Constructor 
	s obj2(21); 
	cout <<"s id is: " <<obj2.id << endl; 
	return 0; 
} 
```
OUTPUT:
```
Default Constructor called
s id is: -1
Parameterized Constructor called 
s id is: 21
```
A Copy Constructor creates a new object, which is an exact copy of the existing object. The compiler provides a default Copy Constructor to all the classes.

Syntax:
```
class-name (class-name &){}
```
## Destructors
Destructor is another special member function that is called by the compiler when the scope of the object ends. 
```
// C++ program to explain destructors 
#include <bits/stdc++.h> 
using namespace std; 
class s 
{ 
	public: 
	int id; 
	
	//Definition for Destructor 
	~s() 
	{ 
		cout << "Destructor called for id: " << id <<endl; 
	} 
}; 

int main() 
{ 
	s obj1; 
	obj1.id=7; 
	int i = 0; 
	while ( i < 5 ) 
	{ 
    s obj2; 
		obj2.id=i; 
		i++;		 
	} // Scope for obj2 ends here 

	return 0; 
} // Scope for obj1 ends here 
```
OUTPUT:
```
Destructor called for id: 0
Destructor called for id: 1
Destructor called for id: 2
Destructor called for id: 3
Destructor called for id: 4
Destructor called for id: 7
```
## Why do we give semicolons at the end of class?
Many people might say that it’s a basic syntax and we should give a semicolon at the end of the class as its rule defines in cpp. But the main reason why semi-colons are there at the end of the class is compiler checks if the user is trying to create an instance of the class at the end of it. 

Yes just like structure and union, we can also create the instance of a class at the end just before the semicolon. As a result, once execution reaches at that line, it creates a class and allocates memory to your instance.
```
#include <iostream> 
using namespace std; 

class Demo{ 
int a, b; 
	public: 
	Demo() // default constructor 
	{ 
		cout << "Default Constructor" << endl; 
	} 
	Demo(int a, int b):a(a),b(b) //parameterised constructor 
	{ 
		cout << "parameterized constructor -values" << a << " "<< b << endl; 
	} 
	
}instance; 


int main() { 
	
	return 0; 
}
```
OUTPUT:
```
Default Constructor
```
We can see that we have created a class instance of Demo with the name “instance”, as a result, the output we can see is Default Constructor is called.

Similarly, we can also call the parameterized constructor just by passing values here      
```
#include <iostream> 
using namespace std; 

class Demo{ 
	public: 
	int a, b; 
	Demo() 
	{ 
		cout << "Default Constructor" << endl; 
	} 
	Demo(int a, int b):a(a),b(b) 
	{ 
		cout << "parameterized Constructor values-" << a << " "<< b << endl; 
	} 
	
	
	
}instance(100,200); 


int main() { 
	
	return 0; 
}
```
OUTPUT:
```
parameterized Constructor values-100 200
```
So by creating an instance just before the semicolon, we can create the Instance of class.
