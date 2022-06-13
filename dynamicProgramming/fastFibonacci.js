// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...

function fibonacci(n) {
  if(n < 2) {
    return n;
  };
  return fibonacci(n - 2) + fibonacci(n - 1);
};

console.log(fibonacci(20))
// becomes noticeably slow at 20, does 6725 calculations
console.log(fibonacci(25))
console.log(fibonacci(40))
// becomes stupidly slow at 40

//number of calculations increases exponentially
// this will stack overflow/ crash at 50 +

function fastFib() {
  let cache = {};
  return function fib(n) {
    if(n < 2) {
      return n;
    } else if (n in cache) {
      return cache[n];
    }
    cache[n] = fib(n - 1) + fib(n - 2)
    return cache[n]
  }
};

const fib = fastFib()

console.log("1st", fib(20))
console.log("2nd", fib(25))
console.log("3rd", fib(40))
// all three of these together take less time than just 40 does unmemoized
// this works because instead of initializing two fibs to find the numbers it just does a O(1) operation, skipping more than 90% of calculations
