// mini task
console.log("First log");
setTimeout(() => {
  console.log("I'm delay with 3000ms");
}, 3000);

setTimeout(() => {
  console.log("I'm delay with 0ms");
}, 0);
console.log("last line");
// mini task
Promise.resolve({ name: "Zain" }).then((val) => console.log(val));
const div = document.querySelector("#root");
const users = ["Nancy", "Olga", "Zain", "Jack"];
function getUsers() {
  setTimeout(() => {
    users.forEach((user) => {
      const p = document.createElement("p");
      p.innerText = user;
      div.appendChild(p);
    });
  }, 1500);
}
// ! Rennbedingung – wir möchten, dass die getUsers-Funktion aufgerufen wird
// erst nachdem wir einen neuen Benutzer hinzugefügt haben.
// Deshalb übergeben wir die Funktion getUsers als Callback an die Funktion addUser.
function addUser(userName, cb) {
  setTimeout(() => {
    users.push(userName);
    cb();
  }, 2000);
}
// getUsers();
addUser("Ali", getUsers);

//min task 

Promise.resolve({name: "Zain"}).then((val) => console.log(val));

const div = document.querySelector("#root");
const users = ["Nancy","Olga","Zain","Jack"];
function getUsers(){
  setTimeout(() => {
  users.forEach((user) => { 
    const p = document.createElement("p");
    p.innerText = user;
    div.appendChild(p);
  });
  },1500);
}

getUsers();

function addUser(userName, callback) {
  setTimeout(() => {
    users.push(userName);
    callback();
  }, 2000);
}

// getUsers();
addUser("Ali", getUsers);