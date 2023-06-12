import express from "express";
import { verifyToken } from "../middleware/verifyToken";
import { getUser } from "../controllers/user";
const Router = express.Router();

Router.use(verifyToken);

Router.route("/").get(getUser);

export default Router;
