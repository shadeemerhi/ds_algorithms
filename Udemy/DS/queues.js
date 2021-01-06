// NOTES
 
  // FIFO - First in, first out
    // Background tasks
    // Uploading resources
    // Printing/task processing
  
  // BIG O NOTATION
    // Insertion - O(1)
    // Removal - O(1)
    // Searching - O(N) -- NOT IMPORTANT, don't really do this with queue
    // Access - O(N) -- NOT IMPORTANT, don't really do this with queue

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this.size++;
  }

  dequeue() {
    if (!this.first) return null;

    const first = this.first;
    if (this.first === this.last) {
      this.last = null;
      // this.first = null;
    }
    this.first = this.first.next;
    first.next = null;
    this.size--;
    return first.val;
  }
}

const queue = new Queue();
console.log(queue);
queue.enqueue(1);
console.log(queue);
queue.enqueue(2);
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);