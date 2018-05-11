const express = require('express')
const router = express.Router()

// @route   GET api/users/teste
// @dsc     tests users route
// @access  Public
router.get('/teste', (req, res) => res.json({msg: "Users works"}))

module.exports = router