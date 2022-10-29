// Import modules

const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const mysql2 = require('mysql2');
const fs = require('fs');
const bcrypt = require('bcrypt');
const pug = require('pug');
const cookieParser = require('cookie-parser');
const TokenGenerator = require('uuid-token-generator');

// ENV

require('dotenv').config()

// BCrypt

const saltRounds = 10;

// Express

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.set('view engine', 'pug');

// Routes

let todoList = {
    "1": {
        "id": 1,
        "title": "First todo",
        "description": "This is the first todo",
    },
};

app.get('/', (req, res) => {
    res.render("index", {todos: todoList});
});

app.get('/todos/delete/:id', (req, res) => {
    delete todoList[req.params.id];
    res.redirect('/');
});

app.post('/todos/add', (req, res) => {

    // check if the todo title and description are empty
    if (req.body.title === "" || req.body.description === "") {
        res.redirect('/');
    } else {
        let id = Math.floor(Math.random() * 1000000);
        todoList[id] = {
            "id": id,
            "title": req.body.title,
            "description": req.body.description,
        };
        res.redirect('/');
    }
});

app.listen(process.env.PORT, () => {
    console.log('ToDoList Server active on http://localhost:' + process.env.PORT);
});