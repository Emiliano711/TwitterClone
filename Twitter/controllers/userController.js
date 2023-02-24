const { User, Tweet } = require("../models");

async function followers(req, res) {
  const userFollowers = await User.findOne({ username: req.params.username });
  const followers = userFollowers.followers;
  const users = await User.find({ _id: { $in: followers } });
  return res.render("pages/followers", { users, userFollowers });
}

async function following(req, res) {
  const userFollowing = await User.findOne({ username: req.params.username });
  const followings = userFollowing.following;
  const users = await User.find({ _id: { $in: followings } });
  return res.render("pages/following", { users, userFollowing });
}

async function profile(req, res) {
  // const users = await User.find();
  const user = await User.findOne({
    username: req.params.username,
  }).populate("tweets");
  return res.render("pages/profile", { user });
}

module.exports = {
  followers,
  following,
  profile,
};
