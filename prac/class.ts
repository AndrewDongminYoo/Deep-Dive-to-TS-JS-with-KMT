const address: [number, string, string] = [2155, "서울시", "중랑구"]

let [zipCode, address1] = address;

// zipCode = '02155'; // Error

abstract class Shapes {
  public static MIN_BORDER_WIDTH = 0;
  public static MAX_BORDER_WIDTH = 30;

  public readonly name: string = 'Shape';
  protected _borderWidth: number;
  private action!: string;

  constructor(borderWidth: number = 0) {
    this._borderWidth = borderWidth;
  }

  abstract area: () => number;

  set borderWidth(width: number) {
    if (width >= Shapes.MIN_BORDER_WIDTH && width <= Shapes.MAX_BORDER_WIDTH) {
      this._borderWidth = width;
    } else {
      throw new Error('borderWidth 허용 범위를 벗어남')
    }
  }

  get borderWidth(): number {
    return this._borderWidth;
  }
}

class Circle extends Shapes {
  private _radius: number;
  public name: string = 'Circle';

  constructor(radius: number = 0) {
    super()
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  area = (): number => this._radius * this._radius * Math.PI
}

class Rect extends Shapes {
  private _width: number;
  private _height: number;
  public name: string = 'Rect';

  constructor(width: number, height: number) {
    super();
    this._height = height;
    this._width = width;
  }

  get width(): number {
    return this._width;
  }
  get height(): number {
    return this._height;
  }

  area = (): number => this._height * this._width;
}


interface Container {
  tagName: string;
  className: string;
  children?: string[];
  getTagName: () => string;
  getClassName: () => string;
}

class MyContainer implements Container {
  tagName: string;
  className: string;

  constructor(tagName: string, className:string) {
    this.tagName = tagName;
    this.className = className;
  }

  getTagName = () => this.tagName;
  getClassName = () => this.className
}