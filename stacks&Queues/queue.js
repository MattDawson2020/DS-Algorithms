// implemented via a backward looking linked list, where the most recent item at the end of the list is the added
// because the queue knows its own tail, instead of having to traverse to find it, it can just start here and add a new node
// and when removing, you just remove the head and set the head to be the next node
// 0 <- 1 <- 2 <- 3
// queue -> get tail (0), tail.next = new new <- 0 <- 2 <- 3
// dequeue get head (3) head = head.next new <- 0 <- 2  -/-  3 ->
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
};

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  };

  peek() {
    if(this.isEmpty()) {
      return null
    }
    return this.first.value;
  };

  enqueue(value) {
    const newNode = new Node(value)
    if (this.isEmpty()){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return newNode.value
  };

  dequeue() {
    if(this.isEmpty()) {
      return null
    }
    if(this.first === this.last) {
      this.last = null
    }
    const nodeToRemove = this.first;
    this.first = this.first.next
    this.length--;
    return nodeToRemove.value;
  };

  isEmpty() {
    return this.length == 0;
  };
};

const myQueue = new Queue();
myQueue.enqueue("matt")
myQueue.enqueue("bob")
myQueue.enqueue("jeff")
myQueue.enqueue("ian")
console.log(myQueue.peek())
myQueue.dequeue()
console.log(myQueue.peek())
console.log(myQueue.dequeue())
console.log(myQueue.peek())
