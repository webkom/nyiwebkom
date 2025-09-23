let todolistitems = ["handle", "dra på webkom-møte", "melde meg på veldedighetsfest"];

let listEL = document.createElement("ul");

for (let i = 0; i < todolistitems.length; i++) {
    const element = todolistitems[i];
   let listItemEl = document.createElement("li");
   listItemEl.textContent = element;
   listEL.appendChild(listItemEl);
    
}

let todolistEl = document.getElementById("todolist");
todolistEl.appendChild(listEL);