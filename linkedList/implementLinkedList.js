const basket = ['apples', 'grapes', 'pears'];

// apples -> grapes -> pears > null

const obj1 = { a: true };
const obj2 = obj1; // this is a pointer, a reference to another object

let myLinkedList = {
  head: {
    value: 'apples',
    next: {
      value: 'grapes',
      next: {
        value: 'pears',
        next: null,
      },
    },
  },
};
// technically a linked list but a poor implementation, hard to see and
// not very robust


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head;
    this.length = 1;
  };

  // append(value) {
  //   let current = this.head;
  //   while (current.next !== null) {
  //     current = current.next
  //   };
  //   let newNode = new Node(value)
  //   current.next = newNode;
  //   this.tail = newNode;
  //   this.length++;]
  // };
  // O(N) version for if there is no tail node

  append(value) {
    let newNode = new Node(value)
    let currentTail = this.tail
    currentTail.next = newNode;
    this.tail = newNode;
    this.length++;
  };
  // O(1) for when there is a tail

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
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
    newNode.next = leader.next
    leader.next = newNode
  }
  // O(1 + n) -> O(N)

  remove(index) {
    const leader = this.traverseToIndex(index -1);
    leader.next = leader.next.next;
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
};

const myOtherLinkedList = new LinkedList('grapes')
console.log(myOtherLinkedList)
myOtherLinkedList.append("pears")
console.log(myOtherLinkedList)
myOtherLinkedList.prepend('apple')
console.log(myOtherLinkedList)
console.log(myOtherLinkedList.printList())
myOtherLinkedList.insert(2, 99)
myOtherLinkedList.insert(1, "bog")
console.log(myOtherLinkedList.printList())
myOtherLinkedList.remove(1)
console.log(myOtherLinkedList.printList())
