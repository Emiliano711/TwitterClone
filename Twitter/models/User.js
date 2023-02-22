const { Schema, mongoose } = require("../db")

const userSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'Inserte un nombre']
    },
    lastname: {
        type: String,
        required: [true, 'Inserte un apellido']
    },
    username: {
        type: String,
        required: [true, 'Inserte un nickname']
    },
    password: {
        type: String,
        required: [true, 'Inserte un nickname']
    },
    email: {
        type: String,
        required: [true, 'Inserte un email']
    },
    description: {
        type: String,
    },
    tweets: [{
        type: Schema.Types.ObjectId,
        ref: 'Tweet'
    }],
    following: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

module.exports = User