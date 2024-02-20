var express = require('express');
var router = express.Router();
const messages = require('./messages');

router.get('/', function(req, res, next) {
  console.log("fasd")
  res.render('index', { messages: messages });
});

module.exports = router;

