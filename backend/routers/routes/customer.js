const express = require("express");
const {
  createOrder,
  getOrderCustomerById,
} = require("../controllers/customer");
const auth = require("../middleware/verify_customer");
const maintenances = express.Router();

maintenances.post("/order", auth, createOrder);
maintenances.get("/order", auth, getOrderCustomerById);

module.exports = maintenances;
