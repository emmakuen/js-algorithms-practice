class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }

  getRightChildIndex(parentIndex) {
    const rightChildIndex = parentIndex * 2 + 2;
    if (this.values.length <= rightChildIndex) return null;

    return rightChildIndex;
  }

  getLeftChildIndex(parentIndex) {
    const leftChildIndex = parentIndex * 2 + 1;
    if (this.values.length <= leftChildIndex) return null;

    return leftChildIndex;
  }

  getParentIndex(childIndex) {
    const parentIndex = Math.floor((childIndex - 1) / 2);
    if (parentIndex < 0 || parentIndex > this.values.length) return null;
    return parentIndex;
  }

  insert(value) {
    this.values.push(value);
    return this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let value = this.values[index];
    let parentIndex = this.getParentIndex(index);
    // while current value is larger than its parent, bubble it up
    while (this.values[parentIndex] < value) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }

    return this.values;
  }

  extractMax() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop();

    // swap the first element with the last element and extract the max
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();

    return max;
  }

  sinkDown() {
    // grap the new root and bubble it down to its correct position
    let rootIndex = 0;
    let rootValue = this.values[rootIndex];
    let swapIndex = rootIndex;

    while (true) {
      let leftChildIndex = this.getLeftChildIndex(rootIndex);
      if (!leftChildIndex) break;

      if (this.values[leftChildIndex] > rootValue) {
        swapIndex = leftChildIndex;
      }

      let rightChildIndex = this.getRightChildIndex(rootIndex);
      if (
        rightChildIndex &&
        this.values[rightChildIndex] > rootValue &&
        this.values[rightChildIndex] > this.values[swapIndex]
      ) {
        swapIndex = rightChildIndex;
      }

      if (swapIndex === rootIndex) break;

      this.swap(rootIndex, swapIndex);
      rootIndex = swapIndex;
    }

    return this.values;
  }
}
