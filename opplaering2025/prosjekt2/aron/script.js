let todolistitems = ["Handle", "Dra på webkom møte", "Melde meg på veldedighetsfest"];

let listEl = document.createElement("ul");

for (let i = 0; i < todolistitems.length; i++) {
    const element = todolistitems[i];
    const listItemEL = document.createElement("li");
    listItemEL.textContent = element;
    listEl.appendChild(listItemEL);
}

let todolistEL = document.getElementById("todolist");
todolistEL.appendChild(listEl);
