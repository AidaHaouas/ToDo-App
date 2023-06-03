const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
})

const userModel = new mongoose.model("users", userSchema);

module.exports = userModel;
