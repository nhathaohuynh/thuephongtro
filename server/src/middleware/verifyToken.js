import jwt from "jsonwebtoken";
require("dotenv").config();

export const verifyToken = (req, res, next) => {
  const accessToken = req.headers.authorization.split(" ")[1];

  if (!accessToken)
    return res.status(401).json({
      err: -1,
      msg: `Missing access token`,
    });

  jwt.verify(accessToken, process.env.SECRET_KEY, (err, user) => {
    if (err)
      return res.status(401).json({
        err: -1,
        msg: "access token exprired",
      });
    (req.user = user), next();
  });
};
