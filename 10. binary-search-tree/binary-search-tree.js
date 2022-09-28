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
    if (!parentNode || parentNode.value === node.value) return undefined;

    if (parentNode.value > node.value) {
      if (parentNode.left === null) {
        parentNode.left = node;
        return this;
      }
      return this._insertNode(parentNode.left, node);
    }

    if (parentNode.right === null) {
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
  dfsPreOrder() {
    const values = [];
    function traverse(node) {
      values.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return values;
  }

  // PostOrder traverses from the left to the right and then to the root
  // you can delete the tree from leaf to root using this traversal
  dfsPostOrder() {
    const values = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      values.push(node.value);
    }

    traverse(this.root);

    return values;
  }

  // InOrder traverses from the left to the root and then to the right
  // useful to get all the elements in their correct order
  dfsInOrder() {
    const values = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      values.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return values;
  }
}
