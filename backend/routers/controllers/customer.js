const db = require("../../db/db");

//create new order by user_id
const createOrder = (req, res) => {
  const {
    phoneNumber,
    vehicleType,
    make,
    year,
    vehicleId,
    problem,
    dateOfService,
  } = req.body;
  const userId = req.token.id;

  const query = `INSERT INTO maintenances (Phone_number,vehicle_type,make,year,vehicle_id,problem,date_of_service,user_id) VALUES (?,?,?,?,?,?,?,?)`;
  const data = [
    phoneNumber,
    vehicleType,
    make,
    year,
    vehicleId,
    problem,
    dateOfService,
    userId,
  ];
  db.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(400)
        .json({ message: "Create order is not successfully" });
    }
    res.status(201).json({ message: "Create order is successfully" });
  });
};

//get all Customer ordered by user_id
const getOrderCustomerById = (req, res) => {
  const userId = req.token.id;

  const query = "SELECT * FROM maintenances WHERE user_id= ?";
  const data = [userId];
  db.query(query, data, (err, result) => {
    if (err) return res.status(400).json({ message: "cannot get you ordered" });
    res.status(200).json(result);
  });
};

module.exports = { createOrder, getOrderCustomerById };
