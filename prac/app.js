let a = 20;
let b = a;
b = 30;

console.log(b)

let obj = {
  isLoading: true
}

let obj2 = obj;
obj2.isLoading = false;

console.log(obj.isLoading)
console.log(obj2.isLoading)