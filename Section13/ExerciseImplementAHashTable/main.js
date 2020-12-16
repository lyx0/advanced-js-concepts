class HashTable {
  constructor(size) {
    this.data = new Array(size);
    [['grapes', 10000]]
  }
// Private class, _ doesn't have a function but let's others know
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
      console.log(hash)
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
      if (!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
  }

  get(key) {
  let address = this._hash(key);
  const currentBucket = this.data[address];
  if (currentBucket) {
    for (let i = 1; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) {
        return currentBucket[i][1]
      }
    }
  } // O(i)
  return undefined;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.get('grapes');