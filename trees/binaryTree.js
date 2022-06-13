// level 0: 2^0 = 1;
// level 1: 2^1 = 2;
// level 2: 2^2 = 4;
// level 2: 2^3 = 8;

// no of nodes in perfect tree = (2 ^ h + 1) if h is height, + 1 because
// root node is only level with uneven amount

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
  // yours
  // insert(value) {
  //   if (!this.root) {
  //     this.root = new Node(value)
  //     return this.root
  //   };
  //   let current = this.root;
  //   const newNode = new Node(value)
  //   while(current) {
  //     if (value < current.value) {
  //       if(current.left === null ) {
  //         current.left = newNode
  //         break
  //       } else {
  //         current = current.left
  //       }
  //     } else {
  //       if(current.right === null ) {
  //         current.right = newNode
  //         break
  //       } else {
  //         current = current.right
  //       }
  //     };
  //   };
  //   return newNode
  // };

  // his
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

  // yours
  // lookup(value) {
  //   if (this.root === null) {
  //     return this.root
  //   };
  //   let root = this.root;
  //   let nodesToSearch = [root]
  //   while (nodesToSearch) {
  //     let current = nodesToSearch.pop()
  //     if(current === null) {
  //       return false
  //     }
  //     if (value === current.value ) {
  //       return current.value
  //     } else if (value < current.value) {
  //       nodesToSearch.push(current.left)
  //     } else {
  //       nodesToSearch.push(current.right)
  //     }
  //   }
  //   return false;
  // };

  //his
  lookup(value) {
    if(!this.root) {
      return false
    };
    let currentNode = this.root;
    while(currentNode !== null) {
      if(value < currentNode.value) {
        currentNode = currentNode.left
      } else if(value > currentNode.value) {
        currentNode = currentNode.right
      } else if (value === currentNode.value) {
        return currentNode;
      };
    };
    return false
  };

  lookup(value){
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null
  }

  
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {

            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {

            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }
}




const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(20)
tree.insert(1)
tree.insert(6)
tree.insert(15)
tree.insert(170)
JSON.stringify(traverse(tree.root))
console.log(tree.lookup(20))

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
