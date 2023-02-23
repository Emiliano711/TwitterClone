const User = require("../models/User");

// Display the specified resource.
async function show(req, res) { }

// Show the form for creating a new resource
async function create(req, res) { }

// Store a newly created resource in storage.
async function store(req, res) { }

// Show the form for editing the specified resource.
async function edit(req, res) { }

// Update the specified resource in storage.
async function update(req, res) { }

// Remove the specified resource from storage.
async function destroy(req, res) { }

async function followers(req, res) {
  const users = await User.find()
  res.render("pages/followers", { users })
}

async function following(req, res) {
  const users = await User.find()
  res.render("pages/following", { users })
}

async function profile(req, res) {
  res.render("pages/profile")
}

// Otros handlers...
// ...

module.exports = {
  show,
  create,
  store,
  edit,
  update,
  destroy,
  followers,
  following,
  profile
};
