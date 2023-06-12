import * as areaService from "../services/area";

export const getArea = async (req, res) => {
  try {
    const response = await areaService.getArea();
    return res.status(200).json({
      err: 0,
      data: response,
    });
  } catch (err) {
    return res.status(500).json({
      err: 1,
      msg: `exist an error ${err}`,
    });
  }
};
