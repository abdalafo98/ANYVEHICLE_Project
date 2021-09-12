const db = require("./../../db/db");

//get all orders
const getAllOrdered = (req, res) => {
  const query =
    "SELECT users.firstName , users.lastName , users.email ,maintenances.* FROM maintenances INNER JOIN users ON maintenances.user_id = users.id";
  db.query(query, (err, result) => {
    if (err) {
      return res.status(400).json({ message: "Cannot Get" });
    }
    res.status(200).json(result);
  });
};

// change Status Order ("accepted","pending","dismissed")
const changeStatusOrder = (req, res) => {
  const statusOrder = req.body.orderStatus;
  const orderId = req.body.orderId;
  const query = "UPDATE maintenances SET order_status=? WHERE id=?";
  const data = [statusOrder, orderId];
  db.query(query, data, (err, result) => {
    if (err) {
      return res.status(400).json({ message: "Cannot Update" });
    }
    res.status(200).json({ message: "Update is Successfully" });
  });
};

module.exports = {
  getAllOrdered,
  changeStatusOrder,
};
