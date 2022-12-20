class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this._bubbleUp();
    return this.values;
  }

  extractMax() {
    if (this.values.length <= 1) return this.values.pop();

    // swap the first element with the last element and extract the max
    this._swap(0, this.values.length - 1);
    const max = this.values.pop();
    this._sinkDown();

    return max;
  }

  _swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }

  _bubbleUp() {
    if (this.values.length < 2) return;

    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (this.values[index] > this.values[parentIndex]) {
      this._swap(index, parentIndex);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  _sinkDown() {
    // grap the new root and bubble it down to its correct position
    let parentIndex = 0;

    while (true) {
      let swapIndex = null;
      let leftIndex = 2 * parentIndex + 1;
      let rightIndex = 2 * parentIndex + 2;

      if (leftIndex >= this.values.length) break;

      if (this.values[leftIndex] > this.values[parentIndex]) {
        swapIndex = leftIndex;
      }

      if (
        rightIndex < this.values.length &&
        this.values[rightIndex] > this.values[leftIndex] &&
        this.values[rightIndex] > this.values[parentIndex]
      ) {
        swapIndex = rightIndex;
      }

      if (!swapIndex) break;

      this._swap(parentIndex, swapIndex);
      parentIndex = swapIndex;
    }
  }
}
