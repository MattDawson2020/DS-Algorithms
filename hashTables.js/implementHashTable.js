class HashTable {
  constructor(size) {
    this.data = new Array(size);
  };

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
     hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    };
    return hash;
  };

  set(key, value) {
    let address = this._hash(key);
    if(!this.data[address]) {
      this.data[address] = []
    };
    this.data[address].push([key, value])
    // this is required to always push new values in if there is collision
  };

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
      // loop through elements at address and check for the key
    }
        // usually O(1), but in this example its actually O(n) because of small array having a collision

    return undefined
  };

  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i] && this.data[i].length) {
        if(this.data[i].length > 1) {
          // must check for this as you may have collisions and need to check for nested elements
          for (let j = 0; j < this.data[i].length; j++) {
            keys.push(this.data[i][j][0])
          };
        } else {
          keys.push(this.data[i][o])
        };
      };
    };
    return keys;
  };
};


const myHashTable = new HashTable(2);
console.log(myHashTable._hash("grapes"))
myHashTable.set("grapes", 10000)
console.log(myHashTable.data)
myHashTable.set("grapess", 10000)
console.log(myHashTable.data)
console.log(myHashTable.get("grapes"))
console.log(myHashTable.keys())
