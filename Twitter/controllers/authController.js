const passport = require("passport");
const bcrypt = require("bcryptjs");
const { User } = require("../models");
const formidable = require("formidable");

async function register(req, res) {
    res.render("users/register")
}

// Login Page.
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

//  Crear usuario en la DB
function createUser(req, res) {
    const form = formidable({
        multiples: true,
        uploadDir: __dirname + "/../public/img",
        keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
        const passwordParaHashear = fields.password;
        //const passwordHasheado = await bcrypt.hash(passwordParaHashear, 8);
        await User.create({
            firstname: fields.firstname,
            lastname: fields.lastname,
            email: fields.email,
            username: fields.username,
            image: files.image.newFilename,
            password: await bcrypt.hash(fields.password, 8)
        })
        /* user.save() */
    })
    return res.redirect("/");

}


async function createUser(req, res) {
    const passwordParaHashear = req.body.password;
    const passwordHasheado = await bcrypt.hash(passwordParaHashear, 8);
    const nuevoUsuario = await User.create({
        email: req.body.email,
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: passwordHasheado,
    });
    res.redirect("/");
}














const loginPassport = passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
});


module.exports = {
    register,
    login,
    logout,
    loginPassport,
    createUser,
};