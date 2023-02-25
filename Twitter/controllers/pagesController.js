const { Tweet, User } = require("../models");
const { format, formatDistance } = require("date-fns");
const { en } = require("date-fns/locale");

async function register(req, res) {
  res.render("users/sign-up");
}

// Display a listing of the resource.
async function login(req, res) {
  res.render("users/login");
}

// Home
async function showHome(req, res) {
  const usersInfo = await User.aggregate([{ $sample: { size: 4 } }])
  const userFollowing = await User.findById(req.user._id);
  const followings = userFollowing.following;
  const users = await User.find({ _id: { $in: followings } }).populate("tweets")
  // Entro a un Usuario y convirtio los id de tweets en Object: tweets: [ [Object], [Object] ]
  // Esto gracias al populate
  const allTweets = []
  for (const newuser of users) {                                     // hace 1min:    24hrs
    const tweets = await Tweet.find({ user: newuser._id }).sort({ "createdAt": -1 }).populate("user")
    allTweets.push(...tweets);
  }
  return res.render("pages/home", { allTweets, format, en, formatDistance, usersInfo });
}


async function showContact(req, res) {
  res.render("pages/contact");
}

async function showAboutUs(req, res) {
  res.render("pages/aboutUs");
}

async function show404(req, res) {
  res.status(404).render("pages/404");
}


module.exports = {
  login,
  register,
  showHome,
  showContact,
  showAboutUs,
};
