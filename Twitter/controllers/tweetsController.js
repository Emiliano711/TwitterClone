const { User, Tweet } = require("../models");

async function newTweet(req, res) {
    const newTweet = new Tweet({
        user: req.user.id,
        text: req.body.newTweet,
    });
    newTweet.save();
    await User.findByIdAndUpdate(req.user.id,
        { $push: { tweets: newTweet } }
    );
    return res.redirect("/");
}

async function deleteTweet(req, res) {
    await Tweet.findByIdAndDelete(req.params.id)
    await User.findByIdAndUpdate(req.user.id,
        { $pull: { tweets: req.params.id } }
    );
    return res.redirect(`/usuarios/${req.user.username}`)
}

module.exports = {
    newTweet,
    deleteTweet
};
