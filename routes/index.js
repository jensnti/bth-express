var express = require('express');
var router = express.Router();

var njson = require('../data/news.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Aktuellt', data: njson.articles });
});

module.exports = router;
