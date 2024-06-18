---
sidebar_position: 3
title: "Examples"
description: "In this tutorial, we will see some examples and real world applications related to Polymorphism in c++."
sidebar_label: "Examples"
slug: examples-in-cpp
---

Image
[examples](C:\Users\Shruti\OneDrive\Desktop\30-Days-Of-CPP\static\img\day-19\poly3.png)

## Real-world Applications of Polymorphism

1. GUI Frameworks
Graphical User Interface (GUI) frameworks extensively use polymorphism. Different types of UI elements (buttons, text boxes, labels) inherit from a common base class and override methods like draw or handleEvent.

Example Code-

#include <iostream>
using namespace std;

class UIElement {
public:
    virtual void draw() = 0; // Pure virtual function
};

class Button : public UIElement {
public:
    void draw() override {
        cout << "Drawing a button" << endl;
    }
};

class TextBox : public UIElement {
public:
    void draw() override {
        cout << "Drawing a text box" << endl;
    }
};

void renderUI(UIElement *element) {
    element->draw();
}

int main() {
    Button btn;
    TextBox txtBox;

    renderUI(&btn);     // Output: Drawing a button
    renderUI(&txtBox);  // Output: Drawing a text box

    return 0;
}

2. File Systems
In file systems, different file types (text files, binary files, image files) can inherit from a base File class and override methods like open, read, write, and close.

Example Code-
#include <iostream>
using namespace std;

class File {
public:
    virtual void open() = 0;
    virtual void close() = 0;
};

class TextFile : public File {
public:
    void open() override {
        cout << "Opening text file" << endl;
    }

    void close() override {
        cout << "Closing text file" << endl;
    }
};

class BinaryFile : public File {
public:
    void open() override {
        cout << "Opening binary file" << endl;
    }

    void close() override {
        cout << "Closing binary file" << endl;
    }
};

void manageFile(File *file) {
    file->open();
    // Perform file operations
    file->close();
}

int main() {
    TextFile txt;
    BinaryFile bin;

    manageFile(&txt);  // Output: Opening text file, Closing text file
    manageFile(&bin);  // Output: Opening binary file, Closing binary file

    return 0;
}

3. Game Development
In game development, different game entities (player, enemies, NPCs) inherit from a common Entity base class and override methods like update, render, and interact.

Example Code-

#include <iostream>
using namespace std;

class Entity {
public:
    virtual void update() = 0;
};

class Player : public Entity {
public:
    void update() override {
        cout << "Updating player" << endl;
    }
};

class Enemy : public Entity {
public:
    void update() override {
        cout << "Updating enemy" << endl;
    }
};

void gameLoop(Entity *entity) {
    entity->update();
    // Other game loop operations
}

int main() {
    Player player;
    Enemy enemy;

    gameLoop(&player);  // Output: Updating player
    gameLoop(&enemy);   // Output: Updating enemy

    return 0;
}
