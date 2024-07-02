---
sidebar_position: 1
title: "Graph in C++"
description: "In this tutorial, we will learn about Graph in C++ programming with the help of examples."
sidebar_label: "Graph"
slug: Graph
---

## Graph Data Structure: A Comprehensive Overview

Graphs are a fundamental data structure in computer science, used to model relationships and connections between entities. This document delves into the theoretical aspects of graphs, their representation, and common algorithms.

### Definitions and Concepts

* *Graph:* A graph G is a pair G=(V,E), where:
    * V is a finite set of *vertices* (nodes), representing the entities.
    * E is a set of *edges*, representing the relationships between vertices.

* *Directed Graph:* Edges have a direction, indicating a one-way relationship from a source vertex to a destination vertex.

* *Undirected Graph:* Edges are bidirectional, representing a symmetric relationship between two vertices.

* *Weighted Graph:* Edges have associated weights, representing the cost or distance of the relationship.

* *Adjacency:* Two vertices are *adjacent* if they are connected by an edge.

* *Degree:* The *degree* of a vertex is the number of edges incident to it. In directed graphs, we distinguish between *in-degree* (incoming edges) and *out-degree* (outgoing edges).

* *Path:* A *path* is a sequence of vertices connected by edges.

* *Cycle:* A *cycle* is a closed path where the starting and ending vertices are the same.

* *Connected Graph:* A graph is *connected* if there is a path between any two vertices.

* *Tree:* A *tree* is a connected graph with no cycles.

![first-programme-in-cpp](../../static/img/day-02/first-program.png) 

### Graph Representations

Two common ways to represent graphs are:

1. *Adjacency Matrix:* A square matrix where each cell (i,j) indicates the presence or absence of an edge between vertices i and j. For weighted graphs, the matrix stores the weight instead.

    * *Pros:* Simple to implement, allows constant-time lookup for edge existence.
    * *Cons:* Requires O(V^2) memory even for sparse graphs, inefficient for operations like adding or removing edges.

2. *Adjacency List:* Each vertex stores a list of its adjacent vertices. For weighted graphs, the list stores edges with their weights.

    * *Pros:* More efficient for sparse graphs, requires O(V+E) memory.
    * *Cons:* Slower to check for edge existence (requires traversing the list).

### Graph Algorithms

Several algorithms operate on graphs, solving problems like traversal, shortest paths, minimum spanning trees, and more. Here's a brief overview:

1. *Depth-First Search (DFS):*

   - Starts at a chosen vertex and explores as deeply as possible along each branch before backtracking.
   - Utilizes a stack to keep track of unexplored vertices.
   - Can be used to detect cycles, find connected components, and topological sorting.

2. *Breadth-First Search (BFS):*

   - Explores a graph level by level, visiting all neighbors of a vertex before moving to the next level.
   - Utilizes a queue to manage vertices to be visited.
   - Can be used to find the shortest path in an unweighted graph, or determine if two vertices are connected.

3. *Dijkstra's Algorithm:*

   - Finds the shortest path from a source vertex to all other vertices in a weighted graph.
   - Uses a priority queue to select the nearest unvisited vertex.
   - Applicable to graphs with non-negative edge weights.

4. *Floyd-Warshall Algorithm:*

   - Calculates the shortest paths between all pairs of vertices in a weighted graph.
   - Suitable for dense graphs.

5. *Prim's and Kruskal's Algorithms:*

   - Find the minimum spanning tree (MST) of a weighted graph, connecting all vertices with the minimum total edge weight.
   - Prim's algorithm uses a greedy approach, adding the shortest edge to the MST at each step.
   - Kruskal's algorithm uses a union-find data structure to efficiently connect vertices.

### Graph Representation Example (Adjacency List)

```cpp
#include <vector>
#include <list>
#include <iostream>

using namespace std;

class Graph {
private:
    int numVertices;
    vector<list<int>> adjList;

public:
    Graph(int n) : numVertices(n), adjList(n) {}

    void addEdge(int u, int v) {
        adjList[u].push_back(v);
        adjList[v].push_back(u); // For undirected graph
    }

    void printGraph() {
        for (int i = 0; i < numVertices; i++) {
            cout << "Vertex " << i << ": ";
            for (int neighbor : adjList[i]) {
                cout << neighbor << " ";
            }
            cout << endl;
        }
    }
};

int main() {
    Graph graph(5);
    graph.addEdge(0, 1);
    graph.addEdge(0, 4);
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 3);

    graph.printGraph();

    return 0;
}
```


### Applications of Graphs

Graphs have numerous applications in various domains, including:

* *Social Networks:* Representing relationships between people.
* *Transportation Systems:* Modeling roads, routes, and connections.
* *Computer Networks:* Representing network topology and communication pathways.
* *Web Crawling:* Analyzing website links and connections.
* *Bioinformatics:* Representing protein interactions and gene networks.
* *Machine Learning:* Building graph-based models for tasks like recommendation systems and anomaly detection.

### Conclusion

Graphs are a versatile data structure with vast applications in computer science. Understanding their representation and algorithms allows you to solve complex problems in various domains, making them an essential tool for programmers and researchers alike.