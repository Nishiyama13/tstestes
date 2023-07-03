import { Router } from "express";
import userController from "../controllers/user-controller";
import { validateSchemaMiddleware } from "../middlewares/user-middleware";
import  userSchema  from "../schemas/user-schema";

const userRouter = Router();

userRouter.get("/user", userController.getUser);
userRouter.get("/user/:id", userController.getUserById);
userRouter.post("/user", validateSchemaMiddleware(userSchema), userController.createUser)
userRouter.put("/user/:id", validateSchemaMiddleware(userSchema), userController.updateUser)
userRouter.delete("/user/:id", userController.deleteUser);

export default userRouter;