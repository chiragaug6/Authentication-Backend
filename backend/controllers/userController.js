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
  // const { name, email, password } = req.body;

  const userExits = await User.findOne({ email: req.body.email });

  if (userExits) {
    res.status(400);
    throw new Error("User already exits");
  }

  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
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
