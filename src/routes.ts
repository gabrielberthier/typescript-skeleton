import { Router } from "express";

import { userController } from "./controllers/UserController"

const routes = Router();

routes.get("/users", userController.index);

export default routes;