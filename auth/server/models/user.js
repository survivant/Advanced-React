const mongoose    = require('mongoose');
const bcrypt      = require('bcrypt-nodejs');

const Schema      = mongoose.Schema;

// Define the model

const userSchema = new Schema({
  email:    { type: String, unique: true, lowercase: true },
  password: String
});

// Hook on save() and encrypt password

userSchema.pre('save', function(next) {
  const user = this;

  // Generate a salt

  bcrypt.genSalt(10, function(err, salt) {
    if(err) { return next(err); }

    // Hash the pssword, using the salt

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if(err) { return next(err); }

      // Overwrite the plain-text with the encrypted password

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(entered, callback) {
  bcrypt.compare(entered, this.password, function(err, matched) {
    if(err) { return callback(err); }

    callback(null, matched)
  });
};

// Create the model class

const ModelClass = mongoose.model('user', userSchema);

// Export the model

module.exports = ModelClass;
