// NOTES

  // Terms:
    // Nodes, edge (connection), weighted/unweighted, directed/undirected
    // When values are asssigned to connections, the graph is weighted
    // Facebook model - undirected
    // Instagram model - directed

  // Applications:
    // Social networks
    // Recommendation systems (e.g. you might also like...)
    // Maps

  // Implementations:

    // Adjacency matrix:
      // rows and columns (0, 1 to represent connection)
      // Takes up more space (in sparse graphs)
      // Slower to iterate over all edges
      // Faster to lookup specific edge

    // Adjacency list:
      // Nested arrays (each is node) that show connections for said nodes
      // Hash table where each node maps to array with all node connections
      // Can take up less space (in sparse graphs)
      // Faster to iterate over all edges
      // Can be slower to lookup specific edge
      // MOST REAL WORLD DATA IS SPARSE - SO THIS IS MORE REALISTIC GENERALLY


class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(item => item !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(item => item !== v1);
  }

  removeVertex(v1) {
    const vertexList = this.adjacencyList[v1];
    for(const vertex of vertexList) this.removeEdge(v1, vertex);
    delete this.adjacencyList[v1];
  }

  DFSRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    DFS(start);

    function DFS(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(element => {
        if(!visited[element]) return DFS(element);
      })
    }
    return result;
  }

  DFSIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    while(stack.length) {
      const item = stack.pop();
      result.push(item);

      this.adjacencyList[item].forEach(vertex => {
        if(!visited[vertex]) {
          visited[vertex] = true;
          stack.push(vertex);
        }
      });
    }
    return result;
  }

  BFS(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;

    while(queue.length) {
      const item = queue.shift();
      result.push(item);

      this.adjacencyList[item].forEach(vertex => {
        if(!visited[vertex]) {
          visited[vertex] = true;
          queue.push(vertex);
        }
      });
    }
    return result;
  }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
// console.log(g.DFSRecursive("A"));
// console.log(g.DFSIterative("A"));
console.log(g.BFS("A"));