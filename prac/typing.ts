import { v4 } from 'uuid';

type UniqueObject = {
  id: string;
  [key: string]: string | number | boolean;
}

const makeObject = (): UniqueObject => ({
  id: v4(),
})

console.log(makeObject());
console.log(makeObject());

const jsonString = `
  {
    "name": "Yoo Dong Min",
    "age": "28",
    "bloodType": "B"
  }
`;

const myJson = JSON.parse(jsonString);
const myObject = {...myJson, id: v4()}
console.log(myJson.bloodType)
console.log(myObject.id)
const newJson = JSON.stringify(myObject,null,'\t')
console.log(newJson)
console.log(myObject)

try {
  const myJSON = JSON.parse(jsonString);
} catch (e) {
  console.error("json 데이터의 형식을 확인해주세요.", e);
}

