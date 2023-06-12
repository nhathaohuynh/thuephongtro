import db from "../models";

export const getProvince = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Province.findAll({
        raw: true,
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      resolve(response)
    } catch (err) {
      reject(err);
    }
  });
};
