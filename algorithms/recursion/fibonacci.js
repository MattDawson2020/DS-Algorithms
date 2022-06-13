// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// look for the pattern and where to start the loop, you need the first two because the first is 0 and can never increment,
// because of this i MUST start at 1 to get the sequence right
function fibonacciIterative(n) {
  let first = 0
  let second = 1
  for(let i = 1; i < n; i++ ) {
    let temp = second + first
    first = second
    second = temp
  }
  return second
}
console.log(fibonacciIterative(25))

// you must use <2 for the base case because the larger decrementing number can decrement by 2
// is a bad solution because it is O(2^N), where every additional element is an exponential increase in function calls
// without memoization its very slow/ poor for memory mnagement
function fibonacciRecursive(n) {
  if(n < 2) {
    return n
  }
  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1)
}
console.log(fibonacciRecursive(25))
