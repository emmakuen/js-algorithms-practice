class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let prevTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail = prevTail.prev;
      newTail.next = null;
      prevTail.prev = null;
      this.tail = newTail;
    }
    this.length--;
    return prevTail;
  }

  // remove the first item in the list and return it
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      oldHead.next.prev = null;
      this.head = oldHead.next;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // add node at the start of the list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    let getItem, count;
    // if it's in the latter half of the list, traverse from the end
    if (idx > Math.floor(this.length / 2)) {
      getItem = this.tail;
      count = this.length - 1;
      while (count !== idx) {
        getItem = getItem.prev;
        count--;
      }
      // if it's in the first half of the list, traverse from the start
    } else {
      getItem = this.head;
      count = 0;
      while (count !== idx) {
        getItem = getItem.next;
        count++;
      }
    }
    return getItem;
  }

  set(idx, val) {
    let nodeToUpdate = this.get(idx);
    if (!nodeToUpdate) return false;
    nodeToUpdate.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    let prevNode = this.get(idx - 1);
    let nextNode = prevNode.next;
    let newNode = new Node(val);

    nextNode.prev = newNode;
    newNode.next = nextNode;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let selectedNode = this.get(idx);
    let prevNode = selectedNode.prev;
    let nextNode = selectedNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    selectedNode.prev = null;
    selectedNode.next = null;
    this.length--;
    return selectedNode;
  }
}

let list = new DoublyLinkedList();
list.push(15);
list.push(16);
list.push(17);
list.push(18);
list.push(19);
