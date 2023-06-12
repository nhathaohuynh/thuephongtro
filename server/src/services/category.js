import db from "../models";

export const getCategories = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({
        raw: true,
        attributes: ["code", "value", "header", "subheader"],
      });
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};
