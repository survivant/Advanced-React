const Authentication      = require('./controllers/authentication');
const passportService     = require('./services/passport');

const passport            = require('passport');

const requireAuth   = passport.authenticate('jwt',   { session: false });
const requireLogin  = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({
      message: "Super Secret Data is ABC123",
      list:    ['Apple', 'Banana', 'Kumquat', 'Orange', 'Quince']
    });
  });

  app.post('/login',  requireLogin, Authentication.login)
  app.post('/signup', Authentication.signup);
};
