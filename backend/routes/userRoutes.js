const express = require("express");
const { registerUser, loginUser } = require("../controller/userController");

const router = express.Router();

// User Register
router.post("/register", registerUser);
router.post("/register", (req, res) => {
  res.json({
    msg: "WELCOME TO REGISTER API, PLEASE MAKE A POST REQUEST",
  });
});
router.post("/login", loginUser);
router.post("/login", (req, res) => {
  res.json({
    msg: "WELCOME TO LOGIN API, PLEASE MAKE A POST REQUEST",
  });
});
module.exports = router;
