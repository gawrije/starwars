var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { msg: 'Star war API' });
  //res.send("welcome to express");
});

module.exports = router;
