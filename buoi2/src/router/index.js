const express = require("express");
const { 
    getHome, 
    getLogin, 
    getReister 
} = require("../controller/index.controller");

const router = express.Router();

router.get('/', getHome);
  
router.get('/login', getLogin);
  
router.get('/register', getReister);

module.exports = router;