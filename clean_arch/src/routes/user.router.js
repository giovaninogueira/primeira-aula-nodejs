import { Router } from "express";
import { createUserController } from "./../app/controllers/user/create/index.js";

const router = Router();

router.post("/user", createUserController.execute.bind(createUserController));

export default router;
