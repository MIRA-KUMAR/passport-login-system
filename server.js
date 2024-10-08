const express = require('express');
const app = express();
const users = [];

const bcrypt = require('bcrypt');

app.set('view-engine', 'ejs');
app.use(express.urlencoded({extended: false})); //parses the form as objects of key-value pairs, so we can use those variables like - req.body.name

app.get('/', (req, res) => {
    res.render('index.ejs', {name: 'Mira'});
})

app.get('/login', (req, res) => {
    res.render('login.ejs');
})

app.get('/register', (req, res) => {
    res.render('register.ejs');
})


app.post('/register', async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email, 
            password: hashPassword
        })
        res.redirect('/login');
    } catch (err) {
        console.error('Register failed!', err);
        res.redirect('/register');
    }
    console.log(users);
})

app.listen(3000);