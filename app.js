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

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
    console.log('ToDoList Server active on http://localhost:' + process.env.PORT);
});