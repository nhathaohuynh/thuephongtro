import * as categoriesService from "../services/category";

export const getCategory = async (req, res) => {
  try {
    const response = await categoriesService.getCategories();
    return res.status(200).json({
      err: 0,
      data: response,
    });
  } catch (err) {
    return res.status(500).json({
      err: -1,
      msg: `Fail at category controller : ${err}`,
    });
  }
};
