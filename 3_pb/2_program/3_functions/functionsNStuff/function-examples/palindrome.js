console.clear();

const word = 'level';
const word2 = 'dirk';
// console.log(word === word.split('').reverse().join(''));
// console.log(word2 === word2.split('').reverse().join(''));

function isPalindrome(word) {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
}

console.log(isPalindrome('dirk'));
console.log(isPalindrome('level'));
console.log(isPalindrome('hüseyin'));
console.log(isPalindrome('sos'));
