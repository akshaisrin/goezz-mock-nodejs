const express = require('express');
const router = express.Router();
const twilioController = require('../controllers/twilioController');

// Store contact form in DB & send submit form to contact email
router.post('/sendCode', twilioController.sendCode);

module.exports = router;