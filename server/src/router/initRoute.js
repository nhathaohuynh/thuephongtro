import authRoute from "./auth";
import categoriesRoute from "./category";
import postRoute from "./post";
import priceRoute from "./price";
import areaRoute from "./area";
import provinceRoute from "./province";
import userRoute from "./user";

const initRoute = (app) => {
  app.use("/api/v1/auth", authRoute);

  app.use("/api/v1/category", categoriesRoute);

  app.use("/api/v1/post", postRoute);

  app.use("/api/v1/price", priceRoute);

  app.use("/api/v1/area", areaRoute);

  app.use("/api/v1/province", provinceRoute);

  app.use("/api/v1/user", userRoute);

  return app.use("/", (req, res) => {
    res.json("hello bay");
  });
};

export default initRoute;
