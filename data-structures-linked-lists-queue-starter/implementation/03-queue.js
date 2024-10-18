const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        
            const node = new SinglyLinkedNode(val)
        if(!this.head) this.head = this.tail = node
        else {
           this.tail.next = node
           this.tail = node
        }
        
        this.length++
        return this.length
        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
if(this.length === 0) return null
let cc = this.head
if(this.length === 1) {
    this.head = this.tail = null
}
else {
this.head = this.head.next
}

this.length--
return cc.value
        // Write your hypothesis on the time complexity of this method here
    }

}




module.exports = {
    Queue,
    SinglyLinkedNode
}
