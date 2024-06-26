const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

// Protect
router.use(authController.protect);

router.use(authController.restrictTo("user"));
router.get("/me", userController.getMe, userController.getUser);

// user routes

module.exports = router;
