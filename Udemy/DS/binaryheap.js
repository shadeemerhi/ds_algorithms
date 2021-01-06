// NOTES

  // GENERAL 
  // Very similar to a BST, but different rules (no order in nodes from left to right like in BST)
  // In a MaxBinaryHeap, parent nodes are always larger than child nodes
  // In a MinBinaryHeap, parent nodes are always smaller than child nodes
  // As compact as possible; all children spaces are filled first before moving down
  // No implied ordering between siblings like in a BST
  // Very useful to implement Priority Queues; same as queue but can assign a priority
  // Very useful with graph traversal algorithms

  // For any index of an array n...
    // The left child is stored at 2n + 1
    // The right child is stored at 2n + 2

  // For any child at index n
    // The parent node is at index (n-1)/2 floored

  // BIG O NOTATION
    // Insertion - O(logN) --> for 16 elements... 4 comparisons; 1 comparison per 'layer'
    // Removal - O(logN)
    // Search - O(N)


class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    let childIdx = this.values.length-1;
    let parentIdx = Math.floor((childIdx-1)/2);
    while(this.values[childIdx] > this.values[parentIdx]) {
      let temp = this.values[childIdx];
      this.values[childIdx] = this.values[parentIdx];
      this.values[parentIdx] = temp;
      childIdx = parentIdx;
      parentIdx = Math.floor((childIdx-1)/2);
    }
  }

  extractMax() {
    const max = this.values[0];
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
            if (leftChild > element) {
              swap = leftIdx;
            }
          }
          if(rightIdx < this.values.length) {
            rightChild = this.values[rightIdx];
            if (
                (swap === null && rightChild > element || 
                (swap !== null) && rightChild > leftChild)
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
      return max;
  }
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap);
heap.extractMax();
console.log(heap);
heap.extractMax();
console.log(heap);