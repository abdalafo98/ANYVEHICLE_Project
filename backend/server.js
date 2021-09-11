const express = require("express");
require("./db/db");
const cors = require("cors");

const signup = require("./routers/routes/auth/signup");
const login = require("./routers/routes/auth/login");

const app = express();
//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//routers
app.use(signup);
app.use(login);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server On http://localhost:${PORT}`);
});
