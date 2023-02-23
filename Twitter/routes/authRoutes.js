const passport = require("passport");
const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated")
const authController = require("../controllers/authController")

/**
 * Se sugiere usar este archivo para crear rutas relativas al proceso de
 * autenticación. Ejemplos: "/login" y "/logout".
 */

router.get("/register", authController.register);
router.post("/login", authController.loginPassport);
router.get("/login", authController.login);
router.get('/:username', isAuthenticated, authController.profile);
router.post("/logout", authController.logout);

module.exports = router;
