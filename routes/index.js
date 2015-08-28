var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');

/* GET home page. */
app.use(express.static(__dirname + './views/index.html'));

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

module.exports = router;
