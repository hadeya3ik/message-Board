var express = require('express');
var router = express.Router();
const Message = require('../models/messages'); // Ensure this path is correct

router.get("/", (req, res, next) => {
    res.render("form");
});

router.post('/', async function(req, res, next) {
    const author = req.body.author;
    const messageText = req.body.messageText;

    // Create an instance of the Message model
    const message = new Message({
        text: messageText,
        user: author
        // added will be set to the current date by default due to your schema
    });

    try {
        // Save the new message to the database
        await message.save();
        // If save succeeds, redirect to the home page
        res.redirect('/');
    } catch (err) {
        next(err);
    }
});

module.exports = router;
