const express = require('express')
const router = express.Router()

// @route   GET api/posts/teste
// @dsc     tests posts route
// @access  Public
router.get('/teste', (req, res) => res.json({msg: "Posts works"}))

module.exports = router