const express = require("express");
// const doctorController = require("../controllers/doctorController");
const authController = require("../controllers/authController");

const router = express.Router();

// Protect all routes in this router
router.use(authController.protect);

// Doctor-specific routes (restricted to role 'doctor')
router.use(authController.restrictTo("doctor"));

// router.get("/appointments", doctorController.getAppointments);

module.exports = router;
