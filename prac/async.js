function calValue(a, b) {
  setTimeout(() => {
    return a + b
  }, 1000)
}
const r = calValue(10, 20)
const z = r;
console.log(r, z)

function calValue2(a, b, cb) {
  setTimeout(() => {
    cb(a + b)
  }, 1000)
}
const r2 = calValue2(10, 20, (result) => {
  console.log(result)
})
const z2 = r2;
console.log(r2, z2)

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('first OK');
  }, 2000)
  // reject('Fail');
})

p.then(function (ok) {
  console.log(ok)
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('second OK')
    }, 3000)
    rej('second Fail')
  })
}).then(function (ok) {
  console.log(ok)
}).catch(function (fail) {
  console.log(fail)
})

x = "안녕하세요 저는 유동민입니다."

console.log(x)