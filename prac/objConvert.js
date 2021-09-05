const sourceObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
}

const groupInfo = {
  aGroup: ['a', 'b', 'c'],
  bGroup: ['d', 'e']
}

function makeGroup(source, info) {
  const merge = (a, b) => ({ ...a, ...b });
  return Object.keys(info)
    .map(group => ({
      [group]: info[group]
        .map(key => ({ [key]: source[key] }))
        .reduce(merge, {})
    }))
    .reduce(merge, {})
}

console.log(
  makeGroup(sourceObject, groupInfo)
);