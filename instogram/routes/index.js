var express = require('express');
var router = express.Router();
var posts = require('../posts.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Instogram',
    posts:posts
  });
});

module.exports = router;
