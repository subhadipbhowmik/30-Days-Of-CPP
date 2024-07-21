---
sidebar_position: 1
title: "Parallel Algorithms in C++"
description: "In this tutorial we will learn about Parallel Algorithms in C++."
sidebar_label: "Parallel Algorithms in C++"
slug: Parallel-Algorithms-in-cpp
---

# Introduction to Parallel Algorithms in C++

Parallel algorithms are essential for utilizing the power of multi-core processors to speed up computations. C++17 introduced parallel algorithms in the standard library, allowing developers to execute many algorithms in parallel.

## Execution Policies

C++17 added three execution policies that can be used with standard algorithms:

* 'std::execution::seq': Sequential execution (default).
* 'std::execution::par': Parallel execution.
* 'std::execution::par_unseq': Parallel and unsequenced execution.

## Parallel Algorithms in Action

1. **Parallel 'for_each'**
The for_each algorithm applies a function to each element in a range. Using the parallel execution policy, we can run this operation in parallel.

Example:

```C++
#include <iostream>
#include <vector>
#include <algorithm>
#include <execution>

int main() {
    std::vector<int> vec(100000, 1);

    // Parallel for_each
    std::for_each(std::execution::par, vec.begin(), vec.end(), [](int& n) { n += 1; });

    std::cout << "First element: " << vec[0] << std::endl;
    return 0;
}
```

2. **Parallel sort**
The sort algorithm sorts elements in a range. With the parallel execution policy, sorting can be done concurrently.

Example:

```C++
#include <iostream>
#include <vector>
#include <algorithm>
#include <execution>

int main() {
    std::vector<int> vec = {5, 2, 9, 1, 5, 6};

    // Parallel sort
    std::sort(std::execution::par, vec.begin(), vec.end());

    for (int n : vec) std::cout << n << " ";
    std::cout << std::endl;
    return 0;
}
```

3. **Parallel transform**
The transform algorithm applies a function to each element in a range and stores the result in another range. Using the parallel execution policy, the transformation can be done in parallel.

Example:

```C++
#include <iostream>
#include <vector>
#include <algorithm>
#include <execution>

int main() {
    std::vector<int> vec = {1, 2, 3, 4, 5};
    std::vector<int> result(vec.size());

    // Parallel transform
    std::transform(std::execution::par, vec.begin(), vec.end(), result.begin(), [](int n) { return n * n; });

    for (int n : result) std::cout << n << " ";
    std::cout << std::endl;
    return 0;
}
```

## Thread Pools
A thread pool is a collection of pre-instantiated reusable threads that can execute tasks. It helps manage a pool of worker threads to improve performance and resource utilization.

Example of a simple thread pool:

```C++
#include <iostream>
#include <vector>
#include <thread>
#include <queue>
#include <mutex>
#include <condition_variable>
#include <functional>

class ThreadPool {
public:
    ThreadPool(size_t threads);
    ~ThreadPool();
    void enqueue(std::function<void()> task);

private:
    std::vector<std::thread> workers;
    std::queue<std::function<void()>> tasks;
    std::mutex queue_mutex;
    std::condition_variable condition;
    bool stop;
};

ThreadPool::ThreadPool(size_t threads) : stop(false) {
    for (size_t i = 0; i < threads; ++i)
        workers.emplace_back([this] {
            for (;;) {
                std::function<void()> task;
                {
                    std::unique_lock<std::mutex> lock(this->queue_mutex);
                    this->condition.wait(lock, [this] { return this->stop || !this->tasks.empty(); });
                    if (this->stop && this->tasks.empty()) return;
                    task = std::move(this->tasks.front());
                    this->tasks.pop();
                }
                task();
            }
        });
}

ThreadPool::~ThreadPool() {
    {
        std::unique_lock<std::mutex> lock(queue_mutex);
        stop = true;
    }
    condition.notify_all();
    for (std::thread &worker : workers) worker.join();
}

void ThreadPool::enqueue(std::function<void()> task) {
    {
        std::unique_lock<std::mutex> lock(queue_mutex);
        tasks.emplace(std::move(task));
    }
    condition.notify_one();
}

int main() {
    ThreadPool pool(4);
    for (int i = 0; i < 8; ++i) {
        pool.enqueue([i] { std::cout << "Task " << i << " is being processed by thread " << std::this_thread::get_id() << std::endl; });
    }
    return 0;
}
```
## Advanced Topics and Best Practices

**Synchronization Primitives**
Using synchronization primitives like mutexes, locks, and condition variables is essential to avoid data races and ensure thread safety.

Example:

```C++
#include <iostream>
#include <vector>
#include <thread>
#include <mutex>

std::mutex mtx;

void print_safe(int n) {
    std::lock_guard<std::mutex> lock(mtx);
    std::cout << "Thread " << std::this_thread::get_id() << ": " << n << std::endl;
}

int main() {
    std::vector<std::thread> threads;
    for (int i = 0; i < 10; ++i) {
        threads.emplace_back(print_safe, i);
    }

    for (auto& t : threads) t.join();

    return 0;
}
```

## Avoiding Data Races
Data races occur when two or more threads access shared data simultaneously without proper synchronization. Use synchronization mechanisms to protect shared resources.

## Load Balancing
Distribute work evenly across threads to avoid some threads being idle while others are overloaded. Proper load balancing can significantly improve performance.

## Best Practices
* Minimize Lock Contention: Reduce the amount of time threads spend waiting for locks.
* Avoid False Sharing: Ensure that threads do not inadvertently share cache lines, leading to performance degradation.
* Use Appropriate Granularity: Balance the overhead of parallelization with the computational cost of tasks.

## Conclusion
Parallel algorithms in C++ offer a powerful way to leverage multi-core processors and improve the performance of your programs. By understanding and using parallel execution policies, thread pools, and synchronization primitives, you can write efficient and scalable concurrent applications.