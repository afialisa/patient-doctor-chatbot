const express = require('express');
const router = express.Router();

// @route   GET api/chat/test
// @desc    Tests chat route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Chat endpoint works' }));

module.exports = router;

