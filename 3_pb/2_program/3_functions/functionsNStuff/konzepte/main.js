"use strict";
console.clear();

/* 
Einführung: Routinen und Unterroutinen (Funktionen)
Aufrufen
- Überblick über die bisher aufgerufenen Funktionen: `console.log()`, `parseInt()` etc.
- call stack (kurze Einführung)
- Funktionsargumente

Deklarieren
- Deklarieren einer Funktion: `Funktion <Name>(<Parameter>){ ... }`
- Funktionsparameter: Benennung und Reihenfolge
- Funktionsdeklarationen als Werte: 
  `const <Funktionsname> = function(<Parameter>){ ... }`
- Pfeilfunktionskürzel (Arrow Functions): 
  `const <Funktionsname> = (<Parameter>) => { ... }`
*/

// Tag 2
/* 
"Function Scope
- Parameters scope
- Declaring variables in functions
- Global vs. Local scope: Variable reassignment in functions
- Reading a program IV (reading functions only when they are called)"
*/

// hard coded
// console.log(`Die Quadratzahl von 1 ist gleich ${1 * 1}`);
// console.log(`Die Quadratzahl von 2 ist gleich ${2 * 2}`);
// console.log(`Die Quadratzahl von 3 ist gleich ${3 * 3}`);
// console.log(`Die Quadratzahl von 4 ist gleich ${4 * 4}`);
// console.log(`Die Quadratzahl von 5 ist gleich ${5 * 5}`);

// let x = 6;
// console.log(`Die Quadratzahl von ${x} ist gleich ${x * x}`);
// x++;
// console.log(`Die Quadratzahl von ${x} ist gleich ${x * x}`);
// x++;
// console.log(`Die Quadratzahl von ${x} ist gleich ${x * x}`);
// x++;
// console.log(`Die Quadratzahl von ${x} ist gleich ${x * x}`);
// x++;
// console.log(`Die Quadratzahl von ${x} ist gleich ${x * x}`);
// x++;

// Eine Funktion ist ein Code-Block zur Wiederverwendbarkeit

function berechneQuadratzahl(start, end, updater = 1) {
  for (let i = start; i <= end; i += updater) {
    console.log(`Die Quadratzahl von ${i} ist gleich ${i * i}`);
  }
}
function gibQuadratzahl(start, end, updater = 1) {
  const result = [];
  for (let i = start; i <= end; i += updater) {
    result.push(i * i);
  }
  return result;
}

console.log(gibQuadratzahl(10, 100, 10));