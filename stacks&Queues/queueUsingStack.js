// one stack for first and one for last
// enqueuing pushes things into the last stack in order, if something has recently been dequeued it empties first in reverse order to last
// dequeing removes things from the end of the first array, if recently enqueued it pushes things from last to first to maintain order
// by flipping between stacks through iteration you can maintain the order, as well as only being able to ever technically access the top
class StackQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop())
    };
    this.last.push(value);
    return this;
  };

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    };
    this.first.pop();
    return this;
  };

  peek() {
    if (this.last.length > 0) {
      return this.last[0]
    };
    return this.first[this.first.length - 1]
  };
};


const myQueue = new StackQueue()
myQueue.peek()
myQueue.enqueue("Matt")
myQueue.enqueue("bob")
myQueue.enqueue("jeff")
console.log(myQueue.peek())
myQueue.dequeue()
console.log(myQueue.peek())
myQueue.dequeue()
console.log(myQueue.peek())
