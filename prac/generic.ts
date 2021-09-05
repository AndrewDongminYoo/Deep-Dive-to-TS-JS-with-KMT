type User = {
  id: number;
  name: string;
}

type Address = {
  zipCode: number;
  address: string;
}

function pipeOne(value: any): any {
  return value;
}

function pipeTwo<T>(value: T): T {
  return value;
}

function pipeObjectOne<T>(object: T): T {
  return object;
}

// const po1 = pipeObjectOne<User>({ id: 1, name: "andrew", zipCode: 50213})

class State<S, Config={}> {
  private _state: S;
  config: Config;

  constructor(state: S, config: Config) {
    this._state = state;
    this.config = config
  }

  getState(): S {
    return this._state;
  }
}

let s1 = new State<Address, {active: boolean}> ({
  zipCode: 50213,
  address: '서울시',
}, {
  active: true
});

const s1Data = s1.getState();
console.log(s1Data)
console.log(s1Data.address, s1Data.zipCode, s1.config.active)

function getOwnProperty<Type, key extends keyof Type>(obj: Type, key: key) {
  return obj[key]
}

interface KeyPair<T, V> {
  key: T;
  value: V;
}

let kv1: KeyPair<number, string> = { key: 1, value: 'kim'}
let kv2: KeyPair<number, number> = { key: 1, value: 52013}
