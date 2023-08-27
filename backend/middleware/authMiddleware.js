import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  //cookie parcer is require here
  let token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //in generateToken userId is pass as a payload to token
      req.user = await User.findById(decoded.userId).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not Authorized , Invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Not Authorized , no token");
  }
});

export { protect };
