const c1 = {
  name: 'C1',
  color: 'red',
  toString: () => {
    return c1.name;
  }
}

const c2 = {
  name: 'C2',
  width: 300
}

const c3 = {
  name: 'C3',
  height: 100
}

c3.__proto__ = c1;

console.log(c1)
console.log(c2)
console.log(c3)

console.log(c1.toString())
console.log(c2.toString())
console.log(c3.toString())

function Foo(name) {
  this.name = name;
}

Foo.prototype.lastName = 'Yoo'

const f = new Foo("Yoo dong min")

console.log(f.name)
console.log(f.lastName)