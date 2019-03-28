var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/movie', function(req, res, next) {
  res.send('respond with a movie.js');
});

module.exports = router;
