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
async function logout(req, res) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect("/login");
    });
}

/*^// MI LOGOUT: juanma
async function logout(req, res) {
    req.logout(function (err) {
        //if (err) { return next(err); }
        res.redirect("/");
    });
} */

//* / LOGOUT DE JOSE:
/* async function logout(req, res, next) {
   req.session.destroy();
   res.redirect("/");
} */

const loginPassport = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
});

module.exports = {
    register,
    login,
    logout,
    loginPassport,
};