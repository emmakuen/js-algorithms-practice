class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!(v in this.adjacencyList)) this.adjacencyList[v] = [];
  }

  addEdge(v1, v2, weight) {
    if (!(v1 in this.adjacencyList) || !(v2 in this.adjacencyList)) {
      return false;
    }

    const list1 = this.adjacencyList[v1];
    const list2 = this.adjacencyList[v2];

    if (!list1.includes(v2)) list1.push({ vertex: v2, weight });
    if (!list2.includes(v1)) list2.push({ vertex: v1, weight });

    return true;
  }

  djikstra(startVertex, endVertex) {
    const priorityQueue = new PriorityQueue();
    const minDistanceFor = {};
    const previousVertexFor = {};

    // initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === startVertex) {
        priorityQueue.enqueue(vertex, 0);
        minDistanceFor[vertex] = 0;
      } else {
        minDistanceFor[vertex] = Infinity;
        priorityQueue.enqueue(vertex, Infinity);
      }
      previousVertexFor[vertex] = null;
    }

    // loop over the queue as long as there's next vertex to visit
    while (priorityQueue.values.length) {
      let currentVertex = priorityQueue.dequeue().value;

      if (currentVertex === endVertex) {
        const path = [];
        // the path has been found, now build the path and return it
        while (currentVertex in minDistanceFor) {
          path.push(currentVertex);
          currentVertex = previousVertexFor[currentVertex];
        }
        return { path: path.reverse(), cost: minDistanceFor[endVertex] };
      }

      if (currentVertex || minDistanceFor[currentVertex] !== Infinity) {
        for (const neighborNode of this.adjacencyList[currentVertex]) {
          // calculate the distance to neighbor node from the min vertex
          const distance = minDistanceFor[currentVertex] + neighborNode.weight;
          const neighborVertex = neighborNode.vertex;

          if (minDistanceFor[neighborVertex] > distance) {
            // if it's smaller than currently stored minimum distance to neighbor vertex, update its min distance
            minDistanceFor[neighborVertex] = distance;

            // update its previous vertex and update its priority in the queue
            previousVertexFor[neighborVertex] = currentVertex;
            priorityQueue.enqueue(neighborVertex, distance);
          }
        }
      }
    }
  }
}
