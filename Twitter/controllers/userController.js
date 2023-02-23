const User = require("../models/User");

async function followers(req, res) {
  const users = await User.find()
  return res.render("pages/followers", { users })
}

async function following(req, res) {
  const users = await User.find()
  return res.render("pages/following", { users })
}

async function profile(req, res) {
  return res.render("pages/profile")
}

module.exports = {
  followers,
  following,
  profile
};
