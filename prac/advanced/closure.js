function increment() {
  let saveNumber = 1;
  // 이 변수는 함수 밖에서 건드릴 수 없음
  return function () {
    return saveNumber++; // breakpoint!
  }
}

const increments = increment();

console.log(increments());
console.log(increments());
console.log(increments());
console.log(increments());