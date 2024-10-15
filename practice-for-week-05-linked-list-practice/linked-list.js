class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  addToHead(val) {
    const node1 = new LinkedListNode(val)
    node1.next = this.head
    this.head = node1
    this.length++
  }

  addToTail(val) {
    
let node2 = new LinkedListNode(val)
let current = this.head
if(!this.head) { this.head = node2 }
else {
while(current.next) {
  current = current.next
}
current.next = node2
}
this.length++

  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current.next = node2;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;