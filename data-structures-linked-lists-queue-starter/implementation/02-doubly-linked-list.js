// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
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

    addToHead(val) {
        let node = new DoublyLinkedNode(val);

        if (this.head) {
            node.next = this.head
            this.head.prev = node
            this.head = node

        }
        else {
            this.head = node
            this.tail = node
        }

        this.length++

    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let node = new DoublyLinkedNode(val);

        if (this.head) {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node

        }
        else {

            this.head = this.tail = node
        }

        this.length++

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        if (this.length === 0) return undefined;

        const removedNode = this.head;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.length--;
        return removedNode.value;
    }

    removeFromTail() {
        // Remove node at tail

        if(this.length === 0) return undefined

        let ss = this.tail
if(this.length === 1) {this.head = this.tail = null
    
}
else {
this.tail = this.tail.prev
this.tail.next = null
}
this.length--
return ss.value

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if(!this.length) return undefined
return this.head.value
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        
        if(!this.length) return undefined
return this.tail.value
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
