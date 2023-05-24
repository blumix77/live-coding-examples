'use strict';
console.clear();

const todos = [
  {title: "Einkaufen", isDone: false},
  {title: "Programmieren", isDone: true},
  {title: "Urlaub machen", isDone: false},
];

const numbers = [1, 2, 20, 50, 13];

const filterdResult = numbers.filter((el) => el > 20);
const oddNumbers = numbers.filter((el) => el % 2 !== 0);
// console.log(filterdResult);
// console.log(oddNumbers);
const doneTodos = todos.filter((el) => el.isDone);
console.log(doneTodos);

function _filter(arr, callback) {
  const passed = [];
  for (let element of arr) {
    if (callback(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(_filter(todos, (el) => el.isDone));