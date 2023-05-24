/* 
Primzahlen sind natürliche Zahlen größer 1, die genau zwei Teiler haben. 
Sie sind nur durch sich selbst und durch 1 teilbar.

Die Primzahlen bis 100 lauten: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 
43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97. Wie du erkennen kannst, sind — 
abgesehen von der Zahl 2 — alle Primzahlen ungerade.
*/

function gibPrimzahlen(grenzZahl) {
  // eine zahl muss durch sich selbst teilbar sein und durch 1
  // eine zahl darf nicht mit einer anderen zahl teilbar sein als sich selbst
  if (grenzZahl < 2) return [];
  if (grenzZahl === 2) return [2];
  const result = [2];

  outer: for (let i = 3; i <= grenzZahl; i++) {
    inner: for (let j = i - 1; j >= 2; j--) {
      if (i % j === 0) {
        continue outer;
      }
    }
    result.push(i);
  }
  return result;
}
