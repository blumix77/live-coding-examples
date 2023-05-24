'use strict';
console.clear();

/* 
Higher Order Function:
Eine Funktion, die eine andere Funktion als Argument beinhaltet oder
als return value;

Callback-Funktion:
Eine Funktion, die einer anderen Funktion als Argument übergeben wird.
*/

function operateNumbers(val, callback) {
  return callback(val);
}

function quadratZahl(num) {
  return num * num;
}

function add(arr) {
  let result = 0;
  for (const num of arr) {
    result += num;
  }
  return result;
}

function subtract(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result -= arr[i];
  }
  return result;
}

const numbers = [10, 11, 6];

console.log(operateNumbers(10, quadratZahl));
console.log(operateNumbers(numbers, add));
console.log(operateNumbers(numbers, subtract));