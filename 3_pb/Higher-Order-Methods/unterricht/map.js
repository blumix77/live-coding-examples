'use strict';
console.clear();

const numbers = [5, 8, 10];

const persons = [
  { name: 'Dirk', age: 40, },
  { name: 'Melani', age: 25 },
  { name: 'Quan', age: 24 },
];


function getAges(obj) {
  return obj.age;
}

const newArr = numbers.map((el) => el * el);
// console.log(numbers);
// console.log(newArr);
const ages = persons.map(getAges);
// console.log(ages);

function getTitle(todo) {
  return todo.title;
}

const todos = [
  { title: 'Einkaufen', isDone: false, },
  { title: 'Programmieren', isDone: true },
  { title: 'Urlaub machen', isDone: false },
];
console.log(todos.map(getTitle));
console.log(todos.map((el) => el.title));

function _map(arr, callback) {
  const mapped = [];
  for (let element of arr) {
    mapped.push(callback(element));
  }
  return mapped;
}

console.log(_map(todos, getTitle));