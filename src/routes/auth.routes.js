const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const authUser = require("../middleware/auth.middleware");

router.post("/register", authController.registerController);
router.post("/login", authController.loginController);
router.get("/profile", authUser, authController.profileController);

module.exports = router;
