const a = "Andrew"

let age = {
  A: "name",
  [`${a} hello`]: function () {
    console.log(`${a}hello`)
  }
}

age['Andrew hello']()
abc = new Boolean();// Boolean(false)
const b = null;         // null
const c = undefined;    // undefined
const d = new Number(); // Number()
const e = new String()  // String()
const f = Symbol()      // Symbol()
const g = new Object()  // {}

console.log(typeof a)  // object
console.log(typeof b)  // object
console.log(typeof c)  // undefined
console.log(typeof d)  // object
console.log(typeof e)  // object
console.log(typeof f)  // symbol
console.log(typeof g)  // object

function plusAge(age) {
  return age + 1
}
const thirtyOne = plusAge(30);
// 31
plusAge({});
// "[object Object]1"
plusAge(false);
// 1
plusAge("30");
// "301"
plusAge([]);
// "1"
plusAge(null);
// 1
plusAge(undefined);
// NaN

console.log("hello")