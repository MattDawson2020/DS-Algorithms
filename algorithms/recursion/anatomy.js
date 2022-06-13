let counter = 0;
function inception() {
  console.log(counter);
  if(counter > 3) {
    return "done!";
  }
  counter++;
  inception();
}

inception()
// actually returns undefined, because the return done is in a closure,
// the last function call in the stack will return but everything else
// will just resolve

let counter2 = 0;
function inception2() {
  console.log(counter2);
  if(counter2 > 3) {
    return "done!";
  }
  counter++;
  return inception();
}

inception2()
// this one will actually work correctly, as in each recursive call, you
// tell the current call to return the result of the recursive call, so
// the return statements filter back up
