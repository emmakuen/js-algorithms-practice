class UndirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!(v in this.adjacencyList)) this.adjacencyList[v] = [];
    return this.adjacencyList;
  }

  addEdge(v1, v2) {
    if (!(v1 in this.adjacencyList) || !(v2 in this.adjacencyList)) {
      return false;
    }

    const list1 = this.adjacencyList[v1];
    const list2 = this.adjacencyList[v2];

    if (!list1.includes(v2)) list1.push(v2);
    if (!list2.includes(v1)) list1.push(v1);

    return true;
  }

  removeEdge(v1, v2) {
    if (!(v1 in this.adjacencyList) || !(v2 in this.adjacencyList)) {
      return false;
    }

    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    return true;
  }

  removeVertex(v) {
    if (!(v in this.adjacencyList)) return undefined;

    while (this.adjacencyList[v].length) {
      const adjacentVertex = this.adjacencyList[v].pop();
      this.removeEdge(v, adjacentVertex);
    }

    delete this.adjacencyList[v];
    return this.adjacencyList;
  }
}
