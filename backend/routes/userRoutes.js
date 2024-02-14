import express from "express";
import userController from "../controllers/userController.js";

const userRouter = express.Router();
userRouter.get("/users/:id", userController.getUserById);
userRouter.get("/users", userController.getAllUsers);
userRouter.post("/users", userController.createUser);
userRouter.put("/users/:id", userController.updateUser);
userRouter.delete("/users/:id", userController.deleteUser);

export default userRouter;
