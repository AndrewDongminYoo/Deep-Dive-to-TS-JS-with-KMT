function ul (child: string): string {
  return `<ul>${child}</ul>`;
}

function ol (child: string): string {
  return `<ol>${child}</ol>`;
}

let ulTag = ul("andrew");
let olTag = ol("andrew");

console.log(ulTag)
console.log(olTag)

function makeList (
  container: (child: string)=> string,
  contents: string[]
  ): string {
    const liList = [];

    for (const content of contents) {
      liList.push(`<li>${content}</li>`);
    }

    return container(liList.join(''))
}

const htmlUL = makeList(ul, ['월', '화', '수', '목', '금', '토', '일']);
const htmlOL = makeList(ol, ['봄', '여름', '가을', '겨울'])

console.log(htmlUL)
console.log(htmlUL)

function delay (ms: number): Promise<string> {
  return new Promise((res, rej) => {
    setTimeout(()=>{
      if (Math.floor(Math.random() * 10) % 2 === 0) {
        res('Success')
      } else {
        rej('Failure')
      };
    }, ms);
  });
};

async function main() {
  try{
    console.log('start');
    const result = await delay(3000);
    console.log('Async Done ' + result)
  } catch (e) {
    console.error('Async Fail ' + e)
  }
}

main()

// closure
function makeInfiniteEnergyGenerator () {
  let energy = 0;
  return function (booster = 0) {
    if (booster) {
      energy += booster;
    } else {
      energy++;
    }
    return energy;
  }
}

// generator function
function* infiniteEnergyGenerator () {
  let energy = 1;
  while (true) {
    const booster = yield energy;
    if (booster) {
      energy += booster;
    } else {
      energy++;
    }
  }
}

const energyGenerator = infiniteEnergyGenerator();

for (let i=0;i<5;i++) {
  console.log(energyGenerator.next());
}

console.log(energyGenerator.next(5))
console.log(energyGenerator.return());