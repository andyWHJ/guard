var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Master bug fix 222 gmail 111 2222 master' });
});

module.exports = router;
