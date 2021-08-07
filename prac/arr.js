const books = [];

books[4] = "토지";
books[2] = "헨리 6세 3부";
books[0] = "헨리 6세 1부";

console.log(books);
console.log(books.length)

const numbers = ["1", "2", "3", "4", "5", "6"]
const someNumber = numbers.slice(2, 4);
console.log(someNumber);
console.log(numbers)
const someNumber2 = numbers.splice(2, 2, "6", "7", "8", "9")
console.log(someNumber2)
console.log(numbers)
const numberCommaString = numbers.join()
console.log(numberCommaString)
const numbersString = numbers.join(' ')
console.log(numbersString)
const newNumbers = numberCommaString.split(',')
console.log(newNumbers)

const category = ['Rock', 'Dance', 'Pop', 'Acustic']
const newCate = ['hip-hop', 'EDM']
const genres = category.concat(newCate)
console.log(genres)
const newGenres = [...category, ...newCate]
console.log(newGenres)
console.log(genres == newGenres)
console.log([...genres] == [...newGenres])