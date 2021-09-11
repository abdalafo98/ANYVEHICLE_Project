const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "anyvehicle_Project",
});

connection.connect((err) => {
  if (err) {
    console.log(`err connection: ${err.stack}`);
    return;
  }
  console.log(`id is: ${connection.threadId}`);
});

module.exports = connection;
