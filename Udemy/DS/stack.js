// NOTES

  // LIFO - Last in, first out
    // Managing function invocations
    // Undo / Redo
    // Routing (the history object)
  
  // BIG O NOTATION
    // Insertion - O(1)
    // Removal - O(1)
    // Searching - O(N) -- NOT IMPORTANT, don't really do this with stack
    // Access - O(N) -- NOT IMPORTANT, don't really do this with stack


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack{
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return this.size++;
  }

  pop() {
    if (!this.first) return null;

    const first = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = first.next;
      first.next = null;
    }
    this.size--;
    return first.val;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack);
console.log(stack.pop());
stack.push("PUSHED");
console.log(stack.pop());
stack.push("HELLO");
console.log(stack.first);
console.log(stack.pop());
console.log(stack.first);
console.log(stack.pop());
stack.push("100000");
console.log(stack);
stack.push("2");
console.log(stack);
stack.pop();
console.log(stack);
