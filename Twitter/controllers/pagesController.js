const { Tweet, User } = require("../models");

async function register(req, res) {
  res.render("users/sign-up");
}

// Display a listing of the resource.
async function login(req, res) {
  res.render("users/login");
}
async function showHome(req, res) {
  const userFollowing = await User.findById(req.user._id);
  const followings = userFollowing.following;
  const users = await User.find({ _id: { $in: followings } }).populate("tweets")
  // Entro a un Usuario y convirtio los id de tweets en Object: tweets: [ [Object], [Object] ]
  // Esto gracias al populate
  const allTweets = []
  for (const newuser of users) {
    const tweets = await Tweet.find({ user: newuser._id }).populate("user")
    allTweets.push(...tweets);
  }
  return res.render("pages/home", { allTweets });
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

// Otros handlers...
// ...

module.exports = {
  login,
  register,
  showHome,
  showContact,
  showAboutUs,
};
