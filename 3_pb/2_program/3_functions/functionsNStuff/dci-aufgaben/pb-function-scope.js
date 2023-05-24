console.clear();

function pruefeNummern(x, y) {
  const sindZahlen = typeof x === 'number' && typeof y === 'number';
  if (!sindZahlen) return 'x or y is not a number';
  if (sindZahlen) {
    let result = '';
    for (let i = 1; i <= y; i++) {
      result += x ** i + ' ';
    }
    console.log(result.trim());
  }
}
console.log(pruefeNummern(2,10));

// pruefeNummern(3, 5);
// pruefeNummern(2, 8);
let frucht = 'banane';
function printFavoriteFruit() {
  frucht = 'apfel';
  console.log('Meine Lieblingsfrucht ist ' + frucht);
}
// printFavoriteFruit();

const exponent = (zahl, anzahl) => {
  let result = zahl ** anzahl;
  console.log(result);
};
exponent(5, 3);
/* console.log(result); */