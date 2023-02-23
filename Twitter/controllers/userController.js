const User = require("../models/User");

async function followers(req, res) {
  const userFollowers = await User.findOne({ username: req.params.username })
  return res.render("pages/followers", { userFollowers })
}

async function following(req, res) {
  const userFollowing = await User.findOne({ username: req.params.username })
  return res.render("pages/following", { userFollowing })
}

async function profile(req, res) {
  return res.render("pages/profile")
}

module.exports = {
  followers,
  following,
  profile
};
