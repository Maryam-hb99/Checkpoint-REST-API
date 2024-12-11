// models/User.js

const mongoose = require('mongoose');

// Define a Mongoose schema for User
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true }
});

// Create a Mongoose model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
