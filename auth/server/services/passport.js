const passport      = require('passport');
const JwtStrategy   = require('passport-jwt').Strategy;
const ExtractJwt    = require('passport-jwt').ExtractJwt;

const User          = require('../models/user');
const config        = require('../config');

// Set up the options for the JWT Strategy

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey:    config.secret
};

// Set up the Strategy

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

// Tell passport to use it

passport.use(jwtLogin);
