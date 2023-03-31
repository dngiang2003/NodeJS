const express = require("express");
const { 
    getHome, 
    getLogin, 
    getReister,
    getProduct,
    getAddProduct
} = require("../controller/index.controller");

const router = express.Router();

router.get('/', getHome);
  
router.get('/login', getLogin);
  
router.get('/register', getReister);

router.get('/product', getProduct);

router.get('/add-product', getAddProduct);

module.exports = router;