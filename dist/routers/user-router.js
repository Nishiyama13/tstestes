"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = __importDefault(require("../controllers/user-controller"));
var user_middleware_1 = require("../middlewares/user-middleware");
var user_schema_1 = __importDefault(require("../schemas/user-schema"));
var userRouter = (0, express_1.Router)();
userRouter.get("/user", user_controller_1.default.getUser);
userRouter.get("/user/:id", user_controller_1.default.getUserById);
userRouter.post("/user", (0, user_middleware_1.validateSchemaMiddleware)(user_schema_1.default), user_controller_1.default.createUser);
userRouter.put("/user/:id", (0, user_middleware_1.validateSchemaMiddleware)(user_schema_1.default), user_controller_1.default.updateUser);
userRouter.delete("/user/:id", user_controller_1.default.deleteUser);
exports.default = userRouter;
