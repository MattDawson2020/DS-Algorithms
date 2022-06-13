//find first and nth/last
const array = ["hi", "my", "teddy"];
array=[0]; //constant
array[array.length -1]; //constant
// both are constant because it is direct array access


const objectArray = [
  {
    tweet: "hi",
    date: 2012
  },
  {
    tweet: "my",
    date: 2014
  },
  {
    tweet: "teddy",
    date: 2018
  },
]
// o (N ^ 2) because you must look through and compare each date to all others
// at twitter scale this is a serious problem
