const express = require("express");
const {
  login
} = require("../controllers/auth.controller");

const loginUser = express.Router();

loginUser
  .route("/login")
  .post(login);

module.exports = loginUser;
