var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (req.user) {
    var user = req.user[0];
    res.render('index', {user: user});
  } else {
    res.render('index');
  }
});

module.exports = router;
