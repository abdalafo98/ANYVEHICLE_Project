const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
  try {
    if (!req.header.authorization)
      res.status(403).json({ message: "forbidden" });
    const token = req.header.authorization.split(" ")[1];

    const parsedToken = jwt.verify(token, "Admin");
    req.token = parsedToken;
    next();
  } catch (e) {
    res.status(403).json({ message: "forbidden" });
  }
};

module.exports = verifyAdmin;
