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

  insertNode(parentNode, node) {
    if (!parentNode || parentNode.value === node.value) return undefined;

    if (parentNode.value > node.value) {
      if (parentNode.left === null) {
        parentNode.left = node;
        return this;
      }
      return this.insertNode(parentNode.left, node);
    }

    if (parentNode.right === null) {
      parentNode.right = node;
      return this;
    }

    return this.insertNode(parentNode.right, node);
  }

  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return this;
    }

    return this.insertNode(this.root, node);
  }

  findNode(parentNode, value) {
    if (!parentNode) return undefined;

    if (parentNode.value === value) return parentNode;
    if (parentNode.value > value) {
      return this.findNode(parentNode.left, value);
    }
    return this.findNode(parentNode.right, value);
  }

  find(value) {
    if (!this.root) return undefined;

    return this.findNode(this.root, value);
  }

  findMinNode() {
    if (!this.root) return undefined;

    let currentNode = this.root;
    while (currentNode) {
      if (!currentNode.left) return currentNode;
      currentNode = currentNode.left;
    }
  }
}
