# Trees

- Hierarchical data structure composed of nodes
- Each node can have many children but only one parent (the root, which is the top node of a tree, has no parent)
- Nodes can't be their own ancestors, and they can only point to a child
- The constraints above means there's no cycles or loops in trees - this makes recursion useful technique for tree traversal

## Tree Terminology

- Root - top node in a tree that has no ancestor itself
- Child - node below the root in the tree
- Parent - node that has a child
- Siblings - nodes with the same parent
- Leaf - node with no children
- Edge - connection between two nodes
- Breath - number of leaves

## Binary Search Trees

<small>Insertion - average Θ(logn), worst O(n), Search - Θ(logn)</small>

- Each parent can have no more than two children
- Stores data that are sortable
- For each parent node, its left child's value is always less than the parent's value and its right child's value is always greater than the parent's value

## Use Cases

- File systems, natural language processing, Document Object Models of XML and HTML documents, etc.

## BFS vs DFS

- If the tree is wide, DFS would consume less space compared to BFS (because BFS would have lots of nodes in the queue)
- if the tree is really deep, BFS would consume less space (because of DFS recursion)

## JavaScript Implementation

```javascript
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
```
