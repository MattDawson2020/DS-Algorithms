// array implementation
// is simpler to implement and is similar speed, but allows for people to misuse
class Stack {
  constructor() {
    this.array = [];
  };

  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.array[this.array.length - 1]
  };

  push(value) {
    this.array.push(value)
    return this.array[this.array.length - 1]
  };

  pop() {
    if (this.isEmpty()) {
      return null
    }
    return this.array.pop();
  };

  isEmpty() {
    return this.array.length === 0;
  };
};

const myStack = new Stack();
myStack.push("google")
myStack.push("youtube")
myStack.push("udemy")
console.log(myStack.peek())
myStack.pop()
console.log(myStack.peek())
