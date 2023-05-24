"use strict";
console.clear();

const myArr = ['Jenny', 'Kim', 'Ali'];

for (const name in myArr) {
  console.log(name);
}

for (const name of myArr) {
  console.log(name);
}

const person = {
  name: "Jenny",
  age: 30,
  // [Symbol.iterator]: function* () {
  //   const keys = Object.keys(this);
  //   for (let i = 0; i < keys.length; i++) {
  //     yield [keys[i], this[keys[i]]];
  //   }
  // },
};


// for (const p of Object.keys(person)) {
//   console.log(p);
// }

// for (const p of Object.values(person)) {
//   console.log(p);
// }

// for (const [key, value] of Object.entries(person)) {
//   console.log(`${key}: ${value}`);
// }