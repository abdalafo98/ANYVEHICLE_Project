const jwt = require("jsonwebtoken");

const verifyCustomer = (req, res, next) => {
  try {
    if (!req.headers.authorization)
      res.status(403).json({ message: "forbidden" });

    const token = req.headers.authorization.split(" ")[1];
    const parsedToken = jwt.verify(token, "Customer");
    req.token = parsedToken;
    next();
  } catch (e) {
    res.status(403).json({ message: "forbidden" });
  }
};

module.exports = verifyCustomer;
