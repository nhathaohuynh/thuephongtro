import * as userService from "../services/user";

export const getUser = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await userService.getUser(id);

    if (!response.id) {
      return res.status(404).json({
        err: 1,
        msg: "can not find user",
      });
    }

    res.status(200).json({
      err: 0,
      data: response,
    });
  } catch (err) {
    res.status(400).json({
      err: -1,
      msg: `exist an error : ${err}`,
    });
  }
};
