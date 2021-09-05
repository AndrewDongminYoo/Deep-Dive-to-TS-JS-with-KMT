const cartItems = [
  { id: 1, item: 'DIARY', price: 13000, discount: 0, },
  { id: 2, item: 'GRAIN', price: 15000, discount: 0, },
  { id: 3, item: 'OIL', price: 13500, discount: 0, },
  { id: 4, item: 'STOCK', price: 14000, discount: 0, }
];

const cartItemsArray = [];
for (const item of cartItems) {
  const row = [];
  for (const [, value] of Object.entries(item)) {
    row.push(value)
  }
  cartItemsArray.push(row.join());
}
console.log(cartItemsArray.join('\n'));

const extractValueInObject = obj => Object
  .entries(obj)
  .map(([, value]) => String(value));
const cartItemString = cartItems
  .map(extractValueInObject)
  .join('\n');
console.log(cartItemString);