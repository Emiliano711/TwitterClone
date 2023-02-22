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
    image: {
        type: String,
        required: [true, 'Inserte una imagen']
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
    following: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    tweets: [{
        type: Schema.Types.ObjectId,
        ref: 'Tweet'
    }]
    //Validaciones en general TO DO
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

module.exports = User