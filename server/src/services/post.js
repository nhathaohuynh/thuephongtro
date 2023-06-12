import { where } from "sequelize";
import db from "../models";
require("dotenv").config();

export const getPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        nest: true,
        include: [
          {
            model: db.Image,
            as: "images",
            attributes: ["image"],
          },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: { exclude: ["createdAt", "updatedAt", "id"] },
          },
          {
            model: db.User,
            as: "user",
            attributes: ["name", "zalo", "phone"],
          },
        ],

        attributes: [
          "id",
          "title",
          "star",
          "address",
          "description",
          "areaCode",
        ],
      });

      if (!response) {
        return resolve({
          err: 2,
          msg: "Getting posts is failed",
        });
      }
      resolve({
        err: 0,
        msg: "getting post is successfully",
        data: response,
      });
    } catch (err) {
      reject(err);
    }
  });

export const getPostPagination = (page) => {
  return new Promise(async (resolve, reject) => {
    const offset = page * +process.env.LIMIT - +process.env.LIMIT || 0;
    try {
      const response = await db.Post.findAndCountAll({
        raw: true,
        nest: true,
        include: [
          {
            model: db.Image,
            as: "images",
            attributes: ["image"],
          },
          {
            model: db.User,
            as: "user",
            attributes: ["name", "phone", "zalo"],
          },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: { exclude: ["createAt", "updateAt", "id"] },
          },
        ],
        attributes: ["id", "title", "star", "address", "description"],
        offset,
        limit: +process.env.LIMIT,
      });
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};

export const getPostCondition = (page, condition) => {
  return new Promise(async (resolve, reject) => {
    const offset = +page * +process.env.LIMIT - +process.env.LIMIT || 0;
    try {
      const response = await db.Post.findAndCountAll({
        raw: true,
        where: condition,
        nest: true,
        include: [
          {
            model: db.Image,
            as: "images",
            attributes: ["image"],
          },
          {
            model: db.User,
            as: "user",
            attributes: ["name", "zalo", "phone"],
          },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: { exclude: ["createdAt , updatedAt, id"] },
          },
        ],
        offset,
        limit: +process.env.LIMIT,
        attributes: ["id", "title", "star", "address", "description"],
      });
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};

export const getPostNewRealise = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAndCountAll({
        raw: true,
        nest: true,
        offset: 0,
        limit: 10,
        order: [["createdAt", "DESC"]],
        include: [
          {
            model: db.Attribute,
            attributes: ["price", "published"],
            as: "attributes",
          },
          {
            model: db.Image,
            attributes: ["image"],
            as: "images",
          },
        ],
        attributes: ["title", "id", "createdAt"],
      });
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};
