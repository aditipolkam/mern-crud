const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true,
        unique: true
    },
    userAge: {
        type: Number,
        required: true
    },
    userContact: {
        type: Number,
        required: true
    },
    userWork: {
        type: String,
        required: true
    },
    userAddress: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

const users = new mongoose.model('users', userSchema);

module.exports = users;