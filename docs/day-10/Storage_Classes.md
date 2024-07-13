

# Storage classes in C

A *storage class* in C specifies the scope, lifetime, and initialization behavior of variables. Each variable in C has one storage class. Variables declared within a block have automatic storage by default, unless specified with **`extern`**, **`static`**, or **`register`**.

## Auto Storage Class

The `auto` storage class is used to define local variables within a block. Variables declared as `auto` are automatically initialized with garbage values.

```c
#include <stdio.h>

void main() {
    auto int num = 10;
    printf("Value of num: %d\n", num);
}
```

## Register Storage Class

The `register` storage class is used to define local variables within a block that are stored in the CPU register for faster access. Modern compilers often optimize register allocation, making explicit use of `register` unnecessary in most cases.

```c
#include <stdio.h>

void main() {
    register int count;
    for (count = 0; count < 5; count++) {
        printf("Count: %d\n", count);
    }
}
```

## Static Storage Class

### Static Variable within Function

The `static` storage class is used to define variables that are initialized only once and retain their values between function calls.

```c
#include <stdio.h>

void func() {
    static int x = 0;
    x++;
    printf("x = %d\n", x);
}

void main() {
    func();
    func();
    func();
}
```

### Static Global Variable

```c
#include <stdio.h>

static int count = 5;

void func();

void main() {
    while (count--) {
        func();
    }
}

void func() {
    static int i = 5;
    i++;
    printf("i is %d and count is %d\n", i, count);
}
```

## Extern Storage Class

The `extern` storage class is used to declare a variable that is defined in another file or scope. It extends the visibility of a variable to the entire program.

```c
// File1.c

#include <stdio.h>
extern int count;

void main() {
    count = 5;
    printf("Count in File1: %d\n", count);
    func();
}

// File2.c

#include <stdio.h>
int count;

void func() {
    count++;
    printf("Count in File2: %d\n", count);
}
```

```
