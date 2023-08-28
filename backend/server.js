import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectToDB from "./config/db.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import { NotFound, errorHandler } from "./middleware/errorMiddleware.js"; // Import your middleware functions

const PORT = process.env.PORT || 5000;

connectToDB();

const app = express();

// Middleware applied to all routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);

app.use(NotFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server Running at Port ${PORT}`);
});

// POST => /api/users  => Register a User
// POST => /api/users/auth => authenticate a user a get token
// POST => /api/user/logout => logout User and clear cookie
// GET => /api/users/profile  => get User profile
// PUT => /api/users/profile => Update Profile
