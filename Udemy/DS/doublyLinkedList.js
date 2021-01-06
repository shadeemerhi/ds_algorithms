// NOTES

  // Almost identical so SLL, but we add another pointer which points to the previous node
  // You can move backwards now with a DLL
  // Although more flexibility, uses more memory

  // BIG O NOTATION
  //  Insertion - O(1)
  // Removal - it depends
    // ALWAYS - O(1) - BETTER THAN SLL
  // Searching - O(N)
  // Access - O(N)

  // IN CONCLUSION
    // Useful for accessing data in a reverse manner - e.g browser history (moving forward and back)
    // Better than SLL for finding nodes - faster, but takes more memory with extra pointer


//

class Node {
  constructor(val) {
    this.val = val;
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

  push(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if(!this.head) return undefined;

    const popped = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;
    return popped;
  }

  shift() {
    if (!this.head) return undefined;

    const removed = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next;
      this.head.prev = null;
      removed.next = null;
    }
    this.length--;
    return removed;
  }

  unshift(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return list;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let counter;
    let current;
    if (index <= this.length/2) {
      counter = 0;
      current = this.head;
      while(counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length-1;
      current = this.tail;
      while(counter !== index) {
        current = current.prev;
        counter--;
      }
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

    newNode.prev = previous;
    newNode.next = previous.next;
    previous.next.prev = newNode;
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
    removed.next.prev = previous;
    removed.next = null;
    removed.prev = null;

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


}


const list = new DoublyLinkedList();
list.push(4);
list.push(5);
list.push("LAST ITEM");
list.unshift(100);
list.push("HELLO");
list.set(3, "NEW THING");
list.insert(4, "INSERTED");
list.insert(4, "NEWEST");
list.print();
list.remove(4);
console.log(list.get(4));
console.log(list);
console.log(list.remove(0));
console.log(list.get(1));
console.log(list.length);