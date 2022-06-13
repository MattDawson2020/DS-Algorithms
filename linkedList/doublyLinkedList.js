// doubly
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head;
    this.length = 1;
  };

  append(value) {
    // makes no sense, its a double list, just change the back node
    let current = this.tail
    let newNode = new Node(value)
    current.next = newNode;
    newNode.prev = current
    this.tail = newNode;
    this.length++;
  };
  // O(1)

  prepend(value) {
    const newNode = new Node(value, null)
    newNode.next = this.head
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }
  // O(1)

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    } else if (index === 0) {
      return this.prepend(value)
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index -1);
    const afterNode = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++
  }
  // O(1 + n) -> O(N)

  remove(index) {
    const leader = this.traverseToIndex(index -1);
    const afterNode = leader.next.next
    leader.next = afterNode;
    afterNode.prev = leader
  };

  traverseToIndex(index) {
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter ++;
    }
    return current;
  }
  // O(n)

  printList() {
    const array = [];
    let current = this.head;
    while (current !== null) {
      array.push(current.value)
      current = current.next;
    };
    return array
  };
  // O(N)
  printListReversed() {
    const array = [];
    let current = this.tail;
    while (current !== null) {
      array.push(current.value)
      current = current.prev;
    };
    return array
  };
};

const myOtherLinkedList = new LinkedList('grapes')
console.log(myOtherLinkedList)
myOtherLinkedList.append("pears")
console.log(myOtherLinkedList)
myOtherLinkedList.prepend('apple')
console.log(myOtherLinkedList)
console.log(myOtherLinkedList.printList())
myOtherLinkedList.insert(2, 99)
console.log(myOtherLinkedList.printList())
console.log(myOtherLinkedList.printListReversed())
myOtherLinkedList.remove(2)
console.log(myOtherLinkedList.printList())
