var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
var User = require('../models/user');

var passport = require('passport');
var authenticate = require('../authenticate');


router.use(bodyParser.json());

/* GET users listing. */
router.get('/',  authenticate.verifyUser, authenticate.verifyAdmin, (req,res,next) => {
  User.find({})
  .then((users) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(users);
  }, (err) => next(err))
  .catch((err) => next(err));
});

router.post('/signup',  (req, res, next) => {
  User.register(new User({username: req.body.username,password:req.body.password}), 
  req.body.password, (err, user) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      if(req.body.name){
      user.name = req.body.name;
      user.contactNumber=req.body.contactNumber
    user.organisation=req.body.organisation}
      user.save((err, user) => {
        
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({err: err});
          return ;
        }
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration Successful!'});
        });
      });
    }
  });
});

router.post('/login',  passport.authenticate('local'), (req, res) => {  
  var token = authenticate.getToken({_id: req.user._id});
  console.log(req.user)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({success: true, token: token,user:req.user, status: 'You are successfully logged in!'});
});
router.get('/logout', (req, res) => {
  //res.setHeader('Access-Control-Allow-Origin',req.header('origin'))
  
  req.logout();
  console.log(res)
  
  res.redirect('http://localhost:3000')
});
/*router.get('/logout',  (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  }
  else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});*/

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
 
 res.redirect('http://localhost:3000')
});
router.get('/current_user', (req, res) => {
  console.log(req.user)
  res.setHeader('Access-Control-Allow-Origin',req.header('origin'))
  res.send(req.user);
});

router.get('/facebook', passport.authenticate('facebook', {
  scope: ['profile']
} )
);

router.get('/facebook/callback', passport.authenticate('facebook'),(req,res)=>{
  
  res.redirect('http://localhost:3000')
});

module.exports = router;