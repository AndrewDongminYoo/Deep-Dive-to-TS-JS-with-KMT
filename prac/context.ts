const person = {
  name: 'Yoo dong min',
  age: 28,
  getAge() {
    return this.age;
  }
}

const personAge1 = person.age;
const personAge2 = person.getAge;
const personAge3 = person.getAge();

console.log(personAge1)
console.log(personAge2)
console.log(personAge3)
console.log(personAge2())
console.log(personAge2.call(person))
console.log(personAge2.apply(person))

class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.age = age
    this.name = name
    // 실행 컨텍스트(Execution Context)
    this.getAge = this.getAge.bind(this)
  }
  getAge () {
    return this.age
  }
  // 렉시컬 컨텍스트 (lexical context)
  getName = () => this.name
}

const newPerson = new Person('Dong Min, Yoo', 27)

const newPersonAge1 = newPerson.age;
const newPersonAge2 = newPerson.getAge;
const newPersonAge3 = newPerson.getAge();

console.log(newPersonAge1)
console.log(newPersonAge2)
console.log(newPersonAge3)
console.log(newPersonAge2())
console.log(newPersonAge2.call(newPerson))
console.log(newPersonAge2.apply(newPerson))

const personName = newPerson.getName

console.log(personName())