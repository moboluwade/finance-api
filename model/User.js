const mongoose = require('mongoose');

const userSchema = new Schema({
    id: mongoose.ObjectId,
    email: String,
    password: String,
    acccount_number: String,
    Balance: {
        type: Number //:String
    }
})

module.exports = mongoose.model('User', userSchema)
