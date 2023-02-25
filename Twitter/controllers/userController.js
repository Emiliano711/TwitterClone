const { User, Tweet } = require("../models");
const { format, formatDistance } = require("date-fns");
const { en } = require("date-fns/locale");



async function followers(req, res) {
  const usersInfo = await User.aggregate([{ $sample: { size: 4 } }])
  const userFollowers = await User.findOne({ username: req.params.username });
  const followers = userFollowers.followers;
  const users = await User.find({ _id: { $in: followers } });
  return res.render("pages/followers", { users, userFollowers, usersInfo });
}

async function following(req, res) {
  const usersInfo = await User.aggregate([{ $sample: { size: 4 } }])

  const userFollowing = await User.findOne({ username: req.params.username });
  const followings = userFollowing.following;
  const users = await User.find({ _id: { $in: followings } });
  return res.render("pages/following", { users, userFollowing, usersInfo });
}

async function profile(req, res) {
  const usersInfo = await User.aggregate([{ $sample: { size: 4 } }])
  // const users = await User.find();
  const userProfile = await User.findOne({
    username: req.params.username,
  }).populate({ path: "tweets", options: { sort: { createdAt: -1 } } });
  return res.render("pages/profile", { userProfile, format, en, formatDistance, usersInfo });
}

module.exports = {
  followers,
  following,
  profile,
};
