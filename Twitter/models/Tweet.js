const { Schema, mongoose } = require("../db")

const tweetSchema = new Schema({
    text: {
        type: String,
        minlength: 1,
        maxlength: 140,
        required: [true, 'Inserte un texto']
    },
    author: {
        type: String,
        required: [true, 'Inserte un author']
    },
    likes: {
        type: Number,
    },
}, { timestamps: true })
const Tweet = mongoose.model("Tweet", tweetSchema)

module.exports = Tweet