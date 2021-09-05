const simpleCamel = (text, splitter = ' ') => {
  return text.split(splitter)
    .map((word, wi) => word.split('')
      .map((c, ci) => wi > 0 && ci === 0
        ? c.toUpperCase()
        : c.toLowerCase())
      .join(''))
    .join('');
};

function convertCamel(name) {
  let camelName = '';
  for (let i = 0, newSpace = false; i < name.length; i++) {
    if (name[i] == ' ') {
      newSpace = true;
      continue;
    }
    if (newSpace) {
      camelName += name[i].toUpperCase();
      newSpace = false;
    } else {
      camelName += name[i].toLowerCase();
    }
  }
  return camelName;
}

const camelName1 = convertCamel('Yoo dong miN');
const camelName2 = simpleCamel('yOO donG Min');

console.log(camelName1);
console.log(camelName2);