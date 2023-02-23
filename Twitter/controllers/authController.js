const passport = require("passport");
//
async function register(req, res) {
    res.render("users/register")
}

// Display a listing of the resource.
async function login(req, res) {
    res.render("users/login")
}

// Display a listing of the resource.
function logout(req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect("/login");
    });
}

const loginPassport = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
});

async function profile(req, res) {
    res.render("pages/profile")
}

module.exports = {
    register,
    login,
    logout,
    loginPassport,
    profile
};