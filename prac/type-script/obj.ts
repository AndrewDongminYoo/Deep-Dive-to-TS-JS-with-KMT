type Box = {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
  borderWidth?: number;
  ['className']?: string;
}

let box: Box = {
  width: 200,
  height: 200,
  borderRadius: 5,
  backgroundColor: 'red'
}

function makeBox(
  width: number,
  height: number,
  borderRadius: number,
  backgroundColor: string
) : Box {
  return {
    width,
    height,
    borderRadius,
    backgroundColor,
  };
};

const box0 = makeBox(100, 100, 0, 'blue') // 여러번 호출하기 쉬움
console.log(typeof box0)

class Shape implements Box {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;

  constructor(
  width: number,
  height: number,
  borderRadius: number,
  backgroundColor: string
  ) {
    this.width = width;
    this.height = height;
    this.borderRadius = borderRadius;
    this.backgroundColor = backgroundColor;
  };
};

const boxShape = new Shape(10, 10, 0, 'blue');
console.log(boxShape instanceof Shape)
console.log(typeof(boxShape))

box.borderWidth = 10;
box['className'] = 'box rounded';
// box.color = 'blue';
delete box.width;

// 그냥 참조해버리기 => 수정하면 원본도 수정됨
const box1 = box;
// assign 복사 - 첫번째 파라미터 객체에 그 이후 객체의 속성을 오버라이트
const box2 = Object.assign({}, box);
// 스프레드 구문 복사 (장점: 새로운 프로퍼티 추가하기 편함) => 제일 마음에 들어요
const box3 = { ...box, borderColor: 'skyBlue' };
// JSON 이용 복사 (번잡해 보이지만 효과 확실하구만)
const box4 = JSON.parse(JSON.stringify(box));


