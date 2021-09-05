function myFn(x) {
  return x + 100;
} // 식

// 필요한 인수의 개수보다 초과하면 무시됨
const result = myFn(10, 123, 9999, 01);

result;

const myFn2 = function () {
  return 100;
}; // 문

console.log(typeof myFn2());

(function () {
  console.log('즉시실행함수!')
})();

function sum00() {
  let s = 0;
  for (let i = 0; i < arguments.length; i++) {
    s += arguments[i];
  }
  return s;
}

function sum01(...args) {
  let s = 0;
  for (let i = 0; i < args.length; i++) {
    s += args[i];
  }
  return s;
}
const arr = [10, 20, 30, 40]
sum00.call(null, ...arr);
sum00.apply(null, arr);

const sum02 = (...args) => {
  let s = 0;
  for (let i = 0; i < args.length; i++) {
    s += args[i];
  }
  return s;
}

console.log(typeof sum02())

function* gen() {
  yield 10;
  yield 20;
  yield 30;
  return 40;
}

const g = gen();

g.next();
g.next();
g.next();
g.next();
