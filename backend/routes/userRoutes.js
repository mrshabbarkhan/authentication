const express = require("express");
const { registerUser, loginUser } = require("../controller/userController");

const router = express.Router();

// User Register
router.post("/register", registerUser);
router.get("/register", (req, res) => {
  res.json({
    msg: "WELCOME TO REGISTER API, PLEASE MAKE A POST REQUEST",
  });
});
router.post("/login", loginUser);
router.get("/login", (req, res) => {
  res.json({
    msg: "WELCOME TO LOGIN API, PLEASE MAKE A POST REQUEST",
  });
});
module.exports = router;
