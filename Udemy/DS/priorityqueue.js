// NOTES
  // MinBinaryHeap with the added Node class
  // Each node has a priority; this is how they are ordered instead of their value

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

const ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);
console.log(ER);
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());