function doubleTypeFunction(a: number | string) {
  if (typeof a === 'string') {
    return a.replace('x', 'X');
  }
  // return a.replace('x', 'X')
  return a.toString()
}

function foo(a?: number | null) {
  // if (a === null) return;
  console.log(a?.valueOf())
  // will return undefined
}

foo()

interface Foo {
  foo: string;
  common: string;
}

function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined;
}

// TypeGuard can't fix this action
console.log(isFoo({ foo: 'ok', common: 'wow', active: false}))