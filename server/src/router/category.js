import express from "express";
import * as categoriesController from "../controllers/categoryController";

const Router = express.Router();

Router.route("/").get(categoriesController.getCategory);


export default Router