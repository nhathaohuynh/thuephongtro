import db from "../models";

export const getUser = (id) => {
  return new Promise(async (resolve, reject) => {
    
    try {
      const response = await db.User.findOne({
        where: {
          id: id,
        },
        raw: true,
        attributes: { exclude: ["password"] },
      });
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};
