function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("BOO!");
  };
};

boo([1, 2, 3, 4, 5])
// O(1) as you are only storing function and i in memory

function arrayOfHiNTimes(n) {
  let hiArray = [];
  for ( let i = 1; i < n; i ++) {
    hiArray[i] = "hi";
  }
  return hiArray;
};

arrayOfHiNTimes(6)
// O(n) as it adds n number of items to memory
