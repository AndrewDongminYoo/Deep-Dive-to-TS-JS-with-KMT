
function calculateCircleArea(radius) {
  return radius * radius * Math.PI;
}

function calculateRectArea(width, height) {
  return width * height;
};

class Circle {
  #radius;
  // 타입스크립트가 아니라 자바스크립트로도 private 속성을 가질 수 있게 된 모던 문법
  constructor(radius) {
    this.#radius = radius
  }
  get radius() {
    return this.#radius;
  }

  area = () => this.#radius * this.#radius * Math.PI;
}

class Rect {
  #width;
  #height;
  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }
  get width() {
    return this.#width;
  }
  get height() {
    return this.#height;
  }
  area = () => this.#width * this.#height;
};

const circle = new Circle(40);
const rect = new Rect(100, 200);
console.log(calculateCircleArea(circle.radius))
console.log(calculateRectArea(rect.width, rect.height))
console.log(circle.area())
console.log(rect.area())