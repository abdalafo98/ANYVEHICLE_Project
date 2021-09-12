const express = require("express");
const { getAllOrdered, changeStatusOrder } = require("./../controllers/admin");
const auth = require("./../middleware/verify_admin");

const admin = express.Router();

admin.get("/all/order", auth, getAllOrdered);
admin.patch("/change/status/order", auth, changeStatusOrder);

module.exports = admin;
