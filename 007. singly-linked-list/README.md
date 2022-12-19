# Singly Linked List

<small>Insertion best Ω(1), worst O(n), Deletion - best Ω(1), worst O(n)</small><br/>
<small>Search - O(n), Random Access - O(n)</small>

- This is a linked list which can be traversed in only one direction
- Each element is a node that contains data as well as a pointer to the next node
- First node is the head through which the rest of the nodes are accessible
- Last node is the tail which points to null - this is how we determine when the list ends
- Good alternative to arrays when insertion and deletion at the beginning is required

## Advantages

- List nodes are not required to be contiguously present in the memory unlike array
- The list size doesn't have to be declared in advance
- Excels at insertion and deletion at the beginning of the list

## Disadvantages

- Lags for search and access

## JavaScript Implementation

```javascript
class Node {
  constructor(value) {
    this.value = value;
    // next property of the node has the reference to the next node
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push method adds a new node with the given value to the list
  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  // pop method removes the last node and returns it
  pop() {
    // if there's no node, return undefined
    if (this.length === 0) return undefined;

    const oldTail = this.tail;
    // if there's only one node, reset head and tail to null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // else, find the second last element in the list
      let newTail = this.head;
      while (newTail.next.next !== null) {
        newTail = newTail.next;
      }

      // break the link to the tail
      newTail.next = null;
      // update the tail to the new tail
      this.tail = newTail;
    }
    // decrement the length because the tail is being popped off
    this.length--;
    // return the old tail
    return oldTail;
  }

  // shift method removes the first node and returns it
  shift() {
    // if there's no node in the list, return undefined
    if (this.length === 0) return undefined;

    const oldHead = this.head;
    // if there's more than one node, the next node becomes head
    // if there's only one node, head becomes null as oldHead's next node would be null
    this.head = oldHead.next;
    oldHead.next = null;
    // if there's only one node in the list, reset tail to null
    if (this.length === 1) {
      this.tail = null;
    }

    this.length--;
    return oldHead;
  }

  // unshift adds a new node at the beginning of the list and returns the updated list
  unshift(value) {
    // create a new node with the given value and point its next property to head
    const node = new Node(value);
    node.next = this.head;
    this.head = node;

    // if the list had no items, make the current node also tail
    if (this.length === 0) {
      this.tail = this.head;
    }

    // increment the length of the list and return the list
    this.length++;
    return this;
  }

  // get finds the node at the given index and returns it
  get(index) {
    // if index is out of bound, return undefined
    if (index >= this.length || index < 0) return undefined;

    let currentNode = this.head;
    // traverse through the nodes until we get to the node with given index
    for (let i = 1; i <= index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  // set the value of the node at the given index and return true if operation is successful
  set(index, value) {
    const node = this.get(index);

    // if no node is found at the given index, return false
    if (!node) return false;
    // else, update the value of the node and return true
    node.value = value;
    return true;
  }

  // insert a new node with the given value at the index and return true if operation is successful
  insert(index, value) {
    if (index > this.length || index < 0) return false;
    // if the node should be inserted at the beginning, use unshift method
    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      // if the node should be inserted at the end, use push method
      this.push(value);
    } else {
      // else, find the node after which the new node should be inserted
      const previousNode = this.get(index - 1);

      // create a new node and point its next property to previous node's next node
      const node = new Node(value);
      node.next = previousNode.next;

      // connect the previous node to the new node and increment the list length
      previousNode.next = node;
      this.length++;
    }

    return true;
  }

  /* 
    remove the node at the given index and return the removed node
  */
  remove(index) {
    // return false if index is not valid
    if (index >= this.length || index < 0) return undefined;

    // to remove the first node, use shift method
    if (index === 0) return this.shift();

    // to remove the last node, use the pop method
    if (index === this.length - 1) return this.pop();

    // else, find the previous and current nodes
    const previousNode = this.get(index - 1);
    const currentNode = previousNode.next;

    // pount the previous node's next property to the current node's next node,
    // which breaks its connection to the current node
    previousNode.next = currentNode.next;
    // break the link of the removed node to its next node
    currentNode.next = null;
    // decrement the length as we're removing a node
    this.length--;

    // return the removed node
    return currentNode;
  }

  // reverse the linked list
  reverse() {
    // store the head node as current node
    let currentNode = this.head;
    // create a previous node variable which is initially null as head node has no previous element
    let previousNode = null;
    // swap head and tail
    this.head = this.tail;
    this.tail = currentNode; // current node has the previous head now

    // iterate over each node in the list and reverse the pointers
    // each node should break its link to the next element
    // and establish a link to its previous element
    for (let i = 0; i < this.length; i++) {
      // save the next node
      let nextNode = currentNode.next;
      // break the link to the next node and create a link to the previous node
      currentNode.next = previousNode;
      // traverse to the next node
      // this would make the current node the previous node
      // and the next node the current node
      previousNode = currentNode;
      currentNode = nextNode;
    }

    // return the reversed list
    return this;
  }
}
```
