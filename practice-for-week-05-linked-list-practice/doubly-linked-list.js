class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null
    this.tail = null
    this.length = 0



  }

  addToHead(val) { 
    
let nd = new DoublyLinkedListNode(val)

if(!this.head) {
  this.head = nd
  this.tail = nd
  this.length++
}
else { 
  nd.next = this.head
  this.head.prev = nd;
  this.head = nd
  this.length++
}
  }


  

  addToTail(val) {
let nd = new DoublyLinkedListNode(val)
if(!this.head) {
  this.head = nd
  this.tail = nd
  this.length++
}
else {




// Link new node to current tail
nd.prev = this.tail;
this.tail.next = nd;
this.tail = nd;  // Update tail to the new node
}


  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;