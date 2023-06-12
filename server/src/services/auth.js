import db from "../models";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import crypto from "crypto";
require("dotenv").config();

// const hashPassword = (password) =>
//   bcrypt.hashSync(password, bcrypt.genSaltSync(12));
// export const registerService = ({ name, phone, password }) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const response = await db.User.findOrCreate({
//         where: { phone },
//         defaults: {
//           phone,
//           name,
//           password: hashPassword(password),
//           id: crypto.randomUUID(),
//         },
//       });
//       const token =
//         response[1] &&
//         jwt.sign(
//           { id: response[0].id, phone: response[0].phone },
//           process.env.SECRET_KEY,
//           { expiresIn: "2d" }
//         );
//       resolve({
//         err: token ? 0 : 2,
//         msg: token
//           ? "Register is successfully !"
//           : "Phone number has been already used",
//         token: token || null,
//       });
//     } catch (err) {
//       reject(err);
//     }
//   });
// };
const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));
export const registerService = ({ name, phone, password }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: { phone },
        defaults: {
          phone,
          name,
          password: hashPassword(password),
          id: crypto.randomUUID(),
        },
      });

      if (!response[1]) {
        return resolve({
          err: 2,
          msg: "Phone number has been already used",
        });
      }

      const token = jwt.sign(
        { id: response[0].id, phone: response[0].phone },
        process.env.SECRET_KEY,
        { expiresIn: "2d" }
      );

      resolve({
        err: 0,
        mgs: "register is successfully",
        token,
      });
    } catch (err) {
      reject(err);
    }
  });
};

export const loginService = ({ phone, password }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { phone },
        raw: true,
      });

      if (!response)
        return resolve({
          err: 2,
          msg: "Phone number is not exist",
        });

      const isCorrectPassword = bcrypt.compareSync(password, response.password);
      if (!isCorrectPassword)
        return resolve({
          err: 2,
          msg: "Password is invalid",
        });

      const token = jwt.sign(
        { id: response.id, phone: response.phone },
        process.env.SECRET_KEY,
        { expiresIn: "2d" }
      );

      resolve({
        err: 0,
        msg: "Login to successfully",
        token,
      });
    } catch (err) {
      reject(err);
    }
  });
};
