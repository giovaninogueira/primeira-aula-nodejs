import { Router } from "express";
import routerUser from "./user.router.js";

const router = Router();

router.use(routerUser);

export { router };
