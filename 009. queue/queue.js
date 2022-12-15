class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add a new node to the end of the queue
  enqueue(value) {
    const newNode = new Node(value);
    // if the list is empty, make it first and last in the queue
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this.size++;
  }

  // remove a node from the start of the queue
  dequeue() {
    // if the list is empty, return undefined
    if (!this.first) return undefined;

    // save the first node in the queue
    const dequeuedNode = this.first;
    // change the first pointer to the second node (it would be null if there's no more node)
    this.first = dequeuedNode.next;
    // break the dequeued node's pointer to the next node
    dequeuedNode.next = null;
    // if there's only one node in the list, make the last node to null
    if (this.size === 1) {
      this.last = null;
    }
    this.size--;

    return dequeuedNode.value;
  }
}
