// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list

        const node = new SinglyLinkedNode(val)
        if (!this.head) {
            this.head = node
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.length++
        return this
        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length++
        return this;
    }

    removeFromHead() {
        // Remove node at head
if(!this.head) return undefined
else {
    const dd = this.head
    this.head = this.head.next
    this.length--
    return dd
}
        


        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        if (!this.head) return undefined;

        if (this.length === 1) {
            const removedNode = this.head;
            this.head = null;
            this.length--;
            return removedNode;
        }

        let current = this.head;
        let prev = null;

        while (current.next) {
            prev = current;
            current = current.next;
        }

        prev.next = null;
        this.length--;

        return current;
    }

    peekAtHead() {
        // Return value of head node
        if(!this.head) return undefined
return this.head.value
        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        
if(!this.head) return undefined
let sss = ["2"]
let current = this.head
while(current) {
sss.push(current.value)
    current = current.next
}
sss[5] = "kk"
console.log(sss[1])
console.log(sss[2])
console.log(sss[3])
console.log(sss[4])
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
