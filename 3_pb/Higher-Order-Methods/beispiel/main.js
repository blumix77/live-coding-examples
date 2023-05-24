const ul = document.querySelector('.todos');

function appendListItem(name) {
  const li = document.createElement("li");
  li.textContent = name;
  ul.appendChild(li);
}

function todoDone(name) {
  const li = document.createElement("li");
  li.classList.add('done');
  li.textContent = name;
  ul.appendChild(li);
}

const todos = [
  {title: "Einkaufen", isDone: false},
  {title: "Programmieren", isDone: true},
  {title: "Urlaub machen", isDone: false},
];

todos.filter((el) => !el.isDone).forEach((el) => appendListItem(el.title));
todos.filter((el) => el.isDone).forEach((el) => todoDone(el.title));