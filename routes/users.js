var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/movie', function(req, res, next) {
	console.log(JSON.stringify(req.body));
	console.log(JSON.stringify(req.body));
	res.json(req.body);
});

module.exports = router;
