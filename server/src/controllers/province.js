import * as provinceService from "../services/province";

export const getProvince = async (req, res) => {
  try {
    const response = await provinceService.getProvince();
    if (!response[0]) {
      return res.status(404).json({
        err: -1,
        msg: "can not get any province",
      });
    }
    res.status(200).json({ err: 0, data: response });
  } catch (err) {
    res.status(500).json({
      err: 1,
      msg: `exist an error ${err}`,
    });
  }
};
