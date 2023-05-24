/* 
"Advanced Array methods
- Iterating over arrays: `Array.prototype.forEach(<function>)`
- Converting an array to a different array: `Array.prototype.map(<function>)`
- Getting a subset of an array: `Array.prototype.filter(<function>)`" 
- Converting an array to a single value: `Array.prototype.reduce(<function>)`
*/
'use strict';
console.clear();

function quadrat(el) {
  console.log(el * el);
}

const numbers = [10, 11, 6];

numbers.forEach(quadrat);

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

numbers.forEach(quadrat);