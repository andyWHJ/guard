var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/movie', function(req, res, next) {
	res.render('movie', { title: 'movie' });
});

module.exports = router;
