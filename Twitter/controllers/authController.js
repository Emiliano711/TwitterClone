
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
    res.render("users/logout")
}


module.exports = {
    register,
    login,
    logout
};