let todolistitems = ["handle", "webkom møte", "kalk innlevering"];

let listEl = document.createElement("ul");

for (let i = 0; i < todolistitems.length; i++) {
    const element = todolistitems[i];
    let listItemEl = document.createElement("li");
    listItemEl.textContent = element
    listEl.appendChild(listItemEl);
}

let todolistEl = document.getElementById("todolist");
todolistEl.appendChild(listEl);