// NOTES

  // BIG O NOTATION
    // Insertion & Searching - O(logN) - Doubling data set only requires one more step
    // NOT GUARANTEED
      // Worst case would be a long, single branch - possible solution would be to choose a new root

  // BFS OR DFS?
    // Time complexity is the same for both, but space is not
    // In trees that are wider than they are deep, DFS would use less space - DFS is better
    // In trees that are deeper than they are wide, BFS would use less space - BFS is better

    // Different types of DFS
      // InOrder
        // Returns a list of nodes that is ordered lowest to highest
      // PreOrder
        // Good for cloning/flattening a tree and storing it for later use; can reconstruct the tree using this list


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(current) {
        if(value > current.value) {
          if(!current.right) {
            current.right = newNode;
            current = null;
          } else {
            current = current.right;
          }
        } else if (value < current.value) {
          if(!current.left) {
            current.left = newNode;
            current = null;
          } else {
            current = current.left;
          }
        }
      }
    }
    return this;
  }

  find(value) {
    if(!this.root) return false;

    let current = this.root;
    while(true) {
      if(value === current.value) return true;
      else if(value > current.value) {
        if(!current.right) return false;
        else {
          current = current.right;
        }
      }
      else if(value < current.value) {
        if(!current.left) return false;
        else {
          current = current.left;
        }
      }
    }
  }

  BFS() {
    if(!this.root) return undefined;
    let queue = [];
    let visited = [];
    queue.push(this.root);
    let current;
    while(queue.length) {
      current = queue.shift();
      visited.push(current.value);
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }
    return visited;
  }

  DFSPreOrder() {
    if(!this.root) return undefined;
    let visited = [];
    traverse(this.root);
    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    return visited;
  }


  DFSPostOrder() {
    if(!this.root) return undefined;
    let visited = [];
    traverse(this.root);
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }
    return visited;
  }

  DFSInOrder() {
    if(!this.root) return undefined;
    let visited = [];
    traverse(this.root);
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }
    return visited;
  }
}


const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
// console.log(tree.BFS());
// console.log(tree.DFSPreOrder());
// console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());