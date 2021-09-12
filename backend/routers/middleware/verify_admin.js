const jwt = require("jsonwebtoken");

const verifyAdmin = async (req, res, next) => {
  try {
    if (!req.headers.authorization)
      res.status(403).json({ message: "forbidden" });

    const token = req.headers.authorization.split(" ")[1];
    const parsedToken = jwt.verify(token, "Admin");
    req.token = parsedToken;
    next();
  } catch (e) {
    res.status(403).json({ message: "forbidden" });
  }
};

module.exports = verifyAdmin;
