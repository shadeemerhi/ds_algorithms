class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  setHead(node) {
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  setTail(node) {
    if(!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  insertBefore(node, nodeToInsert) {
    if(!this.containsNodeWithValue(node)) return undefined;
    if(node.value === this.head.value) return this.setHead(nodeToInsert);

    nodeToInsert.prev = node.prev;
    node.prev.next = nodeToInsert;
    nodeToInsert.next = node;
    node.prev = nodeToInsert;

    this.length++;
    return this;
  }

  insertAfter(node, nodeToInsert) {
    if(!this.containsNodeWithValue(node)) return undefined;
    if(node.value === this.tail.value) return this.setTail(nodeToInsert);

    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    node.next.prev = nodeToInsert;
    node.next = nodeToInsert;

    this.length++;
    return this;
  }

  insertAtPosition(position, nodeToInsert) {
    if(position <= 0) return this.setHead(nodeToInsert);
    if(position >= this.length) return this.setTail(nodeToInsert);
    const node = this.getNode(position);
    nodeToInsert.prev = node.prev;
    node.prev.next = nodeToInsert;
    nodeToInsert.next = node;
    node.prev = nodeToInsert;
    this.length++;
    return this;
  }

  getNode(position) {
    if(position < 0 || position >= this.length) return undefined;
    if(!this.head) return undefined;

    let counter = 0;
    let current = this.head;
    while(counter !== position) {
      current = current.next;
      counter++;
    }
    return current;
  }

  removeNodesWithValue(value) {
    if(!this.head || this.containsNodeWithValue(value)) return undefined;

    let counter = 0;
    let current = this.head;
    while(current) {
      if(current.value === value) {
        if(counter === 0) {
          this.head = this.head.next;
          this.head.prev.next = null;
          this.head.prev = null;
        } else if(counter === this.length - 1) {
          this.tail = this.tail.prev;
          this.tail.next.prev = null;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        this.length--;
      }
      current = current.next;
      counter++;
    }
    return this;
  }

  containsNodeWithValue(node) {
    if (!this.head) return false;
    let current = this.head;
    while(current) {
      if(current.value === node.value) return true;
      current = current.next;
    }
    return false;
  }

  print() {
    let arr = [];
    let current = this.head;
    while(current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new DoublyLinkedList();
list.setHead(new Node(4));
list.setTail(new Node(5));
list.setTail(new Node(7));
list.insertBefore(list.tail, new Node(3));
list.insertAfter(list.tail, new Node(11));
list.insertAfter(list.tail.prev.prev.prev, new Node(3));
list.insertBefore(list.tail, new Node(3));
list.insertBefore(list.head.next.next, new Node(31));
list.insertAtPosition(0, new Node(47));
list.insertAtPosition(3, new Node(67));
list.print();
console.log(list.tail);