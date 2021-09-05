function myTag(strings, personExp, ageExp) {

  let str0 = strings[0]; // "that "
  let str1 = strings[1]; // " is a "

  // 사실 이 예제의 string에서 표현식이 두 개 삽입되었으므로
  // ${age} 뒤에는 ''인 string이 존재하여
  // 기술적으로 strings 배열의 크기는 3이 됩니다.
  // 하지만 빈 string이므로 무시하겠습니다.
  // var str2 = strings[2];

  let ageStr;
  if (ageExp > 99) {
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // 심지어 이 함수내에서도 template literal을 반환할 수 있습니다.
  return str0 + personExp + str1 + ageStr;

}
let person = 'Mike';
let age = 28;

let output = myTag`that ${person} is a ${age}`;

console.log(output);
// that Mike is a youngster

// 최신버전의 태그템플릿
// function div(strings, ...fns) {
//   const flat = s => s.split('\n').join('');
//   return function (props) {
//     return `<div
//     style="${flat(strings[0]) + (fns[0] && fns[0](props)) + flat(strings[1])}">
//     </div>`;
//   }
// }

// const Div = div`
//   font-size: 20px;
//   color: ${(props) => props.active ? 'white' : 'gray'};
//   border: none;
// `;

// console.log(Div({ active: true }))
// console.log(Div({ active: false }))

// 과거 버전으로 태그 템플릿 구현
"use strict";

var _templateObject;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze
    (Object.defineProperties(strings,
      {
        raw:
          { value: Object.freeze(raw) }
      }));
}

function div(strings) {
  for (var _len = arguments.length, fns = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    fns[_key - 1] = arguments[_key];
  }

  function flat(s) {
    return s.split('\n').join('');
  };

  return function (props) {
    return "<div style=\"".concat(flat(strings[0]) + (fns[0] && fns[0](props)) + flat(strings[1]), "\"></div>");
  };
}

var Div = div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 20px;\n  color: ", ";\n  border: none;\n"])), function (props) {
  return props.active ? 'white' : 'gray';
});
console.log(Div({
  active: true
}));
