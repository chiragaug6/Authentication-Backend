import express from "express";
import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);

// Route with specific middleware
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);

// router
//   .route("/profile")
//   .get(protect, getUserProfile)
//   .put(protect, updateUserProfile);

export default router;
