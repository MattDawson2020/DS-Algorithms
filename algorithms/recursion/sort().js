const letters = ["a", "b", "z", "e", "r", "b"];
const basket = [2, 65, 34, 2, 1, 7, 8];

console.log(letters.sort())
// works as expected
console.log(basket.sort())
// [ 1, 2, 2, 34, 65, 7, 8 ]
// this comes out totally wrong because JS converts them to string
