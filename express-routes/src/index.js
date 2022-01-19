const express = require("express");
const router = require("./routes");
const app = express();

app.use(express.json());

// middleware especifica
app.use("/user", (req, resp, next) => {
  console.log("Time:", Date.now());
  req.body.dateRequest = Date.now();
  next();
});

app.use(router);

app.listen(3000, () => console.log("server is running..."));
