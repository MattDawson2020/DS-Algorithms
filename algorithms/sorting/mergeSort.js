const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if(array.length === 1) {
    return array
  };

  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)
  // console.log("left", left)
  // console.log("right", right)

  // this calls a merge function, which on instantiation calls a mergeSort
  // and vice versa until only one item is left, and which point
  // it returns back through the stack and merges them as below
  return merge(mergeSort(left), mergeSort(right))
};

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < left.length && rightIndex < right.length) {
    // check which array has the smaller first item, and add to result
    // while incrementing that side
    if(left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  console.log("result", result)
  console.log("left", left)
  console.log("right", right)
  // slicing seems to be to avoid pulling through repeat values
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const answer = mergeSort(numbers)
console.log(answer)
