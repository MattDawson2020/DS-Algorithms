string = "Hi my name is matt"

function reverse(str) {
  let result = "";
  for (let i = string.length -1; i >= 0; i--) {
    result += str[i]
  }
  return result
}

function reverse2(str) {
  let backwards = [];
  for (let i = string.length -1; i >= 0; i--) {
    backwards.push(str[i])
  }
  return backwards.join("")
}
// these two are fundamentally the same

const reverse3 = str => str.split("").reverse().join("");
const reverse4 = str => [...str].reverse().join("");
// modern cheeky syntax, but essentially does the same operation

console.log(reverse(string))
console.log(reverse2(string))
console.log(reverse3(string))
console.log(reverse4(string))
