"use strict";
console.clear();

// https://jst.hashnode.dev/javascript-higher-order-functions-map-filter-and-reduce

function _forEach(arr, callbackFn) {
  for (let el of arr) {
    callbackFn(el);
  }
}

const array1 = [0, 1, 2];

_forEach(array1, (x) => console.log(x * x));

Array.prototype._map = function (callback) {
  const resultArray = [];
  console.log(Array.isArray(this));
  for (let index = 0; index < this.length; index++) {
    resultArray.push(callback(this[index], index, this));
  }
  return resultArray;
};
// function _map(array, transform) {
//   const mapped = [];
//   for (let element of array) {
//     mapped.push(transform(element));
//   }
//   return mapped;
// }

function map(arr, fn) {
  const len = arr.length;
  const result = new Array(len);
  for (let idx = 0; idx < len; idx++) {
    result[idx] = fn(arr[idx], idx, arr);
  }
  return result;
}

console.log(map(array1, (x) => 2 * x));

// function _filter(array, predicate) {
//   const passed = [];
//   for (let element of array) {
//     if (predicate(element)) {
//       passed.push(element);
//     }
//   }
//   return passed;
// }

Array.prototype._filter = function (callback) {
  const filterArr = [];
  for (let index = 0; index < this.length; index++) {
    if (!!callback(this[index], index, this)) {
      filterArr.push(this[index]);
    }
  }
  return filterArr;
};

console.log(array1._filter((x) => x > 1));

function _reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

Array.prototype._reduce = function (callback, accumulator) {
  if (this.length < 1) {
    throw new Error("Array is Empty");
  }

  if (!accumulator) {
    if (typeof this[0] === "string") {
      accumulator = "";
    } else if (typeof this[0] === "number") {
      accumulator = 0;
    }
  }

  for (let index = 0; index < this.length; index++) {
    accumulator = callback(accumulator, this[index]);
  }
  return accumulator;
};
