// piece of data - val
// reference to next node - next

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }

    push(val) {
        let newNode = new Node(val)
        if(this.length === 0) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++

        return this
    }

    pop() {
        if (this.length === 0) return undefined
        let oldTail = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            let newTail = this.head
            while (newTail.next.next !== null) {
                newTail = newTail.next
            }
            newTail.next = null
            this.tail = newTail
        }
        this.length--
        return oldTail
    }

    shift() {
        if (this.length === 0) return undefined
        let oldHead = this.head
        this.head = oldHead.next
        if (this.length === 1) {
            this.tail = null
        }
        this.length--
        return oldHead
    }

    unshift(val) {
        let newNode = new Node(val)
        newNode.next = this.head
        if (this.length === 0) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.head = newNode
        }
        this.length++
        return this
    }

    get(idx) {
        let counter = idx
        if (counter >= this.length || counter < 0) return null
        let currentItem = this.head
        while (counter > 0) {
            currentItem = currentItem.next
            counter--
        }
        return currentItem
    }

    set(idx, val) {
        let currentNode = this.get(idx)
        if(!currentNode) return false
        currentNode.val = val
        return true
    }
    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false
        if (idx === this.length) {
            this.push(val)
        } else if (idx === 0) {
            this.unshift(val)
        } else {
            let newNode = new Node(val)
            let prevNode = this.get(idx-1)
            let foundNode = prevNode.next
            newNode.next = foundNode
            prevNode.next = newNode
            this.length++
        }
        return true
    }

    remove(idx) {
        if(idx < 0 || idx >= this.length) return undefined
        if(idx === this.length - 1) return this.pop()
        if(idx === 0) return this.shift()
        
        let prevItem = this.get(idx-1)
        let currentItem = prevItem.next
        prevItem.next = currentItem.next
        this.length--
        return currentItem
    }

    reverse() {
        if (this.length === 0 || this.length === 1) return this
        let current = this.head
        this.head = this.tail
        this.tail = current
        let prev = null
        let next
        for (let i=0; i < this.length; i++) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return this
    }
}



