const { User, Tweet } = require("../models");
const { format } = require("date-fns");
const { es } = require("date-fns/locale");

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
  const userProfile = await User.findOne({
    username: req.params.username,
  }).populate({ path: "tweets", options: { sort: { createdAt: -1 } } });
  return res.render("pages/profile", { userProfile, format, es });
}

module.exports = {
  followers,
  following,
  profile,
};
