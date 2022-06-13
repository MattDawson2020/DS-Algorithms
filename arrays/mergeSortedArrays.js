arr1 = [0, 3, 4, 31]
arr2 = [4, 6, 30];

function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if(arr1[i] !== undefined && arr2[j] !== undefined) {
      if ( arr1[i] < arr2[j]) {
        result.push(arr1[i])
        i += 1
      } else {
        result.push(arr2[j])
        j += 1
      }
    } else if (arr1[i] !== undefined && !arr2[j]) {
      result.push(arr1[i])
      i += 1
    } else if (!arr1[i] && arr2[j] !== undefined) {
      result.push(arr2[j])
      j += 1
    }
  }
  return result;
}
// O(N+M) as it only has to look through each array once

console.log(mergeSortedArrays(arr1, arr2))
