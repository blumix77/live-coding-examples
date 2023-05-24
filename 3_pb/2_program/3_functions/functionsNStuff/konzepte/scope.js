console.clear();
// console.log(user);

// //block scope
// // let und const sind block scoped
// let user2 = 'egal';
// console.log(user2);
// if (true) {
//   var user = 'Chuck Norris';
//   let user2 = 'Not Chuck Norris';
//   // console.log(user);
//   console.log(user2);
// }
// console.log(user2);

// console.log(user);
// console.log(user2);

// let zahl = 5;

// var is function scoped, let und const block scoped, aber function ist auch block
// function tooBigForChuckNorris() {
//   var user = "Chuck Norris";
//   let user2 = "Not Chuck Norris";
//   let zahl = 6; // variable shadowing - higher precedence
//   console.log(user);
//   console.log(user2);
//   console.log(zahl);
// }

let name = 'dirk';

function egal() {
  name = 'hansi';
  console.log(name);
}
egal();
console.log(name);
