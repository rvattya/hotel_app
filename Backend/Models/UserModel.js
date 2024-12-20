const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true ,index: true },
    password: { type: String, required: true },
    phone: {type: String, required: true},
    role: {type: String,  enum: ['user','admin'], default: 'user'},
    profileImage: { type: String, default: '' }, // URL or path for profile image
    createdAt: {type: Date,default: Date.now}

});

const User = mongoose.model('User', userSchema);

module.exports = User;

