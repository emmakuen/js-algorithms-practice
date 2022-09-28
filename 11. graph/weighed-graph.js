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

    if (!list1.includes(v2)) list1.push({ node: v2, weight });
    if (!list2.includes(v1)) list2.push({ node: v1, weight });

    return true;
  }
}
