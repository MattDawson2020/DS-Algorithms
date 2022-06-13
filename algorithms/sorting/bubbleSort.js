const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// yours, O(N^2) even with optimization, although space is O(1)
function bubbleSort(numbers) {
  for (let i = 0; i < numbers.length; i ++) {
    for (let j = 0; j < numbers.length - i; j++) {
      // inner loop can be decremented as we know the last element will be the largest
      if(numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      };
    };
  };
  return numbers;
};

console.log(bubbleSort(numbers))
