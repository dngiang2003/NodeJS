// npm init
// npm install express --save
// npm install --save-dev nodemon
// npm i
// npm install ejs

const express = require('express');
const app = express();
const path = require('path');
const router = require('./router/product.route');
const port = 3000;

app.use(express.urlencoded()); // form
app.use(express.json()); // json
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');
app.use("/static", express.static(path.join(__dirname, 'public')));
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});