import express from "express";
import * as areaController from "../controllers/area";

const Router = express.Router();

Router.route("/").get(areaController.getArea);

export default Router;
