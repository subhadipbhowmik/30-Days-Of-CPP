---
sidebar_position: 1
title: "C++ References"
description: "In this tutorial, we will learn about the hoe to create References in C++."
sidebar_label: "Create References"
slug: C++ References
---

## Creating References

A reference variable is a "reference" to an existing variable, and it is created with the & operator:


       ```cpp
    string food = "Pizza";  // food variable
string &meal = food;    // reference to food
      
       ```

  Now, we can use either the variable name food or the reference name meal to refer to the food variable:
  ## Example 
  
       ```cpp
       string food = "Pizza";
string &meal = food;

cout << food << "\n";  // Outputs Pizza
cout << meal << "\n";  // Outputs Pizza
    
       ```

  