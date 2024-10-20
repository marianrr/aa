const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.capacity = numBuckets
    this.data = new Array(this.capacity).fill(null)

    this.count = 0
  }

  hash(key) {
    const co = sha256(key).slice(0, 8)
    let hashValue = parseInt(co, 16)

    return hashValue
  }

  hashMod(key) {
    return this.hash(key) % this.capacity
  }

  insertNoCollisions(key, value) {
    const index = this.hashMod(key);

    // Check if the key already exists (assuming unique keys)
    if (this.data[index] && this.data[index].key === key) {
      throw new Error('hash collision or same key/value pair already exists!');
    }

    // If the slot is empty, insert the key-value pair
    if (!this.data[index]) {
      this.data[index] = { key, value };
      this.count++;
    } else {
      // If no collision handling, throw an error (as the test cases expect)
      throw new Error('hash collision or same key/value pair already exists!');
    }
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }

}


module.exports = HashTable;