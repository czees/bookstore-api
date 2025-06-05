const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username: {},
    email: {},
    password: {},
    timestamp: {},
    role: {}
})


module.exports = mongoose.model('User', UserSchema);