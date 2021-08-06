// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;  // 10진수 before ES5
let hex: number = 0xf00d;  // 16진수 before ES5
let binary: number = 0b1010; // 진수 after ES5
let octal: number = 0o744;  // 8진수 after ES5

// String
let color: string = "blue";  // double
color = 'red';  // single
let fullName: string = `Bob Bobbington`;  // backtick
let age: number = 37;
let sentence0: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`; // backtick after ES5
let sentence1: string = "Hello, my name is " + fullName + ".\n\n" +
"I'll be " + (age + 1) + " years old next month."; // no backtick before ES5

// Array
let list0: number[] = [1, 2, 3]; // Type[] (type alias)
let list1: Array<number> = [1, 2, 3];  // Array<Type> (generic)

// Tuple (Not in JS)
let x: [string, number];
x = ["hello", 10];
// x = [10, "hello"]; Error!
console.log(x[0].substring(1)); // 성공
// console.log(x[1].substring(1)); // 오류, 'number'에는 'substring' 이 없습니다.
// console.log(x[5].toString()); // 오류, '[string, number]' 타입에는 프로퍼티 '3'이 없습니다.

// Enum (Not in JS) => 실제로 쓰기엔...
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
enum ColorTwo {Red = 1, Green = 2, Blue = 4}
let co: ColorTwo = ColorTwo.Green;
let colorName: string = Color[2];  // Green!

// Any (Not in JS)
let notSure0: any = 4;
notSure0 = "maybe a string instead";
notSure0 = false; // 성공, 분명히 부울입니다.
let notSure1: any = 4;
notSure1.ifItExists(); // 성공, ifItExists 는 런타임엔 존재할 것입니다.
notSure1.toFixed(); // 성공, toFixed는 존재합니다. (하지만 컴파일러는 검사하지 않음)
let prettySure: Object = 4;
// prettySure.toFixed(); // 오류: 프로퍼티 'toFixed'는 'Object'에 존재하지 않습니다.
let list: any[] = [1, true, "free"];
list[1] = 100;

// Void (Not in JS)
let unusable: void = undefined;
// unusable = null; // 성공  `--strictNullChecks` 을 사용하지 않을때만
function warnUser(): void {
  console.log("This is my warning message");
}

// Null and Undefined
// TypeScript는 undefined 과 null 둘 다 각각 자신의 타입 이름으로 undefined , null로 사용합니다. void처럼 그 자체로 유용한 경우는 거의 없습니다:
// 이 밖에 이 변수들에 할당할 수 있는 값이 없습니다!
let u: undefined = undefined;
let n: null = null;
// 기본적으로 null 과 undefined는 다른 모든 타입의 하위 타입니다. 이건, null과 undefined를 number 같은 타입에 할당할 수 있다는 것을 의미합니다.
// 하지만, --strictNullChecks를 사용하면, null과 undefined는 오직 any와 각자 자신들 타입에만 할당 가능합니다.
// (예외적으로 undefined는 void에 할당 가능합니다) 이건 많은 일반적인 에러를 방지하는 데 도움을 줍니다.
// 이 경우, string 또는 null 또는 undefined를 허용하고 싶은 경우 유니언 타입인 string | null | undefined를 사용할 수 있습니다.
// 유니언 타입은 상급 주제로, 이후 챕터에서 다룹니다.
// As a note: 가능한 경우 --strictNullChecks를 사용할 것을 권장합니다. 하지만 핸드북의 목적에 따라, 사용하지 않는다고 가정합니다.

//Never(Not in JS)
// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function error(message: string): never {
  throw new Error(message);
}
// 반환 타입이 never로 추론된다.
function fail() {
  return error("Something failed");
}
// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
function infiniteLoop(): never {
  while (true) {
  }
}

// Object
// number, string, boolean, bigint, symbol, null, 또는 undefined 가 아닌 나머지
declare function create(o: object | null): void;
create({ prop: 0 }); // 성공
create(null); // 성공
// create(42); // 오류
// create("string"); // 오류
// create(false); // 오류
// create(undefined); // 오류
console.log(warnUser())
// This is my warning message => undefined
console.log(warnUser) // function warnUser() {....
console.log(typeof warnUser) // "function"

// Type assertions (타입 단언: 컴파일러에게 이 타입이 확실하다 단언함)
let someValue0: any = "this is a string";
let strLength0: number = (<string>someValue0).length;
let some: string | null = "this is a string";  // allowed in JSX
let strLength1: number = (some as string).length;  // allowed in JSX

