class DynamicArray {

  constructor(capacity = 4) {
    this.capacity = capacity;
this.length = 0;
this.data = new Array(this.capacity);
  }

  read(index) {
    return this.data[index]
  }

  push(val) {

return [...this.data, val]

  }


  pop() {

    // Your code here
    this.data[length-1] = undefined
  }

  shift() {

    // Your code here

    return this.data.splice(1)
  }

  unshift(val) {

    return [val, ...this.data]
  }

  indexOf(val) {

    // Your code here
  }

  resize() {

    // Your code here
  }

}


module.exports = DynamicArray;