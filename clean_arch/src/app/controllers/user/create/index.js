import { UserModel } from "./../../../models/user.model.js";
import { UserService } from "./../../../services/user.service.js";
import { CreateUserController } from "./create-user.controller.js";

const userService = new UserService(UserModel);
const createUserController = new CreateUserController(userService);

export { createUserController };
