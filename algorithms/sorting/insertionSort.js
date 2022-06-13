const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// yours, O(N^2) even with optimization, although space is O(1)
function insertSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if(array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
      // unshift adds to start
      // splice with two arguments takes the element at index i, and deletes 1 element, returned as sub array
    } else {
      if (array[i] < array[i-1]) {
        //find where number should go
        for (let j = 1; j < i; j++) {
          if (array[i] >= array[j-1] && array[i] < array[j]) {
            //move number to the right spot
            array.splice(j,0,array.splice(i,1)[0]);
          }
        }
      }
    }

  };
  return array
};

console.log(insertSort(numbers))
