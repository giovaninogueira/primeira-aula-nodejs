import "express-async-errors";
import express from "express";
import { errorHandling } from "./app/middlewares/error.middleware.js";
import { router } from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandling);
app.listen(3000, () => console.log("server is running..."));
