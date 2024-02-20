var express = require('express');
var router = express.Router();
const Message = require('../models/messages');// Adjust the path to where you save the model

router.get('/', async function(req, res, next) {
  try {
    const messages = await Message.find().sort({ added: -1 });
    res.render('index', { messages: messages });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
