console.clear();

function getMaxNumbers(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) return num1;
  if (num2 > num3) return num2;
  return num3;
}

function getMaxArray(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

const max1 = getMaxNumbers(5, 6, 9);
const max2 = getMaxArray([-1, -2]);

console.log(max1);
console.log(max2);