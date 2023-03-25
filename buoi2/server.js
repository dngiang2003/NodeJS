// npm init
// npm install express --save
// npm install --save-dev nodemon
// npm i

const express = require('express');
const app = express();
const path = require('path');
const port = 3000;


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/register.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})