var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (req.user) {
    var name = req.user.givenName + ' ' + req.user.familyName || '';
    res.render('index', { title: 'Hello ' + name , email: req.user.email, image: req.user.image});
  } else {
    res.render('index');
  }
});

module.exports = router;
