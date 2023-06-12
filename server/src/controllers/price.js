import * as priceService from "../services/price";

export const getPriceController = async (req, res) => {
  try {
    const response = await priceService.getPriceService();
    return res.status(200).json({
      err: 0,
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      err: 1,
      msg: `exist an error ${err} `,
    });
  }
};
