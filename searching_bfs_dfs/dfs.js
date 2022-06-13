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

  DFSInOrder(node = this.root, list = []) {
    if (node.left) {
      this.DFSInOrder(node.left, list);
    };
    list.push(node.value)
    if (node.right) {
      this.DFSInOrder(node.right, list);
    };
    return list;
  };

  DFSPreOrder(node = this.root, list = []) {
    list.push(node.value)
    if (node.left) {
      this.DFSPreOrder(node.left, list);
    };

    if (node.right) {
      this.DFSPreOrder(node.right, list);
    };
    return list;
  };

  DFSPostOrder(node = this.root, list = []) {
    if (node.left) {
      this.DFSPostOrder(node.left, list);
    };

    if (node.right) {
      this.DFSPostOrder(node.right, list);
    };
    list.push(node.value)
    return list;
  };


};


//       9
//   4      20
// 1   6  15  170

InOrder = [1, 4, 6, 9, 15, 20, 170]
PreOrder = [9, 4, 1, 6, 20, 15, 170]
PostOrder = [1, 6, 4, 15, 170, 20, 9]

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(20)
tree.insert(1)
tree.insert(6)
tree.insert(15)
tree.insert(170)

console.log(tree.DFSInOrder())
console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())
