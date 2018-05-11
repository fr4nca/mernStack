const express = require('express')
const router = express.Router()

// @route   GET api/profile/teste
// @dsc     tests profile route
// @access  Public
router.get('/teste', (req, res) => res.json({msg: "Profile works"}))

module.exports = router