const express = require("express");
const userRoutes = express.Router();
const {
  selectAllUser,
  createUser,
  loginUser,
  updateUsers,
  checkEmail,
  getUser,
} = require("../controllers/usersControllers");

userRoutes.get("/api/select", selectAllUser);
userRoutes.get("/get-user", getUser);

userRoutes.post("/users/check-email", checkEmail);
userRoutes.post("/new-user", createUser);

userRoutes.post("/login", loginUser);

userRoutes.put("/users/edit/profile/:id", updateUsers);

module.exports = userRoutes;

