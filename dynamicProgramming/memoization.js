function addTo80(n) {
  return n + 80;
}

addTo80(5)
addTo80(5)
addTo80(5)
// must do this three times, if this is a slow operation it will
// dramatically slow down your program

let cache = {}
function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n]
  } else {
    cache[n] = n + 80
  }
  return cache[n]
}

memoizedAddTo80(5)
memoizedAddTo80(5)
// this time the second function call will do a O(1) action instead of
// whatever else is called, dramatically speeding up the operation


function closureMemoize() {
  let closureCache = {}
  return function(n) {
    if (n in closureCache) {
      return closureCache[n]
    } else {
      closureCache[n] = n + 80
    }
    return closureCache[n]
  };
};
// this implementation allows us to avoid caching in the global scope
// instead initialize the closure object/ function, and then call it with the parameter

const memoized = closureMemoize();

console.log(memoized(5))
console.log(memoized(5))
