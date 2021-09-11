const express = require("express");
const { login } = require("./../../controllers/auth/login");

const loginRoute = express.Router();

loginRoute.post("/login", login);

module.exports = loginRoute;
