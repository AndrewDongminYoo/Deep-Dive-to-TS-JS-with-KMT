type Book = {
  title: string;
  copyright?: string;
  author?: string;
}

const books: string[] = [
  "두 명의 애인과 삽니다.",
  "요리사, 요리로 말하다.",
  "라이언 맥긴리 컬렉션 혼자 걷는",
  "내 이름은 군대",
  "벌새",
  "해 뜨기 전이 가장 어둡다.",
  "시의 인기척",
  "냉정과 열정 사이",
  "모든 동물은 섹스 후 우울해진다."
]

books.forEach(
  (book: string, id: number, books: string[]) => {
  console.log(`${book} ${id+1}/${books.length}`);
}) // for 문보다 다소  느린 편

const bookObject: Book[] =
  books.map((book: string) => {
    return {
      title: book,
      author: undefined,
      copyright: undefined
    };
});

console.log(bookObject);

const OneBooks: Book[] = books
  .map((book: string) => ({
    title: book
  }))
  .map((book: Book) => ({
    ...book,
    author: undefined
}));

console.log(OneBooks)

const bookTitleToObject = (book: string) => ({title: book});
const makeAuthor =
(name: string) =>
(book: Book) => ({
  ...book,
  author: name
});

const shakespeareTwoBooks: Book[] = books
  .map(bookTitleToObject)
  .map(makeAuthor("William Shakespeare"));

console.log(shakespeareTwoBooks)

const HummingBird: Book[] = shakespeareTwoBooks.filter((book: Book) => {
  return book.title.includes("벌새")
})

console.log(HummingBird);

const someNumbers: number[] = [10, 5, 4, 13,  14, 42, 8]
const someNumber = someNumbers.reduce((acc, cur) => acc + cur, 0)
// 0 + 10 + 5 + 4 + 13 + 14 + 42 + 8 = 96
console.log(someNumber)

type SomeObject = {
  [key: string]: string | number;
}

const someObjects: SomeObject[] = [
  { border: "none" },
  { fontSize: 24 },
  { className: "box sm-box" }
];

const someObject: SomeObject = someObjects.reduce(
  (acc: SomeObject, cur: SomeObject) => ({ ...acc, ...cur }),
  {}
)

console.log(someObject)

function sumNumberOnlyForJS(): number {
  return Array.from(arguments).reduce((a: number, b:number) => a+b, 0)
}
// It works, but...
// console.log(sumNumberOnlyForJS(10, 20, 30, 40, 50));

function sumNumberForTypeScript(...args: number[]): number {
  return args.reduce((a: number, b:number) => a+b, 0)
}

console.log(sumNumberForTypeScript(10, 20, 30, 40, 50));