class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    let childIdx = this.values.length-1;
    let parentIdx;
    while(childIdx > 0) {
      parentIdx = Math.floor((childIdx-1)/2);
      if(this.values[childIdx].priority < this.values[parentIdx].priority) {
        let temp = this.values[childIdx];
        this.values[childIdx] = this.values[parentIdx];
        this.values[parentIdx] = temp;
      }
      childIdx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0) {
      this.values[0] = end;
      let idx = 0;
      const element = this.values[0];
      while(true) {
          let rightIdx = idx*2 + 1;
          let leftIdx = idx*2 + 2;
          let leftChild, rightChild;
          let swap = null;
  
          if(leftIdx < this.values.length) {
            leftChild = this.values[leftIdx];
            if (leftChild.priority < element.priority) {
              swap = leftIdx;
            }
          }
          if(rightIdx < this.values.length) {
            rightChild = this.values[rightIdx];
            if (
                (swap === null && rightChild.priority < element.priority || 
                (swap !== null) && rightChild.priority < leftChild.priority)
              ) {
                swap = rightIdx;
            }
          }
          if(swap === null) break;
          this.values[idx] = this.values[swap];
          this.values[swap] = element;
          idx = swap;
        }
    }
      return min;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});
  }

  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; // to return at end
    let smallest;

    // initial state
    for(const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while(nodes.values.length) {
      smallest = nodes.dequeue().value;
      if(smallest === finish) {
        // WE ARE DONE; BUILD PATH TO RETURN AT END
        while(previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if(smallest || distances[smallest] !== Infinity) {
        for(const neighbor of this.adjacencyList[smallest]) {
          // let nextNode = this.adjacencyList[smallest][neighbor];

          // calculate new distance to neighboring node
          let tempDistance = distances[smallest] + neighbor.weight;
          if(tempDistance < distances[neighbor.node]) {

            // updating new smallest distance to neighbor
            distances[neighbor.node] = tempDistance;

            // updating previous - how we got to neighbor
            previous[neighbor.node] = smallest;

            // enqueue in priority with new priority
            nodes.enqueue(neighbor.node, tempDistance);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}


const g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);
// console.log(g.adjacencyList);
console.log(g.dijkstra("A", "E"));