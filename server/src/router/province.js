import { getProvince } from "../controllers/province";
import express from "express";

const Router = express.Router();
Router.route("/").get(getProvince);

export default Router;
