// npm init
// npm install express --save
// npm install --save-dev nodemon
// npm i
// npm install ejs

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/login', (req, res) => {
  res.render('login')
});

app.get('/register', (req, res) => {
  res.render('register')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})