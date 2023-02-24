const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const isAuthenticated = require("../middlewares/isAuthenticated");

// Rutas relacionadas a Profile, Followers, Following

// Hay que agregarle el /:user a las rutas NO OLVIDAR
router.use(isAuthenticated);
router.get("/:username", userController.profile);
router.get("/:username/followers", userController.followers);
router.get("/:username/following", userController.following);
router.post("/", userController.newTweet);
// router.get("/", userController.index);
/* router.get("/", userController.index); */
// router.get("/:id", userController.show);

// router.get("/editar/:id", userController.edit);
// router.patch("/:id", userController.update);
// router.delete("/:id", userController.destroy);

module.exports = router;
