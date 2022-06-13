const array1 = ["a", "b", "c", "x"]
const array2 = ["z", "y", "i"]
// returns false

const array3 = ["a", "b", "c", "x"]
const array4 = ["z", "y", "x"]
// returns true

// paramters -> will always be two arrays
// return type -> will always be a boolean
// edge cases, will they always be strings, unicode, can you normalize?
// are there any time or space concerns? what is primary
// what is input size?

// easy to solve with O(N * M), but dont necessarilly need to code this,
// but you may want to if you have time/ to explain your thinking

function containsCommonItem(arr1, arr2) {
  for ( i in arr1 ) {
    for ( j in arr2 ) {
      if(arr1[i] === arr2[j]) {
        return true
      }
    }
  }
  return false
}

console.log(containsCommonItem(array1, array2))
console.log(containsCommonItem(array3, array4))

// can turn this into O(N + B) by using hashmaps
// every item in each array can be compared against each other in linear time

function quickerCommonItem(arr1, arr2) {
  let seen = {}
  for ( i = 0; i < arr1.length; i++) {
    seen[arr1[i]] = true
  }

  for ( j = 0; j < arr2.length; j++) {
    if (seen[arr2[j]] === true) {
      return true
    }
  }
  return false
}

console.log(quickerCommonItem(array1, array2))
console.log(quickerCommonItem(array3, array4))

// can use a builtin, good knowledge if this works, but be fully prepared
// to explain how/ why this works, and for the interviewer to ask you to
// code out the full solution
console.log(array3.some(item => array4.includes(item)))
// ALSO NOTE this cheeky solution is O(N * M) and so isn't optimised
