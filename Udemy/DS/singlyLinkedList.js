// NOTES

  // A data structure that contains a head, tail, and length property
  // Linked Lists consists of nodes, and each node has a value and a pointer to another node or null
  // Do not have indices; no number that corresponds to each item - random access, like with arrays, is not allowed
  // Linked Lists are better at insertion and deletion than arrays - really the main reason you'd want to use a linked list

  // BIG O NOTATION
    //  Insertion - O(1)
    // Removal - it depends
      // Beginning - O(1)
      // End - O(N)
    // Searching - O(N)
    // Access - O(N)

  // IN CONCLUSION
    // Arrays win if you need random access
    // Arrays contains a built-in index, Linked Lists do not
    // Data in a list in an order, but don't need random access (i.e. insertion and deletion are frequently required)
    // Linked List are the foundation of Stacks and Queues

//


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    
    let current = this.head;
    let previous = current;
    while(current.next) {
      previous = current;
      current = current.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;

    const head = this.head;
    this.head = head.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    return head;
  }

  unshift(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const previous = this.get(index - 1);
    newNode.next = previous.next;
    previous.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const previous = this.get(index - 1);
    const removed = previous.next;
    previous.next = removed.next;
    this.length--;
    return removed;
  }

  print() {
    let arr = [];
    let current = this.head;
    while(current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

const list = new SinglyLinkedList();
list.push("Hey")
list.push("there")
list.push(1000000);
list.push("NEW");
list.insert(2, "INSERTED");
list.insert(5, 'TEST');
list.remove(5);
list.print();
list.reverse();
list.print();