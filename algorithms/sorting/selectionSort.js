const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// yours, O(N^2) even with optimization, although space is O(1)
function selectionSort(numbers) {
  const length = numbers.length;

  for(i = 0; i < length; i++) {
    let min = i
    let temp = numbers[i]
    for(j = i + 1; j < length; j++) {
      if (numbers[j] < numbers[min]) {
        min = j
      }
    }
    numbers[i] = numbers[min]
    numbers[min] = temp
  }
  return numbers
};

console.log(selectionSort(numbers))
