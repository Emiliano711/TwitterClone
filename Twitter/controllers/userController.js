const User = require("../models/User");

async function followers(req, res) {
  const userFollowers = await User.findOne({ username: req.params.username });
  const followers = userFollowers.followers;
  const users = await User.find({ _id: { $in: followers } });
  return res.render("pages/followers", { users });
}

async function following(req, res) {
  const userFollowing = await User.findOne({ username: req.params.username });
  const followings = userFollowing.following;
  const users = await User.find({ _id: { $in: followings } });
  return res.render("pages/following", { users });
}

async function profile(req, res) {
  // const users = await User.find();
  const user = await User.findOne({
    username: req.params.username,
  }).populate("tweets");
  return res.render("pages/profile", { user });
}

async function newTweet(req, res) {
  await User.create({
    newTweet: req.body.newTweet,
  });
  console.log(newTweet);
  return res.redirect("/pages/home");
}

module.exports = {
  followers,
  following,
  profile,
  newTweet,
};
