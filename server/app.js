import express from "express";
require("dotenv").config();
import cors from "cors";
import initRoute from "./src/router/initRoute";
import ConnectDB from "./src/config/db";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);

initRoute(app);

const PORT = +process.env.PORT || 8080;

const start = async () => {
  try {
    await ConnectDB();
    app.listen(PORT, (req, res) => {
      console.log(`connected to server ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
