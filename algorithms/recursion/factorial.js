function findFactorialRecursive(number) {
  if(number === 2) {
    return number
  }

  return number * findFactorialRecursive(number -1);
}
// works because on the top level of call stuck it returns 2, which filters
// back to previous call as 2, and is multiplied with number, then returned
//upwards

console.log(findFactorialRecursive(5))

function findFactorialIterative(number) {
  let answer = 1;
  // start counter at 1 because you dont include/ want to multiply by 0
  for(let i = 1; i <= number; i++) {
    answer = answer * i
  }
  return answer;
};

console.log(findFactorialIterative(5))
