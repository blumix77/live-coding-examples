function getFuncs(val, callback) {
  console.log('start of function');
  console.log(val);
  return callback(val);
}

function quadrat(val) {
  return val * val;
}

// console.log(getFuncs(5, quadrat));

function operateNumbersArray(val, callback) {
  return callback(val);
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

const numbers = [1, 3, 23];

console.log(operateNumbersArray(numbers, subtract));