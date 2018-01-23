/* this is the module that allows to create a new ToDo */
var toDoElement = require('./toDo.js');

/* Function to add a toDo of a ToDoList */
let add = function (toDoList, name, description) {
    toDo = new toDoElement(name, description);
    toDoList.push(toDo);
    return "New ToDo : " + name;
};

/* Function to edit a toDo of a ToDoList */
let update = function (toDoList, id, name, description) {
    let retour = "ToDo not found";
    toDoList.forEach(function (toDo) {
        if (toDo.id == id) {
            let leTodo = toDo;
            leTodo.name = name;
            leTodo.description = description;
            retour = "Edit ToDo : " + name;
        }
    });
    return retour;
};

/* Function to delete a toDo of a ToDoList */
let del = function (toDoList, id) {
    let retour = "ToDo not found";
    toDoList.forEach(function (toDo) {
        if (toDo.id == id) {
            toDoList.splice(toDoList.indexOf(toDo), 1);
            retour = "ToDo Removed";
        }
    });
    return retour;
};

module.exports = {
    add: add,
    delete: del,
    update: update
};