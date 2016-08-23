const passport      = require('passport');
const JwtStrategy   = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local');
const ExtractJwt    = require('passport-jwt').ExtractJwt;

const User          = require('../models/user');
const config        = require('../config');

// Create the local Strategy

const localOptions = { usernameField: 'email' };

const localLogin   = new LocalStrategy(localOptions, function(email, password, done) {
  // Verify the username (email address) and password
  // If OK, call done() with the user
  // Otherwise call done() with no user

  User.findOne({ email: email }, function(err, user) {
    if(err)   { return done(err, false); }    // Error occurred in lookup
    if(!user) { return done(null, false); }   // User doesn't exist

    // User exists, has the right password been entered?

    user.comparePassword(password, function(err, matched) {
      if(err)       { return done(err, false); }  // Error comparing
      if(!matched)  { return done(null, false); } // Passwords don't match

      return done(null, user);
    });
  });
});


// Create the JWT Strategy

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey:    config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the User ID in the payload exists
  // if so call done() with the user
  // Otherwise call done() without a user object.

  User.findById(payload.sub, function(err, user) {
    if(err) { return done(err, false); }

    if(user) {
      done(null, user);
    }
    else {
      done(null, false);
    }
  });
});

// Tell passport to use both strategies

passport.use(jwtLogin);
passport.use(localLogin);
