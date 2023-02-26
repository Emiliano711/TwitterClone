const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const tweetsController = require("../controllers/tweetsController");
const isAuthenticated = require("../middlewares/isAuthenticated");

// Rutas relacionadas a Profile, Followers, Following

// Hay que agregarle el /:user a las rutas NO OLVIDAR
router.use(isAuthenticated);
router.get("/:username", userController.profile);
router.get("/:username/followers", userController.followers);
router.get("/:username/following", userController.following);
router.put("/", tweetsController.newTweet);
router.delete("/:id", tweetsController.deleteTweet);
router.put("/tweets/:id/add", tweetsController.addLikeTweet);
router.put("/tweets/:id/rm", tweetsController.removeLikeTweet);
router.put("/banner", userController.bannerEdit)
// router.get("/", userController.index);
/* router.get("/", userController.index); */
// router.get("/:id", userController.show);

// router.get("/editar/:id", userController.edit);
// router.patch("/:id", userController.update);
// router.delete("/:id", userController.destroy);

module.exports = router;
