var express = require('express');
var router = express.Router();
var posts = require('../posts.json');

/* GET home page. */
router.get('/:id', function(req, res, next) {
  res.render('view-post', { 
    title: 'Instogram',
    posts:posts[req.params.id-1]

});
});

module.exports = router;
