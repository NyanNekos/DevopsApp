var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Devops Application" });
  res.render('about', { title: "Devops AppAbout" });
  res.render('contact', { title: "Devops AppContact" });
});


module.exports = router;
