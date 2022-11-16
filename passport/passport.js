const passport = require('passport')
const User = require('../model/user');

var GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});


passport.use(new GoogleStrategy({

  clientID: "842019695710-irqcikpcvq4cj1su1di2np96meh8u24u.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:800/auth/google/callback"
},
  (accessToken, refreshToken, profile, next) => {
    User.findOne({ email: profile._json.email }).then((user) => {
      if (user) {
        next(null, user);
        // cookietoken()
      } else {
        User.create({
          name: profile.displayName,
          googleId: profile._id,
          email: profile._json.email,
          isIndian: true
        })
          .then((user) => {
            next(null, user);
            // cookietoken()
          })
          .catch((err) => console.log(err));
      }
    });

    //next();
  }

));