class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };
};

class BinarySearchTree {
  constructor() {
    this.root = null;
  };

  insert(value) {
    const newNode = new Node(value);
     if(this.root === null) {
       this.root = newNode
     } else {
       let currentNode = this.root;
       while(true) {
         if(value < currentNode.value) {
           if(currentNode.left === null) {
             currentNode.left = newNode;
             return this
           } else {
             currentNode = currentNode.left
           }
         } else {
           if(currentNode.right === null) {
             currentNode.right = newNode;
             return this
           } else {
             currentNode = currentNode.right
           }
         }
       }
     }
  };

  breadthFirstTraversal() {
    let currentNode = this.root;
    let list = [];
    let queue = [currentNode];

    while(queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left)
      };
      if (currentNode.right) {
        queue.push(currentNode.right);
      };
    };
    return list;
  };

  BFSRecursive(queue = [this.root], list = []) {
    if (queue.length === 0) {
      return list
    }
    let currentNode = queue.shift();
    list.push(currentNode.value)
    if (currentNode.left) {
        queue.push(currentNode.left)
      };
      if (currentNode.right) {
        queue.push(currentNode.right);
      };
    return this.BFSRecursive(queue, list)
  };


};




const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(20)
tree.insert(1)
tree.insert(6)
tree.insert(15)
tree.insert(170)

console.log(tree.breadthFirstTraversal())
console.log(tree.BFSRecursive())
