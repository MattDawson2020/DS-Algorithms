//given [2, 5, 1, 2, 3, 5, 1, 2, 4]
// return the first retuning character
// 2

function firstRecurringCharacter(array) {
  let seen = {}
  for (i = 0; i < array.length; i++) {
    if(seen[array[i]]) {
      return array[i]
    }
    seen[array[i]] = true
  }
  return false
}
const input = [2, 5, 1, 2, 3, 5, 1, 2, 4]
console.log(firstRecurringCharacter(input))

const input2 = [2, 5, 1, 5, 3, 5, 1, 2, 4]
console.log(firstRecurringCharacter(input2))
// brute force is to use nested loop and always check the list from
// right onwards of the outer element, but this is O(N*N)
// use of hash table lets use do O(N))

function slowRecurringFirst(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return input[i]
      }
    }
  }
}
