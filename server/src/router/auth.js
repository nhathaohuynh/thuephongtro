import express from "express";
const Router = express.Router();
import * as authController from "../controllers/authController";

Router.route("/register").post(authController.register);
Router.route('/login').post(authController.login)

export default Router;
