var express = require('express')
var router = express.Router() 
const messages = require('./messages');

router.get("/", (req, res, next)=>{
    res.render("form")
})

router.post('/', function(req, res, next) {
    const author = req.body.author;
    const messageText = req.body.messageText;
    messages.push({
        text: messageText,
        user: author,
        added: new Date()
      });
    res.redirect('/');
  });

module.exports = router;
