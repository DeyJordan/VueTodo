var express = require('express');
var session = require('express-session');
var cors = require('cors');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

app.use(session({ 
    secret: 'mysecrettoken',
    resave: false,
    saveUninitialized: false
}));

/* This is the module where the functions add and remove are. */
var toDo = require('./toDoList_module.js');

/* to create a TodoList (array) in this session */
app.use(function(req, res, next){
    if (!req.session.toDoList) {
        console.log("creation liste");
        req.session.toDoList = new Array();
    }
    next();
});

app.use(cors());

/* enable pre-flight across-the-board */
var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200,
    credentials: true
  }

app.options('*', cors(corsOptions));

/* to get all the todo-List */ 
app.get('/toDoList', cors(corsOptions), function(req, res) {
    res.send({todolist: req.session.toDoList});
})

/* to get a number of todo-List */ 
app.get('/toDoList/:offset/:size', cors(corsOptions), function(req, res) {
    let offset = parseInt(req.params.offset);
    let size = parseInt(req.params.size);
    let inc = 0;
    let nbTodo = 0;
    let retour = new Array();
    let lesTodos = req.session.toDoList;
    for(var unTodo in lesTodos){
        if(inc >= offset){
            if(nbTodo < size){
                retour.push(lesTodos[unTodo]);
                nbTodo++;
            }
        }
        inc++;
    }
    res.send({todolist: retour});
})

/* to post a new todo, a name is required */
app.post('/add', cors(corsOptions), urlencodedParser, function (req, res) {
    if(req.body.name != '' && typeof(req.body.name) !== 'undefined') {
        let name = req.body.name;
        let desc = "n/a";
        if(typeof(req.body.desc) !== 'undefined')
        {
            desc = req.body.desc;
        }
        result = toDo.add(req.session.toDoList, name, desc);
        res.send(result);
    }

    res.send("empty name is not valid !");
});

/* to edit todo, a name is required */
app.post('/edit/:id', cors(corsOptions), urlencodedParser, function (req, res) {
    if(req.body.name != '' && typeof(req.body.name) !== 'undefined') {
        let id = parseInt(req.params.id);
        let name = req.body.name;
        let desc = "n/a";
        if(typeof(req.body.desc) !== 'undefined')
        {
            desc = req.body.desc;
        }
        result = toDo.update(req.session.toDoList, id, name, desc);
        res.send(result);
    }

    res.send("empty name is not valid !");
});

/* to delete a post, an id is required */
app.get('/del/:id', cors(corsOptions), function (req, res) {
    let id = parseInt(req.params.id);
    result = toDo.delete(req.session.toDoList, id);
    res.send(result);
});

/* if any route match, we redirect to the todoList route */
app.use(function(req, res, next){
    res.redirect('/toDoList');
})

/* the port we are listen to */
app.listen(3000, function () {
    console.log('App listening on port 3000!');
});