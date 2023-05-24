
// Function declaration
function myFunc() {
  console.log('Function declaration');
}

// Function expression
const myFunc2 = function () {
  console.log('Function expression');
};

// Arrow function
const myFunc3 = () => {
  console.log('Arrow function');
};
// bei nur einer expression ist return statement impliziert und body block nicht nötig
const myArrow = (num1, num2) => num1 * num2;
// bei nur einem Parameter ist keine Runde klammer nötig, aber empfohlen
const quadrat = x => x * x;

myFunc();
myFunc2();
myFunc3();
console.log(myArrow(5, 6));
console.log(quadrat(5));