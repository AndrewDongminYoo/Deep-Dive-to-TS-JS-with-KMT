myName = 'Yoo'
foo(); // hoisting!!!

function foo() {
  let x = 10;

  console.log(myName)
  bar(); // hoisting!!!
  // zoo(); // no hoisting!!!

  function bar() {
    let y = 20;

    console.log(x)
    console.log(myName)
  }

  const zoo = function () {
    let z = 30;
    console.log(y);
    console.log(x);
  }

  if (x === 10) {
    let x = 100;
    console.log(x);
  }
  console.log(x);

  if (x === 10) {
    x = 12;
    console.log(x)
  }
  console.log(x)
}