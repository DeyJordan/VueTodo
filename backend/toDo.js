// Generate sequential IDs
// https://www.npmjs.com/package/uniqueid
var uniqueid = require('uniqueid');
var id = uniqueid();
var name;
var description;

/* constructor of a ToDo */
function toDo(n, d) {
    this.id = id();
    this.name = n;
    this.description = d;
}

module.exports = toDo;