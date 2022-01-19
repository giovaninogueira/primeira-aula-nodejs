const express = require("express");

const router = express.Router();

router.get("/version", (req, resp) => {
  resp.send({
    version: "1.0.0",
  });
});

router.get("/user/:id", (req, resp) => {
  resp.send({
    userID: req.params.id,
  });
});

router.get("/users", (req, resp) => {
  resp.send({
    qurys: req.query,
  });
});

router.post("/user", (req, resp) => {
  const { body } = req;
  const id = new Date().getTime();
  resp.status(201).send({ id, ...body });
});

//http://localhost:3000/user?name="Giovani"

module.exports = router;
