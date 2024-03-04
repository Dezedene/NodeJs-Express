const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// le user a une adresse mail unique, est unique
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
