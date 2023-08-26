import express, { urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";
import { NotFound, errorHandler } from "./middleware/errorMiddleware.js";

const PORT = process.env.PORT || 5000;
import connectToDB from "./config/db.js";

connectToDB();

const app = express();

// Middleares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
