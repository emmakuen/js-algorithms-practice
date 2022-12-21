class WeightedGraph {
  constructor() {
    this.list = {};
  }

  addVertex(v) {
    this.list[v] = [];
  }

  addEdge(v1, v2, weight) {
    this.list[v1].push({ vertex: v2, weight });
    this.list[v2].push({ vertex: v1, weight });
  }

  dijkstra(startV, endV) {
    const minDistanceFor = {};
    const remainingVs = new PriorityQueue();
    const previousVFor = {};

    // initialize min distance & previousV values for each vertex
    Object.keys(this.list).forEach((v) => {
      if (v === startV) {
        minDistanceFor[v] = 0;
        remainingVs.enqueue(v, 0);
      } else {
        minDistanceFor[v] = Infinity;
        remainingVs.enqueue(v, Infinity);
      }
      previousVFor[v] = null;
    });

    // while there are unprocessed vertexes
    while (remainingVs.values.length > 0) {
      // remove the one with the smallest weight
      let previousV = remainingVs.dequeue().val;
      // if we reached the end, create the path array and return it
      if (previousV === endV) {
        const path = [];
        while (previousV) {
          path.push(previousV);
          previousV = previousVFor[previousV];
        }

        return path.reverse();
      }

      // else, iterate over the previous vertex's neighbors
      for (const { vertex, weight } of this.list[previousV]) {
        const distance = minDistanceFor[previousV] + weight;
        if (distance < minDistanceFor[vertex]) {
          // update new min distance
          minDistanceFor[vertex] = distance;
          // update the path with min distance
          previousVFor[vertex] = previousV;
          // enqueue the vertex in priority queue with the updated distance as priority
          remainingVs.enqueue(vertex, distance);
        }
      }
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);
    this._bubbleUp();
    return this.values;
  }

  dequeue() {
    if (this.values.length <= 1) return this.values.pop();

    this._swap(0, this.values.length - 1);
    const min = this.values.pop();
    this._bubbleDown();

    return min;
  }

  _swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }

  _bubbleUp() {
    if (this.values.length <= 1) return;

    let index = this.values.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index].priority >= this.values[parentIndex].priority) {
        break;
      }

      this._swap(index, parentIndex);
      index = parentIndex;
    }
  }

  _bubbleDown() {
    let parentIndex = 0;

    while (true) {
      let swapIndex = null;
      let leftIndex = 2 * parentIndex + 1;
      let rightIndex = 2 * parentIndex + 2;

      if (leftIndex >= this.values.length) break;

      if (this.values[leftIndex].priority < this.values[parentIndex].priority) {
        swapIndex = leftIndex;
      }

      if (
        rightIndex < this.values.length &&
        this.values[rightIndex].priority < this.values[leftIndex].priority &&
        this.values[rightIndex].priority < this.values[parentIndex].priority
      ) {
        swapIndex = rightIndex;
      }

      if (!swapIndex) break;

      this._swap(parentIndex, swapIndex);
      parentIndex = swapIndex;
    }
  }
}
