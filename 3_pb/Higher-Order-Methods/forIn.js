'use strict';
console.clear();

const person = {
  name: "Jenny",
  age: 30,
};


/* 
The for...in statement iterates over all enumerable string properties 
of an object(ignoring properties keyed by symbols), including inherited 
enumerable properties.
Die for...in -Anweisung iteriert über alle aufzählbaren String - Eigenschaften 
eines Objekts(ohne durch Symbole verschlüsselte Eigenschaften), einschließlich 
geerbter aufzählbarer Eigenschaften. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
*/
for (const prop in person) {
  console.log(prop);
}
