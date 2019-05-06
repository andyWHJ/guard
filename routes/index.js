var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('new')
  res.render('index', { title: 'Express Master bug fix 222 gmail 111 2222 new branch 19-5-6-new' });
});

module.exports = router;
