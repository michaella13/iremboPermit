const express = require('express');
const router = express.Router();
const loadController = require('../controllers/permitController');

// Route to accept incoming load and send email
router.post('/', loadController.acceptAndSendEmail);

module.exports = router;
