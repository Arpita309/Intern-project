var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

var config = require('./config/keys');

exports.local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser((user, done) => {
    //console.log(user)
    done(null, user._id);
});

passport.deserializeUser((_id, done) => {
    
    User.findById(_id).then((user) => {
        done(null, user);
    });
});


exports.getToken = function(user) {
    return jwt.sign(user, config.jwt.secretOrKey,
        {expiresIn: 3600});
};

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.jwt.secretOrKey;

exports.jwtPassport = passport.use(new JwtStrategy(opts,
    (jwt_payload, done) => {
        console.log("JWT payload: ", jwt_payload);
        User.findOne({_id: jwt_payload._id}, (err, user) => {
            if (err) {
                return done(err, false);
            }
            else if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        });
    }));

exports.verifyUser = passport.authenticate('jwt', {session: false});

exports.verifyAdmin = function(req, res, next) {
    User.findOne({_id: req.user._id})
    .then((user) => {
        console.log("User: ", req.user);
        if (user.admin) {
            next();
        }
        else {
            err = new Error('You are not authorized to perform this operation!');
            err.status = 403;
            return next(err);
        } 
    }, (err) => next(err))
    .catch((err) => next(err))
}
passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: config.google.clientID,
        clientSecret: config.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db
        console.log(profile)
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                // already have this user
                console.log('user is: ', currentUser);
                done(null, currentUser);
            } else {
                // if not, create user in our db
                new User({
                    googleId: profile.id,
                    name: profile.displayName,
                    
                }).save().then((newUser) => {
                    console.log('created new user: ', newUser);
                    done(null, newUser);
                });
            }
        });
    })
);
passport.use(new FacebookStrategy({
    clientID: config.facebook.clientId,
    clientSecret:config.facebook.clientSecret,
    callbackURL: '/auth/facebook/callback',
    proxy: true
}, (accessToken, refreshToken, profile, done) => {

    User.findOne({ facebookId: profile.id })
        .then((existingUser) => {
            if (existingUser) {
                done(null, existingUser);
            } else {
                new User({ facebookId: profile.id ,name:profile.displayName}).save()
                    .then((user) => done(null, user));
            }
        })

})
);