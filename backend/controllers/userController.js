import User from "../models/userModel.js";

// @desc    Auth user or set token
// @route   POST => /api/users/auth
// @access  Public
const authUser = (req, res) => {
  res.status(200).json({ message: "Auth user" });
};

// @desc    Register a new user
// @route   POST => /api/users
// @access  Public
const registerUser = async (req, res) => {
  res.status(200).json({ message: "register user" });
};

// @desc    logout a user
// @route   POST => /api/users/logout
// @access  Public
const logoutUser = (req, res) => {
  res.status(200).json({ message: "logout User" });
};

// @desc    Get user profile
// @route   POST => /api/users/profile
// @access  Private
const getUserProfile = (req, res) => {
  res.status(200).json({ message: "User Profile" });
};

// @desc    update user profile
// @route   PUT => /api/users/profile
// @access  Private
const updateUserProfile = (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
};

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
