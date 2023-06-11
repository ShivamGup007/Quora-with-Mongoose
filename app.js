const path = require('path');
const express = require('express');
const app = express();
const PORT = 8859;
const bodyparser = require('body-parser');
const hbs = require('hbs');
const mongoose = require('mongoose');

const Users = require('./models/users');

app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use('/login',require('./routes/login'));
app.use('/signup',require('./routes/signup'));
app.use('/followUsers',require('./routes/allUsers'));
app.use('/addPost',require('./routes/addPost'));

mongoose.connect('mongodb://127.0.0.1/testdb')
    .then(()=>{
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch(err=>{
        console.log("Connection err: ",err);
    })