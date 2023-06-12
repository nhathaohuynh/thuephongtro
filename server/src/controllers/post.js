import { query } from "express";
import * as postService from "../services/post";

export const getPost = async (req, res) => {
  try {
    const response = await postService.getPosts();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      err: 1,
      msg: `exist an error : ${err}`,
    });
  }
};

export const getPostLimit = async (req, res) => {
  try {
    const { page } = req.query;
    const response = await postService.getPostPagination(page);
    if (!response)
      return res.status(404).json({
        errr: -1,
        msg: "Does not exist any post",
      });
    res.status(200).json({
      err: 0,
      msg: "Getting Post pagination to successfully",
      data: response,
    });
  } catch (err) {
    return res.status(500).json({
      err: 1,
      msg: `exist an error ${err} `,
    });
  }
};

export const getPostCondition = async (req, res) => {
  const { page, ...condition } = req.query;
  try {
    const response = await postService.getPostCondition(page, condition);
    if (!response) {
      return res.status(404).json({
        err: -1,
        msg: "Does not exist any post",
      });
    }
    return res.status(200).json({
      err: 0,
      msg: "Getting post is successfully",
      data: response,
    });
  } catch (err) {
    res.status(400).json({
      err: 1,
      msg: `exist an error ${err}`,
    });
  }
};

export const getPostNewRealise = async(req,res) => {
  try {
    const response = await postService.getPostNewRealise();
    if(!response.rows){
      return res.status(404).json({
        err : -1 , 
        msg : 'can not get any post'
      })
    }
    res.status(200).json({
      err : 0,
      msg : 'getting new  post is succesfully',
      data : response ,
    })

  }
  catch(err){
    res.status(500).json({
      err : 1 , 
      msg : `exist an err ${err}`
    })
  }
}
