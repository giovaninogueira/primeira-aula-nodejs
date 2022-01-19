const express = require("express");
const DatabaseConnection = require("./../config/connection-db");

const router = express.Router();

router.get("/users", async (req, resp) => {
  const databaseConnection = new DatabaseConnection();
  const db = await databaseConnection.connect();
  const { rows } = await db.query("select * from users");
  resp.send(rows);
});

router.post("/user", async (req, resp) => {
  const { body } = req;
  const { name, email, password } = body;
  const databaseConnection = new DatabaseConnection();
  const db = await databaseConnection.connect();
  const { rows } = await db.query(
    "insert into users (name, email, password) values($1, $2, $3) RETURNING *",
    [name, email, password]
  );
  resp.status(201).send(rows);
});

module.exports = router;
