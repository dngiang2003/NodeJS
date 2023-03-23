// npm init
// npm install express --save
// npm install --save-dev nodemon
// npm i

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index.html');
})

app.get('/login', (req, res) => {
  res.render('login.html');
})

app.get('/register', (req, res) => {
  res.render('register.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})