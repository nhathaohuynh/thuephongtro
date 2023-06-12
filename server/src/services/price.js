import db from "../models";

export const getPriceService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Price.findAll({
        raw: true,
        attributes: ["order", "value","code"],
      });
      if (!response[0]) {
        resolve({
          err: 1,
          msg: "fail to getting price",
        });
      }
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};
