const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

// Protect all routes in this router
router.use(authController.protect);
router.use(authController.restrictTo("doctor"));

router.get("/:id", userController.getUser);

module.exports = router;
