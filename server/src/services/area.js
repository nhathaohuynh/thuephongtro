import db from "../models";

export const getArea = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Area.findAll({
        raw: true,
        attributes: ["order", "value", "code"],
      });
      if (!response[0]) {
        resolve({
          err: -1,
          msg: "fail to getting eare data",
        });
      }
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};
