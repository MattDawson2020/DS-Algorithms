// List all pairs of array
const boxes = [1, 2, 3, 4, 5];

function logAllPairsOfArray(boxes){
  for (let i = 0; i < boxes.length; i ++){
    for (let j = 0; j < boxes.length; j++){
      console.log(boxes[i], boxes[j])
    }
  }
}

logAllPairsOfArray(boxes)
// O(N * N) or O(N ^ 2), or quadratic time.
// 2n is 4 operations, 3n is 9 operations
