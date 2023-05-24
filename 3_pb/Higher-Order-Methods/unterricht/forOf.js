'use strict';
console.clear();

// for (const prop in names) {
//   console.log(prop);
// }
// for (const prop in person) {
//   console.log(prop);
// }

// {
//   const prop = '0';
//   console.log(prop);
// }

// {
//   const prop = '1';
//   console.log(prop);
// }

// {
//   const prop = '2';
//   console.log(prop);
// }


const names = ["Jenny", "Kim", "Basti"];

const person = {
  name: "Jenny",
  age: 30,
  // [Symbol.iterator]: function* () {
  //   const keys = Object.keys(this);
  //   for (let i = 0; i < keys.length; i++) {
  //     yield keys[i];
  //   }
  // },
};

// console.log(Reflect.ownKeys(person));

// for (const val of person) {
//   console.log(typeof val);
// }

// for (const name of names) { 
//   console.log(name);
// }

// for (const key of Object.keys(person)) { 
//   console.log(key);
// }
// for (const value of Object.values(person)) { 
//   console.log(value);
// }
// for (const [key, value] of Object.entries(person)) { 
//   console.log(`${key}: ${value}`);
// }
// for (const item of Object.entries(person)) { 
//   console.log(item);
// }