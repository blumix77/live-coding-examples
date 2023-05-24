'use strict';
console.clear();

const person = {
  name: 'Jenny',
  age: 30,
  // [Symbol.iterator]: function* () {
  //   const keys = Object.keys(this);
  //   for (let i = 0; i < keys.length; i++) {
  //     yield [keys[i], this[keys[i]]];
  //   }
  // },
};


console.log(Object.getOwnPropertyNames(person)); // non-symbol; string
console.log(Reflect.ownKeys(person)); // symbol + string
console.log(Object.getOwnPropertyDescriptors(person));

