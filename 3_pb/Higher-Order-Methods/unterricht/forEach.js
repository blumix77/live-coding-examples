"use strict";
console.clear();

function quadrat(el) {
  console.log(el * el);
}

function mutateArray(el, ind, arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[ind] = el * el;
  }
}

const numbers = [10, 11, 6];

// numbers.forEach(quadrat);

function _forEach(arr, callbackFn) {
  for (const el of arr) {
    callbackFn(el);
  }
}

// Array.prototype._forEach = function (callback) {
//   for (const el of this) {
//     callback(el);
//   }
// }

console.log(numbers);
_forEach(numbers, mutateArray);
console.log(numbers);