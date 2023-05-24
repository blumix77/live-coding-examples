console.clear();
/* 
"Array: Saving multiple values in one name
- Assigning array literals: 
  `const <array name> = [<value 1>, <value 2>, ...]`
- Accessing array items with square brackets
- Re-assigning array items with square brackets
- `const`s and array items"
"Basic Array methods
- Finding Items: `Array.prototype.indexOf(<item>)`
- Adding items: `Array.prototype.push()`, `Array.prototype.unshift()`
- Removing items: `Array.prototype.pop()`, `Array.prototype.shift()`
- Manipulating arrays: `Array.prototype.reverse()`"

Array": Mehrere Werte unter einem Namen speichern
- Zuweisung von Array-Literalen: 
  `const <Arrayname> = [<Wert 1>, <Wert 2>, ...]`
- Zugriff auf Array-Elemente mit eckigen Klammern
- Neuzuweisung von Array-Elementen mit eckigen Klammern
- `const`s und Array-Elemente"
"Grundlegende Array-Methoden
- Auffinden von Elementen: `Array.prototype.indexOf(<Element>)`
- Hinzufügen von Elementen: `Array.prototype.push()`, `Array.prototype.unshift()`
- Entfernen von Elementen: `Array.prototype.pop()`, `Array.prototype.shift()`
- Manipulieren von Arrays: `Array.prototype.reverse()`"
*/

// Kurze Wiederholung
// const artikel1 = 8.99;
// const artikel2 = 5.99;
// const artikel3 = 25;
// const result = artikel1 + artikel2 + artikel3;

// Möglicherweise kein Zusammenhang
// const name = "John Doe";
// const zahl = 50;
// const message = "Lorem ipsum dolor sit amet.";

// Zusammenhang
// const username = "Jane Smith";
// const age = 30;
// const isPremiumMember = true;
// const user = {
//   username: "Jane Smit",
//   age: 30,
//   isPremiumMember: true
// };

// Kollektion, in der Regel gleicher Typ
// const auto1 = "Porsche";
// const auto2 = "Audi";
// const auto3 = "Tesla";
// const autos = ["Porsche", "Audi", "Tesla"];
// console.table(autos);
// console.log(autos[2]);
// const punkte = [6, 66, 22];
// const toDos = [
//   { title: "sleep", isDone: true },
//   { title: "eat", isDone: true },
//   { title: "code", isDone: true },
//   { title: "repeat", isDone: false },
// ];

// autos[2] = "BMW";
// console.table(autos);
// autos = ["BMW"];

// value types = numbers, strings all primitive types - immutable / unveränderbar
// reference types = objects (arrays) - mutable / veränderbar;

// pass by value
// let x = 5;
// let y = x;
// console.log(x, y);
// y++;
// console.log(x, y);

// pass by reference
// const arr1 = ["BMW"];
// const arr2 = arr1;
// arr2 = [];
// console.log(arr1, arr2);
// arr2[0] = "Ferrari";
// console.log(arr1, arr2);

const autos = ["Porsche", "Audi", "Tesla", "BMW", "BMW"];

// indexOf()
const result = autos.indexOf("BMW", autos.indexOf("BMW") + 1)
const result2 = autos.indexOf("Ferrari");

// push();
const length = autos.push("Opel", "Volvo");
// const shoppingCart = ["Stiefel", "Jacke", "Hose"];
// console.log(shoppingCart.push("Proteinshake"));
// console.table(shoppingCart);
// console.table(autos);
// console.log(autos.pop());
// console.table(autos);

// console.table(autos);
// console.log(autos.unshift("VW"));
// console.table(autos);
// console.log(autos.shift());
// console.table(autos.reverse());
// console.table(autos);
const newAutos = autos.slice(2,-1);
console.table(newAutos);

