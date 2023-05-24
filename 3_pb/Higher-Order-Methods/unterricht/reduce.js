'use strict';
console.clear();

const numbers = [1, 2, 20, 50, 13];

const bankAccounts = [
  { name: 'Bill Gates', amount: 10000000 },
  { name: 'Hüseyin', amount: 100},
]

function add(acc, curr) {
  return acc + curr.amount;
}

const result = numbers.reduce(add, 100);
// console.log(result);
const result2 = bankAccounts.reduce(add, 0);
console.log(result2);

function _reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(_reduce(bankAccounts, add, 0));