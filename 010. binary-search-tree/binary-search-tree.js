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

  _insertNode(parentNode, node) {
    if (!parentNode || parentNode.value === node.value) return this;

    if (parentNode.value > node.value) {
      if (!parentNode.left) {
        parentNode.left = node;
        return this;
      }
      return this._insertNode(parentNode.left, node);
    }

    if (!parentNode.right) {
      parentNode.right = node;
      return this;
    }

    return this._insertNode(parentNode.right, node);
  }

  insert(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return this;
    }

    return this._insertNode(this.root, node);
  }

  _findNode(root, value) {
    if (!root) return undefined;

    if (root.value === value) return root;
    if (root.value > value) {
      return this._findNode(root.left, value);
    }
    return this._findNode(root.right, value);
  }

  find(value) {
    return this._findNode(this.root, value);
  }

  findMinNode() {
    if (!this.root) return undefined;

    let currentNode = this.root;
    while (currentNode) {
      if (!currentNode.left) return currentNode;
      currentNode = currentNode.left;
    }
  }

  // use breadth first search to get all values in the tree
  bfs() {
    const values = [];
    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      values.push(node.value);
    }

    return values;
  }

  // PreOrder, PostOrder, InOrder all use depth-first search

  // PreOrder traverses from the root to the left subtree, and then to the right subtree (Root, Left, Right)
  // useful to get all the elements with the current structure of the tree
  // you can use the output to recreate the same tree
  dfsPreOrder(node = this.root, values = []) {
    if (!node) return values;

    values.push(node.value);
    this.dfsPreOrder(node.left, values);
    this.dfsPreOrder(node.right, values);

    return values;
  }

  // PostOrder traverses from the left to the right and then to the root
  // you can delete the tree from leaf to root using this traversal
  dfsPostOrder(node = this.root, values = []) {
    if (!node) return values;

    this.dfsPostOrder(node.left, values);
    this.dfsPostOrder(node.right, values);
    values.push(node.value);

    return values;
  }

  // InOrder traverses from the left to the root and then to the right
  // useful to get all the elements in their correct order
  dfsInOrder(node = this.root, values = []) {
    if (!node) return values;

    this.dfsInOrder(node.left, values);
    values.push(node.value);
    this.dfsInOrder(node.right, values);

    return values;
  }
}
