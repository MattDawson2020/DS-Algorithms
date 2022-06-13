class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  };

  get(index) {
    return this.data[index];
  };

  push(item) {
    this.data[this.length] = item;
    this.length += 1;
    return this.length;
  };

  pop() {
    const lastItem = this.data[this.length -1];
    delete this.data[this.length -1];
    this.length -= 1;
    return lastItem;
  };

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  };

  shiftItems(index) {
    for (let i = index; i < this.length -1; i++) {
      this.data[i] = this.data[i + 1];
    };
    delete this.data[this.length-1];
    this.length -= 1;
  };

};
[0, 1, 2, 3, 4]
const newArray = new MyArray();
newArray.push("hi")
newArray.push("you")
newArray.push("are")
newArray.push("a")
newArray.push("dag")
newArray.push("get")
console.log(newArray)
newArray.pop()
console.log(newArray)
newArray.delete(1)
console.log(newArray)
