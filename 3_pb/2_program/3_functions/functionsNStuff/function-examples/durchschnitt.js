console.clear();

const deutschNote = 3;
const englischNote = 4;
const matheNote = 2;

const notendurchschnitt = (deutschNote + englischNote + matheNote) / 3;

// console.log(notendurchschnitt);

function getAverageOf3(note1, note2, note3) {
  return (note1 + note2 + note3) / 3;
}

function getAverage(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result / arr.length;
}

function getAverageNew(obj) {
  return (obj.deutschNote + obj.englischNote + obj.matheNote) / 3;  
}

// console.log(getAverageOf3(deutschNote, englischNote, matheNote));
// console.log(getAverage([deutschNote, englischNote, matheNote]));

const peter = {
  deutschNote: 3,
  englischNote: 4,
  matheNote: 2,
};

const streber = {
  deutschNote: 1,
  englischNote: 1,
  matheNote: 1,
};

const peterAverage = getAverageNew(peter);
const streberAverage = getAverageNew(streber);

console.log('Peters Durchschnitt ' + peterAverage);
console.log('Strebers Durchschnitt ' + streberAverage);

// console.log(getAverage([5]));

// console.log(Math.max(5, 6, 9));

