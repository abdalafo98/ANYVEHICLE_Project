const express = require("express");

const { signup } = require("./../../controllers/auth/signup");

const signupRoute = express.Router();

signupRoute.post("/signup", signup);

module.exports = signupRoute;
