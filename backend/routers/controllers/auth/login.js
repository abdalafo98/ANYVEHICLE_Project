const db = require("./../../../db/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = (req, res) => {
  const { email, password } = req.body;

  //check if email exit
  const query = "SELECT * FROM users WHERE email=?";
  const data = [email];
  db.query(query, data, async (err, result) => {
    if (err) return res.status(400).send("cannot post");
    if (result[0]) {
      //compare password
      const compare = await bcrypt.compare(password, result[0].password);
      if (compare) {
        const payload = {
          id: result[0].id,
          role: result[0].role_id,
          id: result[0].id,
        };

        //Secret Key
        const secret =
          result[0].role_id === 1
            ? "Customer"
            : result[0].role_id === 2
            ? "Admin"
            : null;

        const option = {
          expiresIn: "60m",
        };

        const token = jwt.sign(payload, secret, option);

        res.status(201).json({ message: "login successfully", token: token });
        return;
      } else {
        res.json({ message: "your password is correct" });
        return;
      }
    }
    res.json({ message: "your email or password is correct" });
  });
};

module.exports = {
  login,
};
