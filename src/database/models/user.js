const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const usersSchema = new mongoose.Schema({
    id: {
      type: String,
      required:true,
    },
    name: {
      type: String,
      required:true,
    },
    email: {
      type: String,
      required:true,
    },
    phone: {
      type: String,
      required:true,
    },
    username: {
      type: String,
      required:true,
    },
    gender: {
      type: String,
      required:true,
    },
    password: {
      type: String,
      required:true,
    },
    date_of_birth: {
      type:Date,
      required:true
    },
})

usersSchema.methods.generateAuthToken = function() {
  return jwt.sign(
    {
      sub: this._id,
      username: this.username,
    },
    process.env.JWT_SECRET, // Secret key from environment variables
    { expiresIn: '2 days' } // Token expiration time
  );
};

module.exports = mongoose.model('Users', usersSchema);