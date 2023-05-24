console.clear();
/* 
truthy und falsy
short circuit operators
*/

// falsy
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

// boolean - true and false
// console.log(true && true);
// console.log(false && true);
// console.log(true || true);
// console.log(false || true);

// truthy, falsy
// console.log(5 || false);
// console.log(5 && true);
// console.log(0 || false);
// console.log(0 && true);

// short-circuit evaluation - Kurzschluss Evaluierung
// logisches und &&
// logisches oder ||
// console.log(5 && true);
// console.log(5 && true);
// console.log(0 || 7);
// console.log(5 || 8);
// console.log(5 && "Hans");

// short-circuit Techniken
// fallback value
// const port = process.env.PORT || 3000;
// const username = user.name || "Guest";

// conditional expressions
// toDoItem.isDone && doStuff();
// !toDoItem.isDone && doOtherStuff();