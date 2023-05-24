// call stack
function hallo1() {
  hallo2();
  console.log("hallo von hallo1");
}

function hallo2() {
  hallo3();
  console.log("hallo von hallo2");
}

function hallo3() {
  console.trace();
  console.log("hallo von hallo3");
}
console.trace();
hallo1();