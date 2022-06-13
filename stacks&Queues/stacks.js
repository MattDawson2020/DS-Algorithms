class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
};

// linked list implementation
// is more complicated, but enforces it is used correctly
class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  };

  peek() {
    return this.top
  };

  push(value) {
    let newNode = new Node(value)
    let currentTop = this.top;
    newNode.next = currentTop;
    this.top = newNode;
    if(this.isEmpty()) {
      this.bottom = newNode;
    }
    this.length++
    return this.top
  };

  pop() {
    if(this.isEmpty()) {
      return null
    }
    if (this.top === this.bottom) {
      this.bottom = null
    }
    let currentTop = this.top;
    this.top = currentTop.next
    this.length--;
    return currentTop;
  };

  isEmpty() {
    return this.length === 0;
  };
};

const myStack = new Stack();
myStack.push("google")
myStack.push("youtube")
myStack.push("udemy")
console.log(myStack.peek())
myStack.pop()
console.log(myStack.peek())
