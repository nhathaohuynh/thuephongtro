import express from "express";
import {
  getPost,
  getPostLimit,
  getPostCondition,
  getPostNewRealise,
} from "../controllers/post";

const Router = express.Router();

Router.route("/").get(getPost);
Router.route("/newRealise").get(getPostNewRealise);

Router.route("/").post(getPostLimit);
Router.route("/condition").post(getPostCondition);

export default Router;
