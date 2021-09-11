const db = require("./../../../db/db");
const bcrypt = require("bcrypt");

const signup = (req, res) => {
  const { firstName, lastName, email, password, role_id } = req.body;

  //check if user exist in database
  const a = "SELECT email FROM users WHERE email = ? ";
  const data = [email];

  db.query(a, data, async (err, result) => {
    if (result.length >= 1) {
      res.json({ message: "email is exist" });
      return;
    } else {
      //bcrypt password
      const pass = await bcrypt.hash(password, 10);

      //insert info user to database
      const query =
        "INSERT INTO users (firstName,lastName,email,password,role_id) VALUES (?,?,?,?,?)";
      const data = [firstName, lastName, email, pass, role_id];
      db.query(query, data, (err, result2) => {
        if (err)
          return res
            .status(500)
            .json({ message: "Create User is not successfully" });
        res.status(201).json({ message: "Create User is successfully" });
      });
    }
  });
};
module.exports = {
  signup,
};
